cube(`DistributionImports`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.distribution_imports`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, importid, distDate]
    },
    
    totalQty: {
      sql: `total_qty`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    importid: {
      sql: `importid`,
      type: `string`
    },
    
    item: {
      sql: `item`,
      type: `string`
    },
    
    destination: {
      sql: `destination`,
      type: `string`
    },
    
    distDate: {
      sql: `dist_date`,
      type: `time`
    }
  }
});
