import {createContext, ReactNode, useState, useContext, useEffect} from 'react';

type Track = {
    type: string;
    time: Date;
};

export const TrackerContext = createContext<Array<Track>>([]);

const todayTracks = [
    { type: 'feed', time: new Date() },
    { type: 'sleep', time: new Date() },
    { type: 'pop', time: new Date() },
];

const TrackerProvider = ({ children }: {children: ReactNode}) => {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        setTracks(todayTracks);
    }, []);

    return (
        <TrackerContext.Provider value={tracks}>
            {children}
        </TrackerContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTracksContext = () => useContext<Track[]>(TrackerContext);

export default TrackerProvider;