import React, { useContext, useState } from 'react';
import { TrackerContext, useTracksContext } from '../providers/TrackerProvider';

export function List() {
    const [items] = useState(['one', 'two']);
    const [tracks] = useContext(TrackerContext);
    if (!tracks) {
        return <div>Missing</div>
    }
    return (
        <div>
            <h3 className={'text-3xl'}>Tracked items</h3>
            {tracks[0].name}
            {items.map((track, index) => {
                return <h6 className={'text'} key={index}>{track}</h6>
            })}
            {tracks.map((track, index) => {
                return <h6 className={'text'} key={index}>{track.name}</h6>
            })}
        </div>
    )
}