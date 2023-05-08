import { Page } from '~/components/page/Page';
import { PageItem } from '~/components/page/PageItem';
import {
  FilledIconButton,
  FilledIconToggleButton,
  FilledTonalIconButton,
  StandardIconButton,
  StandardIconToggleButton,
  StandardLinkIconButton,
} from '~/design-system';

export default function Dev() {
  return (
      <main>
        <Page>
          <PageItem>
            <StandardIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            StandardIconButton
          </PageItem>
          <PageItem>
            <StandardIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            StandardIconToggleButton
          </PageItem>
          <PageItem>
            <StandardLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            StandardIconToggleButton
          </PageItem>
          <PageItem>
            <FilledIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            FilledIconButton
          </PageItem>
          <PageItem>
            <FilledTonalIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            FilledTonalIconButton
          </PageItem>
          <PageItem>
            <FilledIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            FilledIconToggleButton
          </PageItem>
        </Page>
      </main>
  );
}
