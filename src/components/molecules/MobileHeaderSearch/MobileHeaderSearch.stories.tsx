import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MobileHeaderSearch from "./MobileHeaderSearch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ MobileHeaderSearch",
    component: MobileHeaderSearch,
} as ComponentMeta<typeof MobileHeaderSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MobileHeaderSearch> = (args) => <MobileHeaderSearch {...args}/>;

export const MobileSearch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MobileSearch.args = {}
