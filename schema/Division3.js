cube(`Division3`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.division3`,
  
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
    
    division: {
      sql: `division`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
