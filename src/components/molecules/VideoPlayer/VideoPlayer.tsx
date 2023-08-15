import React, { FC, useState, useRef, useEffect } from 'react'
import { styled, Box, BoxProps, Typography } from '@mui/material'
import ProgressBar from '../../atoms/ProgressBar'
import { PlayArrow, Pause, RefreshSharp, Translate, Close, Cast } from '@mui/icons-material'
import Grid from '@mui/material/Grid'
import Replay10Icon from '@mui/icons-material/Replay10'
import Forward10Icon from '@mui/icons-material/Forward10'
import CustomButton from '../../atoms/Button'
import SliderVolumne from '../SliderVolumen'
import Listitem from '../ListItem/ListItem'
import PopUp from '../PopUp'
import { withTheme } from '../../../hoc/withTheme'

export type VideoPlayerProps = {
  src: string
  titleMovie: string
  preview: boolean
  defaultVolume: number
  currentTime?: number
  onClose?: () => void
  autoPlay: boolean
}

const item = [
  {
    id:'t1',
    title:'Samsung Smart TV S6'
  },
  {
    id:'t2',
    title:'Samsung Smart TV S10'
  }
]

const item2 = [
  {
    id:'t1',
    title:'English',
  },
  {
    id:'t2',
    title:'Spanish',
  },
  {
    id:'t3',
    title:'German',
  }
]

const item3 = [ 
  {
    id:'t1',
    title:'English',

  },
  {
    id:'t2',
    title:'Spanish',

  },
  {
    id:'t3',
    title:'German',

  },
  {
    id:'t4',
    title:'Chinese',

  },
  {
    id:'t5',
    title:'Corean',

  }
]

