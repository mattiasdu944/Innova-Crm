import { createContext } from 'react'
import { IQuote } from '../../interfaces';

interface ContextProps {
    quotes      : IQuote[],
    quote      : IQuote,
    isLoading   : boolean;
    error       : boolean;

    getQuoteById: ( id: string ) => any;
}

export const QuotesContext = createContext( {} as ContextProps );