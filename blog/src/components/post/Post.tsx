import { Component, createSignal } from 'solid-js';
import { Header } from '~/components/post/Header';

export type PostProps = {
  display: 'preview-small' | 'preview-large' | 'full';
}

export const Post: Component<PostProps> = (props) => {
  const display = createSignal(props.display);

  return (
      (
          <div>
            <Header
                display={display}
                title={'Post Title'}
            />
            Post
          </div>
      )
  );
};
