import { CareerTimelineItem } from './career-timeline-item';
import { CompanyLocation } from './enum/company-location';
import { CompanyName } from './enum/company-name';
import { Month } from './enum/month';

export interface CareerTimelineProps {
  position: string;
  company: CompanyName;
  date_start: string;
  date_end: string;
  location: keyof typeof CompanyLocation;
}

export function CareerTimeline() {
  const career: CareerTimelineProps[] = [
    {
      position: 'Head of Software Engineering',
      company: CompanyName.ALLMYHOMES,
      date_start: Month.MAY + ', 2021',
      date_end: Month.FEBRUAR + ', 2024',
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Lead Software Engineer',
      company: CompanyName.ALLMYHOMES,
      date_start: Month.MARCH + ', 2018',
      date_end: Month.APRIL + ', 2021',
      location: 'BERLIN_GERMANY',
    },

    {
      position: 'Head of Software Engineering',
      company: CompanyName.SMARTEXPOSE,
      date_start: Month.AUGUST + ', 2016',
      date_end: Month.FEBRUAR + ', 2018',
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Senior Full Stack Engineer',
      company: CompanyName.SMARTEXPOSE,
      date_start: Month.JUNE + ', 2015',
      date_end: Month.JULY + ', 2016',
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Full Stack Developer',
      company: CompanyName.SMARTEXPOSE,
      date_start: Month.SEPTEMBER + ', 2011',
      date_end: Month.JUNE + ', 2015',
      location: 'BERLIN_GERMANY',
    },

    {
      position: 'Software Developer Internship',
      company: CompanyName.GAWLITTADIGITALE,
      date_start: Month.JUNE + ', 2011',
      date_end: Month.AUGUST + ', 2011',
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Software Developer',
      company: CompanyName.EFACTDESIGN,
      date_start: Month.DECEMBER + ', 2009',
      date_end: Month.SEPTEMBER + ', 2010',
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Software Developer',
      company: CompanyName.FUHRMANN_AND_FRIENDS,
      date_start: Month.DECEMBER + ', 2008',
      date_end: Month.NOVEMBER + ', 2009',
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Software Developer Internship',
      company: CompanyName.FUHRMANN_AND_FRIENDS,
      date_start: Month.FEBRUAR + ', 2008',
      date_end: Month.APRIL + ', 2008',
      location: 'BERLIN_GERMANY',
    },
  ];

  return (
    <section className="career-timeline bg-white p-4 my-3 rounded-xl shadow-xl sm:m-4">
      <h2 className="text-2xl py-2 font-semibold">Professional experience</h2>

      {career.map((careerItem, index) => (
        <CareerTimelineItem
          key={index}
          position={careerItem.position}
          company={careerItem.company}
          date_start={careerItem.date_start}
          date_end={careerItem.date_end}
          location={careerItem.location}
        />
      ))}
    </section>
  );
}

export default CareerTimeline;
