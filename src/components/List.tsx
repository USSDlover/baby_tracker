import styled from 'styled-components';
import { useTracksContext } from '../providers/TrackerProvider.tsx';
import { lazy, Suspense } from 'react';

const FeedTrack = lazy(() => import('./FeedTrack.tsx'))

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export default function List() {
    const tracks = useTracksContext();
    if (!tracks) {
        return <div>Missing</div>;
    }
    return (
        <ListWrapper>
            <Suspense fallback={'Loading...' }>
                {tracks.map((track) => {
                    return <FeedTrack key={track.time.getTime()} time={track.time} amount={track.amount} />;
                })}
            </Suspense>
        </ListWrapper>
    );
}
