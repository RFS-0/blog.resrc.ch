import { Component, JSX, ParentProps } from 'solid-js';

import './page-styles.css';

export type PageProps = {
  children: JSX.Element;
} & ParentProps

export const Page: Component<PageProps> = (props) => {
  return (
      <main class="page-container">
        <div class={'spacer'}></div>
        <div class={'page'}>
          {props.children}
        </div>
        <div class={'spacer'}></div>
      </main>
  );
};
