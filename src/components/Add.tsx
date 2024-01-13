import { useTrackerDispatchContext } from '../providers/TrackerProvider.tsx';
import styled from 'styled-components';
import TimeAddIcon from './TimeAddIcon.tsx';

const AddButtonComponent = styled.button`
    background-color: rgb(22, 155, 12);
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    color: white;
    padding: .75rem 1.5rem;
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
        <TimeAddIcon />
    </AddButtonComponent>
}
