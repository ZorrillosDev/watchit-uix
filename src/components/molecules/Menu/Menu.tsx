import React, { FC } from "react";
import { styled, Box, BoxProps } from "@mui/material";
import { MenuItem, MenuItemProps } from "../../atoms/MenuItem";
import Logo  from "@atoms/Logo";
import Button from "@atoms/Button";
import {IconMenu} from "@tabler/icons";

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
          props.isOpen ? (
            <>
              {
                props.items.map((el) => {
                  return (
                    <MenuItem {...el} active={el.id === props.active} onClick={props.onItemChange} />
                  )
                })
              }
            </>
          ) : <></>
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
  padding: '0 1rem'
}))

export const MenuHeader = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '60px',
  width: '100%',
  padding: '0 1rem'
}))

export default Menu
