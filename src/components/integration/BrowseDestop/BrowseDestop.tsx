import React, { FC, useState } from "react";
import { styled, Box, BoxProps, Typography } from "@mui/material";
import Button from "../../atoms/Button";
import Menu from "../../molecules/Menu";
import  MobileHeader from '../../molecules/MobileHeader'
import ControllerSlider from '../../molecules/ControllerSlider'
import { IconMenu } from "@tabler/icons";
import ChannelsMenu  from "../../molecules/ChannelsMenu";

export type BrowseDestopProps = {
  item: string,
  onAddChannel?: () => void
  isOpen?: boolean
}

export const BrowseDestop: FC<BrowseDestopProps> = (props) : JSX.Element => {
  const [ active, setActive ] = useState('1')
  const [ isOpen, setIsOpen ] = useState(false)

  const movies = [
    {
      img:'https://cuevana3.mu/img/Mkp0NmxQeko2cXFxOVZVbDBLaEw5TTZpRmdEb1gzR1puSGVrN01RcE5QQzVpNUZFWHJDaFpHOUxDUStHd00xVQ.webp',
      title:'Renfield'
    },
    {
      img:'https://cuevana3.mu/img/SmV4UDhnZnJtd254dEk2YjQ5bm8vTzNwRTRNaU16NkJLMWJjbVVFVk02eHhQcGlwYy9NV1dUNFFsYzJWZG93cQ.webp',
      title:'Super Mario Bros: La Pelicula'
    },
    {
      img:'https://cuevana3.mu/img/b25UV3ZTaGpwNkQ2N05RMzZmQmsrSHlhUFJXN0pRMU5KcExXdDNOMGY3NnJJS3pTa0tDMGREb2hnU0wrbzJRYQ.webp',
      title:'Dungeons & Dragons: Honor entre ladrones'
    },
    {
      img:'https://cuevana3.mu/img/UUErRWRkQlZDY2JQNG0xSEVWM3ZFbWxuWG5QU3JmaGJHejhiUUZKaEVmcFcvV3djVTJzNEQvRG52emV5NTl1Qg.webp',
      title:'Misterio a la vista'
    },
    {
      img:'https://cuevana3.mu/img/YkRXS3VXV1lMdzZJMkF1dm5ZUEloSzh1T2gxR000RjBXWlhrZGUxbFQ0QXJ5T3BOMitCTGt4d0cxY2FNcU9IQQ.webp',
      title:'John Wick 4'
    },
    {
      img:'https://cuevana3.mu/img/M2tpS2s3elEvYjlnM2ZmOWdEUFhNRGtiSk4rMUR4cnRxZGhzRzliazQxekZVSUlxQmZ3R2xsODRSYTJ0Q0h2MA.webp',
      title:'¡Shazam! La furia de los dioses'
    },
    {
      img:'https://cuevana3.mu/img/a0tXYjhoY2tadm9OcEVxNXRiOThXMzZNMHN6Qnd4dnRhWCt1ZUlubTg1RmtPTFF5eXdHMXFVS2ZrckNPNW9KVQ.webp',
      title:'Ant-Man y la Avispa: Quantumanía'
    },
    {
      img:'https://cuevana3.mu/img/bVdLSU91UGlodmtGY28zREo3VVBON1Zlc2VLMXk4Ukp1SkU4Z2s0RXNvK2lqNUVTYlpHb1VaZnFiK3VFeXBUcw.webp',
      title:'The Devil Conspiracy'
    },
    {
      img:'https://cuevana3.mu/img/MmFFa2k2MXpqZVdaVmZDYk1XeEp1RFRSYUVKaCtCUGdoUWtxbnFnWjJNRFllcVFvR0V2cDhKMGFwVzVKZDg2TQ.webp',
      title:'Babylon'
    },
    {
      img:'https://cuevana3.mu/img/SXlYRTdoa3EwY0JIakw5dGxrTVJEb25YTGZCNmtWNG1mcVcxbFpvQjRQOEhwNkZOa3d1U2JuanJIeHg2MDF0QQ.webp',
      title:'Bodas de Plomo'
    },
    {
      img:'https://cuevana3.mu/img/bVpzc3pzU0lCK2x0aERxdG9hRWVHNzYwNjhIZzlyS2pOeXIzdG8zSjdoWE9KUjVZcjd6R0pYb3ZQSzFnWUxwNw.webp',
      title:'Operation Fortune: Ruse de Guerre'
    },
    {
      img:'https://cuevana3.mu/img/eDJScVR0TGRsZHNER0RWSkMzRzZxcGFzQk9jTG1zU3RvRWlwVlZXSGJuaXkyYTl4N2N1NmhFclJkYWxwSHptVQ.webp',
      title:'Avatar: El camino del agua'
    }
  ]
  const items = [
    {
      id: '1',
      icon: <IconMenu />,
      title: 'Browse',
      active: false,
      onClick: () => console.log('clicked menu item')
    },
    {
      id: '2',
      icon: <IconMenu />,
      title: 'Recent',
      active: false,
      onClick: () => console.log('clicked menu item')
    },
    {
      id: '3',
      icon: <IconMenu />,
      title: 'Coming Soon',
      active: false,
      onClick: () => console.log('clicked menu item')
    },
    {
      id: '4',
      icon: <IconMenu />,
      title: 'Watch List',
      active: false,
      onClick: () => console.log('clicked menu item')
    }
  ]

  const handleToggleOpen = () => setIsOpen((open) => !open)
  
  return (
    <>
      <MobileHeaderWrapper active={isOpen}>
        <Box sx={{height:'65px'}}>
          <ChannelsMenu isOpen={isOpen}/>
        </Box>
        <Menu 
          onItemChange={setActive} 
          active={active} 
          isOpen={isOpen} 
          onIsOpenChange={handleToggleOpen}
          items={items}
        />
        <MobileHeader 
          title=""
          isActive={isOpen}
        />
      </MobileHeaderWrapper>
      <ControlSliderWrapper open={isOpen}>
        <ControllerSlider movies={movies} title="Continue watching"/>
        <ControllerSlider movies={movies} title="Top rated"/>
      </ControlSliderWrapper>
    </>
  )
}

export const MobileHeaderWrapper = styled(Box)<BoxProps & {active?:boolean}>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '65px',
  position:"fixed",
  width:'100%',
  top:0,
  left:0,
  zIndex:'10',
  backgroundColor: props.active ? '#212328' : '#1A1C20',
}))

export const ControlSliderWrapper = styled(Box)<BoxProps & {open?:boolean}>((props) => ({
  width: `${ props.open ? 'calc(100% - 380px)' : '100%'}`,
  marginTop:'72px',
  transform: `translateX( ${ props.open ? '380px' : '0' })`,
  transition: 'transform 250ms ease-in-out',
  //,width 1s ease-in-out
  //WebkitTransition:'width 1s ease-in-out',
  //MozTransition:'width 1s ease-in-out',
  //OTransition:'width 1s ease-in-out'
}))


export default BrowseDestop
