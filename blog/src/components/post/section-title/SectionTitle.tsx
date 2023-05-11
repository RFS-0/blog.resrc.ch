import { ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';

export type SectionTitleProps = {
} & ParentProps

export const SectionTitle = (props: SectionTitleProps) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;

  return (
    <span
      classList={{
        'title-large': display() === 'preview-small' || display() === 'preview-large',
        'headline-large': display() === 'full',
      }}>{props.children}</span>
  );
}
