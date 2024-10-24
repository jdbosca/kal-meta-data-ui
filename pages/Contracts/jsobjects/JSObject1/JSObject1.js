export default {
	Button3onClick () {

		// Sample values for customer, mine_ref, asset types, and dates
		const customer = Select3.selectedOptionValue;  // Assuming a customer dropdown
		const mineRef = mine_select.selectedOptionValue; // Assuming a mine_ref dropdown
		const assetType = MultiSelect1.selectedOptionValues[0]; // Assuming only one asset type is selected
		const fromDate = new Date(DatePicker1.selectedDate); // Convert to Date object for formatting
		const toDate = new Date(DatePicker2.selectedDate);   // Convert to Date object for formatting
		const subscriptionId = InputSmartcareId.text;        // Assuming an input field for subscription ID

		// Format dates as MM/YY (month/year)
		const fromDateFormatted = `${(fromDate.getMonth() + 1).toString().padStart(2, '0')}/${fromDate.getFullYear().toString().slice(-2)}`;
		const toDateFormatted = `${(toDate.getMonth() + 1).toString().padStart(2, '0')}/${toDate.getFullYear().toString().slice(-2)}`;

		// Concatenate values into the required format: Customer-MineRef-AssetType-FromDate-ToDate-SubscriptionID
		const result = `${customer}-${mineRef}-${assetType}-${fromDateFormatted}-${toDateFormatted}-${subscriptionId}`;
		
		// Set the subscriptionId to the concatenated result
		InputSmartcareId.setValue(result);
		
		// Optionally log the result for debugging
		console.log(result);
	}
}

