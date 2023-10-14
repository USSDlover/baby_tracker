import TrackerProvider from './providers/TrackerProvider.tsx';
import { Routes, Route } from 'react-router-dom';
import { Today } from './pages/Today.tsx';
import { History } from './pages/History.tsx';
import { Navigation } from './layout/Navigation.tsx';

function App() {
    return (
        <TrackerProvider>
            <Navigation />
            <Routes>
                <Route path="/" element={<Today />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </TrackerProvider>
    );
}

export default App;
