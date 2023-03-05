import React, { useState, useEffect } from 'react';
import classes from './Staking.module.css';
import stakeIcon from '../assets/stake.png';
import unstakeIcon from '../assets/unstake.png';
import Lottie from 'lottie-web';
window.Lottie = Lottie;

const Staking = (props) => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (event) => {
    event.preventDefault();

    //console.log(props.userBalance, event.target.value)

    if(parseInt(event.target.value) > parseInt(props.userBalance)){

      event.target.value = props.userBalance;
    }

    setInputValue(event.target.value);
    props.inputHandler(event.target.value);
  };

  const goMax = () => {
    setInputValue(props.userBalance);
    props.inputHandler(props.userBalance);
  };

  useEffect(() => {
    // do stuff here...
    Lottie.loadAnimation({
      container: document.querySelector('#logo'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/86511-data-stealing.json',
      rendererSettings: {
        clearCanvas: true
      }
    });
  }, []);

  return (
    <div className={classes.Staking}>
      <div id="logo" className={classes.logo}></div>
      <h1> Mother <s>Stealer</s> Staker 😎🍭💩</h1>
      <p>{props.account}</p>
      <h3>
        {props.apy}% (APY) - {props.apy / 365}% Daily Earnings
      </h3>
      <div className={classes.inputDiv}>
        <input
          className={classes.input}
          type="number"
          min="0"
          step="1"
          max={props.userBalance}
          onChange={inputChangeHandler}
          value={inputValue}
        ></input>
      </div>
      <button
        className={classes.stakeButton}
        onClick={() => {
          props.stakeHandler();
          setInputValue('');
        }}
      >
        <img src={stakeIcon} alt="stake icon" className={classes.stakeIcon} />
        <p>Stake</p>
      </button>
      &nbsp; &nbsp;
      <button className={classes.unstakeButton} onClick={props.unStakeHandler}>
        <img
          src={unstakeIcon}
          alt="unstake icon"
          className={classes.stakeIcon}
        />
        <p>Unstake All</p>
      </button>
      <div className={classes.totals}>
        <h4>
          Total Staked (by all users): {parseInt(props.totalStaked).toLocaleString()} MotherToken ($MTHR)
        </h4>
        <div>&nbsp;</div>
        <h5>My Stake: {parseInt(props.myStake).toLocaleString()} MotherToken ($MTHR) </h5>
        <h5>
          My Estimated Reward:{' '}
          {((props.myStake * props.apy) / 36500).toFixed(3).toLocaleString()} MotherToken ($MTHR)
        </h5>
        <h5 onClick={goMax} className={classes.goMax}>
          My balance: {parseInt(props.userBalance).toLocaleString()} MotherToken ($MTHR)
        </h5>
      </div>
    </div>
  );
};
//My balance: 504304.394968082 MotherToken ($MTHR)
export default Staking;
