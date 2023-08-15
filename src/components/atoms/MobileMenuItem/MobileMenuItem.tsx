import React, { FC } from 'react'
import {
  styled,
  Box,
  BoxProps,
  Typography
} from '@mui/material'
import { withTheme } from '../../../hoc/withTheme'

export type MobileMenuItemProps = {
  id: string
  icon: JSX.Element
  title: string
  active?: boolean
  onClick?: (id: string) => void
}

export const MobileMenuItem: FC<MobileMenuItemProps> = (props) : JSX.Element => {
  return (
      <MobileMenuItemWrapper 
        onClick={() => props?.onClick?.(props.id)} 
        data-testid='mobile-menu-item-wrapper'
      >
        <MobileMenuItemIcon active={props.active}>{props.icon}</MobileMenuItemIcon>
        <Typography 
            variant='text10bold'
            color={`${!props.active && 'grey.600'}`}
          >
          {props.title}
        </Typography>
      </MobileMenuItemWrapper>
  )
}

export const MobileMenuItemWrapper = styled(Box)<BoxProps>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
}))

export const MobileMenuItemIcon = styled(Box)<BoxProps & { active?: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  svg: {
    width: '100%',
    height: 'auto',
    color: props.active ? '#D1D2D3' : 'rgba(209,210,211, 0.6)'
  }
}))

export default withTheme<MobileMenuItemProps>(MobileMenuItem)
