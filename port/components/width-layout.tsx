import { ReactNode } from "react";
import clsx from "clsx";

interface LayoutProps {
  children: ReactNode;
  narrow?: boolean;
}

const WidthLayout: React.FC<LayoutProps> = ({ children, narrow = false }) => {
  const defaultClass = narrow ? "w-[80%]" : "w-[90%]";
  const extraLargeClass = narrow ? "2xl:w-[75%]" : "2xl:w-[80%]";

  return (
    <div
      className={clsx(
        defaultClass,
        extraLargeClass,
        "  mx-auto 2xl:max-w-7xl "
      )}
    >
      {children}
    </div>
  );
};

export default WidthLayout;
