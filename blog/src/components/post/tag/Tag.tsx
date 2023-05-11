import { Component } from 'solid-js';
import { Button, Icon } from '~/design-system';
import { usePostContext } from '~/components/post/PostContextProvider';

export type TagProps = {
  tag: string
}

export const Tag: Component<TagProps> = (props) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;
  const filterPostByTag = (tag: string) => {
    console.log('filtering posts by tag: ', tag);
  };

  return (
      <Button
          variant="text"
          onClick={() => filterPostByTag(props.tag)}
          leadingIcon={
            <Icon>
              <span class="material-symbols-rounded">
                tag
              </span>
            </Icon>
          }
          labelElement={
            <span classList={{
              'label-small': display() === 'preview-small',
              'label-medium': display() === 'preview-large',
              'label-large': display() === 'full',
            }}>
            {props.tag}
            </span>
          }
      />
  );
};
