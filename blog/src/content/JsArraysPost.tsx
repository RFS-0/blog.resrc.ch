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

export type JsArraysPostProps = {
  display?: DisplayVariant;
  onAction?: () => void;
}

export const JsArraysPost: Component<JsArraysPostProps> = (props: JsArraysPostProps) => {
  const navigate = useNavigate();

  return (
      <Post display={props.display || 'full'}>
        <Header
            headline={'Exploring the Limits: What Is the Maximum Size of an Array In  JavaScript?'}
        />
        <MetaData
            publishedOn={new Date(2023, 4, 13)}
            tags={['JavaScript', 'Data Structures', 'Web Development']}
        />
        <Abstract>
          In this blog post, we delve deep into the intricacies of JavaScript arrays and examine the extent of their
          dimensionality. JavaScript arrays are powerful tools, but how far can we push their boundaries? How many
          dimensions can these data structures truly handle? This article will traverse the technical aspects of
          JavaScript arrays, exploring the theoretical and practical limits of their dimensions. We'll also discuss
          how this limit influences the way we write code and manage data, providing key insights for both novice and
          seasoned JavaScript developers.
        </Abstract>
        <Body>
          <SectionTitle>Introduction</SectionTitle>
          <Section>
            Arrays are among the oldest and most important data structures, and are used by almost every program. They
            are also used to implement many other data structures, such as lists and strings. They effectively exploit
            the addressing logic of computers. In most modern computers and many external storage devices, the memory
            is a one-dimensional array of words, whose indices are their addresses. Processors, especially vector
            processors, are often optimized for array operations.
          </Section>
          <SectionTitle>Understanding JavaScript Arrays</SectionTitle>
          <SectionTitle>Theoretical Limits of JavaScript Array Dimensions</SectionTitle>
          <SectionTitle>Practical Limits of JavaScript Array Dimensions</SectionTitle>
          <SectionTitle>Common Uses and Best Practices with Multi-Dimensional Arrays</SectionTitle>
          <SectionTitle>Conclusion</SectionTitle>
          <SectionTitle>References</SectionTitle>
        </Body>
        <Actions
            onAction={() => {
              props.onAction && props.onAction() || navigate('/');
            }}
        />
      </Post>
  );
};
