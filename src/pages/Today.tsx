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
    & > div:first-child {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        margin-bottom: 1rem;
    }
    & .list-wrapper {
        padding-inline: .75rem;
        padding-block-end: 4rem;
    }
`;

export const Today = () => {
    return (
        <ContentWrapper>
            <TodayAndTotal />
            <div className="list-wrapper">
                <List />
            </div>
            <Add />
        </ContentWrapper>
    )
}
