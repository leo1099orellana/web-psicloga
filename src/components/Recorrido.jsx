import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Recorrido() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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
              <button onClick={() => setIsExpanded(true)} className="text-[#E3878D] text-[13px] font-bold tracking-[0.15em] uppercase flex items-center gap-2 hover:text-[#8A2742] transition-colors cursor-pointer py-4">
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
  );
}