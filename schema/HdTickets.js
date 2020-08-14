cube(`HdTickets`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.hd_tickets`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [closeDate]
    }
  },
  
  dimensions: {
    ticketType: {
      sql: `ticket_type`,
      type: `string`
    },
    
    callDuration: {
      sql: `call_duration`,
      type: `string`
    },
    
    resolution: {
      sql: `resolution`,
      type: `string`
    },
    
    recording: {
      sql: `recording`,
      type: `string`
    },
    
    closeDate: {
      sql: `close_date`,
      type: `time`
    }
  }
});
