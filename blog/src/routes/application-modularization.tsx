import {Page} from '~/components/page/Page';
import {ApplicationModularizationPost} from '~/content/ApplicationModularizationPost';
import {useNavigate} from '@solidjs/router';

export default function ApplicationModularization() {
    const navigate = useNavigate();

    return (
        <Page>
            <ApplicationModularizationPost
                display={'full'}
                onAction={() => {
                    navigate('/')
                }}
            />
        </Page>
    );
}
