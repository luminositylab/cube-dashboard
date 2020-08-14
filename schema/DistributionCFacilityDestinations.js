cube(`DistributionCFacilityDestinations`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.distribution_c_facility_destinations`,
  
  joins: {
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
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
