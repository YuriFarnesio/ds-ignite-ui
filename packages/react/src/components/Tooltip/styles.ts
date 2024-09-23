import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$short',
  color: '$gray100',
  borderRadius: '$xs',
  userSelect: 'none',
  padding: '$3 $4',
  animationDuration: '200ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideDownAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animation: `${slideLeftAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animation: `${slideUpAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animation: `${slideRightAndFade} 200ms ease-out`,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export const TooltipExampleButton = styled('button', {
  all: 'unset',
  width: '$10',
  height: '$10',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray100',
  fontSize: '$lg',
  color: '$gray900',
  borderRadius: '$full',
  userSelect: 'none',

  '&:hover': {
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
