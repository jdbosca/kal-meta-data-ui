export default {
  onRowSelect: () => {
    return storeValue('asset_id', data_table.selectedRow.asset_id)
      .then(() => {
        navigateTo('Machine Contract Details');
      });
  }
}
