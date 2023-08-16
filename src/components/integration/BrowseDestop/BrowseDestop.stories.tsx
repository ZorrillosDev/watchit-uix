import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BrowseDestop from "./BrowseDestop";
import {IconMenu} from "@tabler/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Integraction Components/ BrowseDestop",
    component: BrowseDestop,
} as ComponentMeta<typeof BrowseDestop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrowseDestop> = (args) => <BrowseDestop {...args}/>;

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {
}
