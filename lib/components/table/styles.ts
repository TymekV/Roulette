import { sva } from "@/styled-system/css";

export const TableStyle = sva({
    slots: ['table', 'numberCell','zeroCell', 'red', 'black'],
    
    base: {
        
        table: {
            display: 'grid',
            flexDirection: 'row',
            columnGap: '0px',
            gap: '0.1rem',
            backgroundColor: 'green.900',
            padding: '0.5rem',
        },
        numberCell: {
            w: '5rem',
            h: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2xl',
            fontWeight: 'bold',
            color: 'white',
            borderWidth:'0.2rem',
            borderRadius:'7%',
            _hover:{
                cursor: 'pointer',
                opacity: 0.4,
            }
        },
        zeroCell: {
            gridColumn: '1',
            gridRow: '1 / 4',
            writingMode: 'vertical-rl',
            w: '5rem',
            h: '15rem',
            bg: '#0a6b3a',
        },
        red: {
            backgroundColor: 'red.600',
            borderColor: 'red.800',
            
        },
        black: {
            backgroundColor: 'black',
            borderColor: 'gray.900',
        
        }

           

    }
})
