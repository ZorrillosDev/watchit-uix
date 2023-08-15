import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Avatar from '../../atoms/Avatar'
import { withTheme } from '../../../hoc/withTheme'

export type ProfileAvatarProps = {
  userName: string 
  rank: string
  width: number
  height: number
  borderSize: number
}  

export const ProfileAvatar: FC<ProfileAvatarProps> = ( props ) : JSX.Element => {
  return (
    <Box 
      display='flex' justifyContent='end'
      alignItems='center' style={{ padding:'0 2rem' }}
    >  
      <Avatar
        width={props.width} height={props.height} 
        borderSize={props.borderSize} userName={props.userName}
      />
      <Box display='flex' flexDirection='column'>
        <Typography variant='text14bold' noWrap>{props.userName}</Typography>
        <Typography variant='text10regular' noWrap>{props.rank}</Typography>
      </Box>
    </Box>
  )
}

export default withTheme<ProfileAvatarProps>(ProfileAvatar)
