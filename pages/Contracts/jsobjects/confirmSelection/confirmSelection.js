export default {
	confirmSelection: () => {
		// Get selected rows from the multi-select table
		const selectedRows = Machines.selectedRows;

		// Check if any rows are selected
		if (selectedRows.length === 0) {
			showAlert("Please select at least one item.");
			return;
		}

		// Extract the asset IDs from the selected rows
		const selectedAssetIDs = selectedRows.map(row => row.ASSET_ID).join(", "); // Assuming ASSET_ID is the field name

		// Set the asset IDs in the input field of the first modal
		inputAssetIDs.setSelectedOptions(selectedAssetIDs) // Replace 'inputAssetIDs' with your actual input widget name for asset IDs

	}
}
