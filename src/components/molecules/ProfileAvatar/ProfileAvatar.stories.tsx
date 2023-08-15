import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileAvatar from './ProfileAvatar'
import { Box } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ Profile Avatar",
    component: ProfileAvatar,
} as ComponentMeta<typeof ProfileAvatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileAvatar> = (args) => {
  return <Box sx={{ width:'250px', marginTop:'50px' }}>
    <ProfileAvatar width={30} height={30} borderSize={5} userName='Jacob Peralta' rank='Platinum'/>
  </Box>
}
export const ProfileAvatarTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileAvatarTest.args = {}
