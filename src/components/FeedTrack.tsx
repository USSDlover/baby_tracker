import styled from 'styled-components';
import React from 'react';
import BabyMilkBottleIcon from './BabyMilkBottleIcon.tsx';
import TrashIcon from './TrashIcon.jsx';
import { Track, useTrackerDispatchContext } from '../providers/TrackerProvider.tsx';

const ItemWrapper = styled.div`
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: 0 0 5px 1px #e1e1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    width: 100%;
    & .time-del {
        display: flex;
        gap: .5rem;
        button {
            background-color: rgba(0,0,0,0);
            outline: none;
        }
    }
`;

interface FeedTrackProps {
    amount: number;
    time: Date;
    track: Track;
}

const FeedTrack: React.FC<FeedTrackProps> = ({amount, time, track}) => {
    const dispatch = useTrackerDispatchContext();

    const handleDeleteClick = () => {
        if (dispatch) {
            dispatch({ type: 'delete', payload: track });
        }
    }

    return (
        <ItemWrapper>
            <span><BabyMilkBottleIcon /></span>
            <span>{amount || 0} ml/cc</span>
            <div className='time-del'>
                <span>{time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}</span>
                <button onClick={handleDeleteClick}>
                    <TrashIcon />
                </button>
            </div>
        </ItemWrapper>
    );
}

export default FeedTrack;
