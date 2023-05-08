import { Component, createSignal, JSX } from 'solid-js';
import { FocusRing } from '../focus/FocusRing';
import { createHandlers, createRippleEventEmitter, Ripple } from '../ripple/Ripple';
import './styles/outlined-icon-button-styles.css';

export type OutlinedIconButtonProps = {
  icon?: JSX.Element
} & JSX.IntrinsicElements['button']

export const OutlinedIconButton: Component<OutlinedIconButtonProps> = (props) => {
  const [focus, setFocus] = createSignal(false);
  const {listen, emit} = createRippleEventEmitter();

  return (
      <button
          {...createHandlers(emit)}
          class={'icon-button-shared icon-button icon-button--outlined'}
          classList={{
            'md3-button--disabled': props.disabled,
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onPointerDown={(ev) => {
            emit({type: 'pointerdown', pointerEvent: (ev)});
            setFocus(false);
          }}
      >
        <FocusRing
            visible={focus()}
        />
        <Ripple
            listen={listen}
            unbounded={true}
        />
        <span class="icon-button__touch"></span>
        <span class="icon-button__icon">
        {props?.children} {props.icon}
      </span>
      </button>
  );
};
