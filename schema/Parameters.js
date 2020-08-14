cube(`Parameters`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.parameters`,
  
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
    
    parameter: {
      sql: `parameter`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
    }
  }
});
