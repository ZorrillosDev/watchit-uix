import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MobileHeader from "./MobileHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ MobileHeader",
    component: MobileHeader,
} as ComponentMeta<typeof MobileHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MobileHeader> = (args) => <MobileHeader {...args}/>;

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {
  title: 'Dashboard'
}
