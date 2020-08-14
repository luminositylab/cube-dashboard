cube(`Kits`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.kits`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, kitname]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    kitname: {
      sql: `${CUBE}.\`kitName\``,
      type: `string`
    }
  }
});
