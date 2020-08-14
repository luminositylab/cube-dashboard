cube(`Units`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.units`,
  
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
    
    unit: {
      sql: `unit`,
      type: `string`
    }
  }
});
