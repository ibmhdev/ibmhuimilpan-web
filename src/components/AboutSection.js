// components/AboutSection.js
export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Visión y Misión</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Visión</h3>
              <p>Soñamos con ver un día a todo México saturado con Iglesias que vivan y prediquen fielmente la palabra de Dios.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Misión</h3>
              <p>Un Lugar para conocer a Dios y darlo a conocer.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            Somos una familia unida en la fe, comprometidos con la adoración sincera y el estudio profundo de la Palabra. 
            No importa tu historia, cultura o situación, todos son bienvenidos en Cristo Jesús.
          </p>
        </div>
      </div>
    </section>
  )
}