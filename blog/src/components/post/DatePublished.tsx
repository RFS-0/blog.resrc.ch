import { Accessor, Component } from 'solid-js';
import { Button, Icon } from '~/design-system';
import { DisplayVariant } from '~/components/post/Post';

export type DatePublishedProps = {
  display: Accessor<DisplayVariant>,
  date: Date
}

export const DatePublished: Component<DatePublishedProps> = (props) => {
  const filterPostByDate = (date: Date) => {
    console.log('filtering posts by date', date);
  };

  return (
      <Button
          variant="text"
          onClick={() => filterPostByDate(props.date)}
          leadingIcon={
            <Icon>
              <span class="material-symbols-rounded">
                date_range
              </span>
            </Icon>
          }
          labelElement={
            <span classList={{
              'label-small': props.display() === 'preview-small',
              'label-medium': props.display() === 'preview-large',
              'label-large': props.display() === 'full',
            }}>
            {props.date.toLocaleDateString()}
            </span>
          }
      />
  );
};
