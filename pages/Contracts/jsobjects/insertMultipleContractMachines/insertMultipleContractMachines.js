export default {
	insertMultipleContractMachines: () => {

		// Map only the asset_id values
		const values = inputAssetIDs.selectedOptionValues.map(asset_id => ({ asset_id }));

		// Run the query for each asset_id
		return Promise.all(values.map(value => {
			return InsertNewContractMachines.run(value);
		}));
	}
}