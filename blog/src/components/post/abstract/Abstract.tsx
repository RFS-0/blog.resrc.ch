import { Component, ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';

export type AbstractProps = {
} & ParentProps

export const Abstract: Component<AbstractProps> = props => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;
  return (
      <span
          classList={{
            'body-small': display() === 'preview-small',
            'body-medium': display() === 'preview-large',
            'body-large': display() === 'full',
          }}>{props.children}</span>
  );
};
