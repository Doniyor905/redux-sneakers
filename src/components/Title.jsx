import classNames from 'classnames';
import React from 'react';

const Title = ({ children, clasNames }) => {
  return (
    <div className={classNames(clasNames, 'text-[32px] text-black font-bold')}>{children}</div>
  );
};

export default Title;
