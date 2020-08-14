cube(`Facilities`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.facilities`,
  
  joins: {
    Fundings: {
      sql: `${CUBE}.fundingsid = ${Fundings}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, creationdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    facility: {
      sql: `facility`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    latitude: {
      sql: `latitude`,
      type: `string`
    },
    
    longitude: {
      sql: `longitude`,
      type: `string`
    },
    
    creationdate: {
      sql: `creationdate`,
      type: `time`
    }
  }
});
