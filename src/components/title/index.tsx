import React from "react";

type TitleProps = { children : string | React.ReactNode;
}

export const TitleComponent = ({ children }: TitleProps) => {
  return <h1>{children}</h1>;
}