import { ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';

import './section-styles.css';

export type SectionProps = {} & ParentProps

export const Section = (props: SectionProps) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;

  return (
      <section
          class="section"
          classList={{
            'body-small': display() === 'preview-small',
            'body-medium': display() === 'preview-large',
            'body-large': display() === 'full',
          }}>
        {props.children}
      </section>
  );
};
