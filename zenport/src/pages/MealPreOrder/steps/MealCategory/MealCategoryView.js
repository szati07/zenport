import React from 'react';
import Form from '../../../../containers/Form/Form';

const MealCategoryView= ({
    formFields, onFormChange
}) => (
    <>
        {console.log(formFields)}
        <Form
           formFields={formFields}
           onFormChange={f => onFormChange(f)}
        />
    </>

);

export default MealCategoryView;