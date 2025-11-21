import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-in fade-in-0 zoom-in-95 duration-300">
      {children}
    </div>
  );
};

export default PageTransition;
