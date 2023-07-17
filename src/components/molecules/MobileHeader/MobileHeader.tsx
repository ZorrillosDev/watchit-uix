import React, { FC } from "react";
import { styled, Box, BoxProps, Typography } from "@mui/material";
import Button from "../../atoms/Button";
import { ChevronLeft, ChevronRight, Search } from "@mui/icons-material";

export type MobileMenuProps = {
  title: string,
  onBack?: () => void
  onForward?: () => void
  isActive?: boolean
}

export const MobileHeader: FC<MobileMenuProps> = (props) : JSX.Element => {
  return (
      <MobileHeaderWrapper active={props.isActive}>
        <Box sx={{ display: 'flex' }}>
          <Button variant={'flat'} icon={<ChevronLeft />} onClick={props.onBack} backgroundColor={'transparent'} />
          <Button variant={'flat'} icon={<ChevronRight />} onClick={props.onForward} backgroundColor={'transparent'} />
        </Box>
        <Typography variant={'h4'} sx={{ color: '#D1D2D3' }}>{props.title}</Typography>
        <Button variant={'flat'} icon={<Search />} onClick={props.onForward} backgroundColor={'transparent'} />
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
