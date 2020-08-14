cube(`LogAgents`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.log_agents`,
  
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
    
    reason: {
      sql: `reason`,
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
