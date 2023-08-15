import React, { FC } from 'react'
import { styled, Box, BoxProps, Typography } from '@mui/material'
import Button from '../../atoms/Button'
import { VerifiedUser } from '@mui/icons-material'

export type ChallengesPopUpProps = {
  item?: string,
  onAddChannel?: () => void
  isOpen?: boolean
}

export const ChallengesPopUp: FC<ChallengesPopUpProps> = ( props ) : JSX.Element => {
  return (
    <ChallengesPopUpWrapper open={props.isOpen}>
      <OutSideIconWrapper>
        <VerifiedUser style={{ color: '#D1D2D3' }}/>
      </OutSideIconWrapper>
      <Typography 
          variant='text14bold'
          margin='1.5rem 0 0.5rem 0'
        >
        Popcorn Addict
      </Typography>
      <Typography 
          variant="text10regular" 
          margin='0 0 1.5rem 0'
        >
        4/6h viewing time
      </Typography>
      <Button 
        variant={'flat'}
        children={<span style={{ fontSize:'14px' }}>View challenges</span>}
        onClick={() => console.log('clicked icon button')}
      />
    </ChallengesPopUpWrapper>
  )
}

export const ChallengesPopUpWrapper = styled(Box)<BoxProps & { open?:boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#1A1C20',
  padding:'1rem',
  position:'relative',
  borderRadius:'8px',
  width:'calc(100% - 2rem)'
}))

export const OutSideIconWrapper = styled(Box)<BoxProps>(() => ({
  background: '#6689A1',
  position: 'absolute',
  top: '-25px',
  left: 'calc(50%  - 20px)',
  width: '48px',
  height: '48px',
  borderRadius:'8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
}))

export default ChallengesPopUp
