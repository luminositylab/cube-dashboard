cube(`GfFields`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.gf_fields`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, gfid, fid, ftitle]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    gfid: {
      sql: `gfid`,
      type: `string`
    },
    
    fid: {
      sql: `fid`,
      type: `string`
    },
    
    findex: {
      sql: `findex`,
      type: `string`
    },
    
    ftitle: {
      sql: `ftitle`,
      type: `string`
    },
    
    ftype: {
      sql: `ftype`,
      type: `string`
    }
  }
});
