import { Component, createSignal } from 'solid-js';
import { Header } from '~/components/post/Header';

import './post-styles.css';

export type PostProps = {
  display: 'preview-small' | 'preview-large' | 'full';
}

export const Post: Component<PostProps> = (props) => {
  const displaySignal = createSignal(props.display);
  const [display, setDisplay] = displaySignal;

  let post: HTMLDivElement;

  return (
      (
          <div
              ref={post!}
              class={'post'}
              classList={{
                'large': display() === 'preview-large' || display() === 'full',
              }}
          >
            <Header
                post={post!}
                display={displaySignal}
                title={'Post Title'}
            />
          </div>
      )
  );
};
