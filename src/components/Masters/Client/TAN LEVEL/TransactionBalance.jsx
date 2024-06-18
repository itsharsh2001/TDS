import React, {useState} from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Uploaded from './Data Type/Uploaded';
import ViewMaster from './Data Type/ViewMaster';
import classes from './TransactionBalance.module.css'
import Enrichment from './Data Type/Enrichment';
import Balance from './Data Type/Balance';

const TransactionBalance = (props) => {
  const [viewData, setViewData] = useState('transactionbalance')
  const [templateFileUpload, setTemplateFileUpload] = useState(false);

  const hoverStyle = {
    color: 'var(--GT-Purple, #4f2d7f)',
    borderBottom: '2px solid #4f2d7f',
  }

  return (
    <div className={classes.transactionbalance}>
       <span>
        {/* <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('none')}} href="">Client Level Master</a>
        <ChevronRightIcon className={classes.righticon}/> */}
        <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('none')}} href="">Client Masters</a>
        <ChevronRightIcon className={classes.righticon} />
        {/* <a onClick={(e)=>{e.preventDefault(); return props.tanLevelMasterTypeSetter('')}} href="">Head Office</a> */}
        {/* <ChevronRightIcon className={classes.righticon} /> */}
        <a onClick={(e)=>{e.preventDefault();}} href="">Transition Balance Master</a>
      </span>
      <ul>
        <li style={viewData=='transactionbalance'?hoverStyle:{}} onClick={()=>setViewData('transactionbalance')}>Transition Balance</li>
        <li style={viewData=='enrichment'?hoverStyle:{}} onClick={()=>setViewData('enrichment')}>Enrichment</li>
        <li style={viewData=='viewmaster'?hoverStyle:{}} onClick={()=>setViewData('viewmaster')}>View Master Data</li>
      </ul>

      {viewData=='transactionbalance' && <Balance clientIdentity={props.clientIdentity}/>}
      {viewData=='enrichment' && <Enrichment clientIdentity={props.clientIdentity}/>}
      {viewData=='viewmaster' && <ViewMaster clientIdentity={props.clientIdentity} type= 'Balance'/>}
    </div>
  )
}

export default TransactionBalance