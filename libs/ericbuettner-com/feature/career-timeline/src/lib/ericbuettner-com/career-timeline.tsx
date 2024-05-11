import { CareerTimelineItem } from './career-timeline-item';
import { CompanyLocation } from './enum/company-location';
import { CompanyName } from './enum/company-name';

export interface CareerTimelineProps {
  position: string;
  company: CompanyName;
  date_start: Date;
  date_end: Date;
  location: keyof typeof CompanyLocation;
}

export function CareerTimeline() {
  const career: CareerTimelineProps[] = [
    {
      position: 'Head of Software Engineering',
      company: CompanyName.ALLMYHOMES,
      date_start: new Date('2021/05/01'),
      date_end: new Date('2024/02/29'),
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Lead Software Engineer',
      company: CompanyName.ALLMYHOMES,
      date_start: new Date('2018/03/01'),
      date_end: new Date('2021/04/30'),
      location: 'BERLIN_GERMANY',
    },

    {
      position: 'Head of Software Engineering',
      company: CompanyName.SMARTEXPOSE,
      date_start: new Date('2016/08/01'),
      date_end: new Date('2018/02/28'),
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Senior Full Stack Engineer',
      company: CompanyName.SMARTEXPOSE,
      date_start: new Date('2015/06/01'),
      date_end: new Date('2016/07/31'),
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Full Stack Developer',
      company: CompanyName.SMARTEXPOSE,
      date_start: new Date('2011/09/01'),
      date_end: new Date('2015/06/30'),
      location: 'BERLIN_GERMANY',
    },

    {
      position: 'Software Developer Internship',
      company: CompanyName.GAWLITTADIGITALE,
      date_start: new Date('2011/06/01'),
      date_end: new Date('2011/08/31'),
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Software Developer',
      company: CompanyName.EFACTDESIGN,
      date_start: new Date('2009/12/01'),
      date_end: new Date('2010/09/30'),
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Software Developer',
      company: CompanyName.FUHRMANN_AND_FRIENDS,
      date_start: new Date('2008/12/01'),
      date_end: new Date('2009/11/30'),
      location: 'BERLIN_GERMANY',
    },
    {
      position: 'Software Developer Internship',
      company: CompanyName.FUHRMANN_AND_FRIENDS,
      date_start: new Date('2008/02/01'),
      date_end: new Date('2008/04/30'),
      location: 'BERLIN_GERMANY',
    },
  ];

  return (
    <section className="career-timeline my-3 rounded-xl bg-white p-4 shadow-xl sm:m-4">
      <h2 className="py-2 text-2xl font-semibold">Professional experience</h2>

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
