import { DisplayVariant } from '~/components/post/Post';
import { Accessor, ParentProps } from 'solid-js';

export type SectionTitleProps = {
  display: Accessor<DisplayVariant>,
} & ParentProps

export const SectionTitle = (props: SectionTitleProps) => {
return (
    <span
      classList={{
        'title-large': props.display() === 'preview-small' || props.display() === 'preview-large',
        'headline-large': props.display() === 'full',
      }}>{props.children}</span>
  );
}
