import { sva } from "@/styled-system/css";


export const RouletteStyles = sva({
    slots: ['button', 'text','win','wheel','buttons','money'],
    base: {
        button: {
            flexDirection: 'row',
            backgroundColor: 'yellow.400',
            height: '3rem',
            width: '8rem',
            borderRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'yellow.900',
            borderStyle: 'solid',
            borderColor: 'yellow.700',
            borderWidth: '0.25rem',
            _hover: {
                backgroundColor: 'yellow.800',
                color: 'white',
                borderColor: 'yellow.900',
            },
            
            
        },
        win: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
        },
        wheel: {
            transition: 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)',
            transformOrigin: 'center',
        },
        buttons: {
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5rem',
            
        },
        money:{
            height: '7rem',
            width: '7rem',
            bg: 'gray',
            borderRadius: '5%',
            borderWidth: '0.2rem',
            borderColor: 'gray.500',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
})

