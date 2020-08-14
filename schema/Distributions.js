cube(`Distributions`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.distributions`,
  
  joins: {
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
      relationship: `belongsTo`
    },
    
    Facilities: {
      sql: `${CUBE}.\`facilityId\` = ${Facilities}.id`,
      relationship: `belongsTo`
    },
    
    Commodities: {
      sql: `${CUBE}.\`commodityId\` = ${Commodities}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, importid, distributiondate]
    },
    
    totalQty: {
      sql: `total_qty`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    importid: {
      sql: `importid`,
      type: `string`
    },
    
    distributiondate: {
      sql: `distributiondate`,
      type: `time`
    }
  }
});
