import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type Track = {
    type: string;
    time: Date;
};

const TrackerContext = createContext<Array<Track>>([]);
const TrackerDispatchContext = createContext<Dispatch<{ type: 'add', payload: Track }> | null>(null);

const tracksReducer = (state: Track[], action: { type: 'add', payload: Track }): Track[] => {
    if (action.type === 'add') { return state.concat(action.payload) }
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
