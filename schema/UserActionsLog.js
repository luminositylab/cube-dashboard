cube(`UserActionsLog`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.user_actions_log`,
  
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
      drillMembers: [id, name, creationdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    phone: {
      sql: `phone`,
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
    
    src: {
      sql: `src`,
      type: `string`
    },
    
    creationdate: {
      sql: `creationdate`,
      type: `time`
    }
  }
});
