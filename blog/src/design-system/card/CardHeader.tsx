import { Component, JSX, Show, Signal } from 'solid-js';
import { Icon, StandardIconButton } from '~/design-system';

export type CardHeaderProps = {
  title: string;
  leadingIcon?: JSX.Element;
  size: Signal<'small' | 'large'>;
  contextMenuItems?: JSX.Element;
}

export const CardHeader: Component<CardHeaderProps> = (props) => {

  return (
      <div class="flex flex-row items-center p-f4 sm:p-f5 md:p-f6 lg:p-f7 sm:gap-f5 md:gap-f6 lg:gap-f7">
        <Show when={props.leadingIcon}>
          {props.leadingIcon}
        </Show>
        <div class="flex-auto">
          {props.title}
        </div>
        <div>
          <StandardIconButton
              icon={<Icon><span class="material-symbols-outlined">more_vert</span></Icon>}
          />
        </div>
      </div>
  );
};
