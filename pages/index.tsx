import Head from 'next/head';
import { Anchor, Text } from '../components';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>D.J. Collier</title>
      </Head>
      <h1 className="text-4xl pb-8 font-bold">
        Front-end web engineer with a passion for making engaging, intuitive,
        maintablable interfaces that users enjoy using.
      </h1>
      <Text>
        I am a Principal Consulant at{' '}
        <Anchor href="https://www.counterpointconsulting.com/">
          Counterpoint Consulting
        </Anchor>
        , based in the Washington, DC metro area. I was previously a co-founder
        at <Anchor href="https://food.io/">Foodio</Anchor>, and studied Systems
        Engineering at University of Virginia. Feel free to checkout my{' '}
        <Anchor href="https://github.com/collier">Github</Anchor> to see some of
        the things I have made. To contact me, send me a message on{' '}
        <Anchor href="https://www.linkedin.com/in/dj-collier/">LinkedIn</Anchor>{' '}
        or email me at{' '}
        <Anchor href="mailto:dj@djcollier.com">dj@djcollier.com</Anchor>.
      </Text>
    </>
  );
}
