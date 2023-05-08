import { Component, Signal } from 'solid-js';
import { Icon, StandardIconButton } from '~/design-system';

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
      <div class="flex flex-row items-center p-f4 sm:p-f5 md:p-f6 lg:p-f7 sm:gap-f5 md:gap-f6 lg:gap-f7">
        <Icon>
        </Icon>
        <div
            class="flex-auto"
            classList={{
              'title-large': display() === 'preview-small',
              'display-large': display() === 'preview-large',
              'display-medium': display() === 'full',
            }}
        >
          {props.title}
        </div>
        <div>
          <StandardIconButton
              color="primary"
              onClick={switchDisplay}
              icon={<Icon><span class="material-symbols-outlined">zoom_in</span></Icon>}
          ></StandardIconButton>
        </div>
      </div>
  );
};
