import { Plus } from '@phosphor-icons/react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContainer, TooltipExampleButton } from './styles'

export function TooltipProvider({
  children,
  ...props
}: TooltipRadix.TooltipProviderProps) {
  return <TooltipRadix.Provider {...props}>{children}</TooltipRadix.Provider>
}

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
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
  )
}

Tooltip.displayName = 'Tooltip'
