import React from "react";
import StepperView from "../../containers/Stepper/StepperView";

const MealPreOrderView = ({ ...stepperProps }) => (
	<>
	{console.log(stepperProps)}
		<StepperView 
			{...stepperProps}
		/>
	</>
);

export default MealPreOrderView;
