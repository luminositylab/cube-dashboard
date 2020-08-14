cube(`DistributionCCommodityItems`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.distribution_c_commodity_items`,
  
  joins: {
    Commodities: {
      sql: `${CUBE}.commodityid = ${Commodities}.id`,
      relationship: `belongsTo`
    },
    
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
    }
  }
});
