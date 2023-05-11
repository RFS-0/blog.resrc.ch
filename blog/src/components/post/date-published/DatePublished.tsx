import { Component } from 'solid-js';
import { Button, Icon } from '~/design-system';
import { usePostContext } from '~/components/post/PostContextProvider';

export type DatePublishedProps = {
  date: Date
}

export const DatePublished: Component<DatePublishedProps> = (props) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;
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
              'label-small': display() === 'preview-small',
              'label-medium': display() === 'preview-large',
              'label-large': display() === 'full',
            }}>
            {props.date.toLocaleDateString()}
            </span>
          }
      />
  );
};
