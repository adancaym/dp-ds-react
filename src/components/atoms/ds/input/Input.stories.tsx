import { type Meta, type StoryObj } from '@storybook/react'
import Input from './Input'

export const meta: Meta = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' }
  }
}

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    value: 'Input',
    onChange: () => {
      console.log('Input')
    }
  }
}

export const WithError: Story = {
  args: {
    value: 'Input',
    error: 'Error',
    onChange: () => {
      console.log('Input')
    }
  }
}

export const WithLabel: Story = {
  args: {
    value: 'Input',
    label: 'Label',
    onChange: () => {
      console.log('Input')
    }
  }
}

export const WithPlaceholder: Story = {
  args: {
    value: 'Input',
    placeholder: 'Placeholder',
    onChange: () => {
      console.log('Input')
    }
  }
}

export const WithDescription: Story = {
  args: {
    value: 'Input',
    description: 'Description',
    onChange: () => {
      console.log('Input')
    }
  }
}
