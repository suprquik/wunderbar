import React from 'react'
import Button from '.'
import { commonPropsStoryArgs } from '../../utils/commonProps'

export default {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Wunderbar!',
      default: null,
      control: {
        type: 'text'
      }
    },
    size: {
      name: 'size',
      defaultValue: 'regular',
      default: 'regular',
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    },
    variant: {
      name: 'variant',
      defaultValue: 'filled',
      default: 'filled',
      options: ['filled', 'outline', 'link'],
      control: { type: 'radio' }
    },
    color: {
      name: 'color',
      defaultValue: 'primary',
      default: 'primary',
      options: ['primary', 'white', 'success', 'error', 'warning', 'info'],
      control: { type: 'select' }
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      default: false,
      control: { type: 'boolean' }
    },
    loading: {
      name: 'loading',
      defaultValue: false,
      default: false,
      control: { type: 'boolean' }
    },
    rounded: {
      name: 'rounded',
      defaultValue: false,
      default: false,
      control: { type: 'boolean' }
    },
    width: {
      name: 'width',
      defaultValue: undefined,
      default: undefined,
      control: { type: 'number' }
    },
    height: {
      name: 'height',
      defaultValue: undefined,
      default: undefined,
      control: { type: 'number' }
    },
    onClick: { action: 'clicked' },
    ...commonPropsStoryArgs
  }
} as any

const Template: any = (args: any) => <Button {...args} />

export const button = Template.bind({})

button.args = {
  children: 'Wunderbar!'
}
