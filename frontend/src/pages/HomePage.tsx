import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen visible={loading} onDone={() => setLoading(false)} />
      {!loading && <div>HomePage</div>}
    </>
  );
};

export default HomePage;
