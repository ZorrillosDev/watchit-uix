import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListItem from "./ListItem";
import { Box } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ List Item",
    component: ListItem,
} as ComponentMeta<typeof ListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListItem> = (args) => {
  const item2 = [
    {
      id:'t1',
      title:'English',
    },
    {
      id:'t2',
      title:'Spanish',
    },
    {
      id:'t4',
      title:'German',
    }
  ]
    
  
  return <Box sx={{ width:'250px', marginTop:'50px' }}>
    <ListItem list={item2}/>;
  </Box>
}
export const ListItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListItemTest.args = {}
