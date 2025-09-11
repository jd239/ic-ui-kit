import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";
import { IcThemeMode } from "../../utils/types";
import { getSlot, getSlotContent, isSlotUsed } from "../../utils/helpers";

const NAV_GROUP_TAG = "IC-NAVIGATION-GROUP";
const NAV_ITEM_TAG = "IC-NAVIGATION-ITEM";

/**
 * @slot navigation - Content will be rendered at top of panel.
 * @slot buttons - Content will be rendered above version info and below navigation.
 */
@Component({
  tag: "ic-navigation-menu",
  styleUrl: "ic-navigation-menu.css",
  shadow: true,
})
export class NavigationMenu {
  private closeButton?: HTMLIcButtonElement;
  private hasButtons: boolean = false;
  private hasNavigation: boolean = false;
  private lastTabStop: HTMLElement | null = null;
  private navBarEl: HTMLIcTopNavigationElement | null;
  private navGroupFirst: boolean = false;
  private navigationEls: HTMLElement[];
  private navItemAboveButtons: boolean = false;

  @Element() el: HTMLIcNavigationMenuElement;

  /**
   * The status info to display.
   */
  @Prop() status?: string = "";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The version info to display.
   */
  @Prop() version?: string = "";

  /**
   * @internal - Emitted when the menu is closed.
   */
  @Event() icNavigationMenuClose: EventEmitter<void>;

  componentWillLoad(): void {
    this.navBarEl = document.querySelector("ic-top-navigation");
    this.navigationEls = getSlotContent(this.el, "navigation") as HTMLElement[];

    if (this.navigationEls) {
      this.hasNavigation = true;
      const lastEl = this.navigationEls[this.navigationEls.length - 1];
      if (lastEl.tagName === NAV_ITEM_TAG) {
        this.navItemAboveButtons = true;
      } else if (lastEl.tagName === NAV_GROUP_TAG) {
        lastEl.addEventListener("navigationGroupExpanded", ((
          event: CustomEvent
        ) => {
          this.setLastTabStop(event.detail.expanded);
        }) as EventListener);
      }
      const firstEl = this.navigationEls[0];
      if (firstEl.tagName === NAV_GROUP_TAG) {
        this.navGroupFirst = true;
      }
    }
    const buttonContent = getSlotContent(this.el, "buttons");

    if (buttonContent !== null) {
      this.hasButtons = true;
      this.lastTabStop = buttonContent[buttonContent.length - 1] as HTMLElement;
    } else {
      if (this.hasNavigation && this.navigationEls) {
        this.setLastTabStop(false);
      }
    }
  }

  componentDidLoad(): void {
    this.focusCloseButton();
  }

  componentWillRender(): void {
    this.hasNavigation = isSlotUsed(this.el, "navigation");
    this.hasButtons = isSlotUsed(this.el, "buttons");
  }

  @Listen("navItemClicked")
  navItemClickHandler(): void {
    this.closeMenu();
  }

  @Listen("keydown", { target: "document" })
  handleKeyDown(ev: KeyboardEvent): void {
    if (ev.key === "Tab") {
      if (ev.shiftKey) {
        if (document.activeElement === this.navBarEl) {
          ev.preventDefault();
          this.focusLastTabStop();
        }
      } else if (
        document.activeElement === this.lastTabStop ||
        this.lastTabStop === null
      ) {
        ev.preventDefault();
        this.focusCloseButton();
      }
    } else if (ev.key === "Escape") {
      this.closeMenu();
    }
  }

  private setLastTabStop = (lastNavGroupExpanded: boolean) => {
    let lastEl = this.navigationEls[
      this.navigationEls.length - 1
    ] as HTMLElement;

    if (lastEl.tagName === NAV_GROUP_TAG && lastNavGroupExpanded) {
      const childNavItems = lastEl.children;
      lastEl = childNavItems[childNavItems.length - 1] as HTMLElement;
    }

    if (lastEl.tagName === NAV_ITEM_TAG) {
      //check for slotted content i.e. react router link
      const slotContent = getSlot(lastEl, "navigation-item");
      if (slotContent !== null) {
        lastEl = slotContent as HTMLElement;
      }
    }

    this.lastTabStop = lastEl;
  };

  private closeMenu = () => {
    this.icNavigationMenuClose.emit();
  };

  private focusCloseButton = () => {
    this.closeButton?.focus();
  };

  private focusLastTabStop = () => {
    let focusEl;
    if (this.lastTabStop !== null) {
      switch (this.lastTabStop.tagName) {
        case "IC-NAVIGATION-BUTTON":
        case NAV_ITEM_TAG:
        case NAV_GROUP_TAG:
          focusEl = this.lastTabStop as HTMLElement;
          focusEl.focus();
          break;
        case "A":
          this.lastTabStop.focus();
          break;
      }
    }
  };

  render() {
    return (
      <Host class={{ [`ic-theme-${this.theme}`]: this.theme !== "inherit" }}>
        <div class="popout-modal" onClick={this.closeMenu}></div>
        <div
          class="popout-menu"
          role="dialog"
          aria-modal="true"
          aria-label={`${this.hasNavigation ? "Navigation" : "App"} menu`}
        >
          <span
            aria-hidden="true"
            id="navigation-landmark-text"
            class="navigation-landmark-text"
          >
            Main navigation
          </span>
          <nav
            aria-labelledby="navigation-landmark-text"
            aria-hidden={this.hasNavigation ? "false" : "true"}
          >
            <div
              class={{
                ["menu-close-button-container"]: true,
                ["nav-group-first"]: this.navGroupFirst,
              }}
            >
              <ic-button
                ref={(el) => (this.closeButton = el)}
                id="menu-close-button"
                class="menu-close-button"
                variant="icon-tertiary"
                size="large"
                aria-label={`Close ${
                  this.hasNavigation ? "navigation" : "app"
                } menu`}
                onClick={this.closeMenu}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                </svg>
              </ic-button>
            </div>
            {this.hasNavigation && <slot name="navigation"></slot>}
          </nav>
          {this.hasButtons && (
            <div
              class={{
                ["menu-buttons-container"]: true,
                ["menu-buttons-container-nav-item-above"]:
                  this.navItemAboveButtons,
              }}
            >
              <slot name="buttons"></slot>
            </div>
          )}
          {(this.status !== "" || this.version !== "") && (
            <div
              class={{
                ["menu-status-version-container"]: true,
                ["status-version-no-buttons"]: !this.hasButtons,
              }}
            >
              {this.status !== "" && (
                <div class="menu-status">
                  <ic-typography
                    variant="label-uppercase"
                    aria-label="app tag"
                    class="menu-status-text"
                  >
                    {this.status}
                  </ic-typography>
                </div>
              )}
              {this.version !== "" && (
                <div class="menu-version">
                  <ic-typography
                    variant="label"
                    class="menu-version-text"
                    aria-label="app version"
                  >
                    {this.version}
                  </ic-typography>
                </div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
