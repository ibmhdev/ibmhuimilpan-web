// components/HeroBanner.js
export default function HeroBanner() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-primary to-secondary">
      {/* ... resto del componente ... */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-accent px-8 py-3 rounded-lg hover:bg-amber-700">
          Próximo Servicio
        </button>
      </div>
    </section>
  )
}