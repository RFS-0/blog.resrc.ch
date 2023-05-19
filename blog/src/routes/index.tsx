import {Page} from '~/components/page/Page';
import {useNavigate} from '@solidjs/router';
import {TechBlogPost} from '~/content/TechBlogPost';
import {ApplicationModularizationPost} from '~/content/ApplicationModularizationPost';

export default function Home() {
    const navigate = useNavigate();
    return (
        <Page>
            {/*<JsArraysPost*/}
            {/*    display={'preview-small'}*/}
            {/*    onAction={() => navigate('/js-arrays')}*/}
            {/*/>*/}
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
