cube(`Genders`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.genders`,
  
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
    
    gender: {
      sql: `gender`,
      type: `string`
    }
  }
});
