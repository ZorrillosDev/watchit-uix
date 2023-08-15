import React, { FC } from 'react'
import { styled, Box } from '@mui/material'
import { withTheme } from '../../../hoc/withTheme'

export type AvatarProps = {
  userName: string 
  width: number
  height: number
  borderSize: number
}  

export const Avatar: FC<AvatarProps> = ( props ) : JSX.Element => {
  return (
    <AvatarContainer 
      width={ props.width } height={ props.height } 
      borderSize={ props.borderSize }
    >
      <AvatarWrapper width={ props.width } height={ props.height }>
        {props.userName[0]}
      </AvatarWrapper>
    </AvatarContainer>
  )
}

export const AvatarContainer = styled( Box )<{ width: number, height: number, borderSize: number  }>(( props ) => ({
  width: `${ props.width + props.borderSize }px`,
  height: `${ props.height + props.borderSize  }px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  marginRight: '1rem',
  background: 'linear-gradient(0deg, red, yellow, lime, aqua, blue, magenta, red)',
}))

export const AvatarWrapper = styled( Box )<{ width: number, height: number  }>(( props ) => ({
  border: '1px solid #1A1C20',
  width: `${ props.width }px`,
  height: `${ props.height }px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background:'#C35314',
  borderRadius: '50%',
  color: '#D1D2D3',
  fontWeight: 'bold',
  fontSize: '16px'
}))

export default withTheme<AvatarProps>(Avatar)
