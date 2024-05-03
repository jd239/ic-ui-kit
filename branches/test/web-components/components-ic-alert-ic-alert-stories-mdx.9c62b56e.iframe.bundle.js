"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[4754],{"./src/components/ic-alert/ic-alert.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,announced:()=>announced,customMessage:()=>customMessage,customMessageAndTitleAbove:()=>customMessageAndTitleAbove,default:()=>ic_alert_stories,dismissible:()=>dismissible,dismissibleWithAction:()=>dismissibleWithAction,messageOnly:()=>messageOnly,responsiveTitle:()=>responsiveTitle,titleAbove:()=>titleAbove,variants:()=>variants,withAction:()=>withAction});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const readme_namespaceObject='# ic-alert\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property      | Attribute     | Description                                                                                   | Type                                                       | Default     |\n| ------------- | ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |\n| `announced`   | `announced`   | If `true`, the alert will have the \'alert\' ARIA role and will be announced to screen readers. | `boolean`                                                  | `true`      |\n| `dismissible` | `dismissible` | If `true`, the alert will have a close icon at the end to dismiss it.                         | `boolean`                                                  | `false`     |\n| `heading`     | `heading`     | The optional title to display at the start of the alert.                                      | `string`                                                   | `""`        |\n| `message`     | `message`     | The main body message of the alert.                                                           | `string`                                                   | `undefined` |\n| `titleAbove`  | `title-above` | If `true`, the title and message will appear above and below instead of inline.               | `boolean`                                                  | `false`     |\n| `variant`     | `variant`     | The variant of the alert which will be rendered.                                              | `"error" \\| "info" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n\n\n## Events\n\n| Event       | Description                                                                                                             | Type                |\n| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------- |\n| `dismiss`   | <span style="color:red">**[DEPRECATED]**</span> This event should not be used anymore. Use icDismiss instead.<br/><br/> | `CustomEvent<void>` |\n| `icDismiss` | Is emitted when the user dismisses the alert.                                                                           | `CustomEvent<void>` |\n\n\n## Slots\n\n| Slot        | Description                                    |\n| ----------- | ---------------------------------------------- |\n| `"action"`  | Content is placed to the right of the message. |\n| `"message"` | Content is placed to the right of the title.   |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-dialog](../ic-dialog)\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n- [ic-button](../ic-button)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-alert --\x3e ic-typography\n  ic-alert --\x3e ic-button\n  ic-button --\x3e ic-loading-indicator\n  ic-button --\x3e ic-tooltip\n  ic-loading-indicator --\x3e ic-typography\n  ic-tooltip --\x3e ic-typography\n  ic-dialog --\x3e ic-alert\n  style ic-alert fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';__webpack_require__("./src/components/ic-link/readme.md"),__webpack_require__("./src/components/ic-button/readme.md");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Web Components/Alert",component:"ic-alert"}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Variants",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages"
      ></ic-alert>
      <ic-alert
        variant="info"
        heading="Info"
        message="This alert is for displaying information"
      ></ic-alert>
      <ic-alert
        variant="error"
        heading="Error"
        message="This alert is for displaying errors"
      ></ic-alert>
      <ic-alert
        variant="warning"
        heading="Warning"
        message="This alert is for displaying warnings"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Success"
        message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple
        lines so the alert should expand as well to make sure it doesn't overflow"
      ></ic-alert>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"message-only",children:"Message only"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Message only",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible",children:"Dismissible"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Dismissible",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-action",children:"With action"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"With action",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary">Button</ic-button></ic-alert
    >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible-with-action",children:"Dismissible with action"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Dismissible with action",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary">Button</ic-button></ic-alert
    >`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"title-above",children:"Title above"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Title above",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-title",children:"Responsive title"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Responsive title",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Shorter title"
        message="Neither of these has 'title-above' set to true"
      ></ic-alert>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message",children:"Custom message"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom message",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography variant="body" slot="message">
        <p>
          This is some text and
          <ic-link href="/" inline>this is an inline link</ic-link> within the
          text.
        </p>
      </ic-typography>
    </ic-alert>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-message-and-title-above",children:"Custom message and title above"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Custom message and title above",parameters:{loki:{skip:!0}},children:lit_html.dy`<ic-alert
      heading="Want to know more about our coffee?"
      title-above="true"
    >
      <span slot="message" style="font:var(--ic-font-body)">
        Go to our <ic-link href="/">coffee page</ic-link> to learn more.
      </ic-typography>
    </ic-alert>`})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"announced",children:"Announced"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Announced",parameters:{loki:{skip:!0}},children:lit_html.dy`
      <ic-alert
        id="alert"
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages"
        announced="false"
      ></ic-alert>
      <br />
      <br />
      <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
        >Toggle announced prop</ic-button
      >
      <script>
        const alert = document.getElementById("alert");
        const btn = document.getElementById("btn");
        btn.addEventListener("click", onClick);
        function onClick(e) {
          e.preventDefault();
          alert.announced
            ? (alert.announced = "false")
            : (alert.announced = "true");
        }
      </script>
    `})})]})}const variants=()=>lit_html.dy`<ic-alert
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages"
      ></ic-alert>
      <ic-alert
        variant="info"
        heading="Info"
        message="This alert is for displaying information"
      ></ic-alert>
      <ic-alert
        variant="error"
        heading="Error"
        message="This alert is for displaying errors"
      ></ic-alert>
      <ic-alert
        variant="warning"
        heading="Warning"
        message="This alert is for displaying warnings"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Success"
        message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple
        lines so the alert should expand as well to make sure it doesn't overflow"
      ></ic-alert>`;variants.storyName="Variants",variants.parameters={storySource:{source:'html`<ic-alert\n        heading="Neutral"\n        message="This alert is for displaying miscellaneous messages"\n      ></ic-alert>\n      <ic-alert\n        variant="info"\n        heading="Info"\n        message="This alert is for displaying information"\n      ></ic-alert>\n      <ic-alert\n        variant="error"\n        heading="Error"\n        message="This alert is for displaying errors"\n      ></ic-alert>\n      <ic-alert\n        variant="warning"\n        heading="Warning"\n        message="This alert is for displaying warnings"\n      ></ic-alert>\n      <ic-alert\n        variant="success"\n        heading="Success"\n        message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple\n        lines so the alert should expand as well to make sure it doesn\'t overflow"\n      ></ic-alert>`'},loki:{skip:!0}};const messageOnly=()=>lit_html.dy`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>`;messageOnly.storyName="Message only",messageOnly.parameters={storySource:{source:'html`<ic-alert\n      message="This alert is for displaying miscellaneous messages"\n    ></ic-alert>`'},loki:{skip:!0}};const dismissible=()=>lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>`;dismissible.storyName="Dismissible",dismissible.parameters={storySource:{source:'html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      dismissible="true"\n    ></ic-alert>`'},loki:{skip:!0}};const withAction=()=>lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary">Button</ic-button></ic-alert
    >`;withAction.storyName="With action",withAction.parameters={storySource:{source:'html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      ><ic-button slot="action" variant="secondary">Button</ic-button></ic-alert\n    >`'},loki:{skip:!0}};const dismissibleWithAction=()=>lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary">Button</ic-button></ic-alert
    >`;dismissibleWithAction.storyName="Dismissible with action",dismissibleWithAction.parameters={storySource:{source:'html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      dismissible="true"\n      ><ic-button slot="action" variant="secondary">Button</ic-button></ic-alert\n    >`'},loki:{skip:!0}};const titleAbove=()=>lit_html.dy`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>`;titleAbove.storyName="Title above",titleAbove.parameters={storySource:{source:'html`<ic-alert\n      heading="Neutral"\n      message="This alert is for displaying miscellaneous messages"\n      title-above="true"\n    ></ic-alert>`'},loki:{skip:!0}};const responsiveTitle=()=>lit_html.dy`<ic-alert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Shorter title"
        message="Neither of these has 'title-above' set to true"
      ></ic-alert>`;responsiveTitle.storyName="Responsive title",responsiveTitle.parameters={storySource:{source:'html`<ic-alert\n        heading="This title is very long so should force the alert to add \'title-above\'"\n        message="This alert does not have \'title-above\' added as a prop but it is forced to add it due to the length of the title"\n      ></ic-alert>\n      <ic-alert\n        variant="success"\n        heading="Shorter title"\n        message="Neither of these has \'title-above\' set to true"\n      ></ic-alert>`'},loki:{skip:!0}};const customMessage=()=>lit_html.dy`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography variant="body" slot="message">
        <p>
          This is some text and
          <ic-link href="/" inline>this is an inline link</ic-link> within the
          text.
        </p>
      </ic-typography>
    </ic-alert>`;customMessage.storyName="Custom message",customMessage.parameters={storySource:{source:'html`<ic-alert heading="This alert uses a custom message slot">\n      <ic-typography variant="body" slot="message">\n        <p>\n          This is some text and\n          <ic-link href="/" inline>this is an inline link</ic-link> within the\n          text.\n        </p>\n      </ic-typography>\n    </ic-alert>`'},loki:{skip:!0}};const customMessageAndTitleAbove=()=>lit_html.dy`<ic-alert
      heading="Want to know more about our coffee?"
      title-above="true"
    >
      <span slot="message" style="font:var(--ic-font-body)">
        Go to our <ic-link href="/">coffee page</ic-link> to learn more.
      </ic-typography>
    </ic-alert>`;customMessageAndTitleAbove.storyName="Custom message and title above",customMessageAndTitleAbove.parameters={storySource:{source:'html`<ic-alert\n      heading="Want to know more about our coffee?"\n      title-above="true"\n    >\n      <span slot="message" style="font:var(--ic-font-body)">\n        Go to our <ic-link href="/">coffee page</ic-link> to learn more.\n      </ic-typography>\n    </ic-alert>`'},loki:{skip:!0}};const announced=()=>lit_html.dy`
      <ic-alert
        id="alert"
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages"
        announced="false"
      ></ic-alert>
      <br />
      <br />
      <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
        >Toggle announced prop</ic-button
      >
      <script>
        const alert = document.getElementById("alert");
        const btn = document.getElementById("btn");
        btn.addEventListener("click", onClick);
        function onClick(e) {
          e.preventDefault();
          alert.announced
            ? (alert.announced = "false")
            : (alert.announced = "true");
        }
      </script>
    `;announced.storyName="Announced",announced.parameters={storySource:{source:'html`\n      <ic-alert\n        id="alert"\n        heading="Neutral"\n        message="This alert is for displaying miscellaneous messages"\n        announced="false"\n      ></ic-alert>\n      <br />\n      <br />\n      <ic-button variant="primary" size="small" onClick="onClick()" id="btn"\n        >Toggle announced prop</ic-button\n      >\n      <script>\n        const alert = document.getElementById("alert");\n        const btn = document.getElementById("btn");\n        btn.addEventListener("click", onClick);\n        function onClick(e) {\n          e.preventDefault();\n          alert.announced\n            ? (alert.announced = "false")\n            : (alert.announced = "true");\n        }\n      <\/script>\n    `'},loki:{skip:!0}};const componentMeta={title:"Web Components/Alert",tags:["stories-mdx"],includeStories:["variants","messageOnly","dismissible","withAction","dismissibleWithAction","titleAbove","responsiveTitle","customMessage","customMessageAndTitleAbove","announced"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_alert_stories=componentMeta,__namedExportsOrder=["variants","messageOnly","dismissible","withAction","dismissibleWithAction","titleAbove","responsiveTitle","customMessage","customMessageAndTitleAbove","announced"]},"./src/components/ic-link/readme.md":module=>{module.exports='# ic-link\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property         | Attribute        | Description                                                                                                                                                                      | Type                                                                                                                                                                                     | Default     |\n| ---------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `appearance`     | `appearance`     | The appearance of the link, e.g. dark, light, or default.                                                                                                                        | `"dark" \\| "default" \\| "light"`                                                                                                                                                         | `"default"` |\n| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it.                                                                                                         | `boolean \\| string`                                                                                                                                                                      | `false`     |\n| `href`           | `href`           | The URL that the link points to.                                                                                                                                                 | `string`                                                                                                                                                                                 | `null`      |\n| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                                                            | `string`                                                                                                                                                                                 | `undefined` |\n| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                                                                        | `"" \\| "no-referrer" \\| "no-referrer-when-downgrade" \\| "origin" \\| "origin-when-cross-origin" \\| "same-origin" \\| "strict-origin" \\| "strict-origin-when-cross-origin" \\| "unsafe-url"` | `undefined` |\n| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                                                                | `string`                                                                                                                                                                                 | `undefined` |\n| `showIcon`       | `show-icon`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. The \'open in new tab/window\' icon will display automatically if target="_blank".<br/><br/> | `boolean`                                                                                                                                                                                | `undefined` |\n| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                                                              | `string`                                                                                                                                                                                 | `undefined` |\n\n\n## Methods\n\n### `setFocus() => Promise<void>`\n\nSets focus on the link.\n\n#### Returns\n\nType: `Promise<void>`\n\n\n\n\n## Slots\n\n| Slot            | Description                                         |\n| --------------- | --------------------------------------------------- |\n| `"router-item"` | Handle routing by nesting your routes in this slot. |\n\n\n## Dependencies\n\n### Used by\n\n - [ic-breadcrumb](../ic-breadcrumb)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-breadcrumb --\x3e ic-link\n  style ic-link fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n'}}]);
//# sourceMappingURL=components-ic-alert-ic-alert-stories-mdx.9c62b56e.iframe.bundle.js.map