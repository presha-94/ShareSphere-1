import supabase from './supabase';

export async function getBooks ()
{

    const { data, error } = await supabase
        .from( 'books' )
        .select( '*' );


    if ( error )
    {
        console.error( error );
        throw new Error( 'Book could not be created' );
    }
    return data;
}

export async function createBook ( newBook )
{
    const { data, error } = await supabase
        .from( 'books' )
        .insert( [ newBook ] );

    if ( error )
    {
        console.error( error );
        throw new Error( 'Book could not be created' );
    }
    return data;
}