import React, { Component } from 'react';
import { connect } from 'react-redux';
import MealCategoryView from './MealCategoryView';
import { formFields } from './mealCategoryFormFields';
import { mealSelection } from '../../../../actions/action'

class MealCategory extends Component {
    state = {
        formFields: [],
    }

    componentDidMount() {
        this.setState(() => ({
            formFields
        }))
    }

    onFormChange = (formData) => {
				const {
					mealSelection
				} = this.props;
				mealSelection(formData);
        console.log(formData)
    }

    render() {
        return (
            <MealCategoryView
							onFormChange={this.onFormChange}
              {...this.state}
            />
        )
    }
}

const mapDispatchToProps = dispatch => ({
  mealSelection: (payload) => dispatch(mealSelection(payload))
});

export default connect(null, mapDispatchToProps)(MealCategory);