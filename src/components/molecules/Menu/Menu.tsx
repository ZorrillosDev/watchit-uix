import React, { FC } from "react";
import { styled, Box, BoxProps } from "@mui/material";
import { MenuItem, MenuItemProps } from "../../atoms/MenuItem";
import Logo from "../../atoms/Logo";
import Button from "../../atoms/Button";
import {IconMenu} from "@tabler/icons";
import { BorderRight } from "@mui/icons-material";

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
          <Button icon={<IconMenu />} variant={'flat'} backgroundColor={'transparent'} onClick={props.onIsOpenChange} />
        </MenuHeader>
        
          {
            props.isOpen && 
              <Box sx={{ zIndex:'99',height:'calc(100vh - 65px)',position:'absolute',top:'65px',left:'0',background:"#212328",width:"100%",borderRight: '2px solid rgb(241, 238, 239, 0.4)'}}>
                {
                  props.items.map((el) => {
                    return (
                      <MenuItem {...el} active={el.id === props.active} onClick={props.onItemChange} />
                    )
                  })
                }
              </Box>
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
  padding: '0 1rem',
  position: 'relative',
  borderRight: '2px solid rgb(241, 238, 239, 0.4)'
}))

export const MenuHeader = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '65px',
  width: '100%',
  padding: '0 1rem',
}))

export default Menu
