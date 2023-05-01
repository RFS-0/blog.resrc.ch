import { Component, ParentProps, } from 'solid-js';

export type PageProps = {
} & ParentProps

export const Page: Component<PageProps> = (props) => {
  return (
    <div class='flex flex-row flex-wrap items-center justify-center gap-f10 pt-f11'>
      {props.children}
    </div>
  );
}
