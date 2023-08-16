import React, { FC } from "react";
import { styled, Box, BoxProps, Typography } from "@mui/material";
import Button from "../../atoms/Button";
import { Add,VerifiedUser } from "@mui/icons-material";
import ChannelItem  from "../../atoms/ChannelItem";

export type ChallengesPopUpProps = {
  item?: string,
  onAddChannel?: () => void
  isOpen?: boolean
}

export const ChallengesPopUp: FC<ChallengesPopUpProps> = (props) : JSX.Element => {
  return (
    <ChallengesPopUpWrapper open={props.isOpen}>
      <OutSideIconWrapper>
        <VerifiedUser style={{ color: '#D1D2D3' }}/>
      </OutSideIconWrapper>
      <ChallengesPopUpTitle fontSize={'14px'} fontWeight={'bold'} margin={'1.5rem 0 0.5rem 0'}>
        Popcorn Addict
      </ChallengesPopUpTitle>
      <ChallengesPopUpTitle fontSize={'10px'} fontWeight={'regular'} margin={'0 0 1.5rem 0'}>
        4/6h viewing time
      </ChallengesPopUpTitle>
      <Button 
        variant={'flat'}
        children={<span style={{fontSize:'14px'}}>View challenges</span>}
        onClick={() => console.log('clicked icon button')}
      />
    </ChallengesPopUpWrapper>
  )
}

export const ChallengesPopUpTitle = styled(Typography)<{ fontSize?:string, fontWeight?:string,margin?:string  }>((props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  color: '#D1D2D3',
  margin: props.margin
}))

export const ChallengesPopUpWrapper = styled(Box)<BoxProps & { open?:boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#1A1C20',
  padding:'1rem',
  position:'relative',
  borderRadius:'8px',
  width:'100%'
}))

export const OutSideIconWrapper = styled(Box)<BoxProps>(() => ({
  background: "#6689A1",
  position: 'absolute',
  top: '-25px',
  left: 'calc(50%  - 20px)',
  width: "48px",
  height: "48px",
  borderRadius:'8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
}))

export default ChallengesPopUp
