import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./Menu";
import {IconMenu} from "@tabler/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Watchit Molecules/ Menu",
    component: Menu,
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => {
  const [active, setActive] = useState('1')
  const [isOpen, setIsOpen] = useState(true)
  const handleToggleOpen = () => {
    setIsOpen((open) => !open)
  }
  return <Menu {...args} onItemChange={setActive} active={active} isOpen={isOpen} onIsOpenChange={handleToggleOpen} />
};

export const ChannelItemTest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChannelItemTest.args = {
  items: [
    {
      id: '1',
      icon: <IconMenu />,
      title: 'Menu 1',
      active: false,
      onClick: () => console.log('clicked menu item')
    },
    {
      id: '2',
      icon: <IconMenu />,
      title: 'Menu 2',
      active: false,
      onClick: () => console.log('clicked menu item')
    },
    {
      id: '3',
      icon: <IconMenu />,
      title: 'Menu 3',
      active: false,
      onClick: () => console.log('clicked menu item')
    },
    {
      id: '4',
      icon: <IconMenu />,
      title: 'Menu 4',
      active: false,
      onClick: () => console.log('clicked menu item')
    }
  ]
}
