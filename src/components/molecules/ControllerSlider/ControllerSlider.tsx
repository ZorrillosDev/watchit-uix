import React, { FC, useState, useEffect } from 'react'
import { styled, Box, BoxProps, Typography, Button } from '@mui/material'
import Poster from '../Poster'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { withTheme } from '../../../hoc/withTheme'

export type MoviesProps = {
  img: string
  title: string
}

export type ControllerSliderProps = {
  title?: string
  movies: MoviesProps[]
  onClick: any
}

export const ControllerSlider: FC<ControllerSliderProps> = ( props ) : JSX.Element => {
  const [ scrollLeft, setScrollLeft ] = useState(0)
  const [ countDiv, setCountDiv ] = useState(0)

  const container = React.useRef<HTMLDivElement>(null)
  const carousel = React.useRef<HTMLDivElement>(null)

  const handleScroll = (type:string)=>{
    if(carousel.current !== null){ 
      carousel.current.scrollLeft += 
          type === 'right' 
            ? (181 + 16) 
            : -(181 + 16)
      setScrollLeft(carousel.current.scrollLeft)
      if(Math.ceil((carousel.current.scrollLeft)) 
        >= ((carousel.current.scrollWidth - carousel.current.offsetWidth))) {
          carousel.current.scrollLeft = 0
          setScrollLeft(0)
      }else if((((carousel.current.scrollWidth - (carousel.current.offsetWidth))) 
        - (Math.ceil((carousel.current.scrollLeft)))) < (181+16) ) {
        carousel.current.scrollLeft = 0
        setScrollLeft(0)
      } 
  } 
}
  
useEffect(() => {
  const handleWindowResize = () => {
    if (carousel.current !== null) {
      let widthCar = carousel.current.offsetWidth / 181
      setCountDiv(widthCar);
    }
  };
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
}, [])

  useEffect(() => {
    if (carousel.current !== null) {
      let widthCar = carousel.current.offsetWidth / 181;
      setCountDiv(widthCar);
    }
  }, []);

  return (
    <Box sx={{ width:'100%' }}>
      <Box sx={{ marginBottom: '15px' }}>
        <Typography variant='text20bold'>
          {props.title}
        </Typography>
      </Box>
      <SliderControllerWrapper ref={container}>
        <SliderControllerBox 
          ref={carousel}
        >
          { 
            props.movies.map( (movie:MoviesProps) => {
              return(
                <Poster 
                  img={movie.img}
                  title={movie.title}
                  progress={50}
                  year={2022}
                  canHover={true} 
                  onClick={ props.onClick }
                />
              )
            })
          }
          { 
            props.movies.slice(0,Math.ceil(countDiv-1)).map( (movie:MoviesProps) => {
              return(
                <Poster img={movie.img}
                  title={movie.title}
                  progress={50}
                  year={2022}
                  canHover={true} 
                  onClick={ props.onClick }
                />
              )
            })
          }
        </SliderControllerBox>
        <ButtonSliderCustom 
          right='0px' onClick={() => handleScroll('right')}
        >
          <Box display='flex' alignItems='center' justifyContent='center'>
            <ChevronRight sx={{color:'#D1D2D3'}} />
          </Box>
        </ButtonSliderCustom>
        {scrollLeft > 0 &&
          <ButtonSliderCustom 
            left='0px' onClick={() => handleScroll('left')}
          >
            <Box display='flex' alignItems='center' justifyContent='center'>
              <ChevronLeft sx={{color:'#D1D2D3'}} />
            </Box>
          </ButtonSliderCustom>
        }
      </SliderControllerWrapper>
    </Box> 
  )
}

export const SliderControllerWrapper = styled( Box )<BoxProps>(() => ({
  position: 'relative',
  width: '100%',
}))

export const SliderControllerBox = styled( Box )<BoxProps>(() => ({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '16px',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollBarWidth: 'none',
  '&::-webkit-scrollbar':{
    display: 'none'
  }
}))

export const ButtonSliderCustom = styled( Button )<{ right?: string, left?: string }>(( props ) => ({
  position: 'absolute',
  width:'20px !important',
  borderRadius: '0 !important',
  top: '0',
  right: props.right ? props.right : '',
  left: props.left ? props.right : '',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.45)',
  color:'transparent !important'
}))

export default withTheme<ControllerSliderProps>(ControllerSlider)
