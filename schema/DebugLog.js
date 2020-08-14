cube(`DebugLog`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.debug_log`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, datelog]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    datelog: {
      sql: `datelog`,
      type: `string`
    },
    
    messagelog: {
      sql: `messagelog`,
      type: `string`
    }
  }
});
