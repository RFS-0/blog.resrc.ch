import { Page } from '~/components/page/Page';
import { TechBlogPost } from '~/content/TechBlogPost';

export default function TechBlogs() {
  return (
      <Page>
        <TechBlogPost display={'full'}/>
      </Page>
  );
}
