import React, { FC, useState } from "react";
import { styled, Box, BoxProps, Typography } from "@mui/material";
import Button from "../../atoms/Button";
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";
import MobileHeaderSearch from "../MobileHeaderSearch/MobileHeaderSearch";

export type MobileHeaderProps = {
  title: string,
  onBack?: () => void
  onForward?: () => void
  isActive?: boolean
}

export const MobileHeader: FC<MobileHeaderProps> = (props) : JSX.Element => {
  const [ showInput, setShowInput ] = useState(false)

  const handleShow = () => showInput ? setShowInput(false) : setShowInput(true)

  return (
      <MobileHeaderWrapper active={props.isActive}>
        <Box sx={{ display: 'flex' }}>
          <Button variant={'flat'} icon={<ChevronLeft />} onClick={props.onBack} backgroundColor={'transparent'} />
          <Button variant={'flat'} icon={<ChevronRight />} onClick={props.onForward} backgroundColor={'transparent'} />
        </Box>
        <Box sx={{ display: 'flex',alignItems:'center',width:'100%' }}>
          { !showInput && <Typography style={{padding:'2rem'}} variant={'h4'} sx={{ color: '#D1D2D3' }}>{props.title}</Typography> }
          <MobileHeaderSearch isOpen={showInput} onSearchOpen={ ()=>handleShow() }/>
        </Box>
      </MobileHeaderWrapper>
  )
}

export const MobileHeaderWrapper = styled(Box)<BoxProps & { active?: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '65px',
  backgroundColor: props.active ? '#212328' : '#1A1C20',
  padding: '0 0.5rem'
}))

export default MobileHeader
