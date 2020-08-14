cube(`LogCalls`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.log_calls`,
  
  joins: {
    Users: {
      sql: `${CUBE}.userid = ${Users}.id`,
      relationship: `belongsTo`
    },
    
    Facilities: {
      sql: `${CUBE}.\`facilityId\` = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
      relationship: `belongsTo`
    },
    
    Contacts: {
      sql: `${CUBE}.contactid = ${Contacts}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, guid, creationdate]
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
    
    ext: {
      sql: `ext`,
      type: `string`
    },
    
    oriphone: {
      sql: `oriphone`,
      type: `string`
    },
    
    reason: {
      sql: `reason`,
      type: `string`
    },
    
    dstphone: {
      sql: `dstphone`,
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
