import { Component, JSX, ParentProps } from 'solid-js';
import './page-styles.css';

export type PageProps = {
  children: JSX.Element;
} & ParentProps

export const Page: Component<PageProps> = (props) => {
  return (
      <main class="page">
        {props.children}
      </main>
  );
};
