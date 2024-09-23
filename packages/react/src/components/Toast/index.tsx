import { X } from '@phosphor-icons/react'
import * as ToastRadix from '@radix-ui/react-toast'
import { ComponentProps, type MouseEventHandler } from 'react'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Text } from '../Text'
import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  eventDate: Date
  actionText?: string
  action?: MouseEventHandler<HTMLButtonElement>
}

export function Toast({
  open,
  onOpenChange,
  title,
  eventDate,
  actionText,
  action,
}: ToastProps) {
  function prettyDate(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short',
    })
      .format(date)
      .replace(/(^|\W)([a-zÀ-ÖØ-öø-ÿ])/g, (_, p1, p2) => {
        if ('àd'.includes(p2)) {
          return p1 + p2
        }

        return p1 + p2.toUpperCase()
      })
  }

  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastRoot open={open} onOpenChange={onOpenChange}>
        <ToastTitle asChild>
          <Heading size="sm">{title}</Heading>
        </ToastTitle>

        <ToastDescription asChild>
          <time dateTime={eventDate.toISOString()}>
            <Text size="sm">{prettyDate(eventDate)}</Text>
          </time>
        </ToastDescription>

        {actionText ? (
          <ToastAction altText={actionText} asChild>
            <Button variant="tertiary" size="sm" onClick={action}>
              {actionText}
            </Button>
          </ToastAction>
        ) : (
          <ToastClose asChild>
            <X size={20} aria-hidden={true} />
          </ToastClose>
        )}
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
