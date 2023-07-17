import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChannelManageDesktop from "./ChannelManageDesktop";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Integration Components/ ChannelManageDesktop",
    component: ChannelManageDesktop,
} as ComponentMeta<typeof ChannelManageDesktop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChannelManageDesktop> = (args) => <ChannelManageDesktop {...args}/>;

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {}
