// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div id='app' className='min-h-screen'>
      <NxWelcome title="tuffz-com" />

      <div className='sticky top-[100vh]'>Footer</div>
    </div>
  );
}

export default App;
