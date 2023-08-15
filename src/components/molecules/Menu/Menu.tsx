import React, { FC } from 'react'
import { styled, Box, BoxProps } from '@mui/material'
import { MenuItem, MenuItemProps } from '../../atoms/MenuItem'
import Logo from '../../atoms/Logo'
import CustomButton from '../../atoms/CustomButton'
import { IconMenu2 } from '@tabler/icons'
import ChallengesPopUp from '../ChallengesPopUp'
import { withTheme } from '../../../hoc/withTheme'

export type MenuProps = {
  isOpen: boolean
  items: MenuItemProps[]
  active: string
  onIsOpenChange?: () => void
  onItemChange?: (id: string) => void
  width:string
  maxWidth?:string
}

export const Menu: FC<MenuProps> = ( props ) : JSX.Element => {
  return (
    <MenuWrapper  maxWidth={ props.maxWidth } width={ props.width } sx={{ backgroundColor: props.isOpen ? '#212328' : '#1A1C20' }}>
      <MenuHeader>
        <Logo size={100} />
        <CustomButton 
          margin='0 1rem 0 0'
          variant='flat'
          height='40px' 
          width='40px' 
          icon={
            <IconMenu2 
              style={{ color: '#D1D2D3' }} 
            />
          }  
          backgroundColor='transparent'
          onClick={props.onIsOpenChange} 
        />
      </MenuHeader>
        { props.isOpen && 
          <ItemsWrapper open={props.isOpen}>
            {
              props.items.map((el,key) => {
                return (
                  <MenuItem 
                    key={key}
                    {...el} 
                    active={el.id === props.active} 
                    onClick={props.onItemChange} 
                  />
                )
              })
            }
            <ChallengesPopUpWrapper>
              <ChallengesPopUp/>
            </ChallengesPopUpWrapper>
          </ItemsWrapper>
        } 
    </MenuWrapper>
  )
}

export const MenuWrapper = styled( Box )<BoxProps>(( props ) => ({
  display: 'flex !important',
  alignItems: 'center',
  width: `${props.width} !important`,
  maxWidth: `${props?.maxWidth ? props?.maxWidth : props.width} !important`,
  position: 'relative',
  height: '65px !important',
}))

export const MenuHeader = styled( Box )<BoxProps>(() => ({
  display: 'flex !important',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100% !important',
  width: '100% !important',
  borderRight: '1px solid rgb(241, 238, 239, 0.2) !important',
  paddingLeft: '2rem !important',
  position: 'absolute',
  top: '0px !important',
  left: '0 !important',
}))

export const ItemsWrapper = styled( Box )<BoxProps & { open:boolean}>(( props ) => ({
  //display: props.open ? 'block' : 'none',
  display: 'flex !important',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '99 !important',
  height: props.open ? 'calc(100vh - 65px)' : '0px',
  position: 'absolute',
  top: '65px !important',
  left: '0 !important',
  background: '#212328 !important',
  width: '100% !important',
  borderRight: '1px solid rgb(241, 238, 239, 0.2) !important',
  paddingLeft: '2rem !important'
  //WebkitTransition: 'all 1s ease-in-out',
  //MozTransition: 'all 1s ease-in-out',
  //OTransition: 'all 1s ease-in-out',
  //transition: 'all 1s ease-in-out',
  
}))

export const ChallengesPopUpWrapper = styled(Box)(() => ({
  height:'100% !important',
  display:'flex !important',
  alignItems:'end',
  justifyContent:'center',
  margin:' 0 2rem 2rem 0 !important',
  width: '231px !important',
}))

export default withTheme<MenuProps>(Menu)
