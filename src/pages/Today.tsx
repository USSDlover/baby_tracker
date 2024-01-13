import styled from 'styled-components';
import { lazy } from 'react';

const List = lazy(() => import('../components/List.tsx'));
const Add = lazy(() => import('../components/Add.tsx'));
const TodayAndTotal = lazy(() => import('../components/TodayAndTotal.tsx'));

const ContentWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    padding-bottom: 60px;
`;

export const Today = () => {
    return (
        <ContentWrapper>
            <TodayAndTotal />
            <List />
            <Add />
        </ContentWrapper>
    )
}
