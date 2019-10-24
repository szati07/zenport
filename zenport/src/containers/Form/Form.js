import React, { Component } from "react";
import FormView from "./FormView";

class Form extends Component {
	constructor(props) {
		super(props);
		
		console.log(props);

    this.state = {
			formFields:[],
			formData: {}
    };
	}
	
  onFieldChange = (key, value) => {
		this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [key]: value,
      },
    }), this.onFormChange);
	}

	onFormChange = () => {
    const { onFormChange } = this.props;
    const { formData } = this.state;
    onFormChange(formData);
  }

  render() {
    return <FormView onFieldChange={this.onFieldChange} {...this.props} />;
  }
}

export default Form;
