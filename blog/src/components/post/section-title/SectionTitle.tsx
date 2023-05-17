import { ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';
import './section-title-styles.css';

export type SectionTitleProps = {} & ParentProps

export const SectionTitle = (props: SectionTitleProps) => {
  const {displaySignal} = usePostContext();
  const [display] = displaySignal;

  return (
      <span
          class={'section-title'}
          classList={{
            'title-small': display() === 'preview-large' || display() === 'preview-small',
            'headline-small': display() === 'full',
          }}>{props.children}</span>
  );
};
