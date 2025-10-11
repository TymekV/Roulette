'use client';

import RouletteTable from '@/lib/components/table';
import { useState, useContext, StrictMode } from 'react';
import { RouletteStyles } from '.';
import { CoinContext, useCoinContext } from '@/lib/providers/context';
import { IconArrowDown, IconArrowNarrowLeft } from '@tabler/icons-react';
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router';
import App from 'next/app';
import Link from 'next/link';
import page from './page2/page'
import { createRoot } from 'react-dom/client';




interface WheelNumber {
  num: number;
  color: string;
}

interface NumberPosition {
  x: number;
  y: number;
  rotation: number;
}
export interface RestProps {
  coinvalue: number;
  setCoinvalue : (value: number) => void; 
  money: number;
  setMoney:  (value: number) => void;
  totalbet: number;
  setTotalbet:  (value: number) => void;
}


const wheelNumbers: WheelNumber[] = [
  { num: 0, color: '#0a6b3a' },
  { num: 32, color: '#c41e3a' },
  { num: 15, color: '#1a1a1a' },
  { num: 19, color: '#c41e3a' },
  { num: 4, color: '#1a1a1a' },
  { num: 21, color: '#c41e3a' },
  { num: 2, color: '#1a1a1a' },
  { num: 25, color: '#c41e3a' },
  { num: 17, color: '#1a1a1a' },
  { num: 34, color: '#c41e3a' },
  { num: 6, color: '#1a1a1a' },
  { num: 27, color: '#c41e3a' },
  { num: 13, color: '#1a1a1a' },
  { num: 36, color: '#c41e3a' },
  { num: 11, color: '#1a1a1a' },
  { num: 30, color: '#c41e3a' },
  { num: 8, color: '#1a1a1a' },
  { num: 23, color: '#c41e3a' },
  { num: 10, color: '#1a1a1a' },
  { num: 5, color: '#c41e3a' },
  { num: 24, color: '#1a1a1a' },
  { num: 16, color: '#c41e3a' },
  { num: 33, color: '#1a1a1a' },
  { num: 1, color: '#c41e3a' },
  { num: 20, color: '#1a1a1a' },
  { num: 14, color: '#c41e3a' },
  { num: 31, color: '#1a1a1a' },
  { num: 9, color: '#c41e3a' },
  { num: 22, color: '#1a1a1a' },
  { num: 18, color: '#c41e3a' },
  { num: 29, color: '#1a1a1a' },
  { num: 7, color: '#c41e3a' },
  { num: 28, color: '#1a1a1a' },
  { num: 12, color: '#c41e3a' },
  { num: 35, color: '#1a1a1a' },
  { num: 3, color: '#c41e3a' },
  { num: 26, color: '#1a1a1a' },
];



