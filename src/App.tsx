import TrackerProvider from './providers/TrackerProvider.tsx';
import {List} from './components/List.tsx';
import {Add} from './components/Add.tsx';

function App() {
  return (
    <TrackerProvider>
        <List />
        <Add />
    </TrackerProvider>
  )
}

export default App
