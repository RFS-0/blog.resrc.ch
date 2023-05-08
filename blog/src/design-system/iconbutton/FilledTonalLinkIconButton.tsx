import { Component, createSignal, JSX, splitProps } from 'solid-js';
import { FocusRing } from '../focus/FocusRing';
import { createHandlers, createRippleEventEmitter, Ripple } from '../ripple/Ripple';
import './styles/filled-tonal-icon-button-styles.css';
import { composeEventHandlers } from '~/design-system';

export type FilledTonalLinkIconButtonProps = {
  icon: JSX.Element
} & JSX.AnchorHTMLAttributes<HTMLAnchorElement>

export const FilledTonalLinkIconButton: Component<FilledTonalLinkIconButtonProps> = (props) => {
  const [iconButtonProps, linkProps] = splitProps(props, [
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
      <div
          {...rippleHandlers}
          onFocus={composeEventHandlers([linkProps?.onfocus, activateFocus])}
          onBlur={composeEventHandlers([linkProps?.onblur, deactivateFocus])}
          onPointerDown={composeEventHandlers([linkProps?.onPointerDown, deactivateFocus])}
          class={`icon-button-shared tonal-icon-button icon-button icon-button--filled-tonal`}
      >
        <FocusRing visible={focus()}></FocusRing>
        <Ripple listen={listen} unbounded={true}></Ripple>
        <span class="icon-button__touch"></span>
        <span class="icon-button__icon">
        {props.icon}
      </span>
        <a
            {...linkProps}
            class="icon-button__link"
        >
        </a>
      </div>
  );
};
