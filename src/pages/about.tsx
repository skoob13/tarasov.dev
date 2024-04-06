import Container from 'components/container';
import ExternalLink from 'components/external-link';
import Timeline from 'components/timeline';

export default function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center">
        <h1 className="mt-8 mb-8 text-3xl font-bold tracking-tight md:text-6xl">About</h1>
        <h2 className="prose mb-8 dark:prose-dark sm:mb-16">
          I&rsquo;m a software developer, a speciality coffee enthusiast, and a kinda of an entrepreneur. I work at{' '}
          <ExternalLink href="https://hellosleuth.com">Sleuth</ExternalLink> as a Founding Engineer. Additionaly, I
          bootstrap my own products, leveraging my skills and resources to independently create and launch innovative
          solutions.
        </h2>
        <h3 className="mb-4 text-xl font-bold tracking-tight md:text-3xl">Bio</h3>
        <p className="prose mb-2 dark:prose-dark">
          I live in Barcelona, Spain. Software development is both my primary business and hobby. Currently, I am
          building Sleuth, which is a search engine for children&rsquo;s health information. The company aims to
          displace WebMD and Dr. Google by creating the largest crowdsourced platform for real-world kids&rsquo; health
          data.
        </p>
        <p className="prose mb-2 dark:prose-dark">
          I used to work at a product accelerator company, which provided a unique opportunity to work across a variety
          of markets, such as fintech, proptech, insurtech, sports, online education, and others. Throughout my career,
          I have successfully developed and launched over 20 products.
        </p>
        <p className="prose mb-2 dark:prose-dark">
          In my spare time I enjoy contributing to open source projects, launching drones to sky, travelling around the
          world, doing a <ExternalLink href="https://en.wikipedia.org/wiki/Nosework">nosework</ExternalLink> with my
          dog. Another passion of mine is cars and racing.
        </p>
        <p className="prose mb-8 dark:prose-dark sm:mb-16">
          I&rsquo;m a big fan of web technologies. By the way, this website was built using Next.js, React, and Tailwind
          CSS.
        </p>
        <h3 className="mb-4 text-xl font-bold tracking-tight md:text-3xl">Links</h3>
        <ul className="mb-8 flex flex-col gap-2 sm:mb-16">
          <li className="prose dark:prose-dark">
            📸 <ExternalLink href="https://instagram.com/tarasovg">instagram</ExternalLink>
          </li>
          <li className="prose dark:prose-dark">
            👨‍💻 <ExternalLink href="https://github.com/skoob13">github</ExternalLink>
          </li>
          <li className="prose dark:prose-dark">
            📝 <ExternalLink href="https://twitter.com/anottoday">twitter</ExternalLink>
          </li>
          <li className="prose dark:prose-dark">
            📧 <ExternalLink href="mailto:gtarasov.work@gmail.com">email</ExternalLink>
          </li>
        </ul>
        <h3 className="mb-4 text-xl font-bold tracking-tight md:text-3xl">Timeline</h3>
        <Timeline />
      </div>
    </Container>
  );
}
