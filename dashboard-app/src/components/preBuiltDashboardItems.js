const preBuiltDashboardItems = [
    {
        id: "10",
        name: "PB 1",
        layout: JSON.stringify({}),
        vizState: JSON.stringify({
            query: {
                dimensions: [
                    "FacilitiesAnalysis.col_facid", 
                    "FacilitiesAnalysis.col_facilityName", 
                    "FacilitiesAnalysis.col_last_answered_call_date", 
                    "FacilitiesAnalysis.col_days_since_last_answered_call", 
                    "FacilitiesAnalysis.col_last_completed_inventory_date", 
                    "FacilitiesAnalysis.col_days_since_last_completed_inventory"
                ], 
                ungrouped: true,
                limit: 20,
                timeDimensions: [{
                    dimension: "FacilitiesAnalysis.col_last_answered_call_date",
                    dateRange: ["2019-08-16", "2019-10-16"],
                    granularity: "month"
                }],
                filters: []
            },
            chartType: "bar"
        })
    }
]

export default preBuiltDashboardItems;