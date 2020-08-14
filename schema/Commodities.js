cube(`Commodities`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.commodities`,
  
  joins: {
    Units: {
      sql: `${CUBE}.unitid = ${Units}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, shortname]
    },
    
    qty: {
      sql: `qty`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    atccode: {
      sql: `atccode`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    shortname: {
      sql: `shortname`,
      type: `string`
    },
    
    presentation: {
      sql: `presentation`,
      type: `string`
    },
    
    units: {
      sql: `units`,
      type: `string`
    }
  }
});
