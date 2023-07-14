import React, { FC } from "react";
import { styled, Box, BoxProps } from "@mui/material";
import Button from "../../atoms/Button";
import { ChevronLeft, Add } from "@mui/icons-material";
import ChannelItem  from "../../atoms/ChannelItem";

export type MobileMenuProps = {
  title: string,
  onBack?: () => void
  onForward?: () => void
}

export const ChannelsMenu: FC<MobileMenuProps> = (props) : JSX.Element => {
  return (
      <ChannelMenuWrapper>
        <ChannelItemWrapper>
          <ChannelItem
            innerLetter='austin'
            size={50}
            innerLetterSize={20}
            selected={true}
            borderWidth={3}
            onClick={() => console.log('clicked channel item')}
          />

          <ChannelItem
            innerLetter='Joseph'
            size={50}
            innerLetterSize={20}
            selected={false}
            borderWidth={3}
            onClick={() => console.log('clicked channel item')}
          />

          <ChannelItem
            innerLetter='Mario'
            size={50}
            innerLetterSize={20}
            selected={false}
            borderWidth={3}
            onClick={() => console.log('clicked channel item')}
          />
        </ChannelItemWrapper>
        <Button variant={'flat'} icon={<Add />} onClick={props.onForward} backgroundColor={'transparent'} />

        
      </ChannelMenuWrapper>
  )
}

export const ChannelMenuWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  backgroundColor: '#1A1C20',
  padding: '0.8rem 0.2rem',
  width:'100%'
}))

export const ChannelItemWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection:'column',
  justifyContent:'center',
  rowGap:'5px'
}))

export default ChannelsMenu
