import React, { FC, PropsWithChildren } from 'react'
import { styled, Button, Box } from '@mui/material'
import { withTheme } from '../../../hoc/withTheme'

export type ButtonProps = {
  variant: string
  icon?: JSX.Element
  borderRadius?: string
  border?: string
  padding?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  backgroundColor?: string;
  width?: string
  height?: string
  margin?: string
}

export const CustomButton: FC<PropsWithChildren<ButtonProps>> = (props) : JSX.Element => {
  return (
    <CustomButtonWrapper className={`${props.variant}`}
      onClick={props.onClick}
      sx={{  //padding: props.children ? '0.3rem 1rem' : '0.3rem 0.5rem',
             backgroundColor: props.backgroundColor,
             border:props.border,
             borderRadius: props.borderRadius,
             padding: props.padding,
             height: props.height,
             width: props.width,
             minWidth:props.width,
             margin: props.margin
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='center'>
        {
          props.icon ? (
            <Box
              display='flex' alignItems='center' justifyContent='center'
              sx={{ mr: props.children ? '0.5rem' : '0' }} data-testid='icon'
            >
              { props.icon }
            </Box>
          ) : <></>
        }
        {
          props.children ? (
            props.children
          ) : <></>
        }
      </Box>
    </CustomButtonWrapper>
  )
}

const CustomButtonWrapper = styled(Button)(() => ({
    background: 'transparent',
    borderRadius: '50px !important',
    color: '#D1D2D3 !important',
    fontWeight: '500 !important',
    textTransform: 'capitalize',
    "&.primary":{
      background: 'rgba(26,28,32,0.2) !important',
      border: '1px solid #D1D2D3 !important',
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12) !important',
      '&:hover': {
        backgroundColor: '#1c1d21 !important',
      }
    },
    "&.secondary": {
      background: 'transparent !important',
      border: '1px solid #D1D2D3 !important',
      '&:hover': {
        backgroundColor: '#1c1d21 !important',
      }
    },
    "&.flat": {
      background: 'transparent !important',
      border: 'none !important',
      '&:hover': {
        backgroundColor: '#1c1d21 !important',
      }
    }
}))

export default withTheme<ButtonProps>(CustomButton)
