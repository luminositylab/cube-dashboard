cube(`HdTicketHistory`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.hd_ticket_history`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, lastchangedate, transactiondate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    changedfrom: {
      sql: `${CUBE}.\`changedFrom\``,
      type: `string`
    },
    
    changedby: {
      sql: `${CUBE}.\`changedBy\``,
      type: `string`
    },
    
    comments: {
      sql: `comments`,
      type: `string`
    },
    
    lastchangedate: {
      sql: `${CUBE}.\`lastChangeDate\``,
      type: `time`
    },
    
    transactiondate: {
      sql: `${CUBE}.\`transactionDate\``,
      type: `time`
    }
  }
});
