import { Page } from '~/components/page/Page';
import { Post } from '~/components/post/Post';

export default function Home() {
  return (
      <Page>
        <Post display={'preview-small'}/>
        <Post display={'preview-small'}/>
        <Post display={'preview-small'}/>
        <Post display={'preview-small'}/>
        <Post display={'preview-small'}/>
      </Page>

  );
}
