cube(`MsgRawEmails`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.msg_raw_emails`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, uniqid, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    uniqid: {
      sql: `uniqid`,
      type: `string`
    },
    
    time: {
      sql: `time`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    subject: {
      sql: `subject`,
      type: `string`
    },
    
    bodyText: {
      sql: `body_text`,
      type: `string`
    },
    
    bodyHtml: {
      sql: `body_html`,
      type: `string`
    }
  }
});
