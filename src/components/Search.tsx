import { useState } from 'react';
import styled from 'styled-components';

const SearchComponent = styled.input`
    border-radius: 0.5rem;
    padding: 0.25rem;
    border-color: #f3f5;
    border-width: .1rem;
    border-style: solid;
    outline: none;
`;

export function Search() {
    const [query, setQuery] = useState('');

    return (
        <>
            <p>Searched {query}</p>
            <SearchComponent type='search' onInput={(event) => setQuery((event.target as any).value)} />
        </>
    )
}
