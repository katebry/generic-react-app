import { render } from "../testUtils/testUtils";
import { ProgressIndicator } from "./ProgressIndicator";

describe("Progress Indicator", () => {
  const renderComponent = () => {
    return render(<ProgressIndicator currentPage={4} totalPages={7} />);
  };

  it("renders", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("displays the correct page number", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("progress-indicator")).toHaveTextContent(
      "Step 4 of 7"
    );
  });
});
