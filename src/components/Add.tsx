import { useTrackerDispatchContext } from '../providers/TrackerProvider.tsx';
import styled from 'styled-components';
import TimeAddIcon from './TimeAddIcon.tsx';

const AddButtonComponent = styled.button`
    background-color: white;
    position: fixed;
    bottom: 4rem;
    right: 1rem;
    color: white;
    border-radius: 5px;
`;

export default function Add() {
    const dispatch = useTrackerDispatchContext();

    const handleAdd = () => {
        if (dispatch) {
            dispatch({
                type: 'add',
                payload: {
                    type: 'feed',
                    time: new Date(),
                    amount: 100
                }
            });
        }
    }

    return <AddButtonComponent onClick={handleAdd}>
        <TimeAddIcon fill='dodgerblue' width='35px' height='35px' />
    </AddButtonComponent>
}
