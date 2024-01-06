import { CareerTimelineItem } from './career-timeline-item';
import { Company } from './enum/company';
import { Location } from './enum/location';
import { Month } from './enum/month';

export interface CareerTimelineProps {
  position: string;
  company: Company;
  date_start: Date;
  date_end: Date;
  location: Location;
}

export function CareerTimeline() {
  const career: CareerTimelineProps[] = [
    {
      position: 'Head of Software Engineering',
      company: Company.ALLMYHOMES,
      date_start: new Date(`${Month.MAY} 2021`),
      date_end: new Date(`${Month.FEBRUAR} 2024`),
      location: Location.BERLIN_GERMANY,
    },
    {
      position: 'Lead Software Engineer',
      company: Company.ALLMYHOMES,
      date_start: new Date(`${Month.MARCH} 2018`),
      date_end: new Date(`${Month.APRIL} 2021`),
      location: Location.BERLIN_GERMANY,
    },

    {
      position: 'Head of Software Engineering',
      company: Company.SMARTEXPOSE,
      date_start: new Date(`${Month.AUGUST} 2016`),
      date_end: new Date(`${Month.FEBRUAR} 2018`),
      location: Location.BERLIN_GERMANY,
    },
    {
      position: 'Senior Full Stack Engineer',
      company: Company.SMARTEXPOSE,
      date_start: new Date(`${Month.JUNE} 2015`),
      date_end: new Date(`${Month.JULY} 2016`),
      location: Location.BERLIN_GERMANY,
    },
    {
      position: 'Full Stack Developer',
      company: Company.SMARTEXPOSE,
      date_start: new Date(`${Month.SEPTEMBER} 2011`),
      date_end: new Date(`${Month.JUNE} 2015`),
      location: Location.BERLIN_GERMANY,
    },

    {
      position: 'Software Developer Internship',
      company: Company.GAWLITTADIGITALE,
      date_start: new Date(`${Month.JUNE} 2011`),
      date_end: new Date(`${Month.AUGUST} 2011`),
      location: Location.BERLIN_GERMANY,
    },
    {
      position: 'Software Developer',
      company: Company.EFACTDESIGN,
      date_start: new Date(`${Month.DECEMBER} 2009`),
      date_end: new Date(`${Month.SEPTEMBER} 2010`),
      location: Location.BERLIN_GERMANY,
    },
    {
      position: 'Software Developer',
      company: Company.FUHRMANN_AND_FRIENDS,
      date_start: new Date(`${Month.DECEMBER} 2008`),
      date_end: new Date(`${Month.NOVEMBER} 2009`),
      location: Location.BERLIN_GERMANY,
    },
    {
      position: 'Software Developer Internship',
      company: Company.FUHRMANN_AND_FRIENDS,
      date_start: new Date(`${Month.FEBRUAR} 2008`),
      date_end: new Date(`${Month.APRIL} 2008`),
      location: Location.BERLIN_GERMANY,
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
