import { Page } from '~/components/page/Page';
import { PageItem } from '~/components/page/PageItem';
import { Post } from '~/components/post/Post';

export default function Home() {
  return (
      <main >
        <Page>
          <PageItem>
            <Post display={'preview-small'} />
          </PageItem>
          <PageItem>
            <Post display={'preview-small'} />
          </PageItem>
          <PageItem >
            <Post display={'preview-large'} />
          </PageItem>
          <PageItem>
            <Post display={'full'} />
          </PageItem>
        </Page>
      </main>

  );
}
