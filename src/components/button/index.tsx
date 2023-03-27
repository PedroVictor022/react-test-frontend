import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  color?: 'red' | 'green'
}

const Button = ({children, isLoading = false, color = 'green'}: ButtonProps) => {
  return <button style={{ backgroundColor: color }}>{isLoading ? 'Carregando...' : children}</button>;
}

export default Button;