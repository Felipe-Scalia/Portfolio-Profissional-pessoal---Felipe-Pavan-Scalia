import { Github, Linkedin, Mail, Phone, MapPin, Code, Globe, GraduationCap, Languages, Dumbbell, Gamepad2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-slate-900/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Felipe Pavan Scalia
              </h1>
              <p className="text-2xl md:text-3xl text-slate-300">
                Estudante de Ciência da Computação
              </p>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl">
                Buscando experiências para enriquecer minha formação acadêmica e profissional
              </p>

              {/* Social Links */}
              <div className="flex gap-4 flex-wrap pt-4">
                <a
                  href="https://github.com/Felipe-Scalia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all hover:scale-105 border border-slate-600"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/felipe-pavan-scalia-3b39b33b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600/80 hover:bg-blue-500 rounded-lg transition-all hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://sites.google.com/view/felipepavanscaliaportfolio/p%C3%A1gina-inicial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600/80 hover:bg-purple-500 rounded-lg transition-all hover:scale-105"
                >
                  <Globe className="w-5 h-5" />
                  Google Sites
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-900 rounded-2xl p-2 shadow-2xl">
                  <img
                    src="/src/imports/WhatsApp_Image_2025-12-12_at_12.54.54.jpeg"
                    alt="Felipe Pavan Scalia"
                    className="relative w-full h-[500px] rounded-xl object-cover object-center shadow-xl"
                    style={{objectPosition: 'center 35%'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* About Section */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Code className="text-blue-400" />
            Sobre Mim
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Estudante de Ciência da Computação com boas habilidades de comunicação, aprendizado e criatividade.
            Atualmente cursando o 1º semestre na UniCEUB em Brasília-DF, estou em busca de oportunidades para
            aplicar meus conhecimentos e continuar crescendo profissionalmente.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Habilidades & Competências</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
              <h3 className="text-blue-400 font-semibold mb-2">Soft Skills</h3>
              <ul className="text-slate-300 space-y-1">
                <li>• Boa comunicação em equipe</li>
                <li>• Trabalho em equipe</li>
                <li>• Capacidade de aprendizado</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
              <h3 className="text-purple-400 font-semibold mb-2">Hard Skills</h3>
              <ul className="text-slate-300 space-y-1">
                <li>• Iniciante em Python</li>
                <li>• Conhecimento básico em informática</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <GraduationCap className="text-blue-400" />
            Formação Acadêmica
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Bacharelado em Ciência da Computação</h3>
              <p className="text-blue-400">UniCEUB - Asa Norte, Brasília-DF</p>
              <p className="text-slate-400">Cursando - 1º Semestre</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-white">Ensino Médio</h3>
              <p className="text-purple-400">Colégio CIMAN Octogonal, Brasília-DF</p>
              <p className="text-slate-400">Concluído</p>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Languages className="text-blue-400" />
            Idiomas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-2">Português</h3>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <p className="text-slate-400 text-sm mt-2">Proficiente</p>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-2">Inglês</h3>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-slate-400 text-sm mt-2">Intermediário Alto</p>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-2">Espanhol</h3>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
              <p className="text-slate-400 text-sm mt-2">Intermediário</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
            <p className="text-slate-300 flex items-center gap-2">
              <span className="text-blue-400">🏆</span>
              Certificado de Espanhol escolar pelo Colégio CIMAN
            </p>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Hobbies & Interesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-slate-700/70 transition-colors">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-white text-lg">Programar</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-slate-700/70 transition-colors">
              <Gamepad2 className="w-8 h-8 text-purple-400" />
              <span className="text-white text-lg">Jogos</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-slate-700/70 transition-colors">
              <Dumbbell className="w-8 h-8 text-green-400" />
              <span className="text-white text-lg">Academia</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Vamos Conversar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:felipeps1411@gmail.com"
              className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-600 hover:bg-slate-700/50 transition-colors"
            >
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white">felipeps1411@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+5561998382282"
              className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-600 hover:bg-slate-700/50 transition-colors"
            >
              <Phone className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-slate-400 text-sm">Telefone</p>
                <p className="text-white">(61) 99838-2282</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-600">
              <MapPin className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-slate-400 text-sm">Localização</p>
                <p className="text-white">Brasília-DF</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-400 border-t border-slate-700">
        <p>&copy; 2026 Felipe Pavan Scalia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}