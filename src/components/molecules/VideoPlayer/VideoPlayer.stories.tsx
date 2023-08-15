import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";
import VideoPlayer from "./VideoPlayer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ VideoPlayer",
    component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoPlayer> = (args) => {
  return (<Box sx={{width:'100%',height:'100vh'}}>
    <VideoPlayer 
      {...args}
      titleMovie="Renfield"
      defaultVolume={50}
      src="http://vjs.zencdn.net/v/oceans.mp4"
      preview={false}
      autoPlay={false}
      onClose={()=>console.log('test')}
    />
  </Box>)
}

export const VideoPlayerDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VideoPlayerDefault.args = {}