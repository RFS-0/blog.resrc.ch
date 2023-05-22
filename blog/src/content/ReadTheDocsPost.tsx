import {useNavigate} from '@solidjs/router';
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

export type ReadTheDocsPostProps = {
    display?: DisplayVariant;
    onAction?: () => void;
}

export const ReadTheDocsPost: Component<ReadTheDocsPostProps> = (props: ReadTheDocsPostProps) => {
    const navigate = useNavigate();

    return (
        <Post display={props.display || 'full'}>
            <Header
                headline={'Read the Docs'}
            />
            <MetaData
                publishedOn={new Date(2023, 4, 23)}
                tags={['Resources', 'Documentation', 'Software Engineering']}
            />
            <Abstract>
                This is just a summary of documentation resource I frequently use.

                It structured by technologies and sorted alphabetically.
            </Abstract>
            <Body>
                <SectionTitle>AsciiDoc</SectionTitle>
                <Section>
                    Asciidoctor is a fast, open source, Ruby-based text processor for parsing AsciiDoc® into a document
                    model and converting it to output formats such as HTML 5, DocBook 5, manual pages, PDF, EPUB 3, and
                    other formats.

                    <Resources
                        resources={[
                            {
                                type: 'link',
                                title: 'Asciidoctor Documentation Site',
                                description:
                                    'Here you can find the reference material, guides, and examples to write content in AsciiDoc and publish it using Asciidoctor.',
                                index: 1,
                                data: {
                                    url: 'https://docs.asciidoctor.org/',
                                },
                            },
                            {
                                type: 'link',
                                title: 'AsciiDoc Syntax Quick Reference',
                                description:
                                    'A short summary of how the most commonly used syntax works.',
                                index: 2,
                                data: {
                                    url: 'https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/',
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
