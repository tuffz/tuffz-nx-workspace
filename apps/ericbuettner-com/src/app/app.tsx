// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { UiFooter, Website } from '@tuffz/shared/ui/footer';
import { ProfileSnapshot } from '@tuffz/ericbuettner-com/profile-snapshot';

export function App() {
  return (
    <div id="app" className="min-h-screen bg-gray-300">
      <main className="container mx-auto p-2">
        <ProfileSnapshot
          first_name="Eric"
          last_name="Büttner"
          latest_job_position="Head of Software Engineering"
          latest_job_company="allmyhomes GmbH"
          location_city="Eberswalde"
          location_state="Brandenburg"
          location_country="Germany"
        />
      </main>
      <UiFooter website={Website.ERICBUETTNERCOM} />
    </div>
  );
}

export default App;
