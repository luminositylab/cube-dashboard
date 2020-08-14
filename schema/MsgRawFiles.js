cube(`MsgRawFiles`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.msg_raw_files`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, filename]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    filename: {
      sql: `filename`,
      type: `string`
    }
  }
});
