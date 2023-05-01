import { Component, createSignal } from 'solid-js';
import { Corner, Icon, ListIcon, ListItem, Menu, StandardIconButton } from '~/design-system';
import { useClientContext } from '~/_client/client-context';

export type TopAppBarProps = {}

export const TopAppBar: Component<TopAppBarProps> = (_) => {
  const clientContext = useClientContext();

  const openUserMenu = createSignal(false);
  const [isUserMenuOpen, setUserMenuOpen] = openUserMenu;

  let button: HTMLButtonElement | null;

  return (
      <header class="">
        <div class="pl-f10 h-f9 bg-surface flex">
          <div class="flex items-center">
            <Icon class="mr-f7 ">
            <span class="material-symbols-outlined">
              explore
            </span>
            </Icon>
            <h2>
              ReSrc Blog
            </h2>
          </div>
          <div class="flex-grow ml-f11 items-center flex">
          </div>
          <div class="mr-f7 flex items-center gap-f7">
            <div>
              <StandardIconButton
                  color="primary"
                  ref={button!}
                  onClick={() => setUserMenuOpen(!isUserMenuOpen())}
                  icon={
                    <Icon><span class="material-symbols-outlined">person</span></Icon>
                  }
              ></StandardIconButton>
              <Menu
                  anchor={button!}
                  open={openUserMenu}
                  corner={Corner.TOP_END}
                  flipMenuHorizontally={true}
              >
                <ListItem
                    start={
                      <ListIcon icon={'logout'}/>
                    }
                    end={
                      <ListIcon icon={'arrow_right'}/>
                    }
                    headline="Abmelden"
                ></ListItem>
              </Menu>
            </div>
            <Icon>
            <span class="material-symbols-outlined">
              layers
            </span>
            </Icon>
          </div>
        </div>
      </header>
  );
};
