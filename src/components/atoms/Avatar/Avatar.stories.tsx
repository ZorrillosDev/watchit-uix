import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from './Avatar'
import { Box } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => 
  <Avatar 
    width={30} height={30} 
    borderSize={4} userName='Jacob Peralta'
  />
  

export const AvatarTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AvatarTest.args = {}
