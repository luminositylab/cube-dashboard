cube(`InventoryPostponed`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.inventory_postponed`,
  
  joins: {
    Inventories: {
      sql: `${CUBE}.inventoryid = ${Inventories}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, originaldate, newdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    reason: {
      sql: `reason`,
      type: `string`
    },
    
    originaldate: {
      sql: `originaldate`,
      type: `time`
    },
    
    newdate: {
      sql: `newdate`,
      type: `time`
    }
  }
});
