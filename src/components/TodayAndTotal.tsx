import { useTracksContext } from '../providers/TrackerProvider.tsx';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ToolbarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    font-weight: bold;
    gap: .5rem;
    box-shadow: 0 -2px 15px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
`;

export default  function TodayAndTotal() {
    const tracks = useTracksContext();
    const [totalAmount, setTotalAmount] = useState(0);
    const today = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full' }).format(new Date())

    useEffect(() => {
        if (tracks.length > 0) {
            const totalTrack = tracks.reduce((p, c) => ({
                type: c.type,
                time: c.time,
                amount: p.amount + c.amount
            }));
            setTotalAmount(totalTrack.amount);
        }
    }, [tracks]);

    return (
        <ToolbarDiv>
            <p>{totalAmount}ml</p>
            <p>{today}</p>
        </ToolbarDiv>
    );
}
