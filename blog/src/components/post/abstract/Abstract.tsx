import { Component, ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';
import './abstract-styles.css';

export type AbstractProps = {} & ParentProps

export const Abstract: Component<AbstractProps> = props => {
  const {displaySignal} = usePostContext();
  const [display] = displaySignal;
  return (
      <span
          class="abstract"
          classList={{
            'body-small': display() === 'preview-small',
            'body-large': display() === 'preview-large',
            'title-small': display() === 'full',
          }}>{props.children}</span>
  );
};
