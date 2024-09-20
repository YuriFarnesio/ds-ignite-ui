import { Plus } from '@phosphor-icons/react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContainer, TooltipExampleButton } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipContainer>,
    Pick<
      TooltipRadix.TooltipProviderProps,
      'delayDuration' | 'skipDelayDuration'
    > {}

export function Tooltip({
  children,
  delayDuration,
  skipDelayDuration,
  ...props
}: TooltipProps) {
  return (
    <TooltipRadix.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <TooltipExampleButton>
            <Plus />
          </TooltipExampleButton>
        </TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipContainer {...props}>
            {children}
            <TooltipArrow />
          </TooltipContainer>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
