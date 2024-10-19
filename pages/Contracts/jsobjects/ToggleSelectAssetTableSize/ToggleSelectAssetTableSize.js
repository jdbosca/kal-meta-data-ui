export default {
  toggleModalSize: () => {
    let isModalExpanded = appsmith.store.isModalExpanded || false;

    // Toggle the state and store it
    storeValue("isModalExpanded", !isModalExpanded);
  },
}
