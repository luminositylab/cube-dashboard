cube(`Tasks`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.tasks`,
  
  joins: {
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
      relationship: `belongsTo`
    },
    
    Users: {
      sql: `${CUBE}.userid = ${Users}.id`,
      relationship: `belongsTo`
    },
    
    Contacts: {
      sql: `${CUBE}.contactid = ${Contacts}.id`,
      relationship: `belongsTo`
    },
    
    Schedules: {
      sql: `${CUBE}.\`scheduleId\` = ${Schedules}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, scheduleddate, completeddate]
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
    
    comments: {
      sql: `comments`,
      type: `string`
    },
    
    rscReason: {
      sql: `rsc_reason`,
      type: `string`
    },
    
    canReason: {
      sql: `can_reason`,
      type: `string`
    },
    
    scheduleddate: {
      sql: `scheduleddate`,
      type: `time`
    },
    
    completeddate: {
      sql: `completeddate`,
      type: `time`
    }
  }
});
