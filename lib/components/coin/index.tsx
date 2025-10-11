'use client'
import { useState } from "react";
import { CoinStyle } from "./styles";
import { useCoinContext } from "@/lib/providers/context";

interface CoinProps{
    value: number;
}

export default function Coin({value}: CoinProps) {
 const classes = CoinStyle();
 const coin = useCoinContext();

  return (  
    <div className={classes.coin}>  
        {value}
    </div>
    )
}