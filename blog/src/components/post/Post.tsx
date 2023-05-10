import { Component, createSignal } from 'solid-js';
import { Header } from '~/components/post/Header';

import { Button, Icon } from '~/design-system';
import { MetaData } from '~/components/post/MetaData';
import { Abstract } from '~/components/post/Abstract';
import { SectionTitle } from '~/components/post/SectionTitle';
import { Section } from '~/components/post/Section';
import { Body } from '~/components/post/Body';

import './post-styles.css';

export type DisplayVariant = 'preview-small' | 'preview-large' | 'full';

export type PostProps = {
  display?: DisplayVariant;
}

export const Post: Component<PostProps> = (props) => {
  const displaySignal = createSignal(props?.display || 'preview-small');
  const [display] = displaySignal;

  let post: HTMLDivElement;

  // noinspection JSUnusedAssignment
  return (
      (
          <div
              ref={post!}
              class={'post-container hover:shadow-lg'}
              classList={{
                'large': display() === 'preview-large' || display() === 'full',
              }}
          >
            <Header
                display={displaySignal}
                title={'Lorem Ipsum Dolor Sit Amet'}
            />
            <MetaData
                display={display}
                publishedOn={new Date()}
                tags={['tag 1', 'tag 2', 'tag 3']}
            />
            <Abstract
                display={display}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquet, libero quis aliquam ultricies, diam nisl ultricies
              lorem, quis aliquet nisl nunc eget nunc.
            </Abstract>
            <Body display={display}>
              <SectionTitle display={display}>
                Section 1
              </SectionTitle>
              <Section display={display}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Doneca aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Doneca aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc.
              </Section>
              <SectionTitle display={display}>Section 1</SectionTitle>
              <Section display={display}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Doneca aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Doneca aliquet, libero quis aliquam ultricies, diam nisl ultricies
                lorem, quis aliquet nisl nunc eget nunc.
              </Section>
            </Body>

            <div class={'flex flex-row'}>
              <Button
                  variant={'filled'}
                  labelElement={
                    <span classList={{
                      'label-small': display() === 'preview-small',
                      'label-medium': display() === 'preview-large',
                      'label-large': display() === 'full',
                    }}>Focus</span>
                  }
                  leadingIcon={
                    <Icon>
                      <span class="material-symbols-rounded">
                       menu_book
                      </span>
                    </Icon>
                  }
              />
            </div>
          </div>
      )
  );
};
