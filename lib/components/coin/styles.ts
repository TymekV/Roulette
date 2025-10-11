import { sva } from "@/styled-system/css";

export const CoinStyle = sva({
    slots: ['coin'],
    base: {
        coin: {
            height: '2.75rem',
            width: '2.75rem',
            backgroundColor: 'gold',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            borderWidth: '0.1rem  ',
            borderBottomColor: 'primary.700',
            justifyContent: 'center',
            color: 'yellow.900',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderBottomWidth: '4px',
        }

    }
})