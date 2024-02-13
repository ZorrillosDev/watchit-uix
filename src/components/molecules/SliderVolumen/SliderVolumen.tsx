import React, { useState, FC, ChangeEvent } from "react";
import { styled, Box, BoxProps, Slider } from "@mui/material";
import Button from "../../atoms/Button";
import { VolumeUp } from "@mui/icons-material";


export type SliderVolumenProps = {
  defaultVolume: number,
  alwaysShow: boolean, 
  onChange?: ( e:Event, value:number ) => void;
}

export const SliderVolumen: FC<SliderVolumenProps> = (props) : JSX.Element => {
  const { defaultVolume, alwaysShow = true, onChange } = props
  // State use to show TextField and change button icon 
  const [ show, setShow ] = useState( alwaysShow )

  const handleShow = () => show ? setShow(false) : setShow(true)

  return (
    <MainWrapper>  
      { show && 
        <SliderVolumenWrapper>          
          <SliderCustom
            aria-label="Volumen"
            orientation="vertical"
            defaultValue={ defaultVolume || 0 }
            data-testid={'slider-volumen'}
            onChange={ onChange }
          />
        </SliderVolumenWrapper>
      }
      <Button 
        variant={'flat'} 
        icon={ <VolumeUp /> } 
        onClick={ ()=> handleShow() } 
        backgroundColor={'transparent'} 
        data-testid={'button-show-slider'}
      />
    </MainWrapper>
  )
}

const MainWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection:'column',
  width:'2rem',
  justifyContent:'center',
  alignItems:'center'
}))

const SliderVolumenWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  height:'10rem',
  justifyContent:'center',
  alignItems:'center',
   marginBottom:'0.6rem'
}))

const SliderCustom = styled(Slider)(() => ({
  '& .MuiSlider-thumb': {
    color: "white"
  } ,
  '& .MuiSlider-track': {
      color: "white"
  },
  '& .MuiSlider-rail': {
    color: "#acc4e4"
  },
  '& .MuiSlider-active': {
      color: "white"
  }
}))

export default SliderVolumen
