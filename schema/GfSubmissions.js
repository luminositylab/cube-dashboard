cube(`GfSubmissions`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.gf_submissions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, gfid, uuid, callid, submissiondate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    gfid: {
      sql: `gfid`,
      type: `string`
    },
    
    uuid: {
      sql: `uuid`,
      type: `string`
    },
    
    callid: {
      sql: `callid`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    submissiondate: {
      sql: `submissiondate`,
      type: `time`
    }
  }
});
