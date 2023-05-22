import {Page} from '~/components/page/Page';
import {useNavigate} from '@solidjs/router';
import {TechBlogPost} from '~/content/TechBlogPost';
import {ApplicationModularizationPost} from '~/content/ApplicationModularizationPost';
import {ReadTheDocsPost} from '~/content/ReadTheDocsPost';

export default function Home() {
    const navigate = useNavigate();
    return (
        <Page>
            {/*<JsArraysPost*/}
            {/*    display={'preview-small'}*/}
            {/*    onAction={() => navigate('/js-arrays')}*/}
            {/*/>*/}

            <ReadTheDocsPost
                display={'preview-small'}
                onAction={() => navigate('/read-the-docs')}
            />
            <ApplicationModularizationPost
                display={'preview-small'}
                onAction={() => navigate('/application-modularization')}
            />
            <TechBlogPost
                display={'preview-small'}
                onAction={() => navigate('/tech-blogs')}
            />
        </Page>
    );
}
