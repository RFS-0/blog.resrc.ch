import { Component } from 'solid-js';
import { Icon, StandardIconToggleButton } from '~/design-system';
import { usePostContext } from '~/components/post/PostContextProvider';
import './header-styles.css';

export type HeaderProps = {
  title: string
}

export const Header: Component<HeaderProps> = (props) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;

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
