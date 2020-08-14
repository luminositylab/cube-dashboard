cube(`FacilityTypes`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.facility_types`,
  
  joins: {
    
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
    
    facilitytype: {
      sql: `facilitytype`,
      type: `string`
    }
  }
});
