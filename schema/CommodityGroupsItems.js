cube(`CommodityGroupsItems`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.commodity_groups_items`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    itemtype: {
      sql: `itemtype`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
