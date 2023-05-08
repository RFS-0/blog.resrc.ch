import { Page } from '~/components/page/Page';
import {
  FilledIconButton,
  FilledIconToggleButton,
  FilledLinkIconButton,
  FilledTonalIconButton,
  FilledTonalLinkIconButton,
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
          <div>
            <StandardIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            StandardIconButton
          </div>
          <div>
            <StandardIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            StandardIconToggleButton
          </div>
          <div>
            <StandardLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            StandardLinkIconButton
          </div>
          <div>
            <FilledIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            FilledIconButton
          </div>
          <div>
            <FilledIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            FilledIconToggleButton
          </div>
          <div>
            <FilledLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            FilledLinkIconButton
          </div>
          <div>
            <FilledTonalIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            FillledTonalIconButton
          </div>
          <div>
            <FilledTonalIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            FilledTonalIconToggleButton
          </div>
          <div>
            <FilledTonalLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            FilledTonalLinkIconButton
          </div>
          <div>
            <OutlinedIconButton
                disabled={false}
                icon={<span class="material-symbols-outlined">add</span>}
            />
            OutlinedIconButton
          </div>
          <div>
            <OutlinedIconToggleButton
                onIcon={<span class="material-symbols-outlined">add</span>}
                offIcon={<span class="material-symbols-outlined">remove</span>}
            />
            OutlinedIconToggleButton
          </div>
          <div>
            <OutlinedLinkIconButton
                href={'#'}
                target={'_blank'}
                icon={<span class="material-symbols-outlined">link</span>}
            />
            OutlinedLinkIconButton
          </div>
        </Page>
      </main>
  );
}
