import styled from 'styled-components';
import React from 'react';
import BabyMilkBottleIcon from './BabyMilkBottleIcon.tsx';

const ItemWrapper = styled.div`
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: 0 0 5px 1px #e1e1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    width: 100%;
`;

interface FeedTrackProps {
    amount: number;
    time: Date;
}

const FeedTrack: React.FC<FeedTrackProps> = ({amount, time}) => {
    return (
        <ItemWrapper>
            <span><BabyMilkBottleIcon /></span>
            <span>{amount || 0} ml/cc</span>
            <span>{time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}</span>
        </ItemWrapper>
    );
}

export default FeedTrack;
