cube(`Programs`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.programs`,
  
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
    
    program: {
      sql: `program`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
