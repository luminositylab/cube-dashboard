cube(`FacilitiesZk`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.facilities_zk`,
  
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
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
