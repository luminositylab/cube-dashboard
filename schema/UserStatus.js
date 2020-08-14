cube(`UserStatus`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.user_status`,
  
  joins: {
    Users: {
      sql: `${CUBE}.userid = ${Users}.id`,
      relationship: `belongsTo`
    },
    
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
      relationship: `belongsTo`
    },
    
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
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
      drillMembers: [id, isname, newname]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    task: {
      sql: `task`,
      type: `string`
    },
    
    facility: {
      sql: `facility`,
      type: `string`
    },
    
    contact: {
      sql: `contact`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    isname: {
      sql: `${CUBE}.\`isName\``,
      type: `string`
    },
    
    isemail: {
      sql: `${CUBE}.\`isEmail\``,
      type: `string`
    },
    
    newname: {
      sql: `${CUBE}.\`newName\``,
      type: `string`
    },
    
    newemail: {
      sql: `${CUBE}.\`newEmail\``,
      type: `string`
    },
    
    changets: {
      sql: `changets`,
      type: `time`
    }
  }
});
