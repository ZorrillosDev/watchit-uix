import React, { FC } from 'react'
import { styled, Box } from '@mui/material'
import { Button } from '../../atoms/index'
import { Search, Close } from '@mui/icons-material'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { withTheme } from '../../../hoc/withTheme'

export type MobileHeaderSearchProps = {
  value?: string,
  isOpen: boolean,
  onSearchOpen?: () => void
  onClick?: () => void
  onSearchClose?: () => void
}

export const MobileHeaderSearch: FC<MobileHeaderSearchProps> = ( props ) : JSX.Element => {
  return (
    <Box sx={{ display: 'flex' }}>
      { props.isOpen && 
        <TextFieldCustom 
          placeholder='Search'
          sx={{  width:'300px' }}
          InputProps={{
            sx: { 
                borderRadius:'20px !important',border:'1px solid #D1D2D3 !important',
                'input':{
                    padding: '9px 14px !important',
                    background:'transparent !important',
                    fontWeight:'bold',
                    border: 'none',
                    bordeRadius: 0,
                    outline: 'none',
                    height: 'auto',
                    width:' 100%',
                    fontSize: '1rem',
                    margin: '0',
                    color:'#D1D2D3',
                    boxShadow:'none',
                    '&:focus:not([readonly])':{
                      borderBottom: 'none',
                      boxShadow: 'none'
                    }
                  } }, 
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position='start'>
                <Search style={{ color: '#D1D2D3'}}/>
              </InputAdornment>
            ),
          }}
          data-testid='textfield-search'
        /> 
      }
      <Button 
        variant='flat'
        icon={ props.isOpen ? <Close style={{ color: '#D1D2D3'}} /> : <Search style={{ color: '#D1D2D3' }}/> } 
        onClick={ props.onSearchOpen }
        backgroundColor='transparent'
        data-testid='button-search'
      />
    </Box>
  )
}

const TextFieldCustom = styled(TextField)(() => ({
  '& fieldset': { border: 'none' }
}))

export default withTheme<MobileHeaderSearchProps>(MobileHeaderSearch)
