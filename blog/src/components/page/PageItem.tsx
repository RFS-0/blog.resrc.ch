import { Component, ParentProps } from 'solid-js';
import './page-item-styles.css';

export type PageItemProps = {
} & ParentProps

export const PageItem: Component<PageItemProps> = (props) => {

  return (
    <div class='page-item'>
      {props.children}
    </div>
  );
}
