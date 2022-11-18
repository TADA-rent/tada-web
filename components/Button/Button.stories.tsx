import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    url: { defaultValue: '/', control: 'text', type: { name: 'string', required: false } },
    internal: {
      description: 'Should use NextJS Routing',
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
    openInNewWindow: {
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
    forward: {
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
    back: {
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
    className: {
      defaultValue: '',
      control: 'text',
      type: { name: 'string', required: false },
    },
    rounded: {
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary Button',
  size: 'md',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  size: 'md',
}

export const Hollow = Template.bind({})
Hollow.args = {
  label: 'Hollow Button',
  variant: 'hollow',
  size: 'md',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  label: 'Extra Small Button',
  size: 'xs',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small Button',
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Medium Button',
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large Button',
  size: 'lg',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  label: 'Extra Large Button',
  size: 'xl',
}

export const WithForwardArrow = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithForwardArrow.args = {
  label: 'With Forward Arrow Button',
  size: 'md',
  forward: true,
}

export const WithBackArrow = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithBackArrow.args = {
  label: 'With Back Arrow Button',
  size: 'md',
  back: true,
}
