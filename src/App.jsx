import { useState } from 'react';
import './App.css';
import {
  MessageCircle, HeartPulse, Sparkles, BookOpen, GraduationCap,
  Briefcase, Activity, ChevronDown, ChevronUp, Users,
  Building2, Cloud, HeartCrack, Sunrise, MapPin, Globe, CheckCircle2, Mail, Menu, X
} from 'lucide-react';

// ==============================================================
//               TARJETA DE ESPECIALIDAD 
// ==============================================================
function TarjetaEspecialidad({ icono, titulo, descripcion }) {
  return (

    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-left group cursor-default">

      <div className="bg-[#E3878D]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#8A2742] mb-6 group-hover:bg-[#E3878D]/20 transition-colors">
        {icono}
      </div>


      <h4 className="text-xl text-[#8A2742] mb-4 font-medium">{titulo}</h4>

      <p className="text-gray-600 leading-relaxed text-[15px] font-light">
        {descripcion}
      </p>
    </div>
  );
}
// ==============================================================
//                 TARJETA DE TRAYECTORIA
// ==============================================================
function TarjetaTrayectoria({ icono, categoria, titulo, descripcion, alineacion }) {
  const esIzquierda = alineacion === "izquierda";

  return (
    <div className="relative flex items-center w-full mb-12 md:mb-16 last:mb-0 group cursor-default">

      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#E3878D] rounded-full border-[4px]
       border-[#FCF6F0] shadow-sm z-10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D1767C]">
        {icono}
      </div>
      <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${esIzquierda ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 text-left'}`}>

        <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full inline-block hover:border-[#E3878D]/20">
          <p className="text-[11px] text-[#E3878D] font-bold tracking-[0.2em] uppercase mb-2">
            {categoria}
          </p>
          <h4 className="text-xl md:text-2xl text-[#8A2742] mb-4 font-medium">
            {titulo}
          </h4>
          <p className="text-gray-700 leading-relaxed text-[14px] md:text-base">
            {descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==============================================================
// 3. PÁGINA PRINCIPAL APP
// ==============================================================
export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const whatsappNumber = "+5491100000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Melanie,%20me%20gustar%C3%ADa%20hacer%20una%20consulta.`;

  return (

    <div className='min-h-screen font-sans text-gray-700 relative pb-0 bg-[#FCF6F0] overflow-x-hidden'>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&display=swap');`}
      </style>

      {/* PARTE DE ARRIBA PRINCIPAL */}
      <header className='sticky top-0 z-50 bg-[#FCF6F0]/95 backdrop-blur-sm py-4 px-6 md:px-8 lg:px-24 flex justify-between items-center transition-all border-b border-[#8A2742]/5'>

        {/* LOGO Y NOMBRE (Izquierda) */}
        <div className='flex items-center gap-3 cursor-pointer z-50'>
          <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E3878D] p-[3px] shadow-sm flex-none flex items-center justify-center'>
            <div className='w-full h-full border-[1.5px] border-white rounded-full flex items-center justify-center'>
              <HeartPulse size={20} className="text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div className='flex flex-col items-start mt-1'>
            <h1 className='text-[#D1767C] text-xl md:text-2xl leading-none pr-1 tracking-tight' style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}>
              Lic. Melanie Chaffittelli
            </h1>
            <span className='bg-[#E3878D] text-white text-[8px] md:text-[9px] px-3 py-1 rounded-sm uppercase mt-1 font-bold shadow-sm tracking-widest'>
              Psicóloga
            </span>
          </div>
        </div>

        {/* CONTENEDORES DERECHOS (Botón Menú o Links Escritorio) */}
        <div className="flex items-center gap-4">

          {/* NAVEGACION DESKTOP (Oculta en celular) */}
          <nav className='hidden lg:flex gap-8 items-center text-sm font-medium text-[#8A2742]/80'>
            <a href="#inicio" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Inicio</a>
            <a href="#recorrido" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Sobre mí</a>
            <a href="#especialidades" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Abordajes</a>
            <a href="#modalidad" className='hover:text-[#8A2742] border-b-2 border-transparent hover:border-[#8A2742] py-1 transition-all'>Modalidad</a>
            {/* El botón de contacto ahora vive solo adentro del menú Desktop o Móvil */}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className='cursor-pointer bg-[#D1767C] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition shadow-md'>
              Contacto
            </a>
          </nav>

          {/* BOTON DEL MENU MOVIL (Visible solo en celular) */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#8A2742] z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* PANTALLA COMPLETA DEL MENU MOVIL */}
        {/* Le agregamos z-[100] para asegurar que tape todo al abrirse */}
        <div className={`fixed inset-0 bg-[#FCF6F0] z-[40] flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Inicio</a>
          <a href="#recorrido" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Sobre mí</a>
          <a href="#especialidades" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Abordajes</a>
          <a href="#modalidad" onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#8A2742] hover:text-[#D1767C] transition-colors">Modalidad</a>
          <a href={whatsappLink} onClick={() => setIsMenuOpen(false)} target="_blank" rel="noreferrer" className="bg-[#D1767C] text-white px-10 py-4 rounded-full text-xl shadow-lg mt-4">Contacto</a>
        </div>

      </header>

      <main>
        {/* SECCION: 1 INICIO */}
        <div id="inicio" className="w-full pt-12 md:pt-16 pb-20 md:pb-24 relative overflow-hidden">

          <div className='max-w-7xl mx-auto px-6 lg:px-12 relative z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]'>
              <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
                <p className='text-[#a34b55] bg-[#E3878D]/15 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 inline-block'>
                  ESPACIO TERAPÉUTICO
                </p>
                <h2 className='text-5xl md:text-7xl lg:text-8xl text-[#8A2742] mb-8 leading-[1.1] lg:leading-[0.85]' style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}>
                  Lic. Melanie <br />
                  <span className='text-[#D1767C]'>Chaffittelli</span>
                </h2>
                <p className='text-lg lg:text-xl text-[#8A2742]/70 mb-10 leading-relaxed max-w-lg font-light'>
                  Acompaño a Adolescentes y Adultos en procesos atravesados por ansiedad, angustia, duelos y crisis personales, ofreciendo un espacio de escucha,
                  sostén y reflexión para abrir oportunidades de cambio.
                </p>
                <div className='flex flex-col sm:flex-row gap-6 w-full lg:w-auto'>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className='cursor-pointer bg-[#D1767C] text-white py-4 px-10 rounded-full font-medium shadow-lg hover:scale-105
                   transition-all text-center'>
                    Solicitar Turno →
                  </a>
                  <a href="#modalidad" className="cursor-pointer bg-white text-[#8A2742] border border-[#8A2742]/20 py-4 px-10 rounded-full font-medium shadow-sm hover:bg-gray-50
                   transition-all text-center">
                    Ver Modalidad
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative group w-full max-w-xs md:max-w-md">

                  <div className="bg-white w-full aspect-[4/5] rounded-[3rem] md:rounded-[4rem] p-4 shadow-xl border border-gray-50 flex items-center justify-center relative overflow-hidden">
                    <img src="https://www.psicomch.com.ar/assets/avatar-rzErGR1f.webp" alt="Ilustración Psicóloga" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECCION 2: MI RECORRIDO */}
        <section id='recorrido' className='w-full py-20 md:py-24'>
          <div className='max-w-4xl mx-auto px-6'>
            <div className="text-center mb-16">
              <p className='text-[#E3878D] text-xs font-bold tracking-[0.2em] uppercase mb-4'>
                MI RECORRIDO
              </p>
              <h3 className="text-3xl md:text-5xl text-gray-700 font-light mb-8 leading-tight">
                Más allá del consultorio
              </h3>
              <div className="w-12 h-[2px] bg-[#E3878D]/60 mx-auto"></div>
            </div>
            <div className='text-left relative space-y-6 text-gray-500 leading-relaxed font-light text-base md:text-lg'>
              <p className="mb-6">
                <span className="text-2xl md:text-3xl text-gray-800 mr-2" style={{ fontFamily: "'Dancing Script', cursive" }}>¡Hola! Soy Melanie.</span>
                <span className="text-gray-500">Lic. En Psicología, especializada en Clínica de Adultos y Adolescentes.</span>
              </p>
              <p>Mi vocación surgió mucho antes de recibirme. Inicié mi recorrido profesional como voluntaria en el Hospital Italiano de Buenos Aires, acompañando a pacientes pediátricos en internación, y en AEDIN, trabajando con niños y niñas con trastornos neurológicos.</p>
              <p>Ese contacto con el mundo de la discapacidad despertó en mí un profundo interés por seguir formándome y adquirir más herramientas para poder ayudar. Lo que comenzó como una experiencia de acompañamiento se transformó en un aprendizaje enorme: <strong className="text-[#9a3346] font-semibold italic">quienes creí que iba a enseñar fueron, en realidad, quienes más me enseñaron a mí.</strong></p>

              {!isExpanded && (
                <div className="mt-8 flex justify-center">
                  <button onClick={() => setIsExpanded(true)} className="text-[#E3878D] text-[13px] font-bold tracking-[0.15em] uppercase flex items-center gap-2 hover:text-[#8A2742]
                   transition-colors cursor-pointer py-4">
                    LEER HISTORIA COMPLETA <ChevronDown size={16} />
                  </button>
                </div>
              )}

              {isExpanded && (
                <div className="animate-fade-in space-y-6 pt-2">
                  <p>Esa experiencia en AEDIN me atravesó profundamente y me impulsó a continuar mi camino trabajando como maestra de apoyo a la inclusión en distintos colegios, acompañando a niños y niñas en sus procesos de aprendizaje y adaptación.</p>
                  <p>Con el tiempo, el trabajo diario con los niños me fue conectando cada vez más con las historias, las emociones y las preguntas de los adultos que los acompañaban —padres, madres y docentes—.</p>
                  <blockquote className="my-10 pl-5 border-l-[3px] border-[#E3878D]/60 italic text-gray-500 text-lg">
                    "Ese insight fue un punto de inflexión: comprendí que para acompañar verdaderamente a un niño también era indispensable poder acompañar a los adultos en sus propios procesos."
                  </blockquote>
                  <p>Fue entonces cuando sentí la necesidad de ampliar mi campo de trabajo y dar lugar a un nuevo desafío: el acompañamiento terapéutico de jóvenes y adultos.</p>
                  <p>Actualmente me desempeño como Psicóloga Clínica, con un <strong className="text-gray-500 font-bold">enfoque psicoanalítico flexible e integrativo</strong>, adaptado a las necesidades y singularidad de cada persona.</p>
                  <p>Concibo el espacio terapéutico como un lugar de escucha, reflexión y transformación, donde acompañar con empatía y compromiso los procesos subjetivos, respetando los tiempos propios de cada recorrido.</p>
                  <p>Actualmente atiendo tanto en modalidad presencial como virtual. Además, me desempeño como Psicóloga Clínica en <strong className="text-gray-500 font-bold">Equipo Terapéutico Villa Urquiza</strong>, una institución orientada al trabajo interdisciplinario en salud mental.</p>
                  <div className="mt-16 flex justify-center">
                    <button onClick={() => setIsExpanded(false)} className="text-[#E3878D] text-[13px] font-bold tracking-[0.15em] uppercase flex items-center gap-2 hover:text-[#8A2742] transition-colors cursor-pointer py-4">
                      LEER MENOS <ChevronUp size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECCIÓN: 3 TRAYECTORIA */}
        <section id="trayectoria" className="w-full py-20 md:py-32 px-6">
          <div className='max-w-5xl mx-auto'>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-[#E3878D] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
                TRAYECTORIA PROFESIONAL
              </p>
              <h3 className="text-3xl md:text-5xl text-gray-700 font-light leading-tight">
                Formación Académica y Clínica
              </h3>
            </div>
            <div className="relative py-4">
              <div className="absolute left-[1.5rem] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#E3878D]/30 -z-10"></div>
              <TarjetaTrayectoria icono={<Building2 size={20} />} categoria="FUNDACIÓN" titulo="Inicios y Voluntariado" descripcion="Inicié mi recorrido profesional como voluntaria en el Hospital Italiano de Buenos Aires, acompañando a pacientes pediátricos en internación, y en AEDIN." alineacion="derecha" />
              <TarjetaTrayectoria icono={<Users size={20} />} categoria="EXPERIENCIA EN CAMPO" titulo="Educación e Inclusión" descripcion="Me desempeñé como maestra de apoyo a la inclusión en distintos colegios, acompañando procesos de aprendizaje y adaptación." alineacion="izquierda" />
              <TarjetaTrayectoria icono={<GraduationCap size={20} />} categoria="ESPECIALIZACIÓN CLÍNICA" titulo="Formación de Posgrado" descripcion="Posgrado en Clínica de Adolescentes y Adultos. Especialización en Trastornos de Ansiedad. Formación en Adicciones y Conductas de Riesgo." alineacion="derecha" />
              <TarjetaTrayectoria icono={<Briefcase size={20} />} categoria="PRÁCTICA PROFESIONAL" titulo="Actividad Actual" descripcion="Psicóloga Clínica en consultorio privado (presencial y virtual). Integrante del staff profesional en el Equipo Terapéutico Villa Urquiza." alineacion="izquierda" />
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECCIION 4: ESPECIALIDADES        */}
        {/* ============================================================== */}
        <section id="especialidades" className="w-full py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#E3878D] text-xs font-bold tracking-[0.2em] uppercase mb-4">ESPECIALIDADES</p>
              <h3 className="text-3xl md:text-5xl text-gray-700 font-light mb-6">Abordajes Clínicos</h3>
              <p className="text-gray-500 font-light text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
                Abordamos cada proceso terapéutico desde una perspectiva integradora, adaptando el tratamiento a las necesidades singulares de cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <TarjetaEspecialidad icono={<Cloud strokeWidth={1.5} size={30} />} titulo="Ansiedad" descripcion="Herramientas para gestionar la incertidumbre y el malestar excesivo del día a día." />
              <TarjetaEspecialidad icono={<HeartCrack strokeWidth={1.5} size={30} />} titulo="Angustia" descripcion="Un espacio para poner en palabras aquello que oprime y no encuentra salida evidente." />
              <TarjetaEspecialidad icono={<Sunrise strokeWidth={1.5} size={30} />} titulo="Duelos" descripcion="Acompañamiento en procesos de pérdida, cambios, despedidas y nuevas etapas." />
              <TarjetaEspecialidad icono={<Activity strokeWidth={1.5} size={30} />} titulo="Crisis Vitales" descripcion="Momentos de ruptura o cambio de etapa que requieren re-preguntarse el camino." />
              <TarjetaEspecialidad icono={<Sparkles strokeWidth={1.5} size={30} />} titulo="Autoestima" descripcion="Fortalecer la relación con uno mismo, la confianza personal y el autoconcepto." />

              <div className="bg-[#E3878D] p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default">
                <h4 className="text-2xl text-white mb-4 font-medium">¿Algo más?</h4>
                <p className="text-white/90 leading-relaxed text-[15px] font-light mb-8">
                  Cada proceso es único. Si no ves tu motivo de consulta listado aquí, no dudes en escribirme.
                </p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-white text-[#E3878D] font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 hover:bg-gray-50 transition-all cursor-pointer inline-block">
                  Consultar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECCIÓN 5: MODALIDAD DE CONSULTA                   */}
        {/* ============================================================== */}
        <section id="modalidad" className="w-full py-20 md:py-24 border-t border-[#8A2742]/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#E3878D] text-xs font-bold tracking-[0.2em] uppercase mb-4">ATENCIÓN</p>
              <h3 className="text-3xl md:text-5xl text-gray-700 font-light mb-6">Modalidad de Consulta</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group cursor-default">
                <MapPin size={160} className="absolute -top-6 -right-6 text-[#E3878D]/10 group-hover:scale-110 transition-transform duration-500 hidden md:block" strokeWidth={1} />
                <div className="relative z-10">
                  <div className="bg-[#E3878D]/15 w-12 h-12 rounded-full flex items-center justify-center text-[#E3878D] mb-6">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-2xl text-[#8A2742] mb-4 font-medium">Atención Presencial</h4>
                  <p className="text-gray-600 leading-relaxed text-[15px] font-light mb-8">
                    Un espacio cuidado y confidencial diseñado para el encuentro terapéutico. Ideal para quienes valoran el cara a cara y el espacio físico compartido.
                  </p>
                  <ul className="space-y-4 text-[14px] md:text-[15px]">
                    <li className="flex items-center gap-3 text-gray-600 font-light">
                      <CheckCircle2 size={18} className="text-[#E3878D] flex-shrink-0" />
                      Consultorios en Villa Urquiza y Palermo
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 font-light">
                      <CheckCircle2 size={18} className="text-[#E3878D] flex-shrink-0" />
                      Clima cálido y reservado
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 font-light">
                      <CheckCircle2 size={18} className="text-[#E3878D] flex-shrink-0" />
                      Fácil acceso y transporte
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#E3878D] p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group cursor-default">
                <Globe size={160} className="absolute -top-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500 hidden md:block" strokeWidth={1} />
                <div className="relative z-10">
                  <div className="bg-[#8A2742]/20 w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                    <Globe size={24} />
                  </div>
                  <h4 className="text-2xl text-white mb-4 font-medium">Atención Online</h4>
                  <p className="text-white/90 leading-relaxed text-[15px] font-light mb-8">
                    Terapia estés donde estés. Una modalidad flexible que mantiene la calidad del vínculo terapéutico sin barreras geográficas.
                  </p>
                  <ul className="space-y-4 text-[14px] md:text-[15px]">
                    <li className="flex items-center gap-3 text-white/90 font-light">
                      <CheckCircle2 size={18} className="text-white/80 flex-shrink-0" />
                      Atención a todo el mundo (Habla Hispana)
                    </li>
                    <li className="flex items-center gap-3 text-white/90 font-light">
                      <CheckCircle2 size={18} className="text-white/80 flex-shrink-0" />
                      Videollamada (Meet/Zoom/WhatsApp)
                    </li>
                    <li className="flex items-center gap-3 text-white/90 font-light">
                      <CheckCircle2 size={18} className="text-white/80 flex-shrink-0" />
                      Flexibilidad horaria
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contacto" className="w-full pt-20 pb-12 relative border-t border-[#8A2742]/5 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl text-gray-700 font-light mb-4 leading-tight">
            Empecemos a trabajar juntos
          </h3>
          <p className="text-gray-400 font-light text-[15px] md:text-base max-w-lg mx-auto leading-relaxed mb-10">
            El primer paso es el más importante. Escribime para coordinar una entrevista y conocer cómo puedo acompañarte.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#E3878D] text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-[#D1767C] hover:scale-105 transition-all cursor-pointer w-full sm:w-auto justify-center">
              <MessageCircle size={18} />
              Enviar WhatsApp
            </a>
            <a href="mailto:lic.melaniech@gmail.com" className="flex items-center gap-2 bg-white text-[#8A2742] font-medium py-3 px-8 rounded-full shadow-sm hover:bg-gray-50 border border-gray-200 hover:scale-105 transition-all cursor-pointer w-full sm:w-auto justify-center">
              <Mail size={18} />
              lic.melaniech@gmail.com
            </a>
          </div>

          <hr className="border-[#E3878D]/20 mb-10 max-w-2xl mx-auto" />

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mb-16">
            <div className="flex flex-col items-center gap-2 text-center">
              <MapPin size={20} className="text-[#E3878D]" />
              <p className="text-gray-400 text-sm font-light">Villa Urquiza | Palermo, CABA<br />Argentina</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Mail size={20} className="text-[#E3878D]" />
              <p className="text-gray-400 text-sm font-light">lic.melaniech@gmail.com</p>
            </div>
          </div>

          <p className="text-[#8A2742]/40 text-[10px] md:text-xs font-medium tracking-widest uppercase">
            © 2026 Lic. Melanie Chaffittelli - Todos los derechos reservados
          </p>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#E3878D] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#D1767C] transition-all z-50 flex items-center justify-center cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>

    </div>
  );
}