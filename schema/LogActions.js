cube(`LogActions`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.log_actions`,
  
  joins: {
    Users: {
      sql: `${CUBE}.userid = ${Users}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, guid, dstname, creationdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    guid: {
      sql: `guid`,
      type: `string`
    },
    
    dstname: {
      sql: `dstname`,
      type: `string`
    },
    
    dstmail: {
      sql: `dstmail`,
      type: `string`
    },
    
    origin: {
      sql: `origin`,
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
