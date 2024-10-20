export default {
  onRowDoubleClick: () => {
    return storeValue('asset_id', assets_table.selectedRow.asset_id)
      .then(() => {
        navigateTo('AssetDetailPage');
      });
  }
}
