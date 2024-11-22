import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/hero/hero';
import Projects from '~/components/projects/projects';
import About from '~/components/about/about';
import Contact from '~/components/contact/contact';

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: 'John Doe - Designer & Developer',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of John Doe, a designer and developer based in New York',
    },
  ],
};