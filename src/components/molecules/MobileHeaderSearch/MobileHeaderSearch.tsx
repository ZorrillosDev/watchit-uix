import React, { useState, FC } from "react";
import { styled, Box, BoxProps } from "@mui/material";
import { Button } from "../../atoms/index";
import { Search, Close } from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";

export type MobileHeaderSearchProps = {
  value: string,
  onSearchOpen?: () => void
  onClick?: () => void
  onSearchClose?: () => void
}

export const MobileHeaderSearch: FC<MobileHeaderSearchProps> = (props) : JSX.Element => {
  // State use to show TextField and change button icon 
  const [ showInput, setShowInput ] = useState(false)

  const handleShow = () => showInput ? setShowInput(false) : setShowInput(true)
  
  return (
    <Box sx={{ display: 'flex' }}>
      { showInput && 
        <TextFieldCustom 
          placeholder='Search'
          sx={{
            
          }}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            ),
          }}
          data-testid={'textfield-search'}
        /> 
      }
      <Button 
        variant={ 'flat' } 
        icon={showInput ? <Close /> : <Search /> } 
        onClick={ ()=>handleShow() }
        backgroundColor={ 'transparent' } 
        data-testid={'button-search'}
      />
    </Box>
  )
}

const TextFieldCustom = styled(TextField)(() => ({
  border:'0',
  '.css-zypm09-MuiInputBase-input-MuiOutlinedInput-input':{
    backgroundColor:'transparent',
    color:'#D1D2D3',
    padding: '10px 14px'
  },
  '.css-1lc5s07-MuiInputBase-root-MuiOutlinedInput-root':{
    borderRadius:'20px',
    border:'1px solid #D1D2D3',
  },
  "& fieldset": { border: 'none' }
}))

export default MobileHeaderSearch
