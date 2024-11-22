import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="flex items-center justify-between space-x-4 border p-6 text-sm antialiased">
      <p>© {new Date().getFullYear()}</p>
      <div class="flex items-center space-x-4">
        <a href="https://github.com/ShaggyDude" class="transition-opacity hover:opacity-60">GitHub</a>
        <a href="https://www.linkedin.com/in/scott-romack-9338294" class="transition-opacity hover:opacity-60">LinkedIn</a>
      </div>
      <a href="#home" 
        class="self-center rounded-full bg-gray-50 p-3 transition-colors hover:bg-gray-100" 
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 1200 1200" class="text-secondary">
          <path d="M935 490 600 155 265 490l70 70 215-215v705h100V345l215 215z" fill="currentColor" />
        </svg>
      </a>
    </footer>
  );
});