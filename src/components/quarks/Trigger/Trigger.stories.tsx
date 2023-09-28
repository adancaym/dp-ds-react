import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'

import Trigger from './Trigger'

export const meta: Meta = {
  component: Trigger,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

type Story = StoryObj<typeof Trigger>

export const Default: Story = {
  args: {
    children: [
      <div key="1">Trigger</div>
    ],
    onClick: () => {
      console.log('Trigger')
    }
  }
}
