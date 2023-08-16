import React, { FC } from "react";
import { styled, Box, BoxProps } from "@mui/material";
import { MenuItem, MenuItemProps } from "../../atoms/MenuItem";
import Logo from "../../atoms/Logo";
import Button from "../../atoms/Button";
import { IconMenu2 } from "@tabler/icons";
import ChallengesPopUp from "../ChallengesPopUp/ChallengesPopUp";

export type MenuProps = {
  isOpen: boolean
  items: MenuItemProps[]
  active: string
  onIsOpenChange?: () => void
  onItemChange?: (id: string) => void
}

export const Menu: FC<MenuProps> = (props) : JSX.Element => {
  return (
    <MenuWrapper sx={{ backgroundColor: props.isOpen ? '#212328' : '#1A1C20' }}>
      <MenuHeader>
        <Logo size={100} />
        <Button icon={<IconMenu2 />} variant={'flat'} backgroundColor={'transparent'} onClick={props.onIsOpenChange} />
      </MenuHeader>
        { props.isOpen && 
          <ItemsWrapper open={props.isOpen}>
            {
              props.items.map((el) => {
                return (
                  <MenuItem {...el} 
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

export const MenuWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '231px',
  maxWidth: '231px',
  padding: '0 2rem',
  position: 'relative',
  borderRight: '1px solid rgb(241, 238, 239, 0.2)'
}))

export const MenuHeader = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '65px',
  width: '100%',
  gap:'80px'
}))

export const ItemsWrapper = styled(Box)<BoxProps & { open:boolean}>((props) => ({
  //display: props.open ? 'block' : 'none',
  display: 'flex',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '99',
  height: props.open ? 'calc(100vh - 65px)' : '0px',
  marginLeft: '2rem',
  position: 'absolute',
  top: '65px',
  left: '0',
  background: "#212328",
  width: "calc(100% - 2rem)",
  borderRight: '1px solid rgb(241, 238, 239, 0.2)',
  //WebkitTransition: 'all 1s ease-in-out',
  //MozTransition: 'all 1s ease-in-out',
  //OTransition: 'all 1s ease-in-out',
  //transition: 'all 1s ease-in-out',
}))

export const ChallengesPopUpWrapper = styled(Box)(() => ({
  height:'100%',
  display:'flex',
  alignItems:'end',
  justifyContent:'center',
  margin:' 0 2rem 2rem 0',
  width: '231px'
}))

export default Menu
