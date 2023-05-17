import { Component, createEffect, createSignal, ParentProps } from 'solid-js';

import './post-styles.css';
import { DisplayVariant } from '~/components/post/post-types';
import { PostContextProvider } from '~/components/post/PostContextProvider';

export type PostProps = {
  display?: DisplayVariant;
} & ParentProps

export const Post: Component<PostProps> = (props) => {
  const displaySignal = createSignal<DisplayVariant>(props.display || 'preview-small');
  const [display] = displaySignal;
  const [hovered, setHovered] = createSignal(false);

  let post: HTMLDivElement;

  createEffect(() => {
    if (!!post && display() !== 'full') {
      setTimeout(() => {
        post.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        })
      }, 401)
    }
  });

  // noinspection JSUnusedAssignment
  return (
      (
          <PostContextProvider displaySignal={displaySignal}>
            <div
                ref={post!}
                class={'post-container'}
                classList={{
                  'large': display() === 'preview-large' || display() === 'full',
                  'post-container--hover': hovered(),

                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
              {props.children}
            </div>
          </PostContextProvider>
      )
  );
};
