cube(`SystemCalls`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.\`systemCalls\``,
  
  joins: {
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, offerdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    offerdate: {
      sql: `${CUBE}.\`offerDate\``,
      type: `time`
    }
  }
});
