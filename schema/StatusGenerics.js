cube(`StatusGenerics`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.status_generics`,
  
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
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
