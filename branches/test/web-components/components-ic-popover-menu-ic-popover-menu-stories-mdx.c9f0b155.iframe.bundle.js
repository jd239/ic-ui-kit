/*! For license information please see components-ic-popover-menu-ic-popover-menu-stories-mdx.c9f0b155.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4700],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ic-popover-menu/ic-popover-menu.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ic_popover_menu_stories,defaultStory:()=>defaultStory,leftPlacement:()=>leftPlacement,maxHeight:()=>maxHeight,multiplePopoversOnPage:()=>multiplePopoversOnPage,topPlacement:()=>topPlacement});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject="# ic-popover-menu\n\nThis is a wrapper component to be placed around one or more ic-menu-item components.\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property    | Attribute    | Description                                                                                                     | Type      | Default     |\n| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |\n| `anchor`    | `anchor`     | The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu. | `string`  | `undefined` |\n| `open`      | `open`       | If `true`, the popover menu will be displayed.                                                                  | `boolean` | `undefined` |\n| `submenuId` | `submenu-id` | The unique identifier for a popover submenu.                                                                    | `string`  | `undefined` |\n\n\n## Events\n\n| Event             | Description                              | Type                |\n| ----------------- | ---------------------------------------- | ------------------- |\n| `icPopoverClosed` | Emitted when the popover menu is closed. | `CustomEvent<void>` |\n\n\n## CSS Custom Properties\n\n| Name                   | Description                         |\n| ---------------------- | ----------------------------------- |\n| `--ic-z-index-popover` | z-index of popover menu.            |\n| `--max-height`         | Maximum height of the popover menu. |\n| `--popover-width`      | Default width of the popover menu.  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-menu-item](../ic-menu-item)\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-popover-menu --\x3e ic-menu-item\n  ic-popover-menu --\x3e ic-typography\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  style ic-popover-menu fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n",ic_menu_item_readme_namespaceObject='# ic-menu-item\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute             | Description                                                                                                                                  | Type                                                                                                                                                                                     | Default     |\n| -------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `description`        | `description`         | The description displayed in the menu item, below the label.                                                                                 | `string`                                                                                                                                                                                 | `undefined` |\n| `disabled`           | `disabled`            | If `true`, the menu item will be in disabled state.                                                                                          | `boolean`                                                                                                                                                                                | `false`     |\n| `href`               | `href`                | The URL that the link points to. This will render the menu item as an "a" tag.                                                               | `string`                                                                                                                                                                                 | `undefined` |\n| `hreflang`           | `hreflang`            | The human language of the linked URL.                                                                                                        | `string`                                                                                                                                                                                 | `undefined` |\n| `keyboardShortcut`   | `keyboard-shortcut`   | The label describing the keyboard shortcut for a menu item\'s action.                                                                         | `string`                                                                                                                                                                                 | `undefined` |\n| `label` _(required)_ | `label`               | The label to display in the menu item.                                                                                                       | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy`     | `referrerpolicy`      | How much of the referrer to send when following the link.                                                                                    | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`                | `rel`                 | The relationship of the linked URL as space-separated link types.                                                                            | `string`                                                                                                                                                                                 | `undefined` |\n| `submenuTriggerFor`  | `submenu-trigger-for` | This references the popover menu instance that the menu item is a trigger for. If this prop is set, then the variant will always be default. | `string`                                                                                                                                                                                 | `undefined` |\n| `target`             | `target`              | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                          | `string`                                                                                                                                                                                 | `undefined` |\n| `variant`            | `variant`             | The variant of the menu item.                                                                                                                | `"default" \\| "destructive" \\| "toggle"`                                                                                                                                                 | `"default"` |\n\n\n## Slots\n\n| Slot     | Description                                                |\n| -------- | ---------------------------------------------------------- |\n| `"icon"` | Content will be placed to the left of the menu item label. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-popover-menu](../ic-popover-menu)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-item --\x3e ic-typography\n  ic-menu-item --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-popover-menu --\x3e ic-menu-item\n  style ic-menu-item fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n',ic_menu_group_readme_namespaceObject="# ic-menu-group\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property | Attribute | Description                                          | Type     | Default     |\n| -------- | --------- | ---------------------------------------------------- | -------- | ----------- |\n| `label`  | `label`   | The label to display as the title of the menu group. | `string` | `undefined` |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-menu-group --\x3e ic-typography\n  style ic-menu-group fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Popover menu",component:"Popover Menu"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:ic_menu_item_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:ic_menu_group_readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = !icPopover.open;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"max-height",children:"Max height"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Max height",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <style>
          ic-popover-menu {
            --max-height: 100px;
          }
        </style>
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = !icPopover.open;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"left-placement",children:"Left placement"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Left placement",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <div style="margin-left: 1000px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = !icPopover.open;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"top-placement",children:"Top placement"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Top placement",parameters:{loki:{skip:!0}},children:args=>lit_html.dy`
        <div style="margin-top: 540px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = !icPopover.open;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multiple-popovers-on-page",children:"Multiple popovers on page"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Multiple popovers on page",parameters:{loki:{skip:!0}},children:args=>lit_html.dy` <ic-link href="/">Link1</ic-link>
        <ic-button id="button-1" onclick="buttonClick(1)"
          >Show popover</ic-button
        >
        <ic-link href="/">Link2</ic-link>
        <ic-button id="button-2" onclick="buttonClick(2)"
          >Show popover 2</ic-button
        >
        <ic-link href="/">Link3</ic-link>
        <script>
          function buttonClick(pos) {
            var icPopover = document.querySelector("#popover" + pos);
            icPopover.open = !icPopover.open;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="def"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="def123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>`})})]})}const defaultStory=args=>lit_html.dy`
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = !icPopover.open;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `;defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'args => html`\n        <ic-button id="button-1" onclick="buttonClick()"\n          >Show popover</ic-button\n        >\n        <script>\n          var icPopover = document.querySelector("ic-popover-menu");\n          function buttonClick() {\n            icPopover.open = !icPopover.open;\n          }\n        <\/script>\n        <div>\n          <ic-popover-menu anchor="button-1" aria-label="popover">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="abc"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Logout"\n              variant="destructive"\n              disabled="true"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="abc123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc123">\n            <ic-menu-item\n              disabled="true"\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n        </div>\n      `'},loki:{skip:!0}};const maxHeight=args=>lit_html.dy`
        <style>
          ic-popover-menu {
            --max-height: 100px;
          }
        </style>
        <ic-button id="button-1" onclick="buttonClick()"
          >Show popover</ic-button
        >
        <script>
          var icPopover = document.querySelector("ic-popover-menu");
          function buttonClick() {
            icPopover.open = !icPopover.open;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>
      `;maxHeight.storyName="Max height",maxHeight.parameters={storySource:{source:'args => html`\n        <style>\n          ic-popover-menu {\n            --max-height: 100px;\n          }\n        </style>\n        <ic-button id="button-1" onclick="buttonClick()"\n          >Show popover</ic-button\n        >\n        <script>\n          var icPopover = document.querySelector("ic-popover-menu");\n          function buttonClick() {\n            icPopover.open = !icPopover.open;\n          }\n        <\/script>\n        <div>\n          <ic-popover-menu anchor="button-1" aria-label="popover">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="abc"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="abc123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc123">\n            <ic-menu-item\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n        </div>\n      `'},loki:{skip:!0}};const leftPlacement=args=>lit_html.dy`
        <div style="margin-left: 1000px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = !icPopover.open;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `;leftPlacement.storyName="Left placement",leftPlacement.parameters={storySource:{source:'args => html`\n        <div style="margin-left: 1000px">\n          <ic-button id="button-1" onclick="buttonClick()"\n            >Show popover</ic-button\n          >\n          <script>\n            var icPopover = document.querySelector("ic-popover-menu");\n            function buttonClick() {\n              icPopover.open = !icPopover.open;\n            }\n          <\/script>\n          <div>\n            <ic-popover-menu anchor="button-1" aria-label="popover">\n              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n              <ic-menu-group label="View">\n                <ic-menu-item\n                  label="Zoom in"\n                  keyboard-shortcut="Cmd+"\n                ></ic-menu-item>\n                <ic-menu-item\n                  label="Zoom out"\n                  keyboard-shortcut="Cmd-"\n                ></ic-menu-item>\n              </ic-menu-group>\n              <ic-menu-item\n                label="Actions"\n                submenu-trigger-for="abc"\n              ></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc">\n              <ic-menu-item label="Edit"></ic-menu-item>\n              <ic-menu-item\n                label="Find"\n                submenu-trigger-for="abc123"\n              ></ic-menu-item>\n              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc123">\n              <ic-menu-item\n                label="Search the web"\n                description="This will search the web to find the thing you are looking for."\n              ></ic-menu-item>\n              <ic-menu-item label="Find..."></ic-menu-item>\n              <ic-menu-item label="Find icons">\n                <svg\n                  slot="icon"\n                  xmlns="http://www.w3.org/2000/svg"\n                  height="24px"\n                  viewBox="0 0 24 24"\n                  width="24px"\n                >\n                  <path d="M0 0h24v24H0V0z" fill="none" />\n                  <path\n                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                  />\n                </svg>\n              </ic-menu-item>\n              <ic-menu-item\n                label="Show found results"\n                variant="toggle"\n              ></ic-menu-item>\n            </ic-popover-menu>\n          </div>\n        </div>\n      `'},loki:{skip:!0}};const topPlacement=args=>lit_html.dy`
        <div style="margin-top: 540px">
          <ic-button id="button-1" onclick="buttonClick()"
            >Show popover</ic-button
          >
          <script>
            var icPopover = document.querySelector("ic-popover-menu");
            function buttonClick() {
              icPopover.open = !icPopover.open;
            }
          </script>
          <div>
            <ic-popover-menu anchor="button-1" aria-label="popover">
              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
              <ic-menu-group label="View">
                <ic-menu-item
                  label="Zoom in"
                  keyboard-shortcut="Cmd+"
                ></ic-menu-item>
                <ic-menu-item
                  label="Zoom out"
                  keyboard-shortcut="Cmd-"
                ></ic-menu-item>
              </ic-menu-group>
              <ic-menu-item
                label="Actions"
                submenu-trigger-for="abc"
              ></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc">
              <ic-menu-item label="Edit"></ic-menu-item>
              <ic-menu-item
                label="Find"
                submenu-trigger-for="abc123"
              ></ic-menu-item>
              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
            </ic-popover-menu>
            <ic-popover-menu submenu-id="abc123">
              <ic-menu-item
                label="Search the web"
                description="This will search the web to find the thing you are looking for."
              ></ic-menu-item>
              <ic-menu-item label="Find..."></ic-menu-item>
              <ic-menu-item label="Find icons">
                <svg
                  slot="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
              </ic-menu-item>
              <ic-menu-item
                label="Show found results"
                variant="toggle"
              ></ic-menu-item>
            </ic-popover-menu>
          </div>
        </div>
      `;topPlacement.storyName="Top placement",topPlacement.parameters={storySource:{source:'args => html`\n        <div style="margin-top: 540px">\n          <ic-button id="button-1" onclick="buttonClick()"\n            >Show popover</ic-button\n          >\n          <script>\n            var icPopover = document.querySelector("ic-popover-menu");\n            function buttonClick() {\n              icPopover.open = !icPopover.open;\n            }\n          <\/script>\n          <div>\n            <ic-popover-menu anchor="button-1" aria-label="popover">\n              <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n              <ic-menu-group label="View">\n                <ic-menu-item\n                  label="Zoom in"\n                  keyboard-shortcut="Cmd+"\n                ></ic-menu-item>\n                <ic-menu-item\n                  label="Zoom out"\n                  keyboard-shortcut="Cmd-"\n                ></ic-menu-item>\n              </ic-menu-group>\n              <ic-menu-item\n                label="Actions"\n                submenu-trigger-for="abc"\n              ></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc">\n              <ic-menu-item label="Edit"></ic-menu-item>\n              <ic-menu-item\n                label="Find"\n                submenu-trigger-for="abc123"\n              ></ic-menu-item>\n              <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n            </ic-popover-menu>\n            <ic-popover-menu submenu-id="abc123">\n              <ic-menu-item\n                label="Search the web"\n                description="This will search the web to find the thing you are looking for."\n              ></ic-menu-item>\n              <ic-menu-item label="Find..."></ic-menu-item>\n              <ic-menu-item label="Find icons">\n                <svg\n                  slot="icon"\n                  xmlns="http://www.w3.org/2000/svg"\n                  height="24px"\n                  viewBox="0 0 24 24"\n                  width="24px"\n                >\n                  <path d="M0 0h24v24H0V0z" fill="none" />\n                  <path\n                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                  />\n                </svg>\n              </ic-menu-item>\n              <ic-menu-item\n                label="Show found results"\n                variant="toggle"\n              ></ic-menu-item>\n            </ic-popover-menu>\n          </div>\n        </div>\n      `'},loki:{skip:!0}};const multiplePopoversOnPage=args=>lit_html.dy` <ic-link href="/">Link1</ic-link>
        <ic-button id="button-1" onclick="buttonClick(1)"
          >Show popover</ic-button
        >
        <ic-link href="/">Link2</ic-link>
        <ic-button id="button-2" onclick="buttonClick(2)"
          >Show popover 2</ic-button
        >
        <ic-link href="/">Link3</ic-link>
        <script>
          function buttonClick(pos) {
            var icPopover = document.querySelector("#popover" + pos);
            icPopover.open = !icPopover.open;
          }
        </script>
        <div>
          <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="abc"
            ></ic-menu-item>
            <ic-menu-item
              label="Logout"
              variant="destructive"
              disabled="true"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="abc123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="abc123">
            <ic-menu-item
              disabled="true"
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">
            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>
            <ic-menu-group label="View">
              <ic-menu-item
                label="Zoom in"
                keyboard-shortcut="Cmd+"
              ></ic-menu-item>
              <ic-menu-item
                label="Zoom out"
                keyboard-shortcut="Cmd-"
              ></ic-menu-item>
            </ic-menu-group>
            <ic-menu-item
              label="Actions"
              submenu-trigger-for="def"
            ></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def">
            <ic-menu-item label="Edit"></ic-menu-item>
            <ic-menu-item
              label="Find"
              submenu-trigger-for="def123"
            ></ic-menu-item>
            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>
          </ic-popover-menu>
          <ic-popover-menu submenu-id="def123">
            <ic-menu-item
              label="Search the web"
              description="This will search the web to find the thing you are looking for."
            ></ic-menu-item>
            <ic-menu-item label="Find..."></ic-menu-item>
            <ic-menu-item label="Find icons">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Show found results"
              variant="toggle"
            ></ic-menu-item>
          </ic-popover-menu>
        </div>`;multiplePopoversOnPage.storyName="Multiple popovers on page",multiplePopoversOnPage.parameters={storySource:{source:'args => html` <ic-link href="/">Link1</ic-link>\n        <ic-button id="button-1" onclick="buttonClick(1)"\n          >Show popover</ic-button\n        >\n        <ic-link href="/">Link2</ic-link>\n        <ic-button id="button-2" onclick="buttonClick(2)"\n          >Show popover 2</ic-button\n        >\n        <ic-link href="/">Link3</ic-link>\n        <script>\n          function buttonClick(pos) {\n            var icPopover = document.querySelector("#popover" + pos);\n            icPopover.open = !icPopover.open;\n          }\n        <\/script>\n        <div>\n          <ic-popover-menu anchor="button-1" aria-label="popover" id="popover1">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="abc"\n            ></ic-menu-item>\n            <ic-menu-item\n              label="Logout"\n              variant="destructive"\n              disabled="true"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="abc123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="abc123">\n            <ic-menu-item\n              disabled="true"\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu anchor="button-2" aria-label="popover" id="popover2">\n            <ic-menu-item label="Copy code" disabled="true"></ic-menu-item>\n            <ic-menu-group label="View">\n              <ic-menu-item\n                label="Zoom in"\n                keyboard-shortcut="Cmd+"\n              ></ic-menu-item>\n              <ic-menu-item\n                label="Zoom out"\n                keyboard-shortcut="Cmd-"\n              ></ic-menu-item>\n            </ic-menu-group>\n            <ic-menu-item\n              label="Actions"\n              submenu-trigger-for="def"\n            ></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="def">\n            <ic-menu-item label="Edit"></ic-menu-item>\n            <ic-menu-item\n              label="Find"\n              submenu-trigger-for="def123"\n            ></ic-menu-item>\n            <ic-menu-item label="Delete" variant="destructive"></ic-menu-item>\n          </ic-popover-menu>\n          <ic-popover-menu submenu-id="def123">\n            <ic-menu-item\n              label="Search the web"\n              description="This will search the web to find the thing you are looking for."\n            ></ic-menu-item>\n            <ic-menu-item label="Find..."></ic-menu-item>\n            <ic-menu-item label="Find icons">\n              <svg\n                slot="icon"\n                xmlns="http://www.w3.org/2000/svg"\n                height="24px"\n                viewBox="0 0 24 24"\n                width="24px"\n              >\n                <path d="M0 0h24v24H0V0z" fill="none" />\n                <path\n                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"\n                />\n              </svg>\n            </ic-menu-item>\n            <ic-menu-item\n              label="Show found results"\n              variant="toggle"\n            ></ic-menu-item>\n          </ic-popover-menu>\n        </div>`'},loki:{skip:!0}};const componentMeta={title:"Web Components/Popover menu",tags:["stories-mdx"],includeStories:["defaultStory","maxHeight","leftPlacement","topPlacement","multiplePopoversOnPage"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_popover_menu_stories=componentMeta,__namedExportsOrder=["defaultStory","maxHeight","leftPlacement","topPlacement","multiplePopoversOnPage"]},"./node_modules/lit-html/lit-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _t$litHtmlVersions;__webpack_require__.d(__webpack_exports__,{dy:()=>x});var t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),o="?"+h,n="<".concat(o,">"),r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(">|".concat(d,"(?:([^\\s\"'>=/]+)(").concat(d,"*=").concat(d,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)s[_key-1]=arguments[_key];return{_$litType$:t,strings:i,values:s}},x=y(1),w=(y(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}var P=(t,i)=>{for(var r,s=t.length-1,o=[],l=2===i?"<svg>":"",c=f,_i=0;_i<s;_i++){for(var _s=t[_i],_a=void 0,_u=void 0,_d=-1,_y=0;_y<_s.length&&(c.lastIndex=_y,null!==(_u=c.exec(_s)));){var _r;_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=null!==(_r=r)&&void 0!==_r?_r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0)}var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n:_d>=0?(o.push(_a),_s.slice(0,_d)+e+_s.slice(_d)+h+_x):_s+h+(-2===_d?_i:_x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor(_ref,n){var r,{strings:t,_$litType$:s}=_ref;this.parts=[];var c=0,a=0,u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){var _t=this.el.content.firstChild;_t.replaceWith(..._t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(var _t2 of r.getAttributeNames())if(_t2.endsWith(e)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?k:"?"===_e[1]?H:"@"===_e[1]?I:R}),r.removeAttribute(_t2)}else _t2.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));if($.test(r.tagName)){var _t3=r.textContent.split(h),_s3=_t3.length-1;if(_s3>0){r.textContent=i?i.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),E.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else for(var _t4=-1;-1!==(_t4=r.data.indexOf(h,_t4+1));)d.push({type:7,index:c}),_t4+=h.length-1;c++}}static createElement(t,i){var s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,e=arguments.length>3?arguments[3]:void 0;if(i===w)return i;var h=void 0!==e?null===(_s$_$Co=s._$Co)||void 0===_s$_$Co?void 0:_s$_$Co[e]:s._$Cl,o=c(i)?void 0:i._$litDirective$;return(null===(_h=h)||void 0===_h?void 0:_h.constructor)!==o&&(null!==(_h2=h)&&void 0!==_h2&&null!==(_h2$_$AO=_h2._$AO)&&void 0!==_h2$_$AO&&_h2$_$AO.call(_h2,!1),void 0===o?h=void 0:(h=new o(t))._$AT(t,s,e),void 0!==e?(null!==(_s$_$Co2=s._$Co)&&void 0!==_s$_$Co2?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var _t$creationScope,{el:{content:i},parts:s}=this._$AD,e=(null!==(_t$creationScope=null==t?void 0:t.creationScope)&&void 0!==_t$creationScope?_t$creationScope:r).importNode(i,!0);E.currentNode=e;for(var h=E.nextNode(),o=0,n=0,l=s[0];void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new M(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new L(h,this,t)),this._$AV.push(_i4),l=s[++n]}o!==(null===(_l=l)||void 0===_l?void 0:_l.index)&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){var i=0;for(var _s4 of this._$AV)void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++}}class M{get _$AU(){var _this$_$AM$_$AU,_this$_$AM;return null!==(_this$_$AM$_$AU=null===(_this$_$AM=this._$AM)||void 0===_this$_$AM?void 0:_this$_$AM._$AU)&&void 0!==_this$_$AM$_$AU?_this$_$AM$_$AU:this._$Cv}constructor(t,i,s,e){var _e$isConnected;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=null===(_e$isConnected=null==e?void 0:e.isConnected)||void 0===_e$isConnected||_e$isConnected}get parentNode(){var _t5,t=this._$AA.parentNode,i=this._$AM;return void 0!==i&&11===(null===(_t5=t)||void 0===_t5?void 0:_t5.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var _this$_$AH,{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if((null===(_this$_$AH=this._$AH)||void 0===_this$_$AH?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else{var _t6=new S(e,this),_s5=_t6.u(this.options);_t6.p(i),this.$(_s5),this._$AH=_t6}}_$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());var s,i=this._$AH,e=0;for(var _h3 of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,i=arguments.length>1?arguments[1]:void 0;for(null===(_this$_$AP=this._$AP)||void 0===_this$_$AP||_this$_$AP.call(this,!1,!0,i);t&&t!==this._$AB;){var _this$_$AP,_i5=t.nextSibling;t.remove(),t=_i5}}setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,null===(_this$_$AP2=this._$AP)||void 0===_this$_$AP2||_this$_$AP2.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,s=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,h=this.strings,o=!1;if(void 0===h)t=N(this,t,i,0),(o=!c(t)||t!==this._$AH&&t!==w)&&(this._$AH=t);else{var _n,_r2,_e2=t;for(t=h[0],_n=0;_n<h.length-1;_n++){var _r3;(_r2=N(this,_e2[s+_n],i,_n))===w&&(_r2=this._$AH[_n]),o||(o=!c(_r2)||_r2!==this._$AH[_n]),_r2===T?t=T:t!==T&&(t+=(null!==(_r3=_r2)&&void 0!==_r3?_r3:"")+h[_n+1]),this._$AH[_n]=_r2}}o&&!e&&this.O(t)}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t){var _N;if((t=null!==(_N=N(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==_N?_N:T)!==w){var s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}}handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call(null!==(_this$options$host=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.host)&&void 0!==_this$options$host?_this$options$host:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}var Z=t.litHtmlPolyfillSupport;null!=Z&&Z(V,M),(null!==(_t$litHtmlVersions=t.litHtmlVersions)&&void 0!==_t$litHtmlVersions?_t$litHtmlVersions:t.litHtmlVersions=[]).push("3.1.1")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ic-popover-menu-ic-popover-menu-stories-mdx.c9f0b155.iframe.bundle.js.map