import React, { FC } from "react";
import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps
} from "@mui/material";

export type ChannelItemProps = {
  innerLetter: string
  innerLetterSize?: number
  selected?: boolean
  label?: string
  size?: number
  borderWidth?: number
  onClick?: () => void
}

export const ChannelItem: FC<ChannelItemProps> = (props) : JSX.Element => {

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sx={{ cursor: 'pointer' }}>
      <ChannelItemWrapper
        onClick={props.onClick} selected={!!props.selected}
        data-testid={'channel-item-wrapper'}
        sx={{
          padding: props.borderWidth ? `${props.borderWidth}px` : '5px',
          width: `${props.size ?? 100}px`,
          height: `${props.size ?? 100}px`
        }}
      >
        <ChannelItemContent
          display={'flex'} alignItems={'center'} justifyContent={'center'}
          data-testid={'channel-item-content'}
          sx={{
            borderWidth: props.borderWidth ? `${props.borderWidth}px` : '5px',
            width: `calc(100% - ${props.borderWidth ?? 5}px)`,
            height: `calc(100% - ${(props.borderWidth ?? 5) * 2}px)`,
            fontSize: `${props.innerLetterSize ?? 40}px`
          }}
        >
          {props.innerLetter[0]}
        </ChannelItemContent>
      </ChannelItemWrapper>
      {
        props.label ? (
          <ChannelItemText variant={'body1'}>{props.label}</ChannelItemText>
        ) : <></>
      }
    </Box>
  )
}

export const ChannelItemWrapper = styled(Box)<BoxProps & { selected: boolean }>((props) => ({
  backgroundColor: props.selected ? 'rgba(209,210,211,1)' : 'transparent',
  borderRadius: '19px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'rgba(209,210,211,1)'
  },
}))

export const ChannelItemContent = styled(Box)<BoxProps>(() => ({
  backgroundColor: '#D1D2D3',
  borderRadius: '15px',
  border: '5px solid #1A1C20',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontWeight: 500
}))

export const ChannelItemText = styled(Typography)<TypographyProps>(() => ({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#D1D2D3',
  textTransform: 'uppercase',
  marginTop: '1rem',
  maxWidth: '100%'
}))

export default ChannelItem
