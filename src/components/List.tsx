import { useTracksContext } from '../providers/TrackerProvider.tsx';

export function List() {
    const tracks = useTracksContext();
    if (!tracks) {
        return <div>Missing</div>;
    }
    return (
        <div>
            <h3 className={'text-3xl'}>Tracked items</h3>
            {tracks.map((track) => {
                return <div key={track.time.getTime()}>
                    <h6 className={'text'}>{track.type}</h6>
                    <p className="text">{track.time.toTimeString()}</p>
                </div>;
            })}
        </div>
    );
}