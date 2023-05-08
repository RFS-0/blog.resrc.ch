import { Component, createSignal, JSX } from 'solid-js';
import { FocusRing } from '../focus/FocusRing';
import { createHandlers, createRippleEventEmitter, Ripple } from '../ripple/Ripple';
import './styles/filled-tonal-icon-button-styles.css';

export type FilledTonalLinkIconButtonProps = {
  icon: JSX.Element
  linkHref: string
  linkTarget: string
} & JSX.IntrinsicElements['div']

export const FilledTonalLinkIconButton: Component<FilledTonalLinkIconButtonProps> = (props) => {
  const [focus, setFocus] = createSignal(false)
  const [ripleListen, rippleEmit] = createRippleEventEmitter()

  return (
    <div
      {...createHandlers(rippleEmit)}
      class={`icon-button-shared tonal-icon-button icon-button md3-icon-button--filled-tonal`}
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
        href="https://www.google.ch"
        target="_blank"
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
