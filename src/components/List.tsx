import styled from 'styled-components';
import { useTracksContext } from '../providers/TrackerProvider.tsx';
import FeedTrack from './FeedTrack.tsx';

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export function List() {
    const tracks = useTracksContext();
    if (!tracks) {
        return <div>Missing</div>;
    }
    return (
        <ListWrapper>
            {tracks.map((track) => {
                return <FeedTrack key={track.time.getTime()} time={track.time} amount={track.amount} />;
            })}
        </ListWrapper>
    );
}