export const VideoPlayer: FC<VideoPlayerProps> = ( props ) : JSX.Element => {
  const [ show, setShow ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ currentTime, setCurrentTime ] = useState(0)
  const [ openCastOption, setOpenCastOption ] = useState(false)
  const [ openLanguageOption, setOpenLanguageOption ] = useState(false)
  const video = useRef<HTMLVideoElement>(null);
 
  const playVideo = () => {
    if((currentTime/duration)*100 < 100){
      show ? video.current && video.current.pause() : video.current && video.current.play() 
      setShow(!show)
    } else{
      if (video.current !== null) {
        video.current.currentTime = 0;
        video.current && video.current.play()
      }
    }
  };

  const nextVideo = () => {
    if (video.current !== null) {
      video.current.currentTime += 10;
    }
  };

  const prevVideo = () => {
    if (video.current !== null) {
      video.current.currentTime -= 10;
    }
  };

  const handleVolumne = ( value:number ) => {
    let volumenStep = value/100
    if (video.current !== null) {
      video.current.volume = volumenStep;
    }
  };

  useEffect(()=>{
    const videoR =  video.current
    const timeUpdateHandler =()=>{
      if (videoR !== null) {
        setCurrentTime(videoR.currentTime)
      }
    }
    const loadedMetaHandler =()=>{
      if (videoR !== null) {
        setDuration(videoR.duration)
      }
    }

    videoR?.addEventListener('timeupdate',timeUpdateHandler)
    videoR?.addEventListener('loadedmetadata',loadedMetaHandler)
    
    return()=>{
      if (videoR !== null) {
        videoR.removeEventListener('timeupdate',timeUpdateHandler)
        videoR.removeEventListener('loadedmetadata',loadedMetaHandler)  
      }
    }
    
  },[video.current])

  useEffect(()=>{
    let volumenStep = props.defaultVolume/100;
    if (video.current !== null) {
      video.current.volume = volumenStep;
    }
  },[])

  const handleProgressVideo = (increaseValue:number) => {
    let time = duration * (increaseValue / 100)
    if (video.current !== null) {
      video.current.currentTime = time;
    }
  };

  useEffect(()=>{
    let volumenStep = props.defaultVolume/100;
    if (video.current !== null) {
      video.current.volume = volumenStep;
      setShow(!show)
    }
  },[props.defaultVolume])

  useEffect(()=>{
    if((currentTime/duration)*100 < 100 && props.preview){
      show ? video.current && video.current.play() : video.current && video.current.pause()
      setShow(!show)
    }
  },[duration])

  useEffect(()=>{
    if((currentTime/duration)*100 === 100 && props.preview){
      video.current && video.current.play()
      setShow(!show)
    }
  },[currentTime])

  useEffect(()=>{
    if (video.current !== null) {
      props.autoPlay == true && video.current.play()
      setShow(props.autoPlay)
    }
  },[])

  return (
    <VideoPlayerWrapper>
      <CustomVideo ref={ video } preview={ props.preview }>
        <source type='video/mp4' src={props.src}/>
      </CustomVideo>
      <ButtonsPlayerWrapper>
        { !props.preview && 
          <TopButtonWrapper>
            <PopUp 
              onClose={ () => setOpenCastOption(false) } 
              position='bottomright' 
              open={ openCastOption } 
              triggerComponent={ 
                <CustomButton 
                  width='30px' 
                  variant='flat' 
                  icon={ <Cast sx={{ color: '#D1D2D3 !important'}}/> } 
                  backgroundColor='transparent'
                  onClick={ () => setOpenCastOption( !openCastOption ) } 
                /> 
              }
            >
              <Listitem defaultSelect='t1' list={item}/>
            </PopUp>
            <CustomButton 
              width='30px' 
              variant='flat'
              icon={ <Close sx={{ color: '#D1D2D3 !important'}}/> } 
              backgroundColor='transparent'
              onClick={props.onClose} 
            />
          </TopButtonWrapper>
        }
        { !props.preview && 
          <CustomButton 
            width='30px' 
            backgroundColor='transparent' 
            variant='flat'
            icon={ <Replay10Icon sx={{ color: '#D1D2D3 !important'}}/> } 
            onClick={()=>{prevVideo()}}
          />
        }
        { !props.preview && 
          <CustomButton 
            width='30px' 
            backgroundColor='transparent'
            variant='flat' 
            icon={ 
              ( currentTime / duration ) * 100 < 100 
                ? show 
                  ? <Pause sx={{ color: '#D1D2D3 !important'}}/>
                  : <PlayArrow sx={{ color: '#D1D2D3 !important'}}/>
                : <RefreshSharp sx={{ color: '#D1D2D3 !important'}}/> 
            } 
            onClick={()=>{playVideo()}}
          />
        }
        { !props.preview && 
          (currentTime/duration) * 100 < 100 &&
            <CustomButton 
              width='30px' 
              backgroundColor='transparent'
              variant='flat'
              icon={<><Forward10Icon sx={{ color: '#D1D2D3 !important'}}/></>} 
              onClick={()=>{nextVideo()}}
            />
        }
        <PlayerBarWrapper>
          <Grid 
            container spacing={2} width='100%' 
            display='flex' alignItems='center'
          >
            { !props.preview && 
              <>
                <Grid 
                  item xs={9}
                  display='flex' alignItems='center' 
                >
                  <Typography variant='text40bold'>
                    {props.titleMovie}
                  </Typography>
                </Grid>
                <Grid 
                  item xs={3} display='flex' 
                  alignItems='center' justifyContent='end'   
                >
                <PopUp onClose={ () => setOpenLanguageOption(false) } position='topleft' open={ openLanguageOption } 
                  triggerComponent={
                    <CustomButton 
                      width='30px' 
                      variant='flat'
                      margin='0 0.5rem 0 0'
                      icon={<Translate sx={{ color: '#D1D2D3 !important'}}/>} 
                      backgroundColor={'transparent'} 
                      onClick={ () => setOpenLanguageOption( !openLanguageOption  )} 
                    />
                  }>
                    <>
                      <Listitem defaultSelect='t1' title='Audio' list={item2}/>
                      <Listitem defaultSelect='t3' title='Subtitle' list={item3}/>
                    </>
                </PopUp>
                <SliderVolumne 
                  alwaysShow={ false } 
                  defaultVolume={ props.defaultVolume } 
                  onChange={ ( value:number ) => handleVolumne( value ) }
                />
                </Grid>
                <Grid 
                  item xs={12} width='100%' 
                  display='flex' alignItems='center'
                >
                  <ProgressBar 
                    percentage={(currentTime/duration)*100} 
                    showBullet={true}
                    onNewPercentage={(increaseValue:number)=>handleProgressVideo(increaseValue)} 
                  />
                </Grid>
              </>
            }
          </Grid>
        </PlayerBarWrapper>
      </ButtonsPlayerWrapper>
    </VideoPlayerWrapper>
  )
}

const VideoPlayerWrapper = styled( Box )<BoxProps>(() => ({
  width:'100%',
  height:'100%',
  position:'relative',
  backgroundSize:'cover',
  backgroundColor:'#1A1C20'
}))

const CustomVideo = styled( 'video' )<{ preview: boolean }>(( props ) => ({
  zIndex:'98',
  width:'100%',
  height:'100%',
  lineHeight:0,
  objectFit:`${props.preview ? 'cover': 'revert'}`
}))

const PlayerBarWrapper = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  width: 'calc(100% - 2rem)',
  flexDirection: 'column',
  position: 'absolute',
  bottom: '19px'
}))

const TopButtonWrapper = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  width: 'calc(100% - 1rem)',
  position: 'absolute',
  justifyContent: 'space-between',
  top: '5px'
}))

const ButtonsPlayerWrapper = styled( Box )<BoxProps>(() => ({
  top: '0',
  zIndex: '99',
  gap: '0.5rem',
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(0,0,0,0.43)'
}))

export const PosterImage = styled( Box )<BoxProps & { src: string }>(() => ({
  width: '100%',
  height: '100%',
  position: 'relative'
})) 

export default withTheme<VideoPlayerProps>(VideoPlayer)
