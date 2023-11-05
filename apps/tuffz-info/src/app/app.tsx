// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { SharedUiFooter } from '@tuffz-workspace/shared/ui/footer';
import { ProfessionalBiographyShort } from '@tuffz-workspace/tuffz-info-professional-biography-short';

export function App() {
  return (
    <div id="app" className="min-h-screen bg-gray-300">
      <main className="container mx-auto p-2">
        <ProfessionalBiographyShort />
      </main>
      <SharedUiFooter />
    </div>
  );
}

export default App;
