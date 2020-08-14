cube(`Locations`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.locations`,
  
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
    
    location: {
      sql: `location`,
      type: `string`
    }
  }
});
