import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, TooltipProvider } from '@yf-ds-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: 'Exemplo de Tooltip',
    side: 'top',
    sideOffset: 4,
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider delayDuration={700} skipDelayDuration={300}>
          {Story()}
        </TooltipProvider>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        story:
          'Para utilizar o componente de Tooltip é necessário que envolvê-lo com o TooltipProvider, que pode receber algumas propriedades, como descrito na [Documentação oficial do Radix](https://www.radix-ui.com/primitives/docs/components/tooltip). Sugerimos que seja utilizado apenas um TooltipProvider no projeto, para que ocorra a padronização entre todos os Tooltips.',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
