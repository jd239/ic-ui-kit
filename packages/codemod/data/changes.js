export default [
  {
    v2Name: "small=true",
    v3Name: 'size="small"',
    componentsAffected: "ic-select",
    type: "prop",
  },
  {
    v2Name: `small\\b[^'"]`,
    v3Name: 'size="small"',
    componentsAffected: "ic-select",
    type: "absolute",
  },
  {
    v2Name: `size=[{]?["']default['"][}]?`,
    v3Name: 'size="medium"',
    componentsAffected: "ic-status-tag",
    type: "absolute",
  },
  {
    v2Name: `size=[{]?["']default['"][}]?`,
    v3Name: 'size="medium"',
    componentsAffected: "ic-dialog",
    type: "absolute",
  },
  {
    v2Name: `size=[{]?["']default['"][}]?`,
    v3Name: 'size="medium"',
    componentsAffected: "ic-switch",
    type: "absolute",
  },
  {
    v2Name: "group-title",
    v3Name: "label",
    componentsAffected: "ic-accordion-group",
    type: "prop",
  },
  {
    v2Name: "group-title",
    v3Name: "label",
    componentsAffected: "ic-footer-link-group",
    type: "prop",
  },
  {
    v2Name: "text-label",
    v3Name: "label",
    componentsAffected: "ic-badge",
    type: "prop",
  },
  {
    v2Name: "body-max-lines",
    v3Name: "max-lines",
    componentsAffected: "ic-empty-state",
    type: "prop",
  },
  {
    v2Name: "theme",
    v3Name: "brand",
    componentsAffected: "ic-theme",
    type: "prop",
  },
  {
    v2Name: "step-type",
    v3Name: "type",
    componentsAffected: "ic-step",
    type: "prop",
  },
  {
    v2Name: "step-title",
    v3Name: "heading",
    componentsAffected: "ic-step",
    type: "prop",
  },
  {
    v2Name: "step-subtitle",
    v3Name: "subheading",
    componentsAffected: "ic-step",
    type: "prop",
  },
  {
    v2Name: "step-status",
    v3Name: "status",
    componentsAffected: "ic-step",
    type: "prop",
  },
  {
    v2Name: "adjacent-count",
    v3Name: "adjacent-page-count",
    componentsAffected: "ic-pagination",
    type: "prop",
  },
  {
    v2Name: "boundary-count",
    v3Name: "boundary-page-count",
    componentsAffected: "ic-pagination",
    type: "prop",
  },
  {
    v2Name: "keyboard-shortcut",
    v3Name: "keyboard-shortcut-label",
    componentsAffected: "ic-menu-item",
    type: "prop",
  },
  {
    v2Name: "disable-filter",
    v3Name: "disable-auto-filtering",
    componentsAffected: "ic-search-bar",
    type: "prop",
  },
  {
    v2Name: "disable-filter",
    v3Name: "disable-auto-filtering",
    componentsAffected: "ic-select",
    type: "prop",
  },
  {
    v2Name: "max-length",
    v3Name: "max-characters",
    componentsAffected: "ic-text-field",
    type: "prop",
  },
  {
    v2Name: "toggle-checked",
    v3Name: "checked",
    componentsAffected: "ic-menu-item",
    type: "prop",
  },
  {
    v2Name: "toggle-checked",
    v3Name: "checked",
    componentsAffected: "ic-toggle-button",
    type: "prop",
  },
  {
    v2Name: "hint-text",
    v3Name: "assistive-hint-text",
    componentsAffected: "ic-search-bar",
    type: "prop",
  },
  {
    v2Name: "side-nav-expanded",
    v3Name: "ic-side-nav-expanded",
    componentsAffected: "ic-side-navigation",
    type: "prop",
  },
  {
    v2Name: "top-nav-resized",
    v3Name: "ic-top-nav-resized",
    componentsAffected: "ic-top-navigation",
    type: "prop",
  },
  {
    v2Name: "ic-data-entity",
    v3Name: "ic-data-list",
    componentsAffected: "ic-data-entity",
    type: "web-component",
  },
  {
    v2Name: "HTMLIcDataEntityElement",
    v3Name: "HTMLIcDataListElement",
    componentsAffected: "HTMLIcDataEntityElement",
    type: "component",
  },
  {
    v2Name: "ic-card",
    v3Name: "ic-card-vertical",
    componentsAffected: "ic-card",
    type: "web-component",
  },
  {
    v2Name: "HTMLIcCardElement",
    v3Name: "HTMLIcCardVerticalElement",
    componentsAffected: "HTMLIcCardElement",
    type: "component",
  },
  {
    v2Name: "ic-select-with-multi",
    v3Name: "ic-select",
    componentsAffected: "ic-select-with-multi",
    type: "web-component",
  },
  {
    v2Name: "HTMLIcSelectWithMultiElement",
    v3Name: "HTMLIcSelectElement",
    componentsAffected: "HTMLIcSelectWithMultiElement",
    type: "component",
  },
];
