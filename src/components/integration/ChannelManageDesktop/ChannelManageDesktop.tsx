import React, { FC } from "react";
import { styled, Box, BoxProps, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import Logo from "../../atoms/Logo";
import ChannelItem from "../../atoms/ChannelItem";
import Button from "../../atoms/Button";

export const ChannelManageDesktop: FC = (props) : JSX.Element => {
  const users = [ 'Austin', 'Brooklyn','Chicago']

  return (
    <ChannelManageDektopWrapper>
      <Box sx={{ display: 'flex',marginTop:'2rem' }}>
        <Logo size={500}/>
      </Box>
      <Box sx={{ display: 'flex',alignItems:'center',width:'40%',minWidth:'300px' }}>
        <Grid container justifyContent={'center'} spacing={2}>
          { users.map( (user, index) => {
            return(
              <Grid item xs={6} md={3}>
                <ChannelItem 
                  innerLetter={user} 
                  label={user} 
                  size={100} 
                  innerLetterSize={20} 
                  selected={true} 
                  borderWidth={3}
                />
              </Grid>
            )
          })}
          <Grid item xs={6} md={3}>
            <AddUserWrapper>
              <Button 
                margin="5px" 
                height="100px" 
                width="100px" 
                borderRadius="19px !important" 
                icon={<Add />} 
                variant={'secondary'} 
                backgroundColor={'transparent'} 
              />
            </AddUserWrapper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button  variant={'secondary'} children={<span>MANAGE CHANNELS</span>} />
      </Box>
    </ChannelManageDektopWrapper>
  )
}

export const ChannelManageDektopWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  height:'calc(100vh - 3rem)',
}))

export const AddUserWrapper = styled(Box)<BoxProps>(() => ({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  cursor:'pointer' 
}))

export default ChannelManageDesktop
