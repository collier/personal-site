import type { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Anchor, BadgeList, Title, Text } from '../components';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | D.J. Collier</title>
      </Head>
      <Title>Projects</Title>
      <ul>
        <ProjectItem
          name='"Our Family" App'
          techUsed={[
            'React',
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'PostgreSQL',
            'Magic Auth',
          ]}
          githubLink="https://github.com/collier/family-site"
        >
          A web app that is used by my family to track the daily activities of
          our dog <Anchor href="/riesling.jpg">Riesling</Anchor>, like walks and
          giving him his food. It also serves as a recipe tracker, where we keep
          a copy of recipes we have made and liked in the past. The recipes are
          stored as markdown files, which are then parsed and created into
          static pages using Next.js.
        </ProjectItem>
        <ProjectItem
          name="Office Stat Board"
          techUsed={[
            'React',
            'Create React App',
            'Ant Design',
            'CSS Modules',
            'Go',
            'MySQL',
            'Advent Of Code API',
            'Dark Sky API',
            'ESPN API',
            'DC Metro Hero API',
          ]}
          githubLink="https://github.com/collier/stat-board"
        >
          A slideshow which displays statistics about an office or company. The
          StatBoard was designed to be displayed on a television in a common
          area in the office so that staff can see cool inforation at a glance.
          It&apos;s useful for highlighting office events, competitions,
          anniversaries, weather, even communiting information.
        </ProjectItem>
        <ProjectItem
          name="SOAP Analyzer"
          techUsed={[
            'React',
            'Webpack',
            'Ace Editor',
            'Chrome Extension',
            'Dev Tools',
          ]}
          githubLink="https://github.com/collier/soap-analyzer"
          siteLink="https://chrome.google.com/webstore/detail/soap-analyzer/pkolclcpcbkghocbmacdmcheaioncncl?hl=en"
        >
          A developer tools Chrome extension which allows users to easily track
          any SOAP HTTP requests that are made by the browser. Its meant to act
          as the Network tab, but only for SOAP HTTP traffic, currently has
          ~4,000 actively weekly users.
        </ProjectItem>
      </ul>
    </>
  );
}

type ProjectItemProps = PropsWithChildren<{
  name: string;
  techUsed: string[];
  siteLink?: string;
  githubLink: string;
}>;

const ProjectItem = ({
  children,
  name,
  techUsed,
  siteLink,
  githubLink,
}: ProjectItemProps) => (
  <li className="flex flex-col space-y-3 pb-10">
    <Text tag="h2" size="2xl" weight="semibold" font="sans">
      {name}
    </Text>
    <Text>{children}</Text>
    <BadgeList items={techUsed} />
    <div className="space-x-3 font-serif">
      {siteLink && <Anchor href={siteLink}>Visit Site →</Anchor>}
      <Anchor href={githubLink}>Visit Github Repo →</Anchor>
    </div>
  </li>
);
