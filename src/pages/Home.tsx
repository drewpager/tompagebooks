import React from 'react';
import BookCard from '../components/BookCard';
import AuthorCard from '../components/AuthorCard';
import turbulence from '../covers/turbulence-and-alchemy.png';
import wings from '../covers/wings-of-glory.png';
import WRS from '../covers/westward-rising-sons.png';
import tom from '../covers/tom-page.png';
import '../styles.css';

const Home: React.FC = () => {
  const books = [
    {
      title: 'Westward Rising Sons',
      description: 'While searching for under-told stories from the American past, I stumbled upon the historic rise of San Francisco and how her prosperity was fueled by capitalists made rich by the Comstock Silver Lode of Nevada. Westward Rising Sons comprises a historically accurate re-telling of an early high water mark in American history, which captivated the world’s attention well into the first three decades of the Twentieth Century. At its thematic heart, Westward Rising Sons is a story about human achievement, greed and betrayal, set during a time in American history when prairie schooners and pioneers found themselves increasingly displaced by modern industrialization and the arrival of the Transcontinental Railroad.',
      link: 'https://amzn.to/3Nq3NES',
      img: WRS,
    },
    {
      title: 'Turbulence & Alchemy of the 1960s',
      description: 'Turbulence & Alchemy of the 1960s is the story about baby boom America from 1966 to1969, when Neil Armstrong first set foot on the moon. It is the story of fictional character, Kevin Mitchell, who joins the psychedelic drug movement during San Francisco’s Acid Tests of 1966, until he flunks out of Berkeley and finds himself drafted into the brutal heart of the Vietnam War. Turbulence walks arm-in-arm with Dr. Martin Luther King, Jr. during his epic marches on Chicago and Memphis, while revealing Dr. King’s innermost fears and personal demons. Turbulence follows the incredible gamble of America’s Cold War astronauts, as Armstrong and his crewmates sit atop the equivalent of a detonating 100,000-megaton bomb. Turbulence lands the reader into the searing jungles of Vietnam, both through the eyes of Private Mitchell and veteran war correspondent, Peter Arnett, who is unafraid to deliver the truth to a readership increasingly put off by war. Turbulence’s interwoven narration highlights the historical movements that fueled the imaginations and conflicts of a nation, as she struggled to free herself from racial inequality, sexual inhibition, stodgy thinking and an unjust war.',
      link: 'https://amzn.to/3YiCRND',
      img: turbulence
    },
    {
      title: 'Wings of Glory',
      description: 'Wings of Glory is the story of American men and women raised in the hardscrabble days of the Great Depression, undaunted in their determination to defeat Axis aggression. It is the story of American industrial might, combined with an unproven doctrine of daylight strategic bombing in the European Theater of Operations, as well as a personal journey of discovery in my attempt to find traces of my father’s participation in this monumental struggle. As I set out to explore my father’s World War Two experiences as a B-24 engineer with the Fifteenth Air Force—including two shoot downs and no loss of crew—I reached out to my favorite college professor, Donald L. Miller (MacCracken Professor of History, Lafayette College), author of such notable works as Masters of the Air, about the Eighth Air Force bombing Axis Europe from airbases in England. In response, and in keeping with the all-inclusive selflessness of the Greatest Generation, Professor Miller encouraged me to write this full history of the Fifteenth Air Force during its eighteen month existence in far southern Italy.',
      link: 'https://amzn.to/3A0cvqr',
      img: wings,
    },
  ];

  const authors = [
    {
      name: 'Tom Page',
      description: 'Tom is an entrepreneur, author, and documentary filmmaker with a passion for education and learning. From short-form films intended to stir interest in a given area of study to heavily researched and historically accurate books about American History and more, learn more about Tom’s work below:',
      img: tom,
    },
  ];

  return (
    <main>
      <section>
        {authors.map((author, index) => (
          <AuthorCard key={index} name={author.name} description={author.description} img={author.img} />
        ))}
      </section>
      <section>
        <h1 className="tom-h1">Books by Tom Page</h1>
        {books.map((book, index) => (
          <BookCard key={index} title={book.title} description={book.description} link={book.link} img={book.img} />
        ))}
      </section>
    </main>
  );
};

export default Home;
