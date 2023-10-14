import { useTrackerDispatchContext } from '../providers/TrackerProvider.tsx';

export function Add() {
    const dispatch = useTrackerDispatchContext();

    const handleAdd = () => {
        console.log('Add new track');
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

    return <button
        className={'fixed bottom-3 right-3 bg-green-600 text-white rounded px-5 py-3'}
        onClick={handleAdd}
    >Add</button>
}