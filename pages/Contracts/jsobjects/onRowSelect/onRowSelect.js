export default {
  onRowSelect: () => {
		navigateTo("SubscriptionDetailsPage", {
				subscription_id: {{row.smartcare_subscription_id}}
		});
  }
}
