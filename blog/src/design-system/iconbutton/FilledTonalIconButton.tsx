import { Component, createSignal, JSX, splitProps } from 'solid-js';
import { composeEventHandlers, createHandlers, createRippleEventEmitter, FocusRing, Ripple } from '~/design-system';
import './styles/filled-tonal-icon-button-styles.css';

export type FilledTonalIconButtonProps = {
  icon?: JSX.Element
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>

export const FilledTonalIconButton: Component<FilledTonalIconButtonProps> = (props) => {
  const [filledTonalIconButtonProps, buttonProps] = splitProps(props, [
    'icon',
  ]);
  const [focus, setFocus] = createSignal(false);
  const {listen, emit} = createRippleEventEmitter();

  const rippleHandlers = createHandlers(emit);

  const activateFocus = () => {
    setFocus(true);
  };

  const deactivateFocus = () => {
    setFocus(false);
  };

  return (
      <button
          {...buttonProps}
          {...rippleHandlers}
          onClick={composeEventHandlers([buttonProps?.onClick, rippleHandlers.onClick])}
          onFocus={composeEventHandlers([buttonProps?.onfocus, activateFocus])}
          onBlur={composeEventHandlers([buttonProps?.onblur, deactivateFocus])}
          onPointerDown={composeEventHandlers([buttonProps?.onPointerDown, deactivateFocus])}
          class={'icon-button-shared tonal-icon-button icon-button'}
      >
        <FocusRing visible={focus()}></FocusRing>
        <Ripple listen={listen} unbounded={true}></Ripple>
        <span class="icon-button__touch"></span>
        <span class="icon-button__icon">
        {filledTonalIconButtonProps.icon}
      </span>
      </button>
  );
};
