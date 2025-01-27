export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#054fa2] to-[#0880c3] min-h-screen text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-4xl md:text-6xl mb-6">
          ¡Bienvenidos a IBM Huimilpan!
        </h1>
        <p className="font-body text-xl mb-8 max-w-2xl mx-auto">
          Un lugar para conocer a Dios y darlo a conocer
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#servicios" className="bg-amber-500 px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors">
            Próximo Servicio
          </a>
          <a href="#contacto" className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10">
            Visítanos
          </a>
        </div>
      </div>
    </section>
  )
}