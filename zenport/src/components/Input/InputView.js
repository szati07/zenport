import React from 'react';

const InputView = ({...props}) => (
    <input type="number" min="1" max="10" {...props} />
)

export default InputView;