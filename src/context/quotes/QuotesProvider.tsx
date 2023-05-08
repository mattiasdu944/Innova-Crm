import { FC, useEffect, useState } from "react";
import { QuotesContext } from ".";
import { supabase } from "../../supabase";
import { IQuote } from "../../interfaces";

interface PropsProvider{
    children : JSX.Element;
}

export const QuotesProvider: FC<PropsProvider> = ({ children }) => {

    // ESTADOS GLOBALES
    const [quotes, setQuotes] = useState<IQuote[]>([])
    const [quote, setQuote] = useState({} as IQuote)

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    // OBTENER TODAS LAS CONSULTAS
    const getAllQuotes = async () => {
        try {
            setIsLoading( true );
            const { data } = await supabase.from('quotes').select('id, name, description, date, user(name, lastname, email, phone)');
            setQuotes( data as IQuote[] );
            setIsLoading( false );

        } catch (error) {
            setError(true);

        }finally{
            setIsLoading( false );
        }
    }

    useEffect(() => {
        getAllQuotes();
    }, [])
    

    // OBTENER TODAS LAS CONSULTAS
    const getQuoteById = async ( id: string ) => {
        try {
            setIsLoading( true );
            
            const { data } = await supabase.from('quotes').select('id, name, description, date, user(name, lastname, email, phone)').eq('id', id);
            
            setQuote( data![0] as any );
            
            setIsLoading( false );

        } catch (error) {
            setError(true);

        }finally{
            setIsLoading( false );
        }
    }

    return (
        <QuotesContext.Provider 
            value={{
                quotes,
                quote,
                isLoading,
                error,
                getQuoteById
            }}
        >
            { children }
        </QuotesContext.Provider>
    );
}