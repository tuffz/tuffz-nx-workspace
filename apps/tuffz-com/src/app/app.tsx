// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { SharedUiFooter, Website } from '@tuffz/shared-ui-footer';

export function App() {
  return (
    <div id="app" className="min-h-screen">
      <NxWelcome title="tuffz-com" />

      <SharedUiFooter website={Website.TUFFZCOM} />
    </div>
  );
}

export default App;
