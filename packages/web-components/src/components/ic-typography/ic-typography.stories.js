import { html } from "lit-html";

const defaultArgs = {
  applyVerticalMargins: false,
  bold: false,
  italic: false,
  strikethrough: false,
  underline: false,
  variant: "body",
};

export default {
  title: "Web Components/Typography",
  component: "ic-typography",
};

export const Default = {
  render: (args) => html`<ic-typography>I am typography</ic-typography>`,
  name: "Default",
};

export const Variants = {
  render: () => html`
    <ic-typography variant="h1">Extra large title</ic-typography>
    <ic-typography variant="h2">Large title</ic-typography>
    <ic-typography variant="h3">Medium title</ic-typography>
    <ic-typography variant="h4">Small title</ic-typography>
    <ic-typography variant="subtitle-large">Subtitle 1</ic-typography>
    <ic-typography variant="subtitle-small">Subtitle 2</ic-typography>
    <ic-typography variant="body">Body text</ic-typography>
    <ic-typography variant="label">Label</ic-typography>
    <ic-typography variant="caption">Caption text</ic-typography>
    <ic-typography variant="caption-uppercase">Caption uppercase</ic-typography>
    <ic-typography variant="label-uppercase">Label uppercase</ic-typography>
    <ic-typography variant="code-large">Code large</ic-typography>
    <ic-typography variant="code-small">Code small</ic-typography>
    <ic-typography variant="code-extra-small">Code extra small</ic-typography>
    <ic-typography variant="badge">Badge</ic-typography>
    <ic-typography variant="badge-small">Badge small</ic-typography>
  `,

  name: "Variants",
};

export const ComponentOverride = {
  render: () => html`
    <ic-typography variant="h1"><h3>H3 rendered as H1</h3></ic-typography>
  `,

  name: "Component override",
};

export const VerticalMargins = {
  render: () => html`
    <ic-typography apply-vertical-margins variant="h1"
      >Extra large title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="h2"
      >Large title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="h3"
      >Medium title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="h4"
      >Small title</ic-typography
    >
    <ic-typography apply-vertical-margins variant="subtitle-large"
      >Subtitle 1</ic-typography
    >
    <ic-typography apply-vertical-margins variant="subtitle-small"
      >Subtitle 2</ic-typography
    >
    <ic-typography apply-vertical-margins variant="body"
      >Body text</ic-typography
    >
    <ic-typography apply-vertical-margins variant="caption"
      >Caption text</ic-typography
    >
    <ic-typography apply-vertical-margins variant="caption-uppercase"
      >Caption uppercase</ic-typography
    >
    <ic-typography apply-vertical-margins variant="code-large"
      >Code large</ic-typography
    >
    <ic-typography apply-vertical-margins variant="code-small"
      >Code small</ic-typography
    >
    <ic-typography apply-vertical-margins variant="code-extra-small"
      >Code extra small</ic-typography
    >
  `,

  name: "Vertical margins",
};

export const Truncation = {
  render: () => html`
    <ic-typography max-lines="3" variant="body">
      Body of text that is truncated to three lines. Click the 'See more' link
      to expand the text, then click 'See less' to truncate the text once more!
      <br />
      Dripper caramelization java saucer grounds galão, mocha, and robusta
      kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait.
      Con panna, cup, cream, body americano affogato cup espresso, rich milk
      seasonal saucer grinder spoon that cultivar strong redeye frappuccino
      barista extraction redeye mazagran. Grounds, french press dripper organic
      and foam id saucer, crema, black rich dark, grounds breve coffee steamed
      caramelization percolator.
    </ic-typography>
  `,

  name: "Truncation",
};

export const Bold = {
  render: () => html`
    <ic-typography variant="h1" bold="true">Extra large title</ic-typography>
    <ic-typography variant="h2" bold="true">Large title</ic-typography>
    <ic-typography variant="h3" bold="true">Medium title</ic-typography>
    <ic-typography variant="h4" bold="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" bold="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" bold="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" bold="true">Body text</ic-typography>
    <ic-typography variant="label" bold="true">Label</ic-typography>
    <ic-typography variant="caption" bold="true">Caption text</ic-typography>
    <ic-typography variant="caption-uppercase" bold="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" bold="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" bold="true">Code large</ic-typography>
    <ic-typography variant="code-small" bold="true">Code small</ic-typography>
    <ic-typography variant="code-extra-small" bold="true"
      >Code extra small</ic-typography
    >
  `,

  name: "Bold",
};

export const Italic = {
  render: () => html`
    <ic-typography variant="h1" italic="true">Extra large title</ic-typography>
    <ic-typography variant="h2" italic="true">Large title</ic-typography>
    <ic-typography variant="h3" italic="true">Medium title</ic-typography>
    <ic-typography variant="h4" italic="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" italic="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" italic="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" italic="true">Body text</ic-typography>
    <ic-typography variant="label" italic="true">Label</ic-typography>
    <ic-typography variant="caption" italic="true">Caption text</ic-typography>
    <ic-typography variant="caption-uppercase" italic="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" italic="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" italic="true">Code large</ic-typography>
    <ic-typography variant="code-small" italic="true">Code small</ic-typography>
    <ic-typography variant="code-extra-small" italic="true"
      >Code extra small</ic-typography
    >
  `,

  name: "Italic",
};

