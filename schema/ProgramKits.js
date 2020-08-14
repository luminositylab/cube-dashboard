cube(`ProgramKits`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.program_kits`,
  
  joins: {
    Kits: {
      sql: `${CUBE}.kitid = ${Kits}.id`,
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
    },
    
    sentinel: {
      sql: `sentinel`,
      type: `string`
    }
  }
});
