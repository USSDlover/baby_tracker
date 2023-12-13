import { useState } from 'react';

export function Search() {
    const [query, setQuery] = useState('');

    return (
        <>
            <p>Searched {query}</p>
            <input type="search" onInput={(event) => setQuery((event.target as any).value)}/>
        </>
    )
}