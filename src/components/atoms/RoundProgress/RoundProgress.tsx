import React, { FC } from 'react'
import {
    Typography,
    styled,
    Box,
    BoxProps,
    CircularProgress,
    CircularProgressProps
} from '@mui/material'
import { withTheme } from '../../../hoc/withTheme'

export type RoundProgressProps = {
  percentage?: number
  progressBarColor?: string
  progressBackgroundColor?: string
  text?: string
  textColor?: string
  textSize?: number
  size?:number
}

export const RoundProgress: FC<RoundProgressProps> = (props) : JSX.Element => {

    const mainColor = props.progressBarColor ?? '#037015'


  return (
    <RoundProgressWrapper size={props.size ?? 40} >
      <RoundProgressBackground
          size={props.size}
          barColor={mainColor}
          sx={{zIndex:2}}
          variant="determinate"
          value={props.percentage}/>
      <RoundProgressBackground
          size={props.size}
          barColor={props.progressBackgroundColor ?? '#81ba83'}
          variant="determinate"
          value={100}/>
      <RoundProgressTextWrapper
          textColor={props.textColor ?? mainColor}>
        <Typography >
        {props.text ?? `${props.percentage}%`}
      </Typography>
      </RoundProgressTextWrapper>
    </RoundProgressWrapper>
  )
}

const RoundProgressWrapper = styled(Box,
    {
        shouldForwardProp: (prop) => (prop !== 'size')
    })<BoxProps & {size: number}>(({size}) => ({
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${size}px`,
    height:`${size}px`,
}))

const RoundProgressTextWrapper = styled(Box, {
    shouldForwardProp: (prop) => (prop !== 'textColor')
})<BoxProps & {textColor: string}>(({textColor}) => ({
    position: 'absolute',
    width: '100%',
    height:'100%',
    left: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: textColor,
}))

const RoundProgressBackground = styled(CircularProgress,{
    shouldForwardProp: (prop) => (prop !== 'barColor')
})<CircularProgressProps & {barColor: string}>  ( ({barColor}) => ({
    position: 'absolute',
    color: barColor,
    top: 0,
    left: 0,
    zIndex: 1,
    'svg,circle': {
        stroke: barColor
    }
}))

export default withTheme<RoundProgressProps>(RoundProgress)
