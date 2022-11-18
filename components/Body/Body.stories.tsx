import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Body } from './Body'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Body',
  component: Body,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Body>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ad consequatur, quo assumenda dicta, doloremque cum molestiae distinctio itaque nesciunt laudantium alias totam dolor commodi id vero magnam autem laboriosam?',
}
