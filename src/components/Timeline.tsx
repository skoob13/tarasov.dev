import Divider from './Divider';
import ExternalLink from './ExternalLink';
import TimelineRow from './TimelineRow';
import Year from './Year';

export default function Timeline() {
  return (
    <div className="mb-16">
      <Year>2021</Year>
      <ul>
        <TimelineRow title="Sleuth">
          I finished the development of <ExternalLink href="https://hellosleuth.com">Sleuth</ExternalLink> platform. It
          helps parents to find clues for their children health.
        </TimelineRow>
        <TimelineRow title="Dynamic Group Therapy">
          I attended a dynamic group therapy. Everybody knows an experience is impossible to replicate. It was the
          3-days of getting out of comfort zone.
        </TimelineRow>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <TimelineRow title="Moved to Downtown 🌁">
          Honestly, I thought that the downtown sucked. However, things changed so I realized that I was totally wrong!
        </TimelineRow>
        <TimelineRow title="After COVID-19">
          I decided to change a plenty of my life aspects after COVID-19. The main goal for 2021 is to be more public,
          to be more communicable, and to do a lot of self-development.
        </TimelineRow>
        <TimelineRow title="COVID-19">I had diagnosed with COVID-19. To be honest, it was a wild ride...</TimelineRow>
        <TimelineRow title="London Strikes Again">
          My second trip to London was in March. I would say it was a perfect timing to visit the United Kingdom before
          lockdowns started. I also visited a sightseeing trip by{' '}
          <ExternalLink href="https://www.instagram.com/moscowlondon/">Konstantin Pinaev</ExternalLink>.
        </TimelineRow>
        <TimelineRow title="99sales">
          I started my own business. We got awesome results with the first tests, but then Coronavirus striked. Fashion
          was the one of vulnerable markets for lockdowns.
        </TimelineRow>
        <TimelineRow title="Closed Outline Studio">
          We decided to suspend our startup studio to focus on a single project. Nevertheless, we had a exceptional
          experience working with fintech and insurtech projects. E.g. a neobank on Singapore market{' '}
          <ExternalLink href="https://www.crunchbase.com/organization/kubia">Kubia</ExternalLink>, the leading on
          Russian insurance market <ExternalLink>El-Market</ExternalLink> platform, and a project for the largest bank
          in Russia <ExternalLink href="https://sber.ru">Sber</ExternalLink>.
        </TimelineRow>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <TimelineRow title="London 💂">
          London surprised me a lot. Definitely, it became the one of the favorite cities for me. People, history,
          lifestyle, and pubs!
        </TimelineRow>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <TimelineRow title="Eurotip 🚙">
          If you haven't seen the movie "Eurotip", you would better do it ASAP. I visited Germany, Netherlands, France,
          Switzerland and Italy in 12 days on Mazda CX-5.
        </TimelineRow>
        <TimelineRow title="Italy">
          I had a 9-days trip to Italy. We visited Rome – the cradle of history. Afterwards, we did a sunbathing in
          Riccione and Rimini.
        </TimelineRow>
        <TimelineRow title="Bachelor">
          I got a Bachelor degree in Business Informatics of Higher School of Economics.
        </TimelineRow>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <TimelineRow title="USA">
          Work and travel programme was the gamechanger for me. I was 4 months in the US and had a breathtaking trip
          around California, Las Vegas, New York, and Alaska.
        </TimelineRow>
      </ul>
      <Divider className="mb-0" />
    </div>
  );
}