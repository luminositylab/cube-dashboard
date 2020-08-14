cube(`FacilityPartners`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.facility_partners`,
  
  joins: {
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
      relationship: `belongsTo`
    },
    
    Partners: {
      sql: `${CUBE}.partnerid = ${Partners}.id`,
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
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
