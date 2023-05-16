import { Match, ParentProps, Switch } from 'solid-js';
import { usePostContext } from '~/components/post/PostContextProvider';
import { Button, Icon } from '~/design-system';

export type ActionsProps = {
  onAction?: () => void;
} & ParentProps

export const Actions = (props: ActionsProps) => {
  const {displaySignal} = usePostContext();
  const [display, ] = displaySignal;

  return (
      <div class={'flex flex-row'}>

        <Switch>
          <Match when={display() === 'preview-small' || display() === 'preview-large'}>
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
                onClick={() => props.onAction && props.onAction()}
            />
          </Match>
          <Match when={display() === 'full'}>
            <Button
                variant={'filled'}
                labelElement={
                  <span classList={{
                    'label-small': display() === 'preview-small',
                    'label-medium': display() === 'preview-large',
                    'label-large': display() === 'full',
                  }}>Back</span>
                }
                leadingIcon={
                  <Icon>
                      <span class="material-symbols-rounded">
                       arrow_back
                      </span>
                  </Icon>
                }
                onClick={() => props.onAction && props.onAction()}
            />
          </Match>
        </Switch>
      </div>
  );
};
