cube(`DistributionCDestinations`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.distribution_c_destinations`,
  
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
    
    destination: {
      sql: `destination`,
      type: `string`
    },
    
    importable: {
      sql: `importable`,
      type: `string`
    }
  }
});