export default function RouletteWheel() {
  const [bets, setBets] = useState<{ [key: number]: number }>({});
  const [rotation, setRotation] = useState(0);
  const [win,setWin] = useState<number | null>(null);
  const classes = RouletteStyles();
  const [coinvalue, setCoinvalue] = useState(100);
  const [money,setMoney] = useState(2000);
  const [isSpinning, setIsSpinning] = useState(false);
  const [totalbet,setTotalbet] = useState(0)

  const createSegmentPath = (index: number, total: number): string => {
    const angle = (360 / total) * Math.PI / 180;
    const startAngle = (index * 360 / total - 90) * Math.PI / 180;
    const endAngle = ((index + 1) * 360 / total - 90) * Math.PI / 180;
    
    const outerRadius = 240;
    const innerRadius = 40;
    
    const x1 = 250 + outerRadius * Math.cos(startAngle);
    const y1 = 250 + outerRadius * Math.sin(startAngle);
    const x2 = 250 + outerRadius * Math.cos(endAngle);
    const y2 = 250 + outerRadius * Math.sin(endAngle);
    const x3 = 250 + innerRadius * Math.cos(endAngle);
    const y3 = 250 + innerRadius * Math.sin(endAngle);
    const x4 = 250 + innerRadius * Math.cos(startAngle);
    const y4 = 250 + innerRadius * Math.sin(startAngle);
    
    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;
  };

  const getNumberPosition = (index: number, total: number): NumberPosition => {
    const angle = ((index + 0.5) * 360 / total - 90) * Math.PI / 180;
    const radius = 190;
    return {
      x: 250 + radius * Math.cos(angle),
      y: 250 + radius * Math.sin(angle),
      rotation: (index + 0.5) * 360 / total
    };
  };
  const getwinningnum = (finalrotation : number) : number => {
  const degperseg = 360/37;
  const rotatpr = finalrotation % 360;
  const index = Math.floor((360 - rotatpr)/ degperseg) % 37;
  return wheelNumbers[index].num;
  };
  const handleRotation = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const randpos = Math.floor(Math.random() * 360);
    const newRotation = rotation + (360 * 5) + randpos;
    setRotation(newRotation);
    setWin(null);
    setTimeout(() => {
      const winner = getwinningnum(newRotation);
      setWin(winner);
      checkwin(winner);
      setIsSpinning(false);
    },4000)
  };
  const checkwin = (winner: number) => {
  const betAmount = bets[winner] || 0;

  if (betAmount > 0) {
    const payout = betAmount * 36;
    setMoney((prevMoney) => prevMoney + payout); 
  } else {
   
  }

  setBets({});
  setTotalbet(0);
};


  const handleReset = () => {
  setCoinvalue(100);
  setMoney((prevMoney) => prevMoney + totalbet); 
  setBets({});
  setTotalbet(0);
};

  




  return ( 
    <div>
      <div>
      <div>

    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <div style={{display:'flex'}}><IconArrowDown stroke={2}/>
        </div>  
    <div>
      <div>      
      <div style={{
        display:'flex',
        flexDirection:'row'
      }
    }>
        <div>
          <svg className={classes.wheel}
            width="500"
            height="500"
            viewBox="0 0 500 500"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
            >          
            <circle cx="250" cy="250" r="245" fill="#d4af37" />
            <circle cx="250" cy="250" r="240" fill="#8b7355" />         
            {wheelNumbers.map((item, index) => {
              const pos = getNumberPosition(index, wheelNumbers.length);
              return (
                <g key={index}>
                  <path
                    d={createSegmentPath(index, wheelNumbers.length)}
                    fill={item.color}
                    stroke="#d4af37"
                    strokeWidth="1"
                    />
                  <text
                    x={pos.x}
                    y={pos.y}
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${pos.rotation}, ${pos.x}, ${pos.y})`}
                    style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                    >
                    {item.num}
                  </text>
                </g>
              );
            })}                      
            <circle cx="250" cy="250" r="45" fill="url(#centerGradient)" />
            <defs>
              <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#a68829" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      </div>
        </div>
        </div>
        <div className={classes.money}>
          <div>
            Current money:<br></br>
            {money}
            </div>
        </div>
        </div>
      <br></br>
      <br></br>
      <div className={classes.buttons}>
      <button
        className={classes.button}
        onClick={handleRotation}>
          Spin
     
      </button>
      <button className={classes.button} onClick={handleReset}>
        Reset
      </button>
      <Link href="/page2">
      <button className={classes.button}>
        
        Dont read this
        
      </button>
      </Link>

      </div>
      <br></br>
      <div className={classes.win}>
          Winning Number: {win}
      </div>
      </div>            
    <CoinContext.Provider value={{ coinvalue, setCoinvalue, money, setMoney, totalbet, setTotalbet}}>
    <RouletteTable totalbet={totalbet} setTotalbet={setTotalbet}setMoney={setMoney} money={money} bets={bets} setBets={setBets}></RouletteTable>
    </CoinContext.Provider>
    </div>
  )
}