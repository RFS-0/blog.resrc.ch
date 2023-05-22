import {Component, For} from 'solid-js';
import {DatePublished} from '~/components/post/date-published/DatePublished';
import {Tag} from '~/components/post/tag/Tag';
import './meta-data-styles.css';

export type MetaData = {
    publishedOn: Date,
    tags: string[]
}

export const MetaData: Component<MetaData> = (props) => {
    return (
        <div class='meta-data'>
            <DatePublished
                date={props.publishedOn}
            />
            <For each={props.tags}>
                {(tag) => (
                    <Tag
                        tag={tag}
                    />
                )}
            </For>
        </div>
    );
};
