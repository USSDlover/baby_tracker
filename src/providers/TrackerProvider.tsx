import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

export type Track = {
    id?: number;
    type: string;
    time: Date;
    amount: number;
};

const TrackerContext = createContext<Array<Track>>([]);
const TrackerDispatchContext = createContext<Dispatch<{ type: 'add' | 'delete', payload: Track }> | null>(null);

const tracksReducer = (state: Track[], action: { type: 'add' | 'delete', payload: Track }): Track[] => {
    if (action.type === 'add') {
        action.payload.id = new Date().getTime();
        return state.concat(action.payload);
    }
    if (action.type === 'delete') {
        if (action.payload) {
            return state.filter(item => item.id !== action.payload.id);
        } else {
            return state;
        }
    }
    throw Error('The action type doesn\'t match');
}

const TrackerProvider = ({ children }: {children: ReactNode}) => {
    const [tracks, dispatch] = useReducer(tracksReducer, []);

    return (
        <TrackerContext.Provider value={tracks}>
            <TrackerDispatchContext.Provider value={dispatch}>
                {children}
            </TrackerDispatchContext.Provider>
        </TrackerContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTracksContext = () => useContext<Track[]>(TrackerContext);
// eslint-disable-next-line react-refresh/only-export-components
export const useTrackerDispatchContext = () => useContext(TrackerDispatchContext);

export default TrackerProvider;
