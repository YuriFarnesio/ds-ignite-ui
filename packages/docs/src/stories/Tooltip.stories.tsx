import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@yf-ds-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: 'Exemplo de Tooltip',
    side: 'top',
    sideOffset: 4,
    delayDuration: 700,
    skipDelayDuration: 300,
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    delayDuration: {
      control: {
        type: 'number',
      },
    },
    skipDelayDuration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
