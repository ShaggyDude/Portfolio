import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="about" class="section bg-gray-50">
      <div class="container">
        <div class="max-w-2xl">
          <h2 class="text-lg mb-12 tracking-wide">About</h2>
          <p class="text-secondary text-lg leading-relaxed mb-8">
            I'm a designer and developer with a focus on minimalist interfaces and thoughtful user experiences. My work aims to find the perfect balance between form and function.
          </p>
          <p class="text-secondary text-lg leading-relaxed">
            I specialize in React, TypeScript, and modern web technologies, creating clean and efficient solutions for complex problems.
          </p>
        </div>
      </div>
    </section>
  );
});