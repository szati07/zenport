import React from 'react';
import InputView from './InputView';


class Input extends React.Component {
    onChange = e => {
      const {
        onChange
      } = this.props;
      onChange(e);
    }

    render() {
      return (
        <InputView onChange={this.onChange} {...this.props}/>
      )
    }
}

export default Input;