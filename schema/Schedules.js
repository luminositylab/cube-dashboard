cube(`Schedules`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.schedules`,
  
  joins: {
    Facilities: {
      sql: `${CUBE}.\`facilityId\` = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Users: {
      sql: `${CUBE}.\`userID\` = ${Users}.id`,
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
      drillMembers: [id, startdate, enddate]
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
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    program: {
      sql: `program`,
      type: `string`
    },
    
    recurring: {
      sql: `recurring`,
      type: `string`
    },
    
    frequency: {
      sql: `frequency`,
      type: `string`
    },
    
    weekdays: {
      sql: `${CUBE}.\`weekDays\``,
      type: `string`
    },
    
    dow: {
      sql: `dow`,
      type: `string`
    },
    
    endtype: {
      sql: `${CUBE}.\`endType\``,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    startdate: {
      sql: `${CUBE}.\`startDate\``,
      type: `time`
    },
    
    enddate: {
      sql: `${CUBE}.\`endDate\``,
      type: `time`
    }
  }
});
