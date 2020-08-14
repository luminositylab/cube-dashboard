cube(`CommodityGroups`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.commodity_groups`,
  
  joins: {
    Programs: {
      sql: `${CUBE}.programid = ${Programs}.id`,
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
    
    group: {
      sql: `group`,
      type: `string`
    },
    
    default: {
      sql: `default`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
