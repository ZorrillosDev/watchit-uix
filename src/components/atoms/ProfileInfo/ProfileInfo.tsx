import React, { FC } from "react";
import {
  styled,
  Box,
  BoxProps,
  Typography
} from '@mui/material'
import { withTheme } from '../../../hoc/withTheme'

export type ProfileInfoProps = {
  icon: JSX.Element
  title: string
  subTitle: string
  onClick?: () => void
}

export const ProfileInfo: FC<ProfileInfoProps> = (props) : JSX.Element => {

  return (
      <ProfileInfoWrapper onClick={props.onClick} data-testid='profile-info-wrapper'>
        <ProfileInfoIcon>{props.icon}</ProfileInfoIcon>
          <Typography 
            variant='text12regular' color='grey.600' 
            sx={{marginTop:'7px'}}
          >
            {props.subTitle}
          </Typography>
          <Typography 
            variant='text14regular' sx={{ marginTop:'7px' }}
          >
            {props.title}
          </Typography>
      </ProfileInfoWrapper>
  )
}

export const ProfileInfoWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0.5rem',
  backgroundColor: '#1A1C20',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  width: '100%',
  minHeight: '80px'
}))

export const ProfileInfoIcon = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  svg: {
    width: '100%',
    height: 'auto',
    minWidth: '25px',
    minHeight: '25px',
    color: '#D1D2D3'
  }
}))

export default withTheme<ProfileInfoProps> (ProfileInfo)
