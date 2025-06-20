import { newSpecPage } from "@stencil/core/testing";
import { CheckboxGroup } from "../../ic-checkbox-group";
import { Checkbox } from "../../../ic-checkbox/ic-checkbox";
import { TextField } from "../../../ic-text-field/ic-text-field";

describe("ic-checkbox-group", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" required>
        <ic-checkbox value="test" label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-required");
  });

  it("should render as helper text", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" helper-text="helper test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-helpertext");
  });

  it("should test checkbox option as submit on form", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<form id="new-form"></form><ic-checkbox id="ic-checkbox" label="IC Checkbox Test" value="test-value" form="new-form" selected></ic-checkbox>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render checked", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" checked label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-checked");
  });

  it("should render indeterminate", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" checked indeterminate label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-indeterminate");
  });

  it("should render an aria label when group label hidden", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" hide-label name="test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-hidden-label");
  });

  it("should render an aria label when checkbox label hidden", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" label="test label" hide-label></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-hidden-checkbox-label");
  });

  it("should render in a disabled state", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" disabled label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-disabled");

    document.querySelector("ic-checkbox")?.setAttribute("disabled", "false");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("disabled-removed");
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-validation");
  });

  it("should render with hidden dynamic additional field", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" additional-field-display="dynamic" label="test label">
        <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-dynamic-field");
  });

  it("should render with dynamic additional field when checked", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label" additional-field-display="dynamic" checked>
        <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-dynamic-field-when-checked"
    );
  });

  it("should render with disabled static additional field", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label" additional-field-display="static">
          <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>
        <ic-checkbox value="test2" label="test label" additional-field-display="static">
          <div slot="additional-field">
          <ic-text-field placeholder="Placeholder" label="Test label"></ic-text-field>
          <ic-text-field placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-disabled-additional-field");

    const textfieldElements = document.querySelectorAll("ic-text-field");
    textfieldElements.forEach((textfield) => {
      expect(textfield.disabled).toBe(true);
    });
  });

  it("should set disabled attribute to false on static additional field when checked", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox, TextField],
      html: `<ic-checkbox-group label="test label" hide-label name="test" validation-status="error">
        <ic-checkbox value="test" label="test label" checked additional-field-display="static">
          <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>
        <ic-checkbox value="test2" label="test label" checked additional-field-display="static">
          <div slot="additional-field">
          <ic-text-field placeholder="Placeholder" label="Test label"></ic-text-field>
          <ic-text-field placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-disabled-attribute-removed-from-field"
    );

    const textfieldElements = document.querySelectorAll("ic-text-field");
    textfieldElements.forEach((textfield) => {
      expect(textfield.disabled).toBe(false);
    });
  });

  it("should pass the size on the checkbox group to the child checkboxes when there's no size set on them individually", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" size="small">
        <ic-checkbox value="test" label="test label"></ic-checkbox>
        <ic-checkbox value="test" label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot();

    const checkboxes = document.querySelectorAll("ic-checkbox");

    checkboxes.forEach((checkbox) => {
      expect(checkbox.classList.contains("ic-checkbox-small")).toBe(true);
    });
  });

  it("should prioritise the size on an individual checkbox over the size on the checkbox group", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test" size="large">
        <ic-checkbox value="test" label="test label" id="large-checkbox"></ic-checkbox>
        <ic-checkbox value="test" label="test label" size="small" id="small-checkbox"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    const smallCheckbox = document.querySelector(
      "ic-checkbox#small-checkbox"
    ) as HTMLIcCheckboxElement;
    expect(smallCheckbox["size"]).toMatch("small");

    const largeCheckbox = document.querySelector(
      "ic-checkbox:not(#small-checkbox)"
    ) as HTMLIcCheckboxElement;
    expect(largeCheckbox.classList.contains("ic-checkbox-large")).toBe(true);

    expect(page.root).toMatchSnapshot();
  });

  it("should change checked state", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<ic-checkbox value="test" label="test label" checked></ic-checkbox>`,
    });

    expect(page.rootInstance.checked).toBe(true);

    page.rootInstance.handleClick();
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(false);
  });

  it("should call 'setFocus' when checkbox is focused", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<ic-checkbox value="test" label="test label" checked></ic-checkbox>`,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should emit icCheck on click", async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup, Checkbox],
      html: `<ic-checkbox-group label="test label" name="test">
        <ic-checkbox value="test" label="test label"></ic-checkbox>
      </ic-checkbox-group>`,
    });

    const eventSpy = jest.fn();

    page.win.addEventListener("icCheck", eventSpy);

    document
      .querySelector("ic-checkbox")
      ?.shadowRoot?.querySelector("input")
      ?.click();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it("should test indeterminate with 'nativeIndeterminateBehaviour' set to 'false'", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<ic-checkbox value="test" label="test label" checked indeterminate></ic-checkbox>`,
    });
    await page.waitForChanges();

    expect(page.rootInstance.displayIndeterminate).toBe(true);

    page.root?.shadowRoot?.querySelector("input")?.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(false);
    expect(page.rootInstance.displayIndeterminate).toBe(false);

    page.root?.shadowRoot?.querySelector("input")?.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.displayIndeterminate).toBe(true);

    page.root?.setAttribute("indeterminate", "false");
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.displayIndeterminate).toBe(false);

    page.root?.setAttribute("indeterminate", "true");
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.displayIndeterminate).toBe(true);
  });

  it("should test indeterminate with 'nativeIndeterminateBehaviour' set to 'true'", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<ic-checkbox value="test" label="test label" indeterminate native-indeterminate-behaviour></ic-checkbox>`,
    });
    await page.waitForChanges();

    expect(page.rootInstance.displayIndeterminate).toBe(true);

    page.root?.shadowRoot?.querySelector("input")?.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.displayIndeterminate).toBe(false);

    page.root?.shadowRoot?.querySelector("input")?.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(false);
    expect(page.rootInstance.displayIndeterminate).toBe(false);

    page.root?.setAttribute("indeterminate", "false");
    await page.waitForChanges();

    page.root?.setAttribute("indeterminate", "true");
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(false);
    expect(page.rootInstance.displayIndeterminate).toBe(true);

    page.root?.shadowRoot?.querySelector("input")?.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.displayIndeterminate).toBe(false);
  });

  it("should test form reset event", async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<form>
          <ic-checkbox value="test" label="test label" checked></ic-checkbox>
          <button id="resetButton" type="reset">Reset</button>
      </form>`,
    });

    expect(page.rootInstance.checked).toBe(true);

    page.rootInstance.checked = false;
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(false);

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);

    //test disconnected callback
    page.setContent("");
  });

  it("should test labelNameHandler", async () => {
    const page = await newSpecPage({
      components: [Checkbox, CheckboxGroup],
      html: `<ic-checkbox-group label="test label" name="test">
      <ic-checkbox value="test" label="test label"></ic-checkbox>
    </ic-checkbox-group>`,
    });

    expect(page.root).toMatchSnapshot();

    page.root?.setAttribute("label", "new label");
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });
});
