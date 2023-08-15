import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled, Box, BoxProps, Typography } from "@mui/material";
import PopUpOptions from "./PopUp";
import CustomButton from "../../atoms/Button";
import { Cast } from "@mui/icons-material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ PopUpOptions",
    component: PopUpOptions,
} as ComponentMeta<typeof PopUpOptions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PopUpOptions> = (args) => 
<Box height={'500px'}>
  <PopUpOptions {...args} />
</Box>

;

export const PopUpOptionsDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PopUpOptionsDefault.args = {
  children:<CustomButton 
  width="30px" 
  variant={'flat'} 
  icon={<Cast sx={{ color: '#D1D2D3 !important'}}/>} 
  backgroundColor={'transparent'} 
  onClick={()=>console.log('cast action')} 
/>
}