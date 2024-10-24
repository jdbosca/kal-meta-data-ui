export default {
	Button3onClick () {

		// Sample values for mine_ref, asset types, and dates
		const mineRef = mine_select.selectedOptionValue; // Assuming a mine_ref dropdown
		const assetTypes = MultiSelect1.selectedOptionValues.length > 0 
			? MultiSelect1.selectedOptionValues.join('-') 
			: ""; // Set assetTypes to an empty string if no values are selected
		const fromDate = new Date(DatePicker1.selectedDate); // Convert to Date object for formatting
		const toDate = new Date(DatePicker2.selectedDate);   // Convert to Date object for formatting

		// Format dates as MM/YY (month/year)
		const fromDateFormatted = `${(fromDate.getMonth() + 1).toString().padStart(2, '0')}/${fromDate.getFullYear().toString().slice(-2)}`;
		const toDateFormatted = `${(toDate.getMonth() + 1).toString().padStart(2, '0')}/${toDate.getFullYear().toString().slice(-2)}`;

		// Concatenate values into the format: MineRef-AssetTypes-FromDate-ToDate
		const result = `${mineRef}-${assetTypes}-${fromDateFormatted}-${toDateFormatted}`;
		
		// Clear the InputSmartcareId field before setting the new value
		InputSmartcareId.setValue(""); // Clear the field
		InputSmartcareId.setValue(result); // Set the new value
		
		// Optionally log the result for debugging
		console.log(result);
	}
}
