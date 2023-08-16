import React, { FC } from "react";
import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps
} from "@mui/material";

export type MenuItemProps = {
  id: string
  icon: JSX.Element
  title: string
  active?: boolean
  onClick?: (id: string) => void
}

export const MenuItem: FC<MenuItemProps> = (props) : JSX.Element => {

  return (
      <MenuItemWrapper onClick={() => props.onClick?.(props.id)}>
        <MenuContentWrapper>
          <MenuItemIcon active={props.active}>{props.icon}</MenuItemIcon>
          <MenuItemText active={props.active}>{props.title}</MenuItemText>
        </MenuContentWrapper>
        {
          props.active ? (
            <MenuItemActive />
          ) : <></>
        }
      </MenuItemWrapper>
  )
}

export const MenuItemWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  width: '100%',
  position: 'relative',
  padding: '1rem 0'
}))

export const MenuContentWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const MenuItemActive = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  right: 0,
  width: '4px',
  height: '100%',
  backgroundColor: '#D71F27',
  borderTopLeftRadius: "2px",
  borderBottomLeftRadius: "2px"
}))

export const MenuItemIcon = styled(Box)<BoxProps & { active?: boolean }>(({active}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '0.5rem',
  width: '20px',
  svg: {
    width: '100%',
    height: 'auto',
    color: active ? '#D1D2D3' : 'rgba(209,210,211, 0.6)'
  }
}))

export const MenuItemText = styled(Typography)<TypographyProps & { active?: boolean }>(({active}) => ({
  fontSize: '10px',
  fontWeight: 500,
  color: active ? '#D1D2D3' : 'rgba(209,210,211, 0.6)'
}))

export default MenuItem
