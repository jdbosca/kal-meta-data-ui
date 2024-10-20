export default {
  onRowSelect: () => {
    return storeValue('asset_id', data_table.selectedRow.smartcare_subscription_id)
      .then(() => {
        navigateTo('Machine Contract Details');
      });
  }
}
