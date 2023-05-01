import { JSXElement, ParentProps, children, createEffect, mergeProps, } from "solid-js";

import './styles/menu-styles.css'
import { Elevation } from "../elevation";
import { List, ListProps } from "../list";
import { FocusRing } from "../focus";
import { SurfacePositionHelper as MenuPositionHelper, SurfacePositionHelperProps as MenuPositionHelperProps } from "./menu-position-helper";
import { TypeaheadController, TypeaheadControllerProps } from "./typeahead-controller";
import { MenuItem } from "./shared-types";

export const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;

export type DefaultFocusState = 'NONE' | 'LIST_ROOT' | 'FIRST_ITEM' | 'LAST_ITEM';

function getFocusedElement(activeDoc: Document | ShadowRoot = document): HTMLElement | null {
  const activeEl = activeDoc.activeElement as HTMLElement | null;

  if (!activeEl) {
    return null;
  }

  if (activeEl.shadowRoot) {
    return getFocusedElement(activeEl.shadowRoot) ?? activeEl;
  }

  return activeEl;
}

export type NewMenuProps = {
  menuProps: Partial<MenuPositionHelperProps>;
  menuItems: JSXElement
  typeaheadProps: TypeaheadControllerProps;
  hasOverflow?: boolean;
  stayOpenOnOutsideClick?: boolean;
  stayOpenOnFocusOut?: boolean;
  skipRestoreFocus?: boolean;
  quick?: boolean;
  listTabIndex?: number;
  defaultFocus: DefaultFocusState;
  typeaheadActive?: boolean;
} & ParentProps;

export const NewMenu = (props: NewMenuProps) => {
  const menuItems = children(() => props.menuItems);
  const evaluatedTabs = () => menuItems.toArray() as unknown as MenuItem[]

  let listElement: ListProps | null = null;
  let menuElement: HTMLDivElement | null = null;
  let lastFocusedElement: HTMLElement | null = null;

  const fixed = props.menuProps.isTopLayer
  const quick = props.quick || false;
  const open = props.menuProps.isOpen
  const hasOverflow = props.hasOverflow

  let showFocusRing = false

  const menuPositionHelperProps: MenuPositionHelperProps = mergeProps(
    {
      anchorCorner: 'END_START',
      menuCorner: 'START_START',
      surfaceEl: () => menuElement,
      isTopLayer: false,
      xOffset: 0,
      yOffset: 0,
      onOpen: () => { },
      beforeClose: () => { },
      onClose: () => { },
    } as MenuPositionHelperProps,
    props.menuProps
  )
  const menuPostionHelper = new MenuPositionHelper(menuPositionHelperProps);


  const openDirection: () => 'UP' | 'DOWN' = () => {
    const menuCornerBlock = menuPositionHelperProps.menuCorner.split('_')[0];
    return menuCornerBlock === 'START' ? 'DOWN' : 'UP';
  }

  /**
   * The menu items associated with this menu. The items must be `MenuItem`s and
   * have both the `md-menu-item` and `md-list-item` attributes.
   */
  const items: () => MenuItem[] = () => {
    if (!listElement) {
      return [];
    }

    if (listElement) {
      return listElement.items.filter(el => el.hasAttribute('md-menu-item')) as
        MenuItem[];
    }

    return [];
  }

  const typeaheadController = new TypeaheadController(() => {
    return {
      getItems: () => this.items,
      typeaheadBufferTime: this.typeaheadBufferTime,
      active: this.typeaheadActive
    };
  });

  createEffect(async () => {
    const hasAnchor = !!menuPositionHelperProps.anchorEl()
    const hasSurface = !!menuPositionHelperProps.surfaceEl()
    if (props.menuProps.isOpen && hasAnchor && hasSurface) {
      console.log('menu opened...')
      await menuPostionHelper.position()
      onOpen()
    }

    if (!props.menuProps.isOpen && hasAnchor && hasSurface) {
      beforeClose()
      menuPostionHelper.close()
      onClose()
      console.log('menu closed')
    }
  })

  const onOpen = () => {
    console.log('onOpen')
  }

  const beforeClose = () => {
    console.log('beforeClose')
  }

  const onClose = () => {
    console.log('onClose')
  }


  const handleFocusOut = async () => {
    // TODO: implement
  }

  const handleListFocus = async () => {
    // TOOD: implement
  }

  const handleListBlur = async () => {
    // TOOD: implement
  }

  const handleListClick = async () => {
    // TOOD: implement
  }

  const handleListKeyDown = async () => {
    // TOOD: implement
  }

  return (
    <div
      class='menu__container'
      style={menuPostionHelper.containerStyles()}
    >
      <div
        ref={menuElement!}
        class='menu'
        classList={{
          'open': open,
          'fixed': fixed,
          'hasOverflow': hasOverflow
        }}
        style={menuPostionHelper.surfaceStyles()}
        onFocusOut={handleFocusOut}
      >
        <Elevation shadow />
        <List
          ref={listElement!}
          type="menu"
          listTabIndex={0}
          onFocus={handleListFocus}
          onBlur={handleListBlur}
          onClick={handleListClick}
          onKeyDown={handleListKeyDown}
        >
          {props.children}
        </List>
        <FocusRing visible={showFocusRing} />
      </div>
    </div>
  )
}
