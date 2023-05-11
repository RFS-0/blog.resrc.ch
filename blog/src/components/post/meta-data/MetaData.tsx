import { Component, For } from 'solid-js';
import { DatePublished } from '~/components/post/date-published/DatePublished';
import { Tag } from '~/components/post/tag/Tag';
import { usePostContext } from '~/components/post/PostContextProvider';

export type MetaData = {
  publishedOn: Date,
  tags: string[]
}

export const MetaData: Component<MetaData> = (props) => {
  const {displaySignal} = usePostContext();
  const [display, setDisplay] = displaySignal;

  return (
      <div>
        <div id={'post-meta-data'} class={'flex flex-row flex-wrap gap-f4'}>
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
      </div>
  );
};
