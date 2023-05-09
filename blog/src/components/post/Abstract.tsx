import { Accessor, Component, ParentProps } from 'solid-js';
import { DisplayVariant } from '~/components/post/Post';

export type AbstractProps = {
  display: Accessor<DisplayVariant>,
} & ParentProps

export const Abstract: Component<AbstractProps> = props => {
  return (
      <span
          classList={{
            'body-small': props.display() === 'preview-small',
            'body-medium': props.display() === 'preview-large',
            'body-large': props.display() === 'full',
          }}>{props.children}</span>
  );
};
