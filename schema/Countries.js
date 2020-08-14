cube(`Countries`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.countries`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, country]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    country: {
      sql: `country`,
      type: `string`
    }
  }
});
