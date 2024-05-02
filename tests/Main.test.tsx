import React from "react";
import { render } from "@testing-library/react";
import Main from "@/components/Main/Main";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("Main", () => {
  it("Deve renderizar o componente Main sem erros", () => {
    render(<Main />);
  });
});
