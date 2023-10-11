import React from 'react';

export const TrackerContext = React.createContext([]);

const todayTracks = [[
    { type: 'feed', time: new Date() },
    { type: 'sleep', time: new Date() },
    { type: 'pop', time: new Date() },
]];

const TrackerProvider = ({ children }) => {
    const [tracks] = React.useState(todayTracks);

    return (
        <TrackerContext.Provider value={tracks}>
            {children}
        </TrackerContext.Provider>
    );
}

export const useTracksContext = () => React.useContext(TrackerContext);

export default TrackerProvider;