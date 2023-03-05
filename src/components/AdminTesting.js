import React from 'react';
import classes from './AdminTesting.module.css';

const AdminTesting = (props) => {
  return (
    <div className={classes.for_testing}>
      <p>FOR TESTING PURPOSE ONLY</p>
      <button onClick={props.claimMTHR}>Claim for 1,000 $MTHR (User)</button>
      &nbsp; &nbsp;
      <button onClick={props.redistributeRewards}>
        {props.page === 1
          ? `Redistribute rewards (Admin)`
          : `Custom redistribution (Admin)`}
      </button>
      <div className={classes.network}>
        <p>
          Selected Network: <b>{props.network.name}</b>
          &nbsp; id: <b>{props.network.id}</b>
        </p>
        <p>Contract Balance: {parseInt(props.contractBalance).toLocaleString()} MotherToken ($MTHR) </p>
        <p>Staking Contract address: {props.tokenStakingContract._address}</p>
        <p>Powered by <a href="https://twitter.com/armxy" target="_blank" rel="noopener noreferrer">ARMXY<span role="img" aria-label="lollipop">🍭</span></a></p>
      </div>
    </div>
  );
};

export default AdminTesting;
