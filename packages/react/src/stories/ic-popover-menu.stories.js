/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState }from 'react';
import {
  IcButton,
  IcMenuGroup,
  IcMenuItem,
  IcPopoverMenu,
  IcSwitch,
  IcTypography
} from "../components";

const defaultArgs = {
  open: true,
  groupLabel: "View",
  description: "",
  disabled: false,
  href: "/",
  keyboardShortcutLabel: "Cmd + C",
  label: "Copy code",
  variant: "default",
  iconSlot: true,
  theme: "inherit",
};

export default {
  title: "Popover menu",
  component: IcPopoverMenu,
};

export const Default = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <IcButton id="button-1" onClick={buttonClick}>
          Show/Hide popover
        </IcButton>
        <IcPopoverMenu
          anchor="button-1"
          aria-label="popover"
          onIcPopoverClosed={(event) => console.log("icPopoverClosed: ", event)}
        >
          <IcMenuItem label="Copy code" disabled />
          <IcMenuGroup label="View">
            <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
            <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
          </IcMenuGroup>
          <IcMenuItem label="Actions" submenuTriggerFor="abc" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc">
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" submenuTriggerFor="abc123" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc123">
          <IcMenuItem
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          />
          <IcMenuItem label="Find..." />
          <IcMenuItem label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IcMenuItem>
          <IcMenuItem label="Show found results" variant="toggle" />
        </IcPopoverMenu>
      </>
    );
  },

  name: "Default",
};

export const LeftPlacement = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <div
          style={{
            marginLeft: "1000px",
          }}
        >
          <IcButton id="button-1" onClick={buttonClick}>
            Show/Hide popover
          </IcButton>
          <IcPopoverMenu anchor="button-1" aria-label="popover">
            <IcMenuItem label="Copy code" disabled />
            <IcMenuGroup label="View">
              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
            </IcMenuGroup>
            <IcMenuItem label="Actions" submenuTriggerFor="abc" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc">
            <IcMenuItem label="Edit" />
            <IcMenuItem label="Find" submenuTriggerFor="abc123" />
            <IcMenuItem label="Delete" variant="destructive" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc123">
            <IcMenuItem
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            />
            <IcMenuItem label="Find..." />
            <IcMenuItem label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </IcMenuItem>
            <IcMenuItem label="Show found results" variant="toggle" />
          </IcPopoverMenu>
        </div>
      </>
    );
  },

  name: "Left placement",
};

export const TopPlacement = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <div
          style={{
            marginTop: "540px",
          }}
        >
          <IcButton id="button-1" onClick={buttonClick}>
            Show/Hide popover
          </IcButton>
          <IcPopoverMenu anchor="button-1" aria-label="popover">
            <IcMenuItem label="Copy code" disabled />
            <IcMenuGroup label="View">
              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
            </IcMenuGroup>
            <IcMenuItem label="Actions" submenuTriggerFor="abc" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc">
            <IcMenuItem label="Edit" />
            <IcMenuItem label="Find" submenuTriggerFor="abc123" />
            <IcMenuItem label="Delete" variant="destructive" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc123">
            <IcMenuItem
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            />
            <IcMenuItem label="Find..." />
            <IcMenuItem label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </IcMenuItem>
            <IcMenuItem label="Show found results" variant="toggle" />
          </IcPopoverMenu>
        </div>
      </>
    );
  },

  name: "Top placement",
};

