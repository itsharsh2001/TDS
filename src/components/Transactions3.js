import React, {useState} from 'react'
import ASReconciliations from './Transactions/26AS/ASReconciliations';
import { AReconciliations } from './Transactions/34A/AReconciliations';
import classes from './Transactions.module.css'

import PeopleIcon from "@mui/icons-material/People";

const Transactions3 = () => {
  const [clientIdentity, setClientIdentity] = useState('')
    const [activeModule, setActiveModule] = useState("");
    const [monthSelected, setMonthSelected] = useState(false)

  const [visibleFields, setVisibleFields] = useState({
    client:false,
    tan:false,
    financial:false,
  })

  const activeModuleSetter = (module) => {
    

    setActiveModule(module);
   
  };
  
  return (
    <div className={classes.transactions}>
      <div>
        <select onChange={(e)=>{setClientIdentity(e.target.value); return setVisibleFields({...visibleFields, client: true})}} name="" id="">
          <option value="">Select Client</option>
          <option value="ABC Consultancy Limited">ABC Consultancy Limited - BKICA9561K</option>
          <option value="ABC Motors Limited">ABC Motors Limited - BKICD9828K</option>
          {/* <option value="">ABC Chemicals Limited - BKICG6641K</option>
          <option value="">ABC Powers Limited - BKICG6641K</option>
          <option value="">ABC Steel Limited - BKICM7469K</option> */}
          {/* <option value="">BKICJ1426K</option> */}
          {/* <option value="">BKICM7469K</option> */}
        </select>
        <select onChange={()=>{return setVisibleFields({...visibleFields, tan: true})}} name="" id="">
          <option value="">Select TAN</option>
          {clientIdentity=='ABC Consultancy Limited' && <><option value="">Head Office - PDMS01068F</option>
          <option value="">Sahibabad Office - BFES03018Z</option>
          <option value="">Faridabad Office - RSEX13028F</option></>}
          {clientIdentity=='ABC Motors Limited' && <><option value="">Head Office - AVMS01248W</option>
          </>}
        </select>
        <select onChange={()=>{return setVisibleFields({...visibleFields, financial: true})}} name="" id="">
          <option value="">Select Financial Year</option>
          <option value="">FY 2023-24</option>
          {/* <option value="">FY 2022-23</option> */}
          {/* <option value="">FY 2021-22</option> */}
        </select>
        {activeModule == "transactiondata" && (
          <select onChange={()=>{return setMonthSelected(true)}} name="" id="">
            <option value="">Select Month</option>
            <option value="">July(Current Month)</option>
            <option value="">June</option>
            <option value="">May</option>
            <option value="">April</option>
          </select>
        )}
        {/* {activeModule == "bireport" && (
          <select name="" id="">
            <option value="">July</option>
          </select>
        )} */}
      </div>
      
      {( visibleFields.client && visibleFields.tan && visibleFields.financial ) && activeModule=="" && (
        <>
          <section>
            <span style={{
                  border: "2px solid var(--bright-purple-60, #C6A7FF)",
                  background: "var(--bright-purple-40, #D9C5FF)",
                }} onClick={() => {
                return activeModuleSetter("26AS");
              }}>
              <p>26AS Reconciliations</p>
              <PeopleIcon className={classes.icon} />
            </span>
            <span style={{
                  border: "2px solid var(--coral-60, #FF9792)",
                  background: "var(--coral-40, #FFB9B6)",
                }} onClick={() => {
                return activeModuleSetter("34a");
              }}>
              <p>34a Reconciliations</p>
              <PeopleIcon className={classes.icon} />
            </span>
          </section>
        </>
      )}

      {activeModule == "26AS" && (
        <ASReconciliations
        clientIdentity={clientIdentity}
        monthSelected={monthSelected}
          
          transactionHomeScreen={activeModuleSetter}
        />
      )}
      {activeModule == "34a" && (
        <AReconciliations
        clientIdentity={clientIdentity}
          
          transactionHomeScreen={activeModuleSetter}
        />
      )}

    </div>
  )
}

export default Transactions3