import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import {PlayArrow} from "@mui/icons-material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonText.args = {
  variant: 'primary',
  children: <span>MANAGE CHANNELS</span>,
  onClick: () => {
    console.log('clicked icon button')
  }
}

export const ButtonTextIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonTextIcon.args = {
  variant: 'secondary',
  children: <span>MANAGE CHANNELS</span>,
  icon: <><PlayArrow /></>,
  onClick: () => {
    console.log('clicked icon button')
  }
}

export const ButtonIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonIcon.args = {
  variant: 'secondary',
  icon: <><PlayArrow /></>,
  onClick: () => {
    console.log('clicked icon button')
  }
}
