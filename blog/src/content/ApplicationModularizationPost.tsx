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

import './application-modularization-styles.css'

export type ApplicationModularizationPostProps = {
    display?: DisplayVariant;
    onAction?: () => void;
}

export const ApplicationModularizationPost: Component<ApplicationModularizationPostProps> = (props) => {
    const navigate = useNavigate();

    return (
        <Post display={props.display || 'full'}>
            <Header
                headline={'Application Modularization Guided by Ports & Adapters and DDD'}
            />
            <MetaData
                publishedOn={new Date(2023, 4, 19)}
                tags={['Modularization', 'Software Architecture', 'Programming',]}
            />
            <Abstract>
                In this article, I delve into my preferred method for application modularization, a powerful approach
                deeply rooted in the principles of the Ports & Adapters architecture and Domain-Driven Design (DDD).

                This methodology, which I learned through studying a project of a colleague, has greatly enhanced the
                way I structure my applications.

                I'll provide a comprehensive exploration of its design, discussing how and
                why it excels as an effective strategy for robust, adaptable modularization.
            </Abstract>
            <Body>
                <SectionTitle>
                    Deciphering the Modularization Diagram: An Overview of Components and Interactions
                </SectionTitle>

                <Section>

                    <p>
                        The following diagram illustrates how I modularize my applications:
                    </p>

                    <img class={'diagram'}
                         src={'images/application-modularization.svg'}
                         alt={'Diagram of my modularization structure'}/>

                    <p>
                        The diagram leaves out some details to improve readability. Namely:
                    </p>

                    <ol class={'resrc-list'}>
                        <li>
                            Higher modules must not depend on lower modules in the graphic, e.g. common-config must not
                            depend on capabilities or any other lower module, capabilities must not depend on domain and
                            lower and so on
                        </li>
                    </ol>

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
