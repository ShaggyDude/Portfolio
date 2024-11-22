import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="home" class="section bg-white relative overflow-hidden">
      {/* Background image layer */}
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=2000&h=1200" 
          alt="Minimal workspace" 
          class="w-full h-full object-cover opacity-80 just to make a change"
          height="1200"
          width="2000"
        />
      </div>
      
      {/* Dots pattern overlay */}
      <div class="absolute inset-0 opacity-[0.5] bg-[radial-gradient(theme(colors.white)_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Content */}
      <div class="container relative">
        <div class="max-w-2xl">
          <h1 class="text-3xl md:text-4xl font-normal leading-relaxed mb-8">
            Designer and developer focused on crafting minimal digital experiences.
          </h1>
          <p class="text-secondary text-lg leading-relaxed">
            Currently available for select freelance projects.
          </p>
        </div>
      </div>
    </section>
  );
});