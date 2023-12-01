// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { UiFooter } from '@tuffz/shared/ui/footer';
import { ProfileSnapshot } from '@tuffz/ericbuettner-com/profile-snapshot';

export function App() {
  return (
    <div id="app" className="min-h-screen bg-gray-300">
      <main className="container mx-auto p-2">
        <ProfileSnapshot />
      </main>
      <UiFooter />
    </div>
  );
}

export default App;
