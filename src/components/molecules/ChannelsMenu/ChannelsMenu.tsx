import React, { FC } from "react";
import { styled, Box, BoxProps } from "@mui/material";
import Button from "../../atoms/Button";
import { Add } from "@mui/icons-material";
import ChannelItem  from "../../atoms/ChannelItem";

export type ChannelsMenuProps = {
  item?: string,
  onAddChannel?: () => void
  isOpen?: boolean
}

export const ChannelsMenu: FC<ChannelsMenuProps> = (props) : JSX.Element => {
  return (
    <ChannelMenuWrapper open={props.isOpen}>
      <ChannelItemWrapper>
        <ChannelItem
          innerLetter='austin'
          size={40}
          innerLetterSize={15}
          selected={true}
          borderWidth={3}
          onClick={() => console.log('clicked channel item')}
        />

        { props.isOpen && 
          <>
            <ChannelItem
              innerLetter='Joseph'
              size={40}
              innerLetterSize={15}
              selected={false}
              borderWidth={3}
              onClick={() => console.log('clicked channel item')}
            />

            <ChannelItem
              innerLetter='Mario'
              size={40}
              innerLetterSize={15}
              selected={false}
              borderWidth={3}
              onClick={() => console.log('clicked channel item')}
            />

            <Button width="50px" variant={'flat'} icon={<Add />} backgroundColor={'transparent'} />
          </>
        }
      </ChannelItemWrapper>
    </ChannelMenuWrapper>
  )
}

export const ChannelMenuWrapper = styled(Box)<BoxProps & { open?:boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: props.open ? 'start' : 'center'/* 'space-between' */,
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

export default ChannelsMenu
