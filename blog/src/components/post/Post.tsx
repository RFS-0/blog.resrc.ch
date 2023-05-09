import { Component, createSignal, Show } from 'solid-js';
import { Header } from '~/components/post/Header';

import './post-styles.css';
import { Button, Icon } from '~/design-system';
import { MetaData } from '~/components/post/MetaData';
import { Abstract } from '~/components/post/Abstract';
import { SectionTitle } from '~/components/post/SectionTitle';
import { Section } from '~/components/post/Section';

export type DisplayVariant = 'preview-small' | 'preview-large' | 'full';

export type PostProps = {
  display: DisplayVariant;
}

export const Post: Component<PostProps> = (props) => {
  const displaySignal = createSignal(props.display);
  const [display, ] = displaySignal;

  let post: HTMLDivElement;

  // noinspection JSUnusedAssignment
  return (
      (
          <div
              ref={post!}
              class={'post-container'}
              classList={{
                'large': display() === 'preview-large' || display() === 'full',
              }}
          >
            <Header
                post={post!}
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
            <Show when={display() === 'preview-large' || display() === 'full'}>
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
            </Show>
            <div class={'flex flex-row'}>
              <Button
                  variant={'filled'}
                  label={'Focus'}
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
