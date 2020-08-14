cube(`Users`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.users`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, firstname, lastname, username]
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
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    env: {
      sql: `env`,
      type: `string`
    },
    
    home: {
      sql: `home`,
      type: `string`
    },
    
    lang: {
      sql: `lang`,
      type: `string`
    }
  }
});
