import React, { FC } from 'react'
import { styled, Box, BoxProps, Grid } from '@mui/material'
import { Add } from '@mui/icons-material'
import ChannelItem  from '../../atoms/ChannelItem'
import CustomButton from '../../atoms/CustomButton'
import { withTheme } from '../../../hoc/withTheme'

export type ChannelsMenuProps = {
  item?: string,
  onAddChannel?: () => void
  isOpen?: boolean
  users: any
}

export const ChannelsMenu: FC<ChannelsMenuProps> = ( props ) : JSX.Element => {
  return (
    <ChannelMenuWrapper open={props.isOpen}>
      <ChannelItemWrapper>
      <Grid container justifyContent='center' spacing={1}>
          { props.users.slice(0, props.isOpen ? 3 : 1).map( (user:any, index:any) => {
            return(
              <Grid item xs={ 12 } >
                <ChannelItem 
                  innerLetter={user} 
                  size={ 40 } 
                  labelLetterSize='0.5rem'
                  innerLetterSize={ 15 } 
                  selected={ index == 0 ? true : false } 
                  borderWidth={ 2 }
                  onClick={ ()=>console.log('test') }
                />
              </Grid>
            )
          })}
          { props.isOpen && 
            <Grid alignItems={'start'} item xs={12} >
              <AddChannelWrapper>
                <CustomButton 
                  margin='5px' 
                  height='40px' 
                  width='30px' 
                  borderRadius='10px !important' 
                  icon={<Add style={{ color: '#D1D2D3' }}/>} 
                  variant={'flat'} 
                  backgroundColor={'transparent'} 
                />
              </AddChannelWrapper>
            </Grid>
          }
        </Grid>
      </ChannelItemWrapper>
    </ChannelMenuWrapper>
  )
}

export const ChannelMenuWrapper = styled(Box)<BoxProps & { open?:boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:props.open ? 'start' : 'center'/* 'space-between' */,
  height: props.open ? '100vh' : '100%',
  backgroundColor: '#1A1C20',
  width: '100%',
  //WebkitTransition:'height 1s ease-in-out',
  //MozTransition:'height 1s ease-in-out',
  //OTransition:'height 1s ease-in-out',
  //transition: 'height 1s ease-in-out',
}))

export const ChannelItemWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: '5px',
  margin: '1rem 0.5rem'
}))

export const AddChannelWrapper = styled(Box)(() => ({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  cursor:'pointer',
}))

export default withTheme<ChannelsMenuProps>(ChannelsMenu)
