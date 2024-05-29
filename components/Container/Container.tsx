import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={`container max-w-7xl mx-auto px-[27px] sm:px-6 lg:px-20 xl:px-36 xxl:px-40`}
    >
      {children}
    </div>
  );
};
 
export default Container;
