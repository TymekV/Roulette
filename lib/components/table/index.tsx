'use client';
import { useState } from "react";
import Coin from "../coin";
import { TableStyle } from "./styles";
import CoinContext from "@/app/page";
import { useCoinContext } from "@/lib/providers/context";

interface RTProps {
  bets: { [key: number]: number };
  setBets: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  money : number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  totalbet: number;
  setTotalbet: React.Dispatch<React.SetStateAction<number>>;
}


export default function RouletteTable({ bets, setBets, money, setMoney, totalbet, setTotalbet }: RTProps) {
    const coin = useCoinContext();
    const classes = TableStyle();
    
          
  function handleClick(number: number) {
    const currentBet = bets[number] || 0;
    const potentialTotalBet = totalbet + coin.coinvalue;
    if (coin.coinvalue > money) {
      alert("broke ass");
      return;
    } 
    setMoney(money - coin.coinvalue);
    setTotalbet(potentialTotalBet);
    setBets((prevBets) => ({
      ...prevBets,
      [number]: currentBet + coin.coinvalue,
    }));
}  
    return (
    <div className={classes.table}>
            <div className={`${classes.numberCell} ${classes.zeroCell}`} onClick={() => handleClick(0)}>
                {bets[0] ? <Coin value={bets[0]} /> : 0}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 2, gridRow: 1 }} onClick={() => handleClick(3)}>
                {bets[3] ? <Coin value={bets[3]} /> : 3}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 3, gridRow: 1 }} onClick={() => handleClick(6)}>
                {bets[6] ? <Coin value={bets[6]} /> : 6}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 4, gridRow: 1 }} onClick={() => handleClick(9)}>
                {bets[9] ? <Coin value={bets[9]} /> : 9}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 5, gridRow: 1 }} onClick={() => handleClick(12)}>
                {bets[12] ? <Coin value={bets[12]} /> : 12}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 6, gridRow: 1 }} onClick={() => handleClick(15)}>
                {bets[15] ? <Coin value={bets[15]} /> : 15}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 7, gridRow: 1 }} onClick={() => handleClick(18)}>
                {bets[18] ? <Coin value={bets[18]} /> : 18}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 8, gridRow: 1 }} onClick={() => handleClick(21)}>
                {bets[21] ? <Coin value={bets[21]} /> : 21}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 9, gridRow: 1 }} onClick={() => handleClick(24)}>
                {bets[24] ? <Coin value={bets[24]} /> : 24}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 10, gridRow: 1 }} onClick={() => handleClick(27)}>
                {bets[27] ? <Coin value={bets[27]} /> : 27}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 11, gridRow: 1 }} onClick={() => handleClick(30)}>
                {bets[30] ? <Coin value={bets[30]} /> : 30}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 12, gridRow: 1 }} onClick={() => handleClick(33)}>
                {bets[33] ? <Coin value={bets[33]} /> : 33}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 13, gridRow: 1 }} onClick={() => handleClick(36)}>
                {bets[36] ? <Coin value={bets[36]} /> : 36}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 2, gridRow: 2 }} onClick={() => handleClick(2)}>
                {bets[2] ? <Coin value={bets[2]} /> : 2}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 3, gridRow: 2 }} onClick={() => handleClick(5)}>
                {bets[5] ? <Coin value={bets[5]} /> : 5}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 4, gridRow: 2 }} onClick={() => handleClick(8)}>
                {bets[8] ? <Coin value={bets[8]} /> : 8}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 5, gridRow: 2 }} onClick={() => handleClick(11)}>
                {bets[11] ? <Coin value={bets[11]} /> : 11}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 6, gridRow: 2 }} onClick={() => handleClick(14)}>
                {bets[14] ? <Coin value={bets[14]} /> : 14}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 7, gridRow: 2 }} onClick={() => handleClick(17)}>
                {bets[17] ? <Coin value={bets[17]} /> : 17}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 8, gridRow: 2 }} onClick={() => handleClick(20)}>
                {bets[20] ? <Coin value={bets[20]} /> : 20}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 9, gridRow: 2 }} onClick={() => handleClick(23)}>
                {bets[23] ? <Coin value={bets[23]} /> : 23}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 10, gridRow: 2 }} onClick={() => handleClick(26)}>
                {bets[26] ? <Coin value={bets[26]} /> : 26}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 11, gridRow: 2 }} onClick={() => handleClick(29)}>
                {bets[29] ? <Coin value={bets[29]} /> : 29}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 12, gridRow: 2 }} onClick={() => handleClick(32)}>
                {bets[32] ? <Coin value={bets[32]} /> : 32}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 13, gridRow: 2 }} onClick={() => handleClick(35)}>
                {bets[35] ? <Coin value={bets[35]} /> : 35}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 2, gridRow: 3 }} onClick={() => handleClick(1)}>
                {bets[1] ? <Coin value={bets[1]} /> : 1}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 3, gridRow: 3 }} onClick={() => handleClick(4)}>
                {bets[4] ? <Coin value={bets[4]} /> : 4}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 4, gridRow: 3 }} onClick={() => handleClick(7)}>
                {bets[7] ? <Coin value={bets[7]} /> : 7}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 5, gridRow: 3 }} onClick={() => handleClick(10)}>
                {bets[10] ? <Coin value={bets[10]} /> : 10}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 6, gridRow: 3 }} onClick={() => handleClick(13)}>
                {bets[13] ? <Coin value={bets[13]} /> : 13}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 7, gridRow: 3 }} onClick={() => handleClick(16)}>
                {bets[16] ? <Coin value={bets[16]} /> : 16}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 8, gridRow: 3 }} onClick={() => handleClick(19)}>
                {bets[19] ? <Coin value={bets[19]} /> : 19}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 9, gridRow: 3 }} onClick={() => handleClick(22)}>
                {bets[22] ? <Coin value={bets[22]} /> : 22}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 10, gridRow: 3 }} onClick={() => handleClick(25)}>
                {bets[25] ? <Coin value={bets[25]} /> : 25}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 11, gridRow: 3 }} onClick={() => handleClick(28)}>
                {bets[28] ? <Coin value={bets[28]} /> : 28}</div>
            <div className={`${classes.numberCell} ${classes.black}`} style={{ gridColumn: 12, gridRow: 3 }} onClick={() => handleClick(31)}>
                {bets[31] ? <Coin value={bets[31]} /> : 31}</div>
            <div className={`${classes.numberCell} ${classes.red}`} style={{ gridColumn: 13, gridRow: 3 }} onClick={() => handleClick(34)}>
                {bets[34] ? <Coin value={bets[34]} /> : 34}</div>
        </div>
  );
}