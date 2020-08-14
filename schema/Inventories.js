cube(`Inventories`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.inventories`,
  
  joins: {
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
      relationship: `belongsTo`
    },
    
    Facilities: {
      sql: `${CUBE}.\`facilityId\` = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Users: {
      sql: `${CUBE}.userid = ${Users}.id`,
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
      drillMembers: [id, callid, dateprecision, inventorydate, lastshipmentdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    callid: {
      sql: `callid`,
      type: `string`
    },
    
    dateprecision: {
      sql: `dateprecision`,
      type: `string`
    },
    
    shipmentcomments: {
      sql: `shipmentcomments`,
      type: `string`
    },
    
    comments: {
      sql: `comments`,
      type: `string`
    },
    
    inventorydate: {
      sql: `inventorydate`,
      type: `time`
    },
    
    lastshipmentdate: {
      sql: `${CUBE}.\`lastshipmentDate\``,
      type: `time`
    }
  }
});
