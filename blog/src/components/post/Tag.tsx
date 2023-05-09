import { Accessor, Component } from 'solid-js';
import { Button, Icon } from '~/design-system';
import { DisplayVariant } from '~/components/post/Post';

export type TagProps = {
  display: Accessor<DisplayVariant>,
  tag: string
}

export const Tag: Component<TagProps> = (props) => {
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
              'label-small': props.display() === 'preview-small',
              'label-medium': props.display() === 'preview-large',
              'label-large': props.display() === 'full',
            }}>
            {props.tag}
            </span>
          }
      />
  );
};
