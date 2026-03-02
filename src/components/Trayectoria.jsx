import { Building2, Users, GraduationCap, Briefcase } from 'lucide-react';

function TarjetaTrayectoria({ icono, categoria, titulo, descripcion, alineacion }) {
  const esIzquierda = alineacion === "izquierda";

  return (
    <div className="relative flex items-center w-full mb-12 md:mb-16 last:mb-0 group cursor-default">
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#E3878D] rounded-full border-[4px] border-[#FCF6F0] shadow-sm z-10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D1767C]">
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

export default function Trayectoria() {
  return (
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
  );
}