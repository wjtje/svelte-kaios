import "@testing-library/jest-dom";

import { render } from "@testing-library/svelte";

import Header from "../Header.svelte";
import { ORANGE } from "@skui/style";
import CustomHeader from "./CustomHeader.svelte";

test("It should render the default text", () => {
  const { getByText } = render(Header, { color: ORANGE });

  expect(getByText("Svelte-kaios")).toBeInTheDocument();
});

test("It should render slotted content", () => {
  const { getByText } = render(CustomHeader, { color: ORANGE });

  expect(getByText("Custom title")).toBeInTheDocument();
});

test("It should use the correct colors", async () => {
  const { container } = render(Header, { color: ORANGE });

  const header = container.getElementsByTagName("header").item(0) ?? container;

  expect(header).toHaveStyle({
    "--background": ORANGE[0],
    "--foreground": ORANGE[1],
  });
});
