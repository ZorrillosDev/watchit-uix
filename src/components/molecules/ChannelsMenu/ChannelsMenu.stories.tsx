import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChannelsMenu from "./ChannelsMenu";
import { Box } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ ChannelsMenu",
    component: ChannelsMenu,
} as ComponentMeta<typeof ChannelsMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChannelsMenu> = (args) => {
  const users = [ 'Austin', 'Brooklyn','Chicago'] 
  return <Box sx={{ width:'80px' }}>
    <ChannelsMenu {...args} isOpen={false} users={users}/>
  </Box>
}

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {}
