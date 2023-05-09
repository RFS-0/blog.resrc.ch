import { Accessor, Component, ParentProps } from 'solid-js';
import { DisplayVariant } from '~/components/post/Post';

import './body-styles.css';

export type BodyProps = {
  display: Accessor<DisplayVariant>
} & ParentProps

export const Body: Component<BodyProps> = (props) => {
  return (
      <div
          class={'resrc-body'}
          classList={{
            'resrc-hidden': props.display() === 'preview-small'
          }}
      >
          {props.children}
      </div>
  );
};
