cube(`ContactsPhones`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.contacts_phones`,
  
  joins: {
    Contacts: {
      sql: `${CUBE}.contactid = ${Contacts}.id`,
      relationship: `belongsTo`
    },
    
    Phones: {
      sql: `${CUBE}.phoneid = ${Phones}.id`,
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
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
