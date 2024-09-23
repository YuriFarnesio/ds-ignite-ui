import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@yf-ds-ignite-ui/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Agendar</Button>

      <Toast open={open} onOpenChange={setOpen} {...props} />
    </>
  )
}

export default {
  title: 'Data display/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    eventDate: new Date(),
  },
  argTypes: {
    open: {
      type: 'boolean',
      control: {
        disable: true,
      },
    },
    onOpenChange: {
      type: 'function',
      control: {
        disable: true,
      },
    },
    title: {
      type: 'string',
    },
    eventDate: {
      control: {
        type: 'date',
      },
    },
    actionText: {
      type: 'string',
    },
    action: {
      type: 'function',
      control: {
        disable: true,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const WithAction: StoryObj<ToastProps> = {
  args: {
    actionText: 'Desfazer',
    action: () => console.log('Desfazer'),
  },
}
