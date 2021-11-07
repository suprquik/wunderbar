import React from 'react'
import ToggleComp from '.'

const ExToggle = ({ ...args }: any) => {
  const [checked, setValueChecked] = React.useState(false)

  React.useEffect(() => {
    setValueChecked(args.checked)
  }, [args.checked])

  return (
    <>
      <ToggleComp
        name='Toggle101'
        {...args}
        checked={checked}
        onChange={(v, name) => {
          setValueChecked(v)
          args.onChange(v, name)
        }}
      />
      <ToggleComp
        name='Toggle102'
        {...args}
        checked={false}
        disabled
        onChange={(v: boolean) => setValueChecked(v)}
      />
    </>
  )
}

export default {
  component: ExToggle,
  title: 'Atoms/Toggle',
  argTypes: {
    id: {
      name: 'id',
      defaultValue: 'sampleID',
      default: 'sampleID',
      control: {
        type: 'text'
      }
    },
    className: {
      name: 'className',
      defaultValue: 'className',
      default: 'className',
      control: {
        type: 'text'
      }
    },
    name: {
      name: 'name',
      defaultValue: 'Wunderbar!',
      default: 'name',
      control: {
        type: 'text'
      }
    },
    error: {
      name: 'error',
      default: false,
      control: {
        type: 'boolean'
      }
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
    style: {
      name: 'style',
      defaultValue: {},
      default: {},
      control: { type: 'object' }
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
      action: 'clicked'
    },
    onFocus: {
      name: 'onFocus',
      action: 'focused'
    },
    onBlur: {
      name: 'onBlur',
      action: 'blurred'
    }
  }
} as any

const Template: any = (args: any) => <ExToggle {...args} />

export const Toggle = Template.bind({})

Toggle.args = {
  checked: true,
  name: 'Germany'
}
