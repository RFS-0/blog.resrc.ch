import {FlowComponent} from 'solid-js';
import {usePostContext} from '~/components/post/PostContextProvider';
import './abstract-styles.css';

export type AbstractProps = {}

export const Abstract: FlowComponent<AbstractProps, string> = props => {
    const {displaySignal} = usePostContext();
    const [display] = displaySignal;

    console.log(props.children)

    const firstSentence = props.children.split('.')[0]

    return (
        <span
            class="abstract"
            classList={{
                'body-small': display() === 'preview-small',
                'body-large': display() === 'preview-large',
                'title-small': display() === 'full',
            }}>
            {display() === 'preview-small' ? firstSentence + '.' : props.children}
      </span>
    );
};
