cube(`FacilityLocations`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.facility_locations`,
  
  joins: {
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Locations: {
      sql: `${CUBE}.locationid = ${Locations}.id`,
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
    },
    
    access: {
      sql: `access`,
      type: `string`
    }
  }
});
