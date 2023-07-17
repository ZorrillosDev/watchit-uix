import React, { FC, useState, useRef, useEffect } from "react";
import { styled, Box, BoxProps, Typography, Button } from "@mui/material";
import Poster from "../Poster/Poster";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export type MoviesProps = {
  img:string
  title:string
}

export type ControllerSliderProps = {
  title?:string
  movies:MoviesProps[]
}

export const ControllerSlider: FC<ControllerSliderProps> = (props) : JSX.Element => {
  const [index,setIndex] = useState(0);
  const [offsetWidth,setOffsetWidth] = useState(0);
  const divRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('width', divRef.current ? divRef?.current?.offsetWidth : 0);
    let width = divRef.current ? divRef?.current?.offsetWidth : 0
    setOffsetWidth(width)
  }, []);

  const handleScroll = (type:string) =>{
    let valid = ((offsetWidth) / 185) + ((index*-1)*((offsetWidth) * (0.15*(index*-1)))/185)
    type == 'right' 
    ? valid > props.movies.length+1 ? setIndex(0) : setIndex(index-1)
    : setIndex(index+1)
  }
   
  return (
    <Box sx={{margin:'20px 0',width:'100%'}}>
      <Box>
        <SliderControllerTitle>
          {props.title}
        </SliderControllerTitle>
      </Box>
      <SliderControllerWrapper ref={divRef}>
        <SliderControllerBox index={`${index}`}>
          { 
            props.movies.map( movie => {
              return(
                <Poster img={movie.img}
                  title={movie.title}
                  progress={50}
                  year={2022}
                  canHover={true} 
                />
              )
            })
          }
        </SliderControllerBox>
        <ButtonSliderCustom right="0px" onClick={()=>handleScroll("right")}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <ChevronRight/>
          </Box>
        </ButtonSliderCustom>
        {index != 0 &&
        <ButtonSliderCustom left="0px" onClick={()=>handleScroll("left")}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <ChevronLeft/>
          </Box>
        </ButtonSliderCustom>}
      </SliderControllerWrapper>
    </Box>
  )
}

export const SliderControllerTitle = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#D1D2D3',
  marginBottom:'15px'
}))

export const SliderControllerWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  overflow: 'hidden'
}))
export const SliderControllerBox = styled(Box)<BoxProps & { index: string }>((props) => ({
  display: 'flex',
  flexGrow: '1',
  gap: '0 10px',
  transform: `translateX(calc(${props.index} * 15%))`,
  transition: 'transform 250ms ease-in-out',
}))

export const ButtonSliderCustom = styled(Button)<{ right?: string,left?: string }>((props) => ({
  position: 'absolute',
  borderRadius: '0 !important',
  top: '0',
  right: props.right ? props.right : '',
  left: props.left ? props.right : '',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.45)'
}))

export default ControllerSlider
