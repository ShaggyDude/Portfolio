import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'Minimalist portfolio built with Qwik',
      year: '2024',
      tech: ['Qwik', 'TypeScript', 'Tailwind'],
      link: '#'
    },
    {
      title: 'E-commerce',
      description: 'Modern e-commerce platform',
      year: '2023',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Task App',
      description: 'Simple task management application',
      year: '2023',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    }
  ];

  return (
  <section id="projects" class="section bg-white relative overflow-hidden">
      {/* Background image layer */}
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=2000&h=1200" 
          alt="Minimal workspace" 
          class="w-full h-full object-cover opacity-80"
          height="1200"
          width="2000"
        />
      </div>


      <div class="container relative">
        <h2 class="text-3xl font-normal mb-12 tracking-wide">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a 
              key={project.title}
              href={project.link}
              class="block group"
            >
              <div class="p-6 border border-gray-200 bg-white/70 hover:bg-white backdrop-blur-sm rounded-lg hover:border-blue-300 shadow-sm hover:shadow transition-colors">
                <span class="text-sm text-secondary">{project.year}</span>
                <h3 class="text-xl mt-4 mb-2 group-hover:opacity-60 transition-opacity">
                  {project.title}
                </h3>
                <p class="text-secondary mb-4">{project.description}</p>
                <div class="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span 
                      key={item} 
                      class="text-xs px-2 py-1 bg-gray-50 text-secondary rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});