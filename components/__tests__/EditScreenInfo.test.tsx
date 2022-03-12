import { render } from "@testing-library/react-native";
import EditScreen from "components/EditScreen";

describe("A simple test", () => {
  it("should do something", () => {
    const { getByText } = render(<EditScreen />);

    expect(getByText("Open up the code for this screen")).toBeTruthy();
  });
});
