import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps, type ReactNode } from 'react'
import { TooltipArrow, TooltipContainer } from './styles'

export function TooltipProvider({
  children,
  ...props
}: TooltipRadix.TooltipProviderProps) {
  return <TooltipRadix.Provider {...props}>{children}</TooltipRadix.Provider>
}

export function TooltipTrigger({
  children,
  ...props
}: TooltipRadix.TooltipTriggerProps) {
  return (
    <TooltipRadix.Trigger asChild {...props}>
      {children}
    </TooltipRadix.Trigger>
  )
}

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  trigger: ReactNode
}

export function Tooltip({ children, trigger, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Root>
      {trigger}

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
