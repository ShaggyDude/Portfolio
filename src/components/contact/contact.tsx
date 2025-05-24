import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="contact" class="section bg-gray-50">
      <div class="container">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-normal mb-12 tracking-wide">Contact</h2>
          <p class="text-secondary text-lg leading-relaxed mb-8">
            Available for freelance projects and collaborations. Get in touch via email:
          </p>
          <a 
            href="mailto:scott@romack.net" 
            class="text-lg hover:opacity-60 transition-opacity"
          >
            scott@romack.net
          </a>
        </div>
      </div>
    </section>
  );
});