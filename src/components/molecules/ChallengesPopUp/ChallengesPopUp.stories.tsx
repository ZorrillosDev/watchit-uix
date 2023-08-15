import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChallengesPopUp from "./ChallengesPopUp";
import { Box } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ Challenges PopUp",
    component: ChallengesPopUp,
} as ComponentMeta<typeof ChallengesPopUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChallengesPopUp> = (args) => 
  <Box sx={{ width:'250px', marginTop:'50px' }}>
    <ChallengesPopUp {...args} isOpen={true}/>
  </Box>

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {}
