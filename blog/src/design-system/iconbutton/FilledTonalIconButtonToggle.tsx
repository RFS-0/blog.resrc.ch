import { Component, createSignal, JSX, Show, splitProps } from 'solid-js';
import { composeEventHandlers, createHandlers, createRippleEventEmitter, FocusRing, Ripple } from '~/design-system';
import './styles/filled-tonal-icon-button-styles.css';

export type FilledTonalIconToggleButtonProps = {
  selected?: boolean
  onIcon: JSX.Element
  offIcon: JSX.Element
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>

export const FilledTonalIconToggleButton: Component<FilledTonalIconToggleButtonProps> = (props) => {
  const [filledTonalIconToggleButtonProps, buttonProps] = splitProps(props, [
    'selected',
    'onIcon',
    'offIcon',
  ]);
  const [focus, setFocus] = createSignal(false);
  const {listen, emit} = createRippleEventEmitter();

  const rippleHandlers = createHandlers(emit);

  const [selected, setSelected] = createSignal(props?.selected || false);

  const activateFocus = () => {
    setFocus(true);
  };

  const deactivateFocus = () => {
    setFocus(false);
  };

  const handleClick = () => {
    setSelected(!selected());
  };

  return (
      <button
          {...buttonProps}
          {...rippleHandlers}
          onClick={composeEventHandlers([buttonProps?.onClick, rippleHandlers.onClick, handleClick])}
          onFocus={composeEventHandlers([buttonProps?.onfocus, activateFocus])}
          onBlur={composeEventHandlers([buttonProps?.onblur, deactivateFocus])}
          onPointerDown={composeEventHandlers([buttonProps?.onPointerDown, deactivateFocus])}
          class={'icon-button-shared tonal-icon-button icon-button icon-button--toggle-filled-tonal'}
          classList={{
            'icon-button--selected': selected(),
          }}
      >
        <FocusRing visible={focus()}></FocusRing>
        <Ripple listen={listen} unbounded={true}></Ripple>
        <span class="icon-button__touch"></span>
        <span class="icon-button__icon">
        <Show when={selected()}
              fallback={filledTonalIconToggleButtonProps.offIcon}
        >
          {filledTonalIconToggleButtonProps.onIcon}
        </Show>
      </span>
      </button>
  );
};
