import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  minHeight: 80,
  backgroundColor: '$gray900',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',
  color: '$white',
  resize: 'vertical',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  padding: '$3 $4',
  transition: 'all 200ms ease-out',

  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
