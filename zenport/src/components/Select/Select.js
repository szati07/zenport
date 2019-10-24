import React from "react";
import SelectView from "./SelectView";

class Select extends React.Component {
  onChange = e => {
    const { onChange } = this.props;
    onChange(e);
  };

  render() {
    return <SelectView onChange={this.onChange} {...this.props} />;
  }
}

export default Select;
