import { Accessor, ParentProps } from 'solid-js';
import { DisplayVariant } from '~/components/post/Post';

export type SectionProps = {
  display: Accessor<DisplayVariant>,
} & ParentProps

export const Section = (props: SectionProps) => {
  return (
    <section classList={{

      'body-medium': props.display() === 'preview-small' || props.display() === 'preview-large',
      'body-large': props.display() === 'full',
    }}>
      {props.children}
    </section>
  );
}
