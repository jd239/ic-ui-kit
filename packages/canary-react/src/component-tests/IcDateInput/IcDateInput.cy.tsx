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
// TODO: Add tests which involve checking customEvent returned object

describe("IcDataTables", () => {
  it("renders", () => {
    mount(<IcDateInput label="Test Label" />);

    cy.checkHydrated(DATE_INPUT);

    cy.get(DATE_INPUT).should("to.be.visible");
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

    cy.get("ic-button").click();

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

    cy.get("ic-button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should("have.value", "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      ""
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should("have.value", "");
  });

  it.skip("should test setting date to null programatically", () => {
    // TODO: Add null as a valid value type
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

    cy.get("ic-button").click();

    cy.findShadowEl(DATE_INPUT, DAY_INPUT_ARIA_LABEL).should("have.value", "");
    cy.findShadowEl(DATE_INPUT, MONTH_INPUT_ARIA_LABEL).should(
      "have.value",
      ""
    );
    cy.findShadowEl(DATE_INPUT, YEAR_INPUT_ARIA_LABEL).should("have.value", "");
  });
});
