import { CareerTimeline } from '@tuffz/ericbuettner-com/career-timeline';
import { ProfileSnapshot } from '@tuffz/ericbuettner-com/profile-snapshot';

export default async function Index() {
  return (
    <>
      <ProfileSnapshot
        first_name="Eric"
        last_name="Büttner"
        latest_job_position="Head of Software Engineering"
        latest_job_company="allmyhomes GmbH"
        location_city="Eberswalde"
        location_state="Brandenburg"
        location_country="Germany"
      />
      <CareerTimeline />
    </>
  );
}
