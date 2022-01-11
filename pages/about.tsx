import Container from 'components/Container';
import ExternalLink from 'components/ExternalLink';
import Timeline from 'components/Timeline';

export default function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-gray-900 dark:text-white">About</h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I&rsquo;m a software developer, speciality coffee enthusiast, and a kinda of entrepreneur. I work in{' '}
          <ExternalLink href="https://ridgebox.com">Ridgebox.com</ExternalLink> as a Front-End Team Lead. In addition, I
          work on my own products.
        </h2>
        <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-gray-900 dark:text-white">Bio</h3>
        <p className="prose text-gray-600 dark:text-gray-400 mb-2">
          Software development is my primary business and hobby. Currently I work in the product accelerator company, so
          it provides a unique opportunity to work on variety of markets, e.g. fintech, proptech, insurtech, sport,
          online education and other. During my career I have sucussfully developed and launched 20+ projects.
        </p>
        <p className="prose text-gray-600 dark:text-gray-400 mb-2">
          I live in Saint Petersburg, Russia. In my spare time I enjoy contributing to open source projects, launching
          drones to sky, travelling around <span className="crossed">the world</span> Russia (ykwim),{' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Leningrad_Oblast">Leningrad Oblast</ExternalLink> and{' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Republic_of_Karelia">Karelia</ExternalLink>.
        </p>
        <p className="prose text-gray-600 dark:text-gray-400 mb-16">
          I&rsquo;m a big fan of web technologies. By the way, this website was built using Next.js, Preact, and
          Tailwind CSS.
        </p>
        <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-gray-900 dark:text-white">Links</h3>
        <ul className="flex flex-col mb-16 gap-2">
          <li className="prose">
            📸 <ExternalLink href="https://instagram.com/tarasovg">instagram</ExternalLink>
          </li>
          <li className="prose">
            👨‍💻 <ExternalLink href="https://github.com/skoob13">github</ExternalLink>
          </li>
          <li className="prose">
            📝 <ExternalLink href="https://twitter.com/anottoday">twitter</ExternalLink>
          </li>
          <li className="prose">
            📧 <ExternalLink href="mailto:gtarasov.work@gmail.com">email</ExternalLink>
          </li>
        </ul>
        <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-gray-900 dark:text-white">Timeline</h3>
        <Timeline />
      </div>
    </Container>
  );
}
