import { ParentProps } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';
import { Button, Icon } from '~/design-system';

export type ActionsProps = {

} & ParentProps

export const Actions = (props: ActionsProps) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;

  return (
      <div class={'flex flex-row'}>
        <Button
            variant={'filled'}
            labelElement={
              <span classList={{
                'label-small': display() === 'preview-small',
                'label-medium': display() === 'preview-large',
                'label-large': display() === 'full',
              }}>Focus</span>
            }
            leadingIcon={
              <Icon>
                      <span class="material-symbols-rounded">
                       menu_book
                      </span>
              </Icon>
            }
        />
      </div>
  );
}
