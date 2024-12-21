import classNames from 'classnames';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

type ButtonProps = {
  className?: string;
  children?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        className,
        `group/edit hover:bg-[#86B24F] transition w-[245px] font-bold text-white cursor-pointer h-[55px] bg-green rounded-[18px] flex items-center gap-2 justify-center`,
      )}>
      <ArrowLeft className="w-[20px] group-hover/edit:-translate-x-0.5 transition" />
      {children}
    </div>
  );
};

export default Button;
