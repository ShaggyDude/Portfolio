import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="fixed top-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-sm mix-blend-multiply">
      <div class="container flex items-center justify-between h-20 tracking-wide">

        <a href="#home" class="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gradient-to-r after:from-gray-300 after:to-gray-600 after:transition-all after:duration-200 after:ease-out hover:after:w-full">
          mini<s class="hidden sm:inline">mal</s>
        </a>

        <nav>
          <ul class="flex items-center space-x-12 ml-4">
            <li>
              <a 
                href="#about" 
                class="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gradient-to-r after:from-gray-300 after:to-gray-600 after:transition-all after:duration-200 after:ease-out hover:after:w-full"
              >
                about
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                class="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gradient-to-r after:from-gray-300 after:to-gray-600 after:transition-all after:duration-200 after:ease-out hover:after:w-full"
              >
                projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                class="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gradient-to-r after:from-gray-300 after:to-gray-600 after:transition-all after:duration-200 after:ease-out hover:after:w-full"
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});