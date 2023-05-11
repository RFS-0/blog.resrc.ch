import { createContext, createSignal, ParentProps, Signal } from 'solid-js';
import { DisplayVariant } from '~/components/post/post-types';
import { createContextProvider } from '@solid-primitives/context';

export type PostContextProps = {
  displaySignal?: Signal<DisplayVariant>;
} & ParentProps

export type PostContext = {
  displaySignal: Signal<DisplayVariant>,
}
const PostStateContext = createContext<PostContext>(
    {
      displaySignal: createSignal<DisplayVariant>('preview-small'),
    },
);


const createPostContext = (props: PostContextProps): PostContext => {
  const displaySignal = props.displaySignal || createSignal<DisplayVariant>('preview-small');

  return {
    displaySignal,
  } as PostContext;
}

const createInitialPostContext = (): PostContext => {
  const props = {
    displaySignal: createSignal<DisplayVariant>('preview-small'),
  }
  return createPostContext(props)
}


export const PostContext = createContextProvider<PostContext, PostContextProps>(
    (props) => createPostContext(props),
    createInitialPostContext()
)

export const PostContextProvider = PostContext[0]
export const usePostContext = PostContext[1]

