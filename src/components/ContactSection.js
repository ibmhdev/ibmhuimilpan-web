// components/ContactSection.js
export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-2">Ubicación</h3>
            <p className="text-gray-300">
              5 de febrero y la Fresno S/N,<br/>
              Laurel entre la calle,<br/>
              76950 Huimilpan, Qro.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Contacto Directo</h3>
            <p className="text-gray-300">
              <a href="mailto:ibmhuimilpan@gmail.com" className="hover:text-amber-500">
                ibmhuimilpan@gmail.com
              </a><br/>
              <a href="tel:+524424998409" className="hover:text-amber-500">
                442 499 8409
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Redes Sociales</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-amber-500">Facebook</a>
              <a href="#" className="hover:text-amber-500">YouTube</a>
              <a href="#" className="hover:text-amber-500">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <iframe
            title="Ubicación IBM Huimilpan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.234567890123!2d-100.2749874!3d20.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b8fdc5b925f%3A0x1234567890abcdef!2sIglesia%20B%C3%ADblica%20Misionera%20Huimilpan!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
            className="w-full h-64 rounded-lg border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}