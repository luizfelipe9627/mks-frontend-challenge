import React from "react";
import { render } from "@testing-library/react";
import Footer from "@/components/Footer/Footer";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("Footer", () => {
  it("Deve renderizar o componente Footer sem erros", () => {
    render(<Footer />);
  });
});
