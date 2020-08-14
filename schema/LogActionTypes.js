cube(`LogActionTypes`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.log_action_types`,
  
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
    
    scope: {
      sql: `scope`,
      type: `string`
    },
    
    actiontype: {
      sql: `actiontype`,
      type: `string`
    }
  }
});
