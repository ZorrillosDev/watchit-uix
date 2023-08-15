import React, { FC, useState } from 'react'
import { styled, Box, BoxProps, Typography } from '@mui/material'
import Button from '../../atoms/Button'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import MobileHeaderSearch from '../MobileHeaderSearch/MobileHeaderSearch'
import { withTheme } from '../../../hoc/withTheme'

export type MobileHeaderProps = {
  title: string,
  onBack?: () => void
  onForward?: () => void
  isActive?: boolean
}

export const MobileHeader: FC<MobileHeaderProps> = ( props ) : JSX.Element => {
  const [ showInput, setShowInput ] = useState( false )

  const handleShow = () => showInput ? setShowInput( false ) : setShowInput( true )

  return (
    <MobileHeaderWrapper active={ props.isActive }>
      <Box sx={{ display: 'flex' }}>
        <Button 
          variant='flat' 
          icon={ 
            <ChevronLeft 
              sx={{ color:'#D1D2D3' }} 
            /> 
          } 
          onClick={props.onBack} 
          backgroundColor='transparent'
        />
        <Button 
          variant='flat' 
          icon={ 
            <ChevronRight 
              sx={{ color:'#D1D2D3' }} 
            />
          } 
          onClick={props.onForward} 
          backgroundColor='transparent'
        />
      </Box>
      <Box sx={{ display: 'flex',alignItems:'center',width:'100%' }}>
        { !showInput && <TitleMobileHeader fontSize='20px' fontWeight='bold'>{ props.title }</TitleMobileHeader> }
        <MobileHeaderSearch isOpen={showInput} onSearchOpen={ ()=>handleShow() }/>
      </Box>
    </MobileHeaderWrapper>
  )
}

export const MobileHeaderWrapper = styled( Box )<BoxProps & { active?: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '65px',
  backgroundColor: props.active ? '#212328' : '#1A1C20',
  padding: '0 0.5rem'
}))

export const TitleMobileHeader = styled( Typography )<{ 
  fontSize?: string, 
  fontWeight?: string,
  margin?:string  
}>((props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  padding: '2rem',
  color: '#D1D2D3',
  margin: props.margin
}))

export default withTheme<MobileHeaderProps>(MobileHeader)
