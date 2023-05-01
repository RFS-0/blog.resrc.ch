import { JSX, ParentProps, Show, splitProps } from 'solid-js';
import { FocusRing } from '../../focus/FocusRing';
import { createHandlers, createRippleEventEmitter, Ripple } from '../../ripple/Ripple';
import    './styles/base-styles.css';

export type ListItemProps = {
  active?: boolean;
  disabled?: boolean;
  itemId?: string
  tabIndex?: number
  headline?: string
  supportingText?: string
  multiLineSupportingText?: string
  trailingSupportingText?: string
  start?: JSX.Element
  end?: JSX.Element
  role?: 'listitem' | 'menuitem'

  ariaSelected?: 'true' | 'false'
  ariaChecked?: 'true' | 'false'
} & JSX.InputHTMLAttributes<HTMLUListElement> & ParentProps

export const ListItem = (props: ListItemProps) => {
  const [, listItemProps] = splitProps(props, [
    'active',
    'disabled',
    'itemId',
    'tabIndex',
    'headline',
    'supportingText',
    'multiLineSupportingText',
    'trailingSupportingText',
    'start',
    'end',
    'role',
    'children',
  ]);

  const {listen, emit} = createRippleEventEmitter();

  const numberOfLines = () => {
    if (props.multiLineSupportingText) return 3;
    if (props.supportingText) return 2;
    else return 1;
  };

  const handleClick = (e: MouseEvent) => {
    emit({type: 'click', pointerEvent: (e)});
    props.onClick && props.onClick(e);
  };

  return (
      <li
          {...createHandlers(emit)}
          onClick={handleClick}
          id={props.itemId || undefined}
          class={
            `
        base-list-item
        md3-list-item
        ${numberOfLines() === 1 ? 'md3-list-item--with-one-line' : ''}
        ${numberOfLines() === 2 ? 'md3-list-item--with-two-line' : ''}
        ${numberOfLines() === 3 ? 'md3-list-item--with-three-line' : ''}
        ${props?.disabled ? 'md3-list-item--disabled' : ''}
        ${!props?.disabled ? 'md3-list-item--enabled' : ''}
        `
          }
          tabindex={props?.tabIndex || -1}
          role={props?.role || 'listitem'}
          aria-selected={props?.ariaSelected || undefined}
          aria-checked={props?.ariaChecked || undefined}
      >
        <div class="md3-list-item__start">
          {props?.start}
        </div>
        <div class="md3-list-item__body">
        <span class="md3-list-item__label-text">
          {props?.headline}
        </span>
          <Show
              when={!!props.multiLineSupportingText}
              fallback={
                <span class="md3-list-item__supporting-text">
              {props.supportingText}
            </span>
              }
          >
          <span class="md3-list-item__supporting-text md3-list-item__supporting-text--multi-line">
            {props.multiLineSupportingText}
          </span>
          </Show>
        </div>
        <div class="md3-list-item__end">
          {props?.end}
          <span class="md3-list-item__trailing-supporting-text">
          {props?.trailingSupportingText}
        </span>
        </div>
        <div class="md3-list-item__ripple">
          <Ripple
              listen={listen}
          >
          </Ripple>
        </div>
        <div class="md3-list-item__focus-ring">
          <FocusRing visible={false}></FocusRing>
        </div>
      </li>
  );
};
