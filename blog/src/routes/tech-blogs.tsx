import {Page} from '~/components/page/Page';
import {TechBlogPost} from '~/content/TechBlogPost';
import {useNavigate} from '@solidjs/router';

export default function TechBlogs() {
    const navigate = useNavigate();
    return (
        <Page>
            <TechBlogPost
                display={'full'}
                onAction={() => {
                    navigate('/')
                }}
            />
        </Page>
    );
}
