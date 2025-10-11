import { RestProps } from '@/app/page';
import { createContext, useContext } from 'react';

export const CoinContext = createContext<RestProps | undefined>(undefined);

export function useCoinContext(){
    const context = useContext(CoinContext);
    if(context === undefined){
        throw new Error('cannot be undefined')
    }

    return context;
}