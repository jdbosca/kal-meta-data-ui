export default {
  onRowDoubleClick: () => {
    navigateTo('AssetDetailPage', {
      asset_id: assets_table.selectedRow.asset_id
    });
  }
}
