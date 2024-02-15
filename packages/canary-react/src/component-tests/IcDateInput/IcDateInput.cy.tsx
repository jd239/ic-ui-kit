/* eslint-disable react/jsx-no-bind */
/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress/react";
import { IcDateInput } from "../../components";
import { DateInputUpdateValue } from "./IcDateInputTestData";

const DATE_INPUT = "ic-date-input";
const DAY_INPUT_CLASS = ".day-input";

const YEAR_INPUT_ARIA_LABEL = 'input[aria-label="year"]';
const ARROW_UP_KEY = "{upArrow}";
const ARROW_DOWN_KEY = "{downArrow}";
const DAY_INPUT_ARIA_LABEL = 'input[aria-label="day"]';
const MONTH_INPUT_ARIA_LABEL = 'input[aria-label="month"]';
const CUSTOM_DISABLE_DAY_MESSAGE = "Date disabled";
const LONG_CUSTOM_DISABLE_DAY_MESSAGE =
  "This is a very long message to test the validation message";
const STATUS_TEXT_SPAN = ".statustext";
const DEFAULT_THRESHOLD = 0.03;

describe("IcDateInput", () => {
  beforeEach(() => {
    cy.injectAxe();
  });
  afterEach(() => {
    cy.task("generateReport");
  });

  it("renders", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.get(DATE_INPUT).should("to.be.visible");

    cy.compareSnapshot("dateInputRender", DEFAULT_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("should update value on ArrowUp on day input", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_UP_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type("/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).should("have.value", "02");
  });

  it("should update value on ArrowDown on day input", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type(ARROW_DOWN_KEY);
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).type("/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_CLASS).should("have.value", "30");
  });

  it("should display validation error if date in the past is entered while disable past date is set to true", () => {
    mount(<IcDateInput label="Test Label" disablePast />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.get("ic-date-input")
      .shadow()
      .find(".statustext")
      .should(
        "have.text",
        "Dates in the past are not allowed. Please select a date in the future."
      );
  });

  it("should display validation error if date in the past is entered while disable past date is set to true", () => {
    mount(<IcDateInput label="Test Label" disableFuture />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("4000");

    cy.get("ic-date-input")
      .shadow()
      .find(".statustext")
      .should(
        "have.text",
        "Dates in the future are not allowed. Please select a date in the past."
      );
  });

  it("should remove validation status (from now) when disabled date is updated", () => {
    mount(<IcDateInput label="Test Label" disableFuture value="31/08/2025" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, "ic-input-validation ic-typography").should(
      "have.text",
      "Dates in the future are not allowed. Please select a date in the past."
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.findShadowEl(DATE_INPUT, "ic-input-validation").should("not.exist");
  });

  it("should remove validation status (until now) when disabled date is updated", () => {
    mount(<IcDateInput label="Test Label" disablePast value="10/08/2022" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, "ic-input-validation ic-typography").should(
      "have.text",
      "Dates in the past are not allowed. Please select a date in the future."
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("3000");

    cy.findShadowEl(DATE_INPUT, "ic-input-validation").should("not.exist");
  });

  it("should increase day when switching between input and arrow up", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("1{upArrow}/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(
      "have.value",
      "02"
    );
  });

  it("should decrease day when switching between input and arrow down", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("2{downArrow}/");

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(
      "have.value",
      "01"
    );

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should increase month when switching between input and arrow up", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("1{upArrow}/");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      "02"
    );
  });

  it("should set month to 12 when switching between input and arrow down", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("1{downArrow}/");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      "12"
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should increase year when switching between input and arrow up", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000{upArrow}");

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      "have.value",
      "2001"
    );
  });

  it("should decrease year when switching between input and arrow down", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000{downArrow}");

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      "have.value",
      "1999"
    );
  });

  it("should test setting date to undefined programatically", () => {
    mount(<DateInputUpdateValue updatedValue={undefined} />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(
      "have.value",
      "31"
    );
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      "08"
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      "have.value",
      "2025"
    );

    cy.get("button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should("have.value", "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      ""
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should("have.value", "");
  });

  it("should test setting date to empty string programatically", () => {
    mount(<DateInputUpdateValue updatedValue={""} />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(
      "have.value",
      "31"
    );
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      "08"
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      "have.value",
      "2025"
    );

    cy.get("button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should("have.value", "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      ""
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should("have.value", "");
  });

  it("should test setting date to null programatically", () => {
    mount(<DateInputUpdateValue updatedValue={null} />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(
      "have.value",
      "31"
    );
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      "08"
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      "have.value",
      "2025"
    );

    cy.get("button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should("have.value", "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      ""
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should("have.value", "");
  });

  it("should enter complete date and check for accessibility", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("30");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("04");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.compareSnapshot("dateInputWithValues", DEFAULT_THRESHOLD);
    cy.checkA11yWithWait();
  });

  it("should populate screen reader aria live when date is complete and updated", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("30");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("04");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.get("ic-date-input")
      .shadow()
      .find("span[role='status']")
      .should("have.text", "Selected date: Sunday, 30 April 2000");

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type(
      "{Backspace}{Backspace}{Backspace}{Backspace}"
    );

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2024");

    cy.get("ic-date-input")
      .shadow()
      .find("span[role='status']")
      .should("have.text", "Selected date: Tuesday, 30 April 2024");
  });

  it("should display validation message if date before min with date string with slashes", () => {
    mount(<IcDateInput label="Test Label" min="01/07/2001" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("06");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2000");

    cy.get("ic-date-input")
      .shadow()
      .find(".statustext")
      .should("have.text", "Please enter a date after 01/07/2001.");

    cy.compareSnapshot("dateInputWithMinValidation", DEFAULT_THRESHOLD);
  });

  it("should display validation message if date before max with date string with slashes", () => {
    mount(<IcDateInput label="Test Label" max="01/07/2024" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("01");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("12");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2050");

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      "have.text",
      "Please enter a date before 01/07/2024."
    );

    cy.compareSnapshot("dateInputWithMaxValidation", DEFAULT_THRESHOLD);
  });

  it("should move the cursor to the next input when using slash. Day > Month", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("/");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should move the cursor to the next input when using dash. Day > Month", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("-");

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should("have.focus");
  });

  it("should display custom disabledDaysMessage if disabled day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableDaysMessage={CUSTOM_DISABLE_DAY_MESSAGE}
        disableDays={[0]}
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2024");

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      "have.text",
      CUSTOM_DISABLE_DAY_MESSAGE
    );

    cy.compareSnapshot(
      "dateInputWithCustomDisableDaysMessage",
      DEFAULT_THRESHOLD
    );
  });

  it("should display a long custom disabledDaysMessage if disabled day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableDaysMessage={LONG_CUSTOM_DISABLE_DAY_MESSAGE}
        disableDays={[0]}
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("2024");

    cy.compareSnapshot(
      "dateInputWithLongCustomDisableDaysMessage",
      DEFAULT_THRESHOLD
    );
  });

  it("should display custom disabledFutureMessage if disabled future day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableFutureMessage={CUSTOM_DISABLE_DAY_MESSAGE}
        disableFuture
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("3024");

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      "have.text",
      CUSTOM_DISABLE_DAY_MESSAGE
    );

    cy.compareSnapshot(
      "dateInputWithCustomDisableFutureMessage",
      DEFAULT_THRESHOLD
    );
  });

  it("should display long custom disabledFutureMessage if disabled future day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disableFutureMessage={LONG_CUSTOM_DISABLE_DAY_MESSAGE}
        disableFuture
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("3024");

    cy.compareSnapshot(
      "dateInputWithLongCustomDisableFutureMessage",
      DEFAULT_THRESHOLD
    );
  });

  it("should display custom disabledPastMessage if disabled past day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disablePastMessage={CUSTOM_DISABLE_DAY_MESSAGE}
        disablePast
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("1990");

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      "have.text",
      CUSTOM_DISABLE_DAY_MESSAGE
    );

    cy.compareSnapshot(
      "dateInputWithCustomDisablePastMessage",
      DEFAULT_THRESHOLD
    );
  });

  it("should display long custom disabledPastMessage if disabled past day is set", () => {
    mount(
      <IcDateInput
        label="Test Label"
        disablePastMessage={LONG_CUSTOM_DISABLE_DAY_MESSAGE}
        disablePast
      />
    );

    cy.checkHydrated(DATE_INPUT);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type("18");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type("02");
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type("1990");

    cy.compareSnapshot(
      "dateInputWithLongCustomDisablePastMessage",
      DEFAULT_THRESHOLD
    );
  });

  it("should increase day if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type(ARROW_UP_KEY);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(
      "have.value",
      "21"
    );
  });

  it("should decrease day if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).type(ARROW_DOWN_KEY);

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should(
      "have.value",
      "19"
    );
  });

  it("should increase month if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type(ARROW_UP_KEY);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      "02"
    );
  });

  it("should decrease month if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).type(ARROW_DOWN_KEY);

    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      "12"
    );
  });

  it("should increase year if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type(ARROW_UP_KEY);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      "have.value",
      "2001"
    );
  });

  it("should decrease year if value already set", () => {
    mount(<IcDateInput label="Test Label" value="20/01/2000" />);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).focus();
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).type(ARROW_DOWN_KEY);

    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should(
      "have.value",
      "1999"
    );
  });

  it("should display error validation", () => {
    mount(
      <IcDateInput
        label="Test Label"
        validationStatus="error"
        validationText="Error"
      />
    );

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should("have.text", "Error");

    cy.compareSnapshot("dateInputWithErrorValidation", DEFAULT_THRESHOLD);
  });

  it("should display warning validation", () => {
    mount(
      <IcDateInput
        label="Test Label"
        validationStatus="warning"
        validationText="Warning"
      />
    );

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      "have.text",
      "Warning"
    );

    cy.compareSnapshot("dateInputWithWarningValidation", DEFAULT_THRESHOLD);
  });

  it("should display success validation", () => {
    mount(
      <IcDateInput
        label="Test Label"
        validationStatus="success"
        validationText="Success"
      />
    );

    cy.findShadowEl(DATE_INPUT, STATUS_TEXT_SPAN).should(
      "have.text",
      "Success"
    );

    cy.compareSnapshot("dateInputWithSuccessValidation", DEFAULT_THRESHOLD);
  });
});
