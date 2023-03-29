import { render } from "@testing-library/react";
import { TitleComponent } from ".";

describe("Should be able to render a button", () => {
  it('Render title', () => {
    const {getByText, getByRole} = render(<TitleComponent>Teste</TitleComponent>);
    const btnEl = getByRole('heading');
    expect(btnEl).toBeInTheDocument();
  })
});