import React, { useState, FC } from 'react'
import { styled, Box, BoxProps, Slider } from '@mui/material'
import { VolumeUp, VolumeOff } from '@mui/icons-material'
import CustomButton from '../../atoms/CustomButton'
import { ClickOutsideListener } from '../../../hooks'
import { withTheme } from '../../../hoc/withTheme'

export type SliderVolumenProps = {
  defaultVolume?: number,
  alwaysShow: boolean, 
  onChange: ( value:number ) => void;
}

export const SliderVolumen: FC<SliderVolumenProps> = (props) : JSX.Element => {
  const { defaultVolume = 0, alwaysShow = true, onChange } = props
  // State use to show TextField and change button icon 
  const [ show, setShow ] = useState( alwaysShow )
  const [ volumen, setVolumen ] = useState(defaultVolume)

  const handleShow = () => show ? setShow(false) : setShow(true)

  const handleShow2 = (e:Event,value:any) =>{ 
    setVolumen(value)
    onChange(value)
  }

  return (
    <ClickOutsideListener onClickAway={ () => setShow( false ) }>
      <MainWrapper>  
        { show && 
          <SliderVolumenWrapper>          
            <SliderCustom
              aria-label='Volumen'
              orientation='vertical'
              defaultValue={ defaultVolume || 0 }
              data-testid='slider-volumen'
              onChange={ (e:Event,value:any) => handleShow2(e,value) }
            />
          </SliderVolumenWrapper>
        }
        <CustomButton 
          variant='flat'
          width='45px'
          height='45px'
          icon={ 
            volumen > 0 
              ? <VolumeUp style={{ color: '#D1D2D3'}}/> 
              : <VolumeOff style={{ color: '#D1D2D3'}}/>
          } 
          onClick={ ()=> handleShow() } 
          backgroundColor='transparent'
          data-testid='button-show-slider'
        />
      </MainWrapper>
    </ClickOutsideListener>
  )
}

const MainWrapper = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
}))

const SliderVolumenWrapper = styled( Box )<BoxProps>(() => ({
  display: 'flex',
  height: '10rem',
  justifyContent:'center',
  alignItems: 'center',
  marginBottom: '0.6rem',
  position: 'absolute',
  bottom: '2.5rem'
}))

const SliderCustom = styled( Slider )(() => ({
  '& .MuiSlider-thumb': {
    color: 'white'
  } ,
  '& .MuiSlider-track': {
      color: 'white'
  },
  '& .MuiSlider-rail': {
    color: '#acc4e4'
  },
  '& .MuiSlider-active': {
      color: 'white'
  }
}))

export default withTheme<SliderVolumenProps>( SliderVolumen)
