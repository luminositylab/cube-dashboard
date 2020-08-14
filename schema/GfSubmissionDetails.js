cube(`GfSubmissionDetails`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.gf_submission_details`,
  
  joins: {
    
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
    
    fielddesc: {
      sql: `fielddesc`,
      type: `string`
    }
  }
});
