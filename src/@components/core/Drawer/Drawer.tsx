import React, { ReactNode } from "react";
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  className?: string;
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> & {
  Header: React.FC<{ children: ReactNode; className?: string }>;
  Body: React.FC<{ children: ReactNode; className?: string }>;
  Footer: React.FC<{ children: ReactNode; className?: string }>;
} = ({ isOpen, onClose, children, className = "" }) => {
  return (
    <>
      <div
        className={`fixed top-0 h-full right-0  md:w-[360px] w-[90%] bg-white dark:bg-gray-800 z-50 transform transition-transform border-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${className} flex flex-col`}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

Drawer.Header = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={` ${className}`}>{children}</div>;

Drawer.Body = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`pe-2 overflow-y-auto flex-grow ${className}`}>
    {children}
  </div>
);

Drawer.Footer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`${className} pr-2 mt-auto`}>{children}</div>;

export default Drawer;
