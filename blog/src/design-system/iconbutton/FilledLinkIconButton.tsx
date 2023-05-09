import { Component, createSignal, JSX, splitProps } from 'solid-js';
import { composeEventHandlers, createHandlers, createRippleEventEmitter, FocusRing, Ripple } from '~/design-system';

import './styles/filled-icon-button-styles.css';

export type FilledLinkIconButtonProps = {
  icon: JSX.Element
} & JSX.AnchorHTMLAttributes<HTMLAnchorElement>

export const FilledLinkIconButton: Component<FilledLinkIconButtonProps> = (props) => {
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
          class={`icon-button-shared icon-button icon-button--filled`}
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
