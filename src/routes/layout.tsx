import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';

export const useServerTimeLoader = routeLoader$(() => ({
  date: new Date().toISOString(),
}));

export default component$(() => {
  return (
    <>
      <Header />
      <main class="min-h-screen">
        <Slot />
      </main>
      <Footer />
    </>
  );
});