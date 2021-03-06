import React from 'react'
import ToggleItemComp from '.'
import SettingsIcon from '../../atoms/Icons/settings'
import { commonPropsStoryArgs } from '../../utils/commonProps'

const ExToggleItem = ({ ...args }: any) => {
  const [checked, setValueChecked] = React.useState(false)

  React.useEffect(() => {
    setValueChecked(args.checked)
  }, [args.checked])

  return (
    <>
      <ToggleItemComp
        name='Toggle101'
        {...args}
        checked={checked}
        onChange={(v, name) => {
          setValueChecked(v)
          args.onChange(v, name)
        }}
        style={{ width: '600px' }}
      />
      <ToggleItemComp
        name='Toggle102'
        {...args}
        checked={false}
        disabled
        style={{ width: '600px' }}
      />
    </>
  )
}

export default {
  component: ExToggleItem,
  title: 'Molecules/ToggleItem',
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'sample label',
      default: 'sample label',
      control: {
        type: 'text'
      }
    },
    helpText: {
      name: 'helpText',
      defaultValue: 'sample helpText',
      default: 'sample helpText',
      control: {
        type: 'text'
      }
    },
    error: {
      name: 'error',
      defaultValue: undefined,
      default: undefined,
      control: {
        type: 'text'
      }
    },
    separator: {
      name: 'separator',
      defaultValue: false,
      default: false,
      control: {
        type: 'boolean'
      }
    },
    Icon: {
      name: 'Icon',
      defaultValue: {},
      default: {},
      control: { type: 'object' }
    },
    checked: {
      name: 'checked',
      type: { required: true },
      defaultValue: true,
      default: true,
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      default: false,
      control: {
        type: 'boolean'
      }
    },
    trueIcon: {
      name: 'trueIcon',
      defaultValue: {},
      default: {},
      control: { type: 'object' }
    },
    falseIcon: {
      name: 'falseIcon',
      defaultValue: {},
      default: {},
      control: { type: 'object' }
    },
    onChange: {
      name: 'onChange',
      action: 'changed'
    },
    onFocus: {
      name: 'onFocus',
      action: 'focused'
    },
    onBlur: {
      name: 'onBlur',
      action: 'blurred'
    },
    ...commonPropsStoryArgs
  }
} as any

const Template: any = (args: any) => <ExToggleItem {...args} />

export const ToggleItem = Template.bind({})

ToggleItem.args = {
  label: 'Want to go to the Autobahn?',
  helpText: `Trust me it's fun!`,
  checked: false,
  Icon: SettingsIcon
}
