import Head from 'next/head';
import { Title, Text } from '../components';

type WorkExperience = {
  company: string;
  position: string;
  webAddress: string;
  startDate: string;
  endDate: string;
  location: string;
  details: string;
};

type Props = {
  workExperiences: WorkExperience[];
};

export default function AboutPage({ workExperiences }: Props) {
  return (
    <>
      <Head>
        <title>About | D.J. Collier</title>
      </Head>
      <Title>About Me</Title>
      <div className="space-y-5 mb-5">
        <Text font="serif">
          I&apos;m D.J. Collier, I live in the Washington, D.C. metro area and
          currently work at Counterpoint Consulting as a Principal Consultant.
          Before joining Counterpoint, I co-founded a startup for ordering from
          restaurants called Foodio, based in Charlottesville, VA.
        </Text>
        <Text font="serif">
          I am currently interested in learning more about TypeScript, Design
          Systems, Accessability, data visualizations, new UI frameworks like
          Svelte and Solid, and new languages in general.
        </Text>
        <Text font="serif">
          I attended the University of Virginia where I double majored in
          Systems Engineering and Mathematics. While at UVa I took courses on
          Human Machine Interfaces, Software Development, Statistics,
          Psychology, and Linear Modeling & Optimizations.
        </Text>
      </div>
      <div className="mb-5">
        <img
          src="/arthurs-seat-768.jpg"
          srcSet="/arthurs-seat-768.jpg 768w, /arthurs-seat-640.jpg 640w, /arthurs-seat-420.jpg 420w"
          sizes="(max-width: 420px) 420px, (max-width: 640px) 640px, 768px"
          alt="DJ Collier standing on summit of Arthur's in Edinburgh, Scotland"
          className="mb-1"
        />
        <p className="text-gray-400 text-sm text-center font-serif">
          Summit of Arthur&apos;s Seat in Edinburgh, Scotland while on a trip to
          the United Kingdom
        </p>
      </div>
      {/* See tailwind.config for specific column configuration */}
      <div className="grid grid-cols-about gap-10">
        <Text tag="h2" font="sans">
          Experience
        </Text>
        <WorkExperienceList workExperiences={workExperiences} />
        <Text tag="h2" font="sans">
          Education
        </Text>
        <div>
          <Text tag="h3" weight="semibold" font="sans">
            University of Virginia
          </Text>
          <Text font="sans">BS in Systems Engineering and Mathematics</Text>
          <Text size="sm" style="muted" font="sans">
            2009 - 2013 · Charlottesville, VA
          </Text>
          <div className="mb-1"></div>
          <Text size="base">
            <b>Topics I studied:</b> Human Machine Interfaces, Data &
            Information Engineering, Software Development, Probability,
            Statistics, Linear Algebra, Linear Programming, Linear Regression,
            Experiment Design
          </Text>
        </div>
      </div>
    </>
  );
}

const WorkExperienceList = ({ workExperiences }: Props) => (
  <ul className="space-y-5">
    {workExperiences.map(
      (
        {
          company,
          position,
          startDate,
          endDate,
          location,
          webAddress,
          details,
        },
        i
      ) => (
        <li key={i}>
          <h3>
            <Text tag="span" weight="semibold" font="sans">
              {company}
            </Text>
            <span>, {position}</span>
          </h3>
          <div className="mb-1">
            <Text size="sm" style="muted" font="sans">
              {startDate} - {endDate} · {location} ·{' '}
              <a href={webAddress} className="hover:underline">
                {webAddress}
              </a>
            </Text>
          </div>
          <Text size="base" font="serif">
            {details}
          </Text>
        </li>
      )
    )}
  </ul>
);

export async function getStaticProps() {
  const workExperiences: WorkExperience[] = [
    {
      company: 'Counterpoint Consulting',
      position: 'Principal Consultant',
      webAddress: 'http://c20g.com',
      startDate: 'Aug 2014',
      endDate: 'Present',
      location: 'Tysons Corner, VA',
      details:
        'Served in a leadership capacity on many projects building single page web applications for private and public sector clients. Led multiple UI tech stack updates used on projects, from jQuery to Backbone/Marionette (2014) to React/Typescript (2020)',
    },
    {
      company: 'Foodio',
      position: 'Co-Founder',
      webAddress: 'http://food.io',
      startDate: 'Aug 2012',
      endDate: 'Aug 2014',
      location: 'Charlottesville, VA',
      details:
        'Co-founded a startup for ordering food from local restaurants, with key features being able to split the bill, and white-labeling to promote restaurant brands. Built web apps for: placing orders, restaurant-side order management, internal administration, reporting, and customer service',
    },
  ];
  return {
    props: {
      workExperiences,
    },
  };
}
