import { Page } from '~/components/page/Page';
import { useNavigate } from '@solidjs/router';
import { TechBlogPost } from '~/content/TechBlogPost';

export default function Home() {
  const navigate = useNavigate();
  return (
      <Page>
        <TechBlogPost
            display={'preview-small'}
            onAction={() => navigate('/tech-blogs')}
        />
        {/*<JsArraysPost*/}
        {/*    display={'preview-small'}*/}
        {/*    onAction={() => navigate('/js-arrays')}*/}
        {/*/>*/}
      </Page>
  );
}
