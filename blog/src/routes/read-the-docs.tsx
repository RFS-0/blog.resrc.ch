import {Page} from '~/components/page/Page';
import {ReadTheDocsPost} from '~/content/ReadTheDocsPost';
import {useNavigate} from '@solidjs/router';

export default function TechBlogs() {
    const navigate = useNavigate();

    return (
        <Page>
            <ReadTheDocsPost
                display={'full'}
                onAction={() => {
                    navigate('/')
                }}
            />
        </Page>
    );
}
