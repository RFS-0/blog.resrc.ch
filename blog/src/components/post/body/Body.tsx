import { Component, ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';
import './body-styles.css';

export type BodyProps = {
} & ParentProps

export const Body: Component<BodyProps> = (props) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;
  return (
      <div
          class={'resrc-body'}
          classList={{
            'resrc-hidden': display() === 'preview-small'
          }}
      >
          {props.children}
      </div>
  );
};
