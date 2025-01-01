import { ReactNode, FC, JSX } from 'react';

interface IWrapper {
  condition: boolean;
  wrapper: (children: ReactNode) => JSX.Element;
  elseWrapper?: (children: ReactNode) => JSX.Element;
  children: ReactNode;
}

const Wrapper: FC<IWrapper> = ({
  condition,
  wrapper,
  children,
  elseWrapper,
}) => {
  if (condition) {
    return wrapper(children);
  }

  return elseWrapper ? elseWrapper(children) : <>{children}</>;
};

export default Wrapper;
