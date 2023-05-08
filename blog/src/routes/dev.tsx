import { Page } from '~/components/page/Page';
import {
  FilledIconButton,
  FilledLinkIconButton,
  FilledTonalIconButton,
  OutlinedIconButton,
  OutlinedIconToggleButton,
  OutlinedLinkIconButton,
  StandardIconButton,
  StandardIconToggleButton,
  StandardLinkIconButton,
} from '~/design-system';
import { FilledTonalIconToggleButton } from '~/design-system/iconbutton/FilledTonalIconButtonToggle';

export default function Dev() {
  return (
      <main>
        <Page>
            <StandardIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            StandardIconButton
            <StandardIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            StandardIconToggleButton
            <StandardLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            StandardLinkIconButton
            <FilledIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            FilledIconButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            FilledIconToggleButton
            <FilledLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            FilledLinkIconButton
            <FilledTonalIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            FillledTonalIconButton
            <FilledTonalIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            FilledTonalIconToggleButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            FilledTonalLinkIconButton
            <OutlinedIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            OutlinedIconButton
            <OutlinedIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            OutlinedIconToggleButton
            <OutlinedLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            OutlinedLinkIconButton
        </Page>
      </main>
  );
}
