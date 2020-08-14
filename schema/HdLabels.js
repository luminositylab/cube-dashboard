cube(`HdLabels`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.hd_labels`,
  
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
    
    labelType: {
      sql: `label_type`,
      type: `string`
    },
    
    labelValue: {
      sql: `label_value`,
      type: `string`
    }
  }
});
