import React from 'react';

const SelectView = ({value, ...props}) => (
    <select {...props}>
        {value.map((e,i) => <option key={i}>{e}</option>)}
    </select>
)

export default SelectView;