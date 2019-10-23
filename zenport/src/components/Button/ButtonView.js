import React from 'react';

const ButtonView = ({
    children, ...props
}) => (
    <button
      {...props}
    >
        {children}
    </button>
)

export default ButtonView;