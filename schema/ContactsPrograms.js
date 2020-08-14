cube(`ContactsPrograms`, {
  sql: `SELECT * FROM \`CP00CALLCENTER_DEV\`.contacts_programs`,
  
  joins: {
    Contacts: {
      sql: `${CUBE}.contactid = ${Contacts}.id`,
      relationship: `belongsTo`
    },
    
    Facilities: {
      sql: `${CUBE}.facilityid = ${Facilities}.id`,
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
    
    status: {
      sql: `status`,
      type: `string`
    }
  }
});
