import { Page } from '~/components/page/Page';
import { Post } from '~/components/post/Post';
import { Header } from '~/components/post/header/Header';
import { Abstract } from '~/components/post/abstract/Abstract';
import { MetaData } from '~/components/post/meta-data/MetaData';
import { Body } from '~/components/post/body/Body';
import { SectionTitle } from '~/components/post/section-title/SectionTitle';
import { Section } from '~/components/post/section/Section';
import { Actions } from '~/components/post/actions/Actions';
import { useNavigate } from '@solidjs/router';

export default function TechBlogs() {
  const navigate = useNavigate();

  return (
      <Page>
        <Post display={'full'}>
          <Header
              title={'Noteworthy Tech Blogs for Programmers'}
          />
          <MetaData
              publishedOn={new Date(2023, 4, 11)}
              tags={['Resources', 'Learning', 'Programming']}
          />
          <Abstract>
            There is a lot of interesting content related to programming being posted every day. This article is a
            collection of some of the most interesting and noteworthy tech blogs for programmers. It is focused on
            technologies I use and topics I am interested in. It will be updated as I discover new blogs.
          </Abstract>
          <Body>
            <SectionTitle>About This Resource Collection</SectionTitle>
            <Section>
              I noticed that the content I on the internet I am consuming is largely determined by a few news
              aggregators aggregate content that is both convenient and entertaining. However, both of these criteria is
              not what actually value the most: Insightful and thought-provoking content that improves my understanding
              of the world and helps me become a better programmer. This collection of resources is an attempt to making
              more use of my time on the internet by focusing and consuming more high-quality content. Nevertheless,
              there still a board spectrum of content which is valuable to me. Thus, this resource collection is divided
              into different categories, each of which is focused on a different topic.
            </Section>
            <SectionTitle>Version Control and Code Collaboration Platforms</SectionTitle>
            <Section>
              <ul class={'list-disc list-inside'}>
                <li>
                  <a href={'https://github.blog/'}>The GitHub Blog</a>
                </li>
              </ul>
            </Section>

            <Actions onAction={() => navigate('/')} />
          </Body>
        </Post>
      </Page>
  );
}
