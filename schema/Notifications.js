cube(`Notifications`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.notifications`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, created, datesent]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    from: {
      sql: `from`,
      type: `string`
    },
    
    to: {
      sql: `to`,
      type: `string`
    },
    
    cc: {
      sql: `cc`,
      type: `string`
    },
    
    created: {
      sql: `created`,
      type: `time`
    },
    
    datesent: {
      sql: `datesent`,
      type: `time`
    }
  }
});
