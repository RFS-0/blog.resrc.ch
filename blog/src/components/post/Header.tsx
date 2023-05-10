import { Component, Signal } from 'solid-js';
import { Icon, StandardIconToggleButton } from '~/design-system';

import './header-styles.css';

export type HeaderProps = {
  display: Signal<'preview-small' | 'preview-large' | 'full'>;
  title: string
}

export const Header: Component<HeaderProps> = (props) => {
  const [display, setDisplay] = props.display;

  const switchDisplay = () => {
    switch (display()) {
      case 'preview-small':
        setDisplay('preview-large');
        break;
      case 'preview-large':
        setDisplay('preview-small');
        break;
      case 'full':
      default:
        break;
    }
  };

  return (
      <div class="header">
        <div
            class="header__title"
            classList={{
              'title-large': display() === 'preview-small',
              'display-medium': display() === 'preview-large',
              'display-large': display() === 'full',
            }}
        >
          {props.title}
        </div>
        <div class={'header__menu'}>
          <StandardIconToggleButton
              onClick={switchDisplay}
              offIcon={<Icon><span class="material-symbols-outlined">zoom_in</span></Icon>}
              onIcon={<Icon><span class="material-symbols-outlined">zoom_out</span></Icon>}
          ></StandardIconToggleButton>
        </div>
      </div>
  );
};
