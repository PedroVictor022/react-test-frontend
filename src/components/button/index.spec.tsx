import Button from "@/components/button";
import { render } from "@testing-library/react";

describe('<Button>', () => {
  it('should render button', () => {
    const { getByText, getByRole } = render(<Button>Test render</Button>);

    const buttonElement = getByRole('button');

    expect(getByText('Test render')).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    
  })

  it('should render text "Carregando..." text when isLoading was passes', () => {
    const { getByText } = render(<Button isLoading>button</Button>);
    expect(getByText('Carregando...')).toBeInTheDocument();
  })

  it('should be able render button with background green by default', () => {
    const { getByRole } = render(<Button>button</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveStyle({ backgroundColor: 'green' });
  })

  it('should be able render button with background diferent red', () => {
    const { getByRole } = render(<Button>button</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).not.toHaveStyle('background-color: red');
  })
})