import { Component, JSX } from 'solid-js';
import './top-app-bar-styles.css';

export type TopAppBarProps = {
  start?: JSX.Element;
  middle?: JSX.Element;
  end?: JSX.Element;
}

export const TopAppBar: Component<TopAppBarProps> = (props) =>
    (
        <header class="top-app-bar">
          <div class="top-app-bar__left">
            {props.start}
          </div>
          <div class="top-app-bar__middle">
            {props.middle}
          </div>
          <div class="top-app-bar__right">
            {props.end}
          </div>
        </header>
    );
