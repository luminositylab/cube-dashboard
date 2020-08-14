cube(`DistributionFiles`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.distribution_files`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, filename, importid, importdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    filename: {
      sql: `filename`,
      type: `string`
    },
    
    importid: {
      sql: `importid`,
      type: `string`
    },
    
    importdate: {
      sql: `importdate`,
      type: `time`
    }
  }
});
