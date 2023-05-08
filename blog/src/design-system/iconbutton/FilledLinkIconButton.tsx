import { Component, createSignal, JSX } from 'solid-js';
import { FocusRing } from '../focus/FocusRing';
import { createHandlers, createRippleEventEmitter, Ripple } from '../ripple/Ripple';
import './styles/filled-icon-button-styles.css';

export type FilledLinkIconButtonProps = {
  icon: JSX.Element
  href: string
  target: '_blank' | '_parent' | '_self' | '_top'
} & JSX.IntrinsicElements['div']

export const FilledLinkIconButton: Component<FilledLinkIconButtonProps> = (props) => {
  const [focus, setFocus] = createSignal(false)
  const [ripleListen, rippleEmit] = createRippleEventEmitter()

  return (
    <div
      {...createHandlers(rippleEmit)}
      class={`icon-button-shared icon-button-shared icon-button md3-icon-button--filled`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onPointerDown={(ev) => {
        rippleEmit({ type: 'pointerdown', pointerEvent: (ev) });
        setFocus(false)
      }}
    >
      <FocusRing visible={focus()}></FocusRing>
      <Ripple listen={ripleListen} unbounded={true}></Ripple>
      <span class="icon-button__touch"></span>
      <span class="icon-button__icon">
        {props.icon}
      </span>
      <a class="icon-button__link"
        href={props.href}
        target={props.target}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onPointerDown={(ev) => {
          rippleEmit({ type: 'pointerdown', pointerEvent: (ev) });
          setFocus(false)
        }}
      >
      </a>
    </div >
  )
}
