import { Component, createSignal, JSX, Show } from 'solid-js';
import { FocusRing } from '../focus/FocusRing';
import { createHandlers, createRippleEventEmitter, Ripple } from '../ripple/Ripple';
import './styles/standard-icon-button-styles.css';

export type OutlinedIconToggleButtonProps = {
  selected?: boolean
  onIcon?: JSX.Element
  offIcon?: JSX.Element
} & JSX.IntrinsicElements['button']

export const OutlinedIconToggleButton: Component<OutlinedIconToggleButtonProps> = (props) => {
  const [focus, setFocus] = createSignal(false)
  const [ripleListen, rippleEmit] = createRippleEventEmitter()

  const [selected, setSelected] = createSignal(props?.selected || false)

  return (
    <button
      {...createHandlers(rippleEmit)}
      class={`icon-button-shared icon-button icon-button--outlined ${props.disabled ? 'md3-button--disabled' : ''}`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onPointerDown={(e) => {
        rippleEmit({ type: 'pointerdown', pointerEvent: (e) });
        setFocus(false)
      }}
      onClick={(e) => {
        rippleEmit({ type: 'click', pointerEvent: (e) });
        setSelected(!selected())
      }}
    >
      <FocusRing visible={focus()}></FocusRing>
      <Ripple listen={ripleListen} unbounded={true}></Ripple>
      <span class="icon-button__touch"></span>
      <span class="icon-button__icon">
        <Show when={selected()} fallback={props.offIcon}>
          {props.onIcon}
        </Show>
      </span>
    </button>
  )
}
