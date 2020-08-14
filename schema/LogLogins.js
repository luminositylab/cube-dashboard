cube(`LogLogins`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.log_logins`,
  
  joins: {
    Users: {
      sql: `${CUBE}.userid = ${Users}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, creationdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    login: {
      sql: `login`,
      type: `string`
    },
    
    result: {
      sql: `result`,
      type: `string`
    },
    
    custom1: {
      sql: `custom1`,
      type: `string`
    },
    
    creationdate: {
      sql: `creationdate`,
      type: `time`
    }
  }
});
