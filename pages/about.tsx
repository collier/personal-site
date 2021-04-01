import Image from 'next/image';
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
      <div className="flex flex-col gap-5 pb-5">
        <Text>
          I'm D.J. Collier, I live in the Washington, D.C. metro area and
          currently work at Counterpoint Consulting as a Principal Consultant.
          Before joining Counterpoint, I co-founded a startup for ordering from
          restaurants called Foodio, based in Charlottesville, VA.
        </Text>
        <Text>
          I am currently interested in learning more about TypeScript, Design
          Systems, Accessability, new JavaScript bundlers like esbuild, other UI
          frameworks like Svelte, and data visualizations.
        </Text>
        <Text>
          I attended the University of Virginia where I double majored in
          Systems Engineering and Mathematics. While at UVa I took courses on
          Human Machine Interfaces, Software Development, Statistics,
          Psychology, and Linear Modeling & Optimizations.
        </Text>
      </div>
      <div className="pb-5">
        <Image
          src="/arthurs-seat.jpg"
          width={768}
          height={576}
          className="pb-5"
        />
        <p className="text-gray-400 text-xs italic text-center">
          Summit of Arthur's Seat in Edinburgh, Scotland while on a trip to the
          United Kingdom
        </p>
      </div>
      {/* See tailwind.config for specific column configuration */}
      <div className="grid grid-cols-about gap-10">
        <Text tag="h2">Experience</Text>
        <WorkExperienceList workExperiences={workExperiences} />
        <Text tag="h2">Education</Text>
        <div>
          <Text tag="h3" weight="semibold">
            University of Virginia
          </Text>
          <Text>BS in Systems Engineering and Mathematics</Text>
          <Text size="base" style="muted">
            2009 - 2013 · Charlottesville, VA
          </Text>
          <Text size="base">
            <Text tag="span" weight="semibold" size="base">
              Topics I studied:
            </Text>{' '}
            Human Machine Interfaces, Data & Information Engineering, Software
            Development, Probability, Statistics, Linear Algebra, Linear
            Programming, Linear Regression
          </Text>
        </div>
      </div>
    </>
  );
}

const WorkExperienceList = ({ workExperiences }: Props) => (
  <ul className="flex flex-col gap-5">
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
            <Text tag="span" weight="semibold">
              {company}
            </Text>
            <Text tag="span">, {position}</Text>
          </h3>
          <div className="pb-1">
            <Text size="base" style="muted">
              {startDate} - {endDate} · {location} ·{' '}
              <a href={`http://${webAddress}`} className="hover:underline">
                {webAddress}
              </a>
            </Text>
          </div>
          <Text size="base">{details}</Text>
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
      webAddress: 'c20g.com',
      startDate: 'Aug 2014',
      endDate: 'Present',
      location: 'Tysons Corner, Virginia',
      details:
        'Served in a leadership capacity on many projects building single page web applications for private and public sector clients. Led multiple UI tech stack updates used on projects, from jQuery to Backbone/Marionette (2014) to React/Typescript (2020)',
    },
    {
      company: 'Foodio',
      position: 'Co-Founder',
      webAddress: 'food.io',
      startDate: 'Aug 2012',
      endDate: 'Aug 2014',
      location: 'Charlottesville, Virginia',
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
