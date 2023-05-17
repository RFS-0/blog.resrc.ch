import { Page } from '~/components/page/Page';
import {
  Button,
  createHandlers,
  createRippleEventEmitter,
  FilledIconButton,
  FilledIconToggleButton,
  FilledLinkIconButton,
  FilledTonalIconButton,
  FilledTonalLinkIconButton,
  Icon,
  OutlinedIconButton,
  OutlinedIconToggleButton,
  OutlinedLinkIconButton,
  Ripple,
  StandardIconButton,
  StandardIconToggleButton,
  StandardLinkIconButton,
} from '~/design-system';
import { FilledTonalIconToggleButton } from '~/design-system/iconbutton/FilledTonalIconButtonToggle';

export default function Dev() {

  const {listen, emit} = createRippleEventEmitter();
  const rippleHandlers = createHandlers(emit);

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
          <div>
            <Button
                leadingIcon={
                  <Icon>
                    <span class="material-symbols-outlined">link</span>
                  </Icon>
                }
                variant={'filled'}
                label={'Filled Button'}
            />
          </div>
          <div>
            <Button
                variant={'outlined'}
                label={'Outlined Button'}
            />
          </div>
          <div>
            <Button
                variant={'elevated'}
                label={'Elevated Button'}
            />
          </div>
          <div>
            <Button
                variant={'tonal'}
                label={'Tonal Button'}
            />
          </div>
          <div>
            <Button
                variant={'text'}
                label={'Text Button'}
            />
          </div>
          <div
              {...rippleHandlers}
              class={'bg-amber-600 w-f11'}>
            <Ripple
                listen={listen}
            />
            Hello

          </div>
        </Page>

        <div class="display-large">
          Display large
        </div>
        <div class="display-large">
          Display large
        </div>
        <div class="display-medium">
          Display medium
        </div>
        <div class="display-medium">
          Display medium
        </div>
        <div class="display-small">
          Display small
        </div>
        <div class="display-small">
          Display small
        </div>


        <div class="headline-large">
          Headline large
        </div>
        <div class="headline-large">
          Headline large
        </div>
        <div class="headline-medium">
          Headline medium
        </div>
        <div class="headline-medium">
          Headline medium
        </div>
        <div class="headline-small">
          Headline small
        </div>
        <div class="headline-small">
          Headline small
        </div>


        <div class="title-large">
          Title large
        </div>
        <div class="title-large">
          Title large
        </div>
        <div class="title-medium">
          Title medium
        </div>
        <div class="title-medium">
          Title medium
        </div>
        <div class="title-small">
          Title small
        </div>
        <div class="title-small">
          Title small
        </div>

        <div class="body-large">
          Body large
        </div>
        <div class="body-large">
          Body large
        </div>
        <div class="body-medium">
          Body medium
        </div>
        <div class="body-medium">
          Body medium
        </div>
        <div class="body-small">
          Body small
        </div>
        <div class="body-small">
          Body small
        </div>


        <div class="label-large">
          Label large
        </div>
        <div class="label-large">
          Label large
        </div>
        <div class="label-medium">
          Label medium
        </div>
        <div class="label-medium">
          Label medium
        </div>
        <div class="label-small">
          Label small
        </div>
        <div class="label-small">
          Label small
        </div>

      </main>
  );
}
