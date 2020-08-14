cube(`InventoryDetails`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.inventory_details`,
  
  joins: {
    Inventories: {
      sql: `${CUBE}.inventoryid = ${Inventories}.id`,
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
      drillMembers: [id, dateprecision, created, lastinventorydate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    dateprecision: {
      sql: `dateprecision`,
      type: `string`
    },
    
    location: {
      sql: `location`,
      type: `string`
    },
    
    usedhere: {
      sql: `${CUBE}.\`usedHere\``,
      type: `string`
    },
    
    storedhere: {
      sql: `${CUBE}.\`storedHere\``,
      type: `string`
    },
    
    comments: {
      sql: `${CUBE}.\`Comments\``,
      type: `string`
    },
    
    created: {
      sql: `created`,
      type: `time`
    },
    
    lastinventorydate: {
      sql: `${CUBE}.\`lastInventoryDate\``,
      type: `time`
    }
  }
});
