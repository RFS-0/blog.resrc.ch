import { Page } from '~/components/page/Page';
import { Post } from '~/components/post/Post';
import { Header } from '~/components/post/header/Header';
import { Abstract } from '~/components/post/abstract/Abstract';
import { MetaData } from '~/components/post/meta-data/MetaData';
import { Body } from '~/components/post/body/Body';
import { Actions } from '~/components/post/actions/Actions';
import { SectionTitle } from '~/components/post/section-title/SectionTitle';
import { Section } from '~/components/post/section/Section';
import { useNavigate } from '@solidjs/router';

export default function Home() {
  const navigate = useNavigate();
  return (
      <Page>
        {/*<Post>*/}
        {/*  <Header*/}
        {/*      title={'Exploring the Limits: How Many Dimensions Can a JavaScript Array Have?'}*/}
        {/*  />*/}
        {/*  <MetaData*/}
        {/*      publishedOn={new Date(2023, 4, 13)}*/}
        {/*      tags={['JavaScript', 'Data Structures', 'Web Development']}*/}
        {/*  />*/}
        {/*  <Abstract>*/}
        {/*    In this blog post, we delve deep into the intricacies of JavaScript arrays and examine the extent of their*/}
        {/*    dimensionality. JavaScript arrays are powerful tools, but how far can we push their boundaries? How many*/}
        {/*    dimensions can these data structures truly handle? This article will traverse the technical aspects of*/}
        {/*    JavaScript arrays, exploring the theoretical and practical limits of their dimensions. We'll also discuss*/}
        {/*    how this limit influences the way we write code and manage data, providing key insights for both novice and*/}
        {/*    seasoned JavaScript developers. Whether you're a JavaScript enthusiast looking to expand your understanding,*/}
        {/*    a computer science student grappling with data structures, or a seasoned developer interested in the*/}
        {/*    limitations of your tools, this exploration will illuminate a corner of JavaScript that's rarely discussed*/}
        {/*    in depth.*/}
        {/*  </Abstract>*/}
        {/*  <Body>*/}
        {/*    <SectionTitle>Introduction</SectionTitle>*/}
        {/*    <Section>*/}
        {/*      Arrays are among the oldest and most important data structures, and are used by almost every program. They*/}
        {/*      are also used to implement many other data structures, such as lists and strings. They effectively exploit*/}
        {/*      the addressing logic of computers. In most modern computers and many external storage devices, the memory*/}
        {/*      is a one-dimensional array of words, whose indices are their addresses. Processors, especially vector*/}
        {/*      processors, are often optimized for array operations.*/}
        {/*    </Section>*/}
        {/*    <SectionTitle>Understanding JavaScript Arrays</SectionTitle>*/}
        {/*    <SectionTitle>Theoretical Limits of JavaScript Array Dimensions</SectionTitle>*/}
        {/*    <SectionTitle>Practical Limits of JavaScript Array Dimensions</SectionTitle>*/}
        {/*    <SectionTitle>Common Uses and Best Practices with Multi-Dimensional Arrays</SectionTitle>*/}
        {/*    <SectionTitle>Conclusion</SectionTitle>*/}
        {/*    <SectionTitle>References</SectionTitle>*/}
        {/*  </Body>*/}
        {/*  <Actions/>*/}
        {/*</Post>*/}
        <Post>
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
          </Body>
          <Actions onAction={() => navigate('tech-blogs')}/>
        </Post>
      </Page>
  );
}
