cube(`FacilitiesAnalysis`, {
    sql: `SELECT 
    fac.id AS facid,
    div2.division AS Division2, div1.division AS Division1,
    div2.id  AS DivisionId2, div1.id DivisionId1,
    tip.facilitytype AS FacilityType, 
    fac.facility AS facilityName,  
    p.id AS ProgramId, 
    p.program AS Program, 
    ifnull(pn.name,'') as Partner,
    fst.id as StatusId, 
    fst.status as Status, 
    m.id as Funding, 
    m.mechanism as Mechanism,
    ifnull(getLastCalldate(647, fac.id,fp.programid) ,'NO ANSWERED CALLS') AS 'last_answered_call_date',
    ifnull((TO_DAYS(NOW()) - TO_DAYS(getLastCalldate(647,fac.id,fp.programid))), 'NO ANSWERED CALLS') AS 'days_since_last_answered_call',
    ifnull((SELECT max(inventorydate) FROM inventories
             WHERE facilityid=fac.id and status=1 and programid=p.id),'NO INVENTORIES') AS 'last_completed_inventory_date',
    ifnull((TO_DAYS(NOW()) - TO_DAYS((SELECT max(inventorydate) FROM inventories
             WHERE facilityid=fac.id and status=1 and programid=p.id))), 'NO INVENTORIES') AS 'days_since_last_completed_inventory'
       FROM facilities fac
       LEFT JOIN division2 div2 ON fac.divisionid  = div2.id
       LEFT JOIN division1 div1 ON div2.parentid  = div1.id
       LEFT JOIN status_facility fst ON fac.status = fst.id 
       LEFT JOIN facility_types  tip ON fac.facilitytypeid = tip.id 
       LEFT JOIN fundings m   ON fac.fundingsid = m.id
       LEFT JOIN facility_programs fp  ON fac.id = fp.facilityid 
       LEFT JOIN facility_partners par ON fac.id = par.facilityid AND fp.programid= par.programid
       LEFT JOIN partners pn  ON par.partnerid = pn.id AND pn.status=1
       LEFT JOIN programs p  ON fp.programid = p.id
     WHERE  fac.status NOT IN (1,3) AND p.id IS NOT NULL AND fp.status=1
     ORDER BY 2,3,5`,

     dimensions: {
        col_facid: {
            sql: `facid`,
            type: `number`
        },
        col_facilityName: {
            sql: `facilityName`,
            type: `string`
        },
        col_division2: {
            sql: `Division2`,
            type: `string`
        },
        col_division1: {
            sql: `Division1`,
            type: `string`
        },
        col_facilityType: {
            sql: `FacilityType`,
            type: `string`
        },
        col_program: {
            sql: `Program`,
            type: `string`
        },
        col_partner: {
            sql: `Partner`,
            type: `string`
        },
        col_status: {
            sql: `Status`,
            type: `string`
        },
        col_funding: {
            sql: `Funding`,
            type: `string`
        },
        col_mechanism: {
            sql: `Mechanism`,
            type: `string`
        },
        col_last_answered_call_date: {
            sql: `last_answered_call_date`,
            type: `string`
        },
        col_days_since_last_answered_call: {
            sql: `days_since_last_answered_call`,
            type: `number`
        },
        col_last_completed_inventory_date: {
            sql: `last_completed_inventory_date`,
            type: `string`
        },
        col_days_since_last_completed_inventory: {
            sql: `days_since_last_completed_inventory`,
            type: `number`
        }
     }
    
})