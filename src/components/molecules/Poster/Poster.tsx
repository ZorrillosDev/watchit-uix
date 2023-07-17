import React, { FC } from "react";
import { styled, Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import ProgressBar from "../../atoms/ProgressBar";
import { Button } from "../../atoms/index";
import { PlayArrow } from "@mui/icons-material";

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

export const Poster: FC<PosterProps> = (props) : JSX.Element => {

  return (
    <PosterWrapper
      sx={{
        width: props.size?.width ? `${props.size?.width}px` : '181px',
        height: props.size?.height ? `${props.size?.height}px` : '273px',
        pointerEvents: (props.size || !props.canHover) ? 'none' : 'all'
      }}
      data-testid={'poster-wrapper'}
    >
      <PosterImage component='img' src={props.img} data-testid={'poster-image'} onClick={props.onClick} />

      <PosterInfo className={'info'}>
        <Box className={'hover-show hover-show-flex'} display={'flex'} alignItems={'flex-end'} justifyContent={'space-between'} sx={{ marginBottom: '5px' }}>
          <PosterTitle variant={'h4'} sx={{ marginBottom: '0' }}>
            { props.year }
          </PosterTitle>
          <Button variant={'primary'} icon={<PlayArrow />} onClick={props.onPlayClick} data-testid={'play-button'} />
        </Box>
        <PosterTitle variant={'h4'} className={'hover-show'}>
          { props.title }
        </PosterTitle>
        {
          props.progress ? (
            <ProgressBar percentage={props.progress} barColor={'#fff'} showBullet={false} />
          ) : <></>
        }
      </PosterInfo>
    </PosterWrapper>
  )
}

const PosterWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '10px',
  overflow: 'hidden',
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

const PosterInfo = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: 'calc(100% - 1rem)',
  padding: '0.5rem',
  background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 73%, rgba(0,0,0,0) 100%)',
  pointerEvents: 'none',
  '*': {
    pointerEvents: 'none'
  },
  'button': {
    pointerEvents: 'all !important'
  }
}))

const PosterTitle = styled(Typography)<TypographyProps>(() => ({
  fontSize: '1rem',
	fontWeight: 400,
  color: '#D1D2D3',
  marginBottom: '10px',
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

export const PosterImage = styled(Box)<BoxProps & { src: string }>(() => ({
  width: '100%',
  height: '100%',
  position: 'relative'
}))

export default Poster
