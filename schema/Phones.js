cube(`Phones`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.phones`,
  
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
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
