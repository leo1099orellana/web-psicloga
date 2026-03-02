export default function Hero({ whatsappLink }) {
  return (
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
              <a href={whatsappLink} target="_blank" rel="noreferrer" className='cursor-pointer bg-[#D1767C] text-white py-4 px-10 rounded-full font-medium shadow-lg hover:scale-105 transition-all text-center'>
                Solicitar Turno →
              </a>
              <a href="#modalidad" className="cursor-pointer bg-white text-[#8A2742] border border-[#8A2742]/20 py-4 px-10 rounded-full font-medium shadow-sm hover:bg-gray-50 transition-all text-center">
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
  );
}