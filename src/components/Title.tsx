import classNames from 'classnames';
import React from 'react';
type TitleProps = {
  children?: string;
  className?: string;
};
const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div className={classNames(className, 'text-[32px] text-black font-bold')}>{children}</div>
  );
};

export default Title;
