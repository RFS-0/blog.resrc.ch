import { children, createEffect, JSX, onMount, ParentProps, splitProps } from 'solid-js';
import './styles/list-styles.css'
import { ListItemProps } from '~/design-system';

export type ListProps = {
  type?: 'list' | 'menu';
  ariaLabel?: string;
  listTabIndex?: number;
} & JSX.InputHTMLAttributes<HTMLUListElement> & ParentProps;

export const List = (props: ListProps) => {
  const [, listProps] = splitProps(props, [
    'type',
    'ariaLabel',
    'listTabIndex',
    'children',
  ])

  let listTabIndex = props.listTabIndex || 0;

  let listRoot: HTMLUListElement | null = null
  const items = children(() => props.children);
  const evaluatedItems = () => items.toArray() as unknown as ListItemProps[]

  createEffect(() => {
    console.log('evaluatedItems', evaluatedItems())
  })

  return (
    <ul
      {...listProps}
      ref={listRoot!}
      class={'list'}
      tabindex={listTabIndex}
      aria-label={props?.ariaLabel || ''}
      role={props?.type || undefined}
    >
      {props?.children}
      <div class="md3-elevation-overlay"></div>
    </ul>
  )
}
