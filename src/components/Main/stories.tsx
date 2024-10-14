import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      type: 'string',
      control: { type: 'text' },
      property: 'string'
    },
    description: {
      control: { type: 'text' }
    },
    number: {
      control: { type: 'number' }
    }
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'basic title',
    description: 'basic description'
  }
}
