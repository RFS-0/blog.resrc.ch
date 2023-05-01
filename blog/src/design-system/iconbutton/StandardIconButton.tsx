import { Component, createSignal, JSX, Show } from "solid-js"
import { FocusRing } from "../focus/FocusRing"
import { createHandlers, createRippleEventEmitter, Ripple } from "../ripple/Ripple"
import './styles/standard-styles.css'

export type StandardIconButtonProps = {
  icon?: JSX.Element
  onClick?: (ev: MouseEvent) => void
} & JSX.IntrinsicElements['button']

export const StandardIconButton: Component<StandardIconButtonProps> = (props) => {
  const [focus, setFocus] = createSignal(false)
  const { listen, emit } = createRippleEventEmitter()


  const handleClick = (e: MouseEvent) => {
    emit({ type: 'click', pointerEvent: (e) });
    props.onClick && props.onClick(e)
  }

  return (
    <button
      {...props}
      {...createHandlers(emit)}
      class={`base-icon-button md3-icon-button md3-icon-button--standard ${props.disabled ? 'md3-button--disabled' : ''}`}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onPointerDown={(ev) => {
        emit({ type: 'pointerdown', pointerEvent: (ev) });
        setFocus(false)
      }}
      onClick={handleClick}
    >
      <FocusRing visible={focus()}></FocusRing>
      <Ripple
        listen={listen}
        unbounded={true} />
      <span class="md3-icon-button__touch"></span>
      <span class="md3-icon-button__icon">
        {props.icon}
      </span>
    </button>
  )
}
