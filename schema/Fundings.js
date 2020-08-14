cube(`Fundings`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.fundings`,
  
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
    
    mechanism: {
      sql: `mechanism`,
      type: `string`
    }
  }
});
