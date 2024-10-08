import { ComponentProps, type ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$6',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as: ElementType
}

Box.displayName = 'Box'
