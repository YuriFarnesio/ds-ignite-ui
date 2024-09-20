import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  padding: '$3 $4',
  transition: 'all 200ms ease-out',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: 'regular',
  color: '$gray400',
})

export const Input = styled('input', {
  width: '100%',
  background: 'transparent',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: 'regular',
  color: '$white',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
