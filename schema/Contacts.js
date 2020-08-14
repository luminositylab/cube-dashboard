cube(`Contacts`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.contacts`,
  
  joins: {
    Titles: {
      sql: `${CUBE}.titleid = ${Titles}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, firstname, lastname, employername]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    firstname: {
      sql: `firstname`,
      type: `string`
    },
    
    lastname: {
      sql: `lastname`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    skype: {
      sql: `skype`,
      type: `string`
    },
    
    jobposition: {
      sql: `jobposition`,
      type: `string`
    },
    
    employername: {
      sql: `employername`,
      type: `string`
    },
    
    related: {
      sql: `related`,
      type: `string`
    }
  }
});
