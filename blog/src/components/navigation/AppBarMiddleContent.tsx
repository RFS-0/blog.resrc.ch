import {Component} from 'solid-js';
import './top-app-bar-middle-content-styles.css';

export type AppBarMiddleContentProps = {}

export const AppBarMiddleContent: Component<AppBarMiddleContentProps> = (_) => {

    return (
        <div class='app-bar-middle-content'>
            <div class='app-bar-middle-content__title blog-title'>
                resrc Blog
            </div>
            <div class='app-bar-middle-content__search'>
            </div>
        </div>
    );
}
