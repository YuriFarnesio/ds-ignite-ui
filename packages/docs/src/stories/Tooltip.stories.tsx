import type { Meta, StoryObj } from '@storybook/react'
import {
  Tooltip,
  TooltipProps,
  TooltipProvider,
  TooltipTrigger,
} from '@yf-ds-ignite-ui/react'
import { colors, fonts, fontSizes, radii, space } from '@yf-ds-ignite-ui/tokens'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: 'Exemplo de Tooltip',
    side: 'top',
    sideOffset: 4,
    trigger: (
      <TooltipTrigger>
        <div
          style={{
            width: 'fit-content',
            fontFamily: fonts.default,
            fontSize: fontSizes.md,
            color: colors.white,
            backgroundColor: colors.ignite700,
            borderRadius: radii.md,
            userSelect: 'none',
            padding: space[4],
          }}
        >
          Coloque o mouse aqui.
        </div>
      </TooltipTrigger>
    ),
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    trigger: {
      control: {
        disable: true,
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
          'Para utilizar o componente de Tooltip é necessário que envolvê-lo com o `TooltipProvider`, que pode receber algumas propriedades, como descrito na [Documentação oficial do Radix](https://www.radix-ui.com/primitives/docs/components/tooltip). Sugerimos que seja utilizado apenas um `TooltipProvider` no projeto, para que ocorra a padronização entre todos os Tooltips.<br /><br />Além disso, é necessário que seja utilizado um componente acionador do Tooltip, para isso devemos utilizar o componente `TooltipTrigger`, sendo passado através do parâmetro `trigger`.',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
