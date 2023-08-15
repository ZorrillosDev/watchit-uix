import React from "react";
import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProfileInfo from "./ProfileInfo";
import {IconClock} from "@tabler/icons";
import RoundProgress from "../RoundProgress";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Atoms/ ProfileInfo",
    component: ProfileInfo,
} as ComponentMeta<typeof ProfileInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileInfo> = (args) => {
  return (
    <Box width='70px'>
      <ProfileInfo {...args} />
    </Box>
  )
}

export const ProfileInfoTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileInfoTest.args = {
  icon: <IconClock />,
  title: '1h 28m',
  subTitle: 'Duration',
  onClick: () => console.log('clicked profile info')
}

export const ProfileInfoTest2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProfileInfoTest2.args = {
  icon: <RoundProgress size={25} percentage={80} text={'8'} textSize={10} />,
  title: '8/10',
  subTitle: 'Rating',
  onClick: () => console.log('clicked profile info')
}
