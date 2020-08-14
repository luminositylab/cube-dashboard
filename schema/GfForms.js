cube(`GfForms`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.gf_forms`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [gfid, title, lastupdate, creationdate]
    }
  },
  
  dimensions: {
    gfid: {
      sql: `gfid`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    direction: {
      sql: `direction`,
      type: `string`
    },
    
    publisherurl: {
      sql: `publisherurl`,
      type: `string`
    },
    
    link: {
      sql: `link`,
      type: `string`
    },
    
    editoremail: {
      sql: `editoremail`,
      type: `string`
    },
    
    lastupdate: {
      sql: `lastupdate`,
      type: `time`
    },
    
    creationdate: {
      sql: `creationdate`,
      type: `time`
    }
  }
});
