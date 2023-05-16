import { Component, ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';

export type AbstractProps = {
} & ParentProps

export const Abstract: Component<AbstractProps> = props => {
  const {displaySignal} = usePostContext();
  const [display, ] = displaySignal;
  return (
      <span
          classList={{
            'body-small': display() === 'preview-small',
            'body-large': display() === 'full' || display() === 'preview-large',
          }}>{props.children}</span>
  );
};
