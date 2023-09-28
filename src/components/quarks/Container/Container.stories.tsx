import React from 'react'

import Container from './Container'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
  component: Container,
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: [
      <div key="1">Container</div>
    ]
  }
}
