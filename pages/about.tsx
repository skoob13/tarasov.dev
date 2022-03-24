import Container from 'components/container';
import ExternalLink from 'components/external-link';
import Timeline from 'components/timeline';

export default function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center">
        <h1 className="mt-8 mb-8 text-3xl font-bold tracking-tight md:text-6xl">About</h1>
        <h2 className="prose mb-8 dark:prose-dark sm:mb-16">
          I&rsquo;m a software developer, speciality coffee enthusiast, and a kinda entrepreneur. I work in{' '}
          <ExternalLink href="https://ridgebox.com">Ridgebox.com</ExternalLink> as a Front-End Team Lead. In addition, I
          work on my own products.
        </h2>
        <h3 className="mb-4 text-xl font-bold tracking-tight md:text-3xl">Bio</h3>
        <p className="prose mb-2 dark:prose-dark">
          I live in Saint Petersburg, Russia. However, I&rsquo;m in the process of relocating. Software development is
          my primary business and hobby. Currently I work in the product accelerator company, so it provides a unique
          opportunity to work on variety of markets, e.g. fintech, proptech, insurtech, sport, online education and
          other. During my career I have sucussfully developed and launched 20+ products.
        </p>
        <p className="prose mb-2 dark:prose-dark">
          In my spare time I enjoy contributing to open source projects, launching drones to sky, travelling around the
          world. Another passion of mine is cars and racing.
        </p>
        <p className="prose mb-8 dark:prose-dark sm:mb-16">
          I&rsquo;m a big fan of web technologies. By the way, this website was built using Next.js, Preact, and
          Tailwind CSS.
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
