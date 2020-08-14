cube(`Rating`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.rating`,
  
  joins: {
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, created]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    created: {
      sql: `created`,
      type: `time`
    }
  }
});
