import { Stack } from '@mui/material';
import SpectrumCard from './components/SpectrumCard';

function App() {

  return (
    <Stack sx={{ display: 'flex', alignItems: 'center', p: 5, }}>
      <SpectrumCard />
    </Stack>
  );
}

export default App;
