import styled from 'styled-components';

import { List } from '../components/List.tsx';
import { Add } from '../components/Add.tsx';

const ContentWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Today = () => {
    return (
        <ContentWrapper>
            <List />
            <Add />
        </ContentWrapper>
    )
}
