import { useNavigate } from '@solidjs/router';
import { Post } from '~/components/post/Post';
import { Header } from '~/components/post/header/Header';
import { MetaData } from '~/components/post/meta-data/MetaData';
import { Abstract } from '~/components/post/abstract/Abstract';
import { Body } from '~/components/post/body/Body';
import { SectionTitle } from '~/components/post/section-title/SectionTitle';
import { Section } from '~/components/post/section/Section';
import { Actions } from '~/components/post/actions/Actions';
import { Component } from 'solid-js';
import { DisplayVariant } from '~/components/post/post-types';
import { Resources } from '~/components/post/resources/Resources';

export type TechBlogPostProps = {
  display?: DisplayVariant;
  onAction?: () => void;
}

export const TechBlogPost: Component<TechBlogPostProps> = (props: TechBlogPostProps) => {
  const navigate = useNavigate();

  return (
      <Post display={props.display || 'full'}>
        <Header
            headline={'Noteworthy Tech Blogs for Programmers'}
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
            I noticed that the content I am consuming on the internet is largely determined by a few news
            aggregation services which offer content that is convenient to reach and somewhat entertaining.

            However, neither of these criteria is what actually value the most: Insightful and thought-provoking
            content that improves my understanding of the world and helps me become a better programmer.

            This collection of resources is an attempt to making more use of my time on the internet by focusing and
            consuming more high-quality content. This resource collection is divided into different categories, each of
            which is focused on a different topic.
          </Section>
          <SectionTitle>Development Tools</SectionTitle>
          <Section>
            The following resources are focused on development tools and related topics:

            <Resources
                resources={[
                  {
                    type: 'link',
                    title: 'The GitHub Blog',
                    description:
                        'The GitHub Blog is an insightful and informative platform dedicated to developers and GitHub users worldwide. ' +
                        'It serves as a central hub for news, updates, feature announcements, and deep-dives into new tools and methodologies related to GitHub and the broader software development landscape.',
                    index: 1,
                    data: {
                      url: 'https://github.blog/',
                    },
                  },
                  {
                    type: 'link',
                    title: 'The IntelliJ IDEA Blog',
                    description:
                        'The IntelliJ IDEA Blog is a platform dedicated to the IntelliJ IDEA IDE and related tools. ' +
                        'It serves as a central hub for news, updates, feature announcements, and deep-dives into new tools and methodologies related to IntelliJ IDEA and the broader software development landscape.',
                    index: 2,
                    data: {
                      url: 'https://blog.jetbrains.com/idea/',
                    },
                  },
                ]}
            />
          </Section>
          <SectionTitle>Software Engineering</SectionTitle>
          <Section>
            The following resources are focused on software engineering and related topics:

            <Resources
                resources={[
                  {
                    type: 'link',
                    title: 'martinFowler.com',
                    description: 'martinFowler.com is a platform dedicated to software engineering and related topics.',
                    index: 1,
                    data: {
                      url: 'https://martinfowler.com/',
                    },
                  },
                ]}
            />
          </Section>

          <SectionTitle>Domain Driven Design</SectionTitle>
          <Section>
            The following resources are focused on domain driven design and related topics:

            <Resources
                resources={[
                  {
                    type: 'link',
                    title: '@hgraca',
                    description:
                        'Editor of The Software Architecture Chronicles and The Containerization Chronicles',
                    index: 1,
                    data: {
                      url: 'https://herbertograca.com/',
                    },
                  },
                ]}
            />
          </Section>
        </Body>
        <Actions
            onAction={() => {
              props.onAction && props.onAction() || navigate('/');
            }}
        />
      </Post>
  );
};