export const Strikethrough = {
  render: () => html`
    <ic-typography variant="h1" strikethrough="true"
      >Extra large title</ic-typography
    >
    <ic-typography variant="h2" strikethrough="true">Large title</ic-typography>
    <ic-typography variant="h3" strikethrough="true"
      >Medium title</ic-typography
    >
    <ic-typography variant="h4" strikethrough="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" strikethrough="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" strikethrough="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" strikethrough="true">Body text</ic-typography>
    <ic-typography variant="label" strikethrough="true">Label</ic-typography>
    <ic-typography variant="caption" strikethrough="true"
      >Caption text</ic-typography
    >
    <ic-typography variant="caption-uppercase" strikethrough="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" strikethrough="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" strikethrough="true"
      >Code large</ic-typography
    >
    <ic-typography variant="code-small" strikethrough="true"
      >Code small</ic-typography
    >
    <ic-typography variant="code-extra-small" strikethrough="true"
      >Code extra small</ic-typography
    >
  `,

  name: "Strikethrough",
};

export const Underline = {
  render: () => html`
    <ic-typography variant="h1" underline="true"
      >Extra large title</ic-typography
    >
    <ic-typography variant="h2" underline="true">Large title</ic-typography>
    <ic-typography variant="h3" underline="true">Medium title</ic-typography>
    <ic-typography variant="h4" underline="true">Small title</ic-typography>
    <ic-typography variant="subtitle-large" underline="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography variant="subtitle-small" underline="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography variant="body" underline="true">Body text</ic-typography>
    <ic-typography variant="label" underline="true">Label</ic-typography>
    <ic-typography variant="caption" underline="true"
      >Caption text</ic-typography
    >
    <ic-typography variant="caption-uppercase" underline="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography variant="label-uppercase" underline="true"
      >Label uppercase</ic-typography
    >
    <ic-typography variant="code-large" underline="true"
      >Code large</ic-typography
    >
    <ic-typography variant="code-small" underline="true"
      >Code small</ic-typography
    >
    <ic-typography variant="code-extra-small" underline="true"
      >Code extra small</ic-typography
    >
  `,

  name: "Underline",
};

export const AllPropTextStyles = {
  render: () => html`
    <ic-typography
      variant="h1"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Extra large title</ic-typography
    >
    <ic-typography
      variant="h2"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Large title</ic-typography
    >
    <ic-typography
      variant="h3"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Medium title</ic-typography
    >
    <ic-typography
      variant="h4"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Small title</ic-typography
    >
    <ic-typography
      variant="subtitle-large"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Subtitle 1</ic-typography
    >
    <ic-typography
      variant="subtitle-small"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Subtitle 2</ic-typography
    >
    <ic-typography
      variant="body"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Body text</ic-typography
    >
    <ic-typography
      variant="label"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Label</ic-typography
    >
    <ic-typography
      variant="caption"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Caption text</ic-typography
    >
    <ic-typography
      variant="caption-uppercase"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Caption uppercase</ic-typography
    >
    <ic-typography
      variant="label-uppercase"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Label uppercase</ic-typography
    >
    <ic-typography
      variant="code-large"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Code large</ic-typography
    >
    <ic-typography
      variant="code-small"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Code small</ic-typography
    >
    <ic-typography
      variant="code-extra-small"
      strikethrough="true"
      italic="true"
      bold="true"
      underline="true"
      >Code extra small</ic-typography
    >
  `,

  name: "All prop text styles",
};

export const MinAndMaxContent = {
  render: () => html`
    <ic-typography variant="body">A</ic-typography>
    <ic-typography variant="body"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas
      eget lorem sed luctus. Aenean vitae lorem leo. Pellentesque fringilla
      semper posuere. Nullam eget sem felis. Fusce quis laoreet arcu. Nulla
      commodo fringilla magna eget vehicula. Morbi ac nisl tellus. Ut mollis,
      nunc blandit aliquam dignissim, neque neque rhoncus nisi, at maximus
      ligula est vitae felis. Nunc at eros posuere, finibus metus sit amet,
      cursus mi. Nunc euismod ac turpis sit amet luctus. Pellentesque dictum
      tempor congue. Vivamus consectetur orci eget ante molestie, eget luctus
      enim tempus. Nam iaculis odio et orci consequat, et volutpat dolor
      finibus. Proin et porttitor diam. Ut quis est vel diam tincidunt congue
      nec at ipsum.</ic-typography
    >
  `,

  name: "Min and max content",
};

export const Playground = {
  render: (args) =>
    html`<ic-typography
      apply-vertical-margins=${args.applyVerticalMargins}
      variant=${args.variant}
      bold=${args.bold}
      italic=${args.italic}
      strikethrough=${args.strikethrough}
      underline=${args.underline}
      >Typography to test</ic-typography
    >`,

  args: defaultArgs,

  argTypes: {
    variant: {
      options: [
        "body",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "label",
        "subtitle-large",
        "subtitle-small",
        "label-uppercase",
        "caption-uppercase",
        "code-large",
        "code-small",
        "code-extra-small",
      ],

      control: {
        type: "select",
      },
    },
  },

  name: "Playground",
};
