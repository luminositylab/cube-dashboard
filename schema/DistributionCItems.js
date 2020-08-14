cube(`DistributionCItems`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.distribution_c_items`,
  
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
    
    item: {
      sql: `item`,
      type: `string`
    },
    
    importable: {
      sql: `importable`,
      type: `string`
    }
  }
});
