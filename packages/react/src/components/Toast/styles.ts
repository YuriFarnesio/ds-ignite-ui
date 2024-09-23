import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: `translateX(100%)`,
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(100%)`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  bottom: 0,
  right: 0,
  listStyle: 'none',
  outline: 'none',
  gap: '$4',
  zIndex: 10,
  padding: '$8',
  margin: 0,
})

export const ToastRoot = styled(Toast.Root, {
  width: 'fit-content',
  minWidth: 360,
  display: 'grid',
  gridTemplateAreas: '"title action" "description ."',
  gridTemplateColumns: 'auto max-content',
  alignItems: 'center',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  columnGap: '$4',
  rowGap: '$1',
  padding: '$5 $3',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 200ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 200ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',

  p: {
    color: '$gray200',
  },
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const ToastClose = styled(Toast.Close, {
  width: '100%',
  display: 'flex',
  gridArea: 'action',
  color: '$gray200',
  cursor: 'pointer',
})
