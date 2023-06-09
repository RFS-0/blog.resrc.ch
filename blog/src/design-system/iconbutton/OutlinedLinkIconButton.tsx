import { Component, createSignal, JSX, splitProps } from 'solid-js';
import { composeEventHandlers, createHandlers, createRippleEventEmitter, FocusRing, Ripple } from '~/design-system';

import './styles/outlined-icon-button-styles.css';

export type OutlinedLinkIconButtonProps = {
  icon?: JSX.Element
} & JSX.AnchorHTMLAttributes<HTMLAnchorElement>

export const OutlinedLinkIconButton: Component<OutlinedLinkIconButtonProps> = (props) => {
  const [iconProps, linkProps] = splitProps(props, [
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
          class={`icon-button-shared icon-button icon-button--outlined`}
      >
        <FocusRing visible={focus()}></FocusRing>
        <Ripple listen={listen} unbounded={true}></Ripple>
        <span class="icon-button__touch"></span>
        <span class="icon-button__icon">
        {iconProps.icon}
      </span>
        <a
            {...linkProps}
            class="icon-button__link"
        >
        </a>
      </div>
  );
};
