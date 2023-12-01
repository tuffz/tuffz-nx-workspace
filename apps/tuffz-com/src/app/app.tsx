// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { UiFooter } from '@tuffz/shared/ui/footer';

export function App() {
  return (
    <div id="app" className="min-h-screen">
      <NxWelcome title="tuffz-com" />

      <UiFooter />
    </div>
  );
}

export default App;
