import React, { FC } from 'react'
import { styled, Box, BoxProps, Typography, TypographyProps } from '@mui/material'
import ProgressBar from '../../atoms/ProgressBar'
import { PlayArrow } from '@mui/icons-material'
import CustomButton from '../../atoms/CustomButton'
import { withTheme } from '../../../hoc/withTheme'

export type PosterProps = {
  img: string
  title: string
  progress?: number
  loved?: boolean
  rate?: number
  year?: number
  canHover?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onPlayClick?: React.MouseEventHandler<HTMLButtonElement>
  size?: {
    width?: string,
    height?: string
  }
} 

export const Poster: FC<PosterProps> = ( props ) : JSX.Element => {
  return (
    <PosterWrapper
      sx={{
        width: props.size?.width ? `${props.size?.width}` : '181px',
        height: props.size?.height ? `${props.size?.height}` : '273px',
        pointerEvents: (props.size || !props.canHover) ? 'none' : 'all'
      }}
      data-testid='poster-wrapper'
    >
      <PosterImage component='img' src={props.img} data-testid='poster-image' onClick={props.onClick} />

      <PosterInfo className='info'>
        <Box sx={{ marginBottom:'0.5rem',width:'calc(100% - 1rem)', display:'flex', flexDirection:'column', alignItems:'center', height:'100%', justifyContent:'center' }}>
        <Box className='hover-show hover-show-flex' display='flex' alignItems='flex-end' justifyContent='space-between' sx={{ marginBottom: '5px', width:'100%' }}>
          <Typography variant='text12bold'>
            {props.year}
          </Typography>
          <CustomButton width='35px' height='35px' variant='primary' icon={<PlayArrow style={{ color: '#D1D2D3' }}/>} onClick={props.onPlayClick} data-testid='play-button' />
        </Box>
        <PosterTitle variant='text16bold' className='hover-show'>
          {props.title}
        </PosterTitle>
        {
          props.progress ? (
            <ProgressBar onNewPercentage={(value:any)=>console.log('increse:'+value)} percentage={props.progress} barColor='#fff' showBullet={false} />
          ) : <></>
        }
        </Box>
      </PosterInfo>
    </PosterWrapper>
  )
}

const PosterWrapper = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '10px',
  overflow: 'hidden',
  border:'none',
  '.hover-show': {
    display: 'none'
  },
  '&:hover': {
    '.hover-show.hover-show-flex': {
      display: 'flex'
    },
    '.hover-show': {
      display: 'block'
    }
  }
}))

const PosterInfo = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 73%, rgba(0,0,0,0) 100%)',
  pointerEvents: 'none',
  '*': {
    pointerEvents: 'none'
  },
  'button': {
    pointerEvents: 'all !important'
  }
}))

const PosterTitle = styled( Typography )<TypographyProps>(() => ({
  marginBottom: '10px',
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

export const PosterImage = styled( Box )<BoxProps & { src: string }>(() => ({
  width: '100%',
  height: '100%',
  position: 'relative'
}))

export default withTheme<PosterProps>(Poster)
