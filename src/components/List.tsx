import { useState } from 'react';
import {useTracksContext} from '../providers/TrackerProvider.tsx';

export function List() {
    const [items] = useState(['one', 'two']);
    const tracks = useTracksContext();
    if (!tracks) {
        return <div>Missing</div>
    }
    return (
        <div>
            <h3 className={'text-3xl'}>Tracked items</h3>
            {items.map((track, index) => {
                return <h6 className={'text'} key={index}>{track}</h6>
            })}
            {tracks.map((track, index) => {
                return <h6 className={'text'} key={index}>{track.type}</h6>
            })}
        </div>
    )
}