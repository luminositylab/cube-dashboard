cube(`HdTicketDetails`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.hd_ticket_details`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [uuid, ftitle, submissiondate]
    }
  },
  
  dimensions: {
    form: {
      sql: `form`,
      type: `string`
    },
    
    uuid: {
      sql: `uuid`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    ftitle: {
      sql: `ftitle`,
      type: `string`
    },
    
    fielddesc: {
      sql: `fielddesc`,
      type: `string`
    },
    
    submissiondate: {
      sql: `submissiondate`,
      type: `time`
    }
  }
});
