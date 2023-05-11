import { ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';

export type SectionProps = {
} & ParentProps

export const Section = (props: SectionProps) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;

  return (
    <section classList={{

      'body-medium': display() === 'preview-small' || display() === 'preview-large',
      'body-large': display() === 'full',
    }}>
      {props.children}
    </section>
  );
}
