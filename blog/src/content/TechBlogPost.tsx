import {Post} from '~/components/post/Post';
import {Header} from '~/components/post/header/Header';
import {MetaData} from '~/components/post/meta-data/MetaData';
import {Abstract} from '~/components/post/abstract/Abstract';
import {Body} from '~/components/post/body/Body';
import {SectionTitle} from '~/components/post/section-title/SectionTitle';
import {Section} from '~/components/post/section/Section';
import {Actions} from '~/components/post/actions/Actions';
import {Component} from 'solid-js';
import {DisplayVariant} from '~/components/post/post-types';
import {Resources} from '~/components/post/resources/Resources';

export type TechBlogPostProps = {
    display?: DisplayVariant;
    onAction: () => void;
}

export const TechBlogPost: Component<TechBlogPostProps> = (props: TechBlogPostProps) => {
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

                    This collection of resources is an attempt to making more use of my time on the internet by focusing
                    and consuming more high-quality content.

                    This resource collection is divided into different categories, each of
                    which is focused on a different topic.

                    The level of abstraction each of the categories represents does vary.

                    Thus, the content in each of the categories might overlap with some other categories.
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

                <SectionTitle>Web Technologies</SectionTitle>
                <Section>
                    The following resources are focused on domain driven design and related topics:

                    <Resources
                        resources={[
                            {
                                type: 'link',
                                title: 'SolidJS Blog',
                                description:
                                    'Official blog of SolidJS',
                                index: 1,
                                data: {
                                    url: 'https://www.solidjs.com/blog',
                                },
                            },
                            {
                                type: 'link',
                                title: 'Dev.to Account of Ryan Carniato (SolidJS)',
                                description:
                                    'Frontend performance enthusiast and Fine-Grained Reactivity super fan. Author of the SolidJS UI library and MarkoJS Core Team Member.',
                                index: 2,
                                data: {
                                    url: 'https://dev.to/ryansolid',
                                },
                            },
                            {
                                type: 'link',
                                title: 'Angular Blog',
                                description:
                                    'News and Tips from the Angular Team',
                                index: 3,
                                data: {
                                    url: 'https://blog.angular.io',
                                },
                            }
                        ]}
                    />
                </Section>

                <SectionTitle>Application Infrastructure Frameworks</SectionTitle>
                <Section>
                    The following resources are focused on technologies that provide the underlying support structure
                    needed to build and run an application:

                    <Resources
                        resources={[
                            {
                                type: 'link',
                                title: 'Spring Blog',
                                description:
                                    'The Spring.io blog is an online resource that provides updates, tutorials, news, and insights related to the Spring Framework and its ecosystem.',
                                index: 1,
                                data: {
                                    url: 'https://spring.io/blog/',
                                },
                            },
                            {
                                type: 'link',
                                title: 'Quarkus Blog',
                                description:
                                    'The Quarkus.io blog is a curated online resource providing insights, updates, tutorials, and news surrounding the Quarkus project, focusing on creating Kubernetes-native Java applications for cloud environments',
                                index: 2,
                                data: {
                                    url: 'https://quarkus.io/blog/index.html',
                                },
                            }
                        ]}
                    />
                </Section>

                <SectionTitle>Computational Intelligence</SectionTitle>
                <Section>
                    The following resources are focused on technologies that provide insights into the field of
                    computational intelligence:

                    <Resources
                        resources={[
                            {
                                type: 'link',
                                title: 'Wolfram Blog',
                                description:
                                    'News, Views & Insights.',
                                index: 1,
                                data: {
                                    url: 'https://blog.wolfram.com/',
                                },
                            },
                        ]}
                    />
                </Section>
            </Body>
            <Actions
                onAction={props.onAction}
            />
        </Post>
    );
};
