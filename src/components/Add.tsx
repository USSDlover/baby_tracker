import { useTrackerDispatchContext } from '../providers/TrackerProvider.tsx';
import styled from 'styled-components';

const AddButtonComponent = styled.button`
    background-color: rgb(22, 155, 12);
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    color: white;
    padding: .75rem 1.5rem;
    border-radius: 5px;
`;

export function Add() {
    const dispatch = useTrackerDispatchContext();

    const handleAdd = () => {
        if (dispatch) {
            dispatch({
                type: 'add',
                payload: {
                    type: 'feed',
                    time: new Date()
                }
            });
        }
    }

    return <AddButtonComponent onClick={handleAdd}>Add</AddButtonComponent>
}
