import { Accessor, Component } from 'solid-js';
import { DatePublished } from '~/components/post/DatePublished';
import { Tag } from '~/components/post/Tag';
import { DisplayVariant } from '~/components/post/Post';

export type MetaDataProps = {
  display: Accessor<DisplayVariant>,
  publishedOn: Date,
  tags: string[]
}

export const MetaData: Component<MetaDataProps> = props => {
  return (
      <div>
        <div id={'post-meta-data'} class={'flex flex-row flex-wrap gap-f4'}>
          <DatePublished
              display={props.display}
              date={new Date()}
          />
          <Tag
              display={props.display}
              tag={'tag 1'}
          />
          <Tag
              display={props.display}
              tag={'tag 2'}
          />
          <Tag
              display={props.display}
              tag={'tag 3'}
          />
        </div>
      </div>
  );
};
