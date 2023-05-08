import { Component, Signal } from 'solid-js';
import { Icon, StandardIconToggleButton } from '~/design-system';

export type HeaderProps = {
  post: HTMLDivElement | undefined;
  display: Signal<'preview-small' | 'preview-large' | 'full'>;
  title: string
}

export const Header: Component<HeaderProps> = (props) => {
  const post = props.post;
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
    if (post) {
      setTimeout(() => {
        const yPositionRelativeToViewport = post.getBoundingClientRect().y;
        const scroll = yPositionRelativeToViewport > 0 ? yPositionRelativeToViewport - 34 : yPositionRelativeToViewport + 34;
        window.scroll({
              top: scroll,
              behavior: 'smooth',
            },
        );
      }, 300);
    }
  };

  return (
      <div class="flex flex-row items-center p-f4 sm:p-f5 md:p-f6 lg:p-f7 sm:gap-f5 md:gap-f6 lg:gap-f7">
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
          <StandardIconToggleButton
              onClick={switchDisplay}
              offIcon={<Icon><span class="material-symbols-outlined">zoom_in</span></Icon>}
              onIcon={<Icon><span class="material-symbols-outlined">zoom_out</span></Icon>}
          ></StandardIconToggleButton>
        </div>
      </div>
  );
};
