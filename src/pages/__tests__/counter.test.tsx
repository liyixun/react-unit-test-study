import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";

import Counter from "../Counter";

const renderBook = (): RenderResult =>
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

describe("counter页面单测", () => {
  it("正确响应加一的状态更新", async () => {
    renderBook();
    await act(async () => {
      fireEvent.click(screen.getByTestId("addOne"));
    });
    const resultElement = screen.getByTestId("result");
    expect(resultElement.innerHTML).toEqual("1");
  });

  it("正确响应减一的状态更新", async () => {
    renderBook();
    await act(async () => {
      fireEvent.click(screen.getByTestId("reduceOne"));
    });
    const resultElement = screen.getByTestId("result");
    expect(resultElement.innerHTML).toEqual("0");
  });
});
