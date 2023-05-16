import { ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';
import './section-title-styles.css';

export type SectionTitleProps = {} & ParentProps

export const SectionTitle = (props: SectionTitleProps) => {
  const {displaySignal} = usePostContext();
  const [display, ] = displaySignal;

  return (
      <span
          class={'section-title'}
          classList={{
            'title-large': display() === 'preview-small' || display() === 'preview-large',
            'headline-large': display() === 'full',
          }}>{props.children}</span>
  );
};