export const AutoOpening = {
  render: () => {
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }

    return (
      <>
        <IcButton id="button-1" onClick={buttonClick}>
          Show/Hide popover
        </IcButton>
        <IcPopoverMenu
          anchor="button-1"
          aria-label="popover"
          open
          onIcPopoverClosed={(event) => console.log("icPopoverClosed: ", event)}
        >
          <IcMenuItem label="Copy code" disabled />
          <IcMenuGroup label="View">
            <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
            <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
          </IcMenuGroup>
          <IcMenuItem label="Actions" submenuTriggerFor="abc" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc">
          <IcMenuItem label="Edit" />
          <IcMenuItem label="Find" submenuTriggerFor="abc123" />
          <IcMenuItem label="Delete" variant="destructive" />
        </IcPopoverMenu>
        <IcPopoverMenu submenuId="abc123">
          <IcMenuItem
            label="Search the web"
            description="This will search the web to find the thing you are looking for."
          />
          <IcMenuItem label="Find..." />
          <IcMenuItem label="Find icons">
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IcMenuItem>
          <IcMenuItem label="Show found results" variant="toggle" />
        </IcPopoverMenu>
      </>
    );
  },

  name: "Auto opening",
};

export const PositioningStrategy = {
  render: () => {
    const [fixed, setFixed] = useState(false);
    function buttonClick() {
      document.querySelector("ic-popover-menu").open =
        !document.querySelector("ic-popover-menu").open;
    }
    
    return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--ic-space-xs)"
        }}
      >
        <IcTypography>
          Toggle the fixed positioning switch and open the popover to see it take effect
        </IcTypography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--ic-space-xs)",
            padding: "var(--ic-space-md)",
            border: "1px solid var(--ic-color-text-primary)",
            overflow: "hidden",
            width: "160px",
            position: "relative",
          }}
        >
          <IcButton id="button-1" onClick={buttonClick}>
            Show/Hide popover
          </IcButton>
          <IcPopoverMenu
            anchor="button-1"
            aria-label="popover"
            onIcPopoverClosed={(event) => console.log("icPopoverClosed: ", event)}
            fixedPositioning={fixed}
          >
            <IcMenuItem label="Copy code" disabled />
            <IcMenuGroup label="View">
              <IcMenuItem label="Zoom in" keyboardShortcut="Cmd+" />
              <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
            </IcMenuGroup>
            <IcMenuItem label="Actions" submenuTriggerFor="abc" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc" fixedPositioning={fixed}>
            <IcMenuItem label="Edit" />
            <IcMenuItem label="Find" submenuTriggerFor="abc123" />
            <IcMenuItem label="Delete" variant="destructive" />
          </IcPopoverMenu>
          <IcPopoverMenu submenuId="abc123" fixedPositioning={fixed}>
            <IcMenuItem
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            />
            <IcMenuItem label="Find..." />
            <IcMenuItem label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </IcMenuItem>
            <IcMenuItem label="Show found results" variant="toggle" />
          </IcPopoverMenu>
        </div>
        <IcSwitch label="Fixed popover positioning"
          onIcChange={(ev)=> setFixed(ev.detail.checked)}
        >
        </IcSwitch>
      </div>
    )   
  },
  name: "Positioning strategy",
};

export const Playground = {
  render: (args) => (
    <div>
      <IcPopoverMenu ariaLabel="popover" open={args.open} theme={args.theme}>
        <IcMenuGroup label={args.groupLabel}>
          <IcMenuItem
            description={args.description}
            disabled={args.disabled}
            href={args.href}
            keyboardShortcutLabel={args.keyboardShortcutLabel}
            label={args.label}
            variant={args.variant}
          >
            <svg
              slot={args.iconSlot}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IcMenuItem>
          <IcMenuItem label="Zoom out" keyboardShortcut="Cmd-" />
        </IcMenuGroup>
        <IcMenuItem label="Actions" submenuTriggerFor="abc" />
      </IcPopoverMenu>
      <IcPopoverMenu submenuId="abc" theme={args.theme}>
        <IcMenuItem label="Edit" />
        <IcMenuItem label="Find" />
        <IcMenuItem label="Delete" variant="destructive" />
      </IcPopoverMenu>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    variant: {
      options: ["default", "toggle", "destructive"],

      control: {
        type: "radio",
      },
    },

    iconSlot: {
      mapping: {
        true: "icon",
        false: "",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
