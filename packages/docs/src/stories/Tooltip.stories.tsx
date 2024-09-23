import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@yf-ds-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover para abrir tooltip</Button>,
    message: '26 de Outubro - Disponível',
    side: 'top',
    sideOffset: 4,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
