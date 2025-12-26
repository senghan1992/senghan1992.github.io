import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>;
};

export default Container;
