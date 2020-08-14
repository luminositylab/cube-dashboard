cube(`UserPrograms`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.user_programs`,
  
  joins: {
    Users: {
      sql: `${CUBE}.userid = ${Users}.id`,
      relationship: `belongsTo`
    }
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
    }
  }
});
