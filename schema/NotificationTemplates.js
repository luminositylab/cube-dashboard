cube(`NotificationTemplates`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.notification_templates`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    template: {
      sql: `template`,
      type: `string`
    },
    
    destination: {
      sql: `destination`,
      type: `string`
    },
    
    subject: {
      sql: `subject`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    htmlbody: {
      sql: `htmlbody`,
      type: `string`
    }
  }
});
