import {Component, createEffect, createSignal, ParentProps} from 'solid-js';
import {DisplayVariant} from '~/components/post/post-types';
import {PostContextProvider} from '~/components/post/PostContextProvider';
import './post-styles.css';

export type PostProps = {
    display: DisplayVariant;
} & ParentProps

export const Post: Component<PostProps> = (props) => {
    const displaySignal = createSignal<DisplayVariant>(props.display);
    const [display] = displaySignal;
    const [hovered, setHovered] = createSignal(false);

    let post: HTMLDivElement;

    createEffect((skip) => {
        const hasPostElementRef = !!post
        if (display() !== 'full' && hasPostElementRef && !skip) {
            setTimeout(() => {
                post.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start',
                });
            }, 401);
        }
        return false;
    }, true);

    // noinspection JSUnusedAssignment
    return (
        (
            <PostContextProvider displaySignal={displaySignal}>
                <div
                    ref={post!}
                    class={'post-container'}
                    classList={{
                        'large': display() === 'preview-large',
                        'full': display() === 'full',
                        'post-container--hover': hovered(),

                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {props.children}
                </div>
            </PostContextProvider>
        )
    );
};
