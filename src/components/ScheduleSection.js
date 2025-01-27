// components/ScheduleSection.js
export default function ScheduleSection() {
  const meetings = [
    {
      title: "Servicio General",
      day: "Domingo",
      time: "10:00 AM - 12:00 PM",
      recurrence: "Todos los domingos",
      description: "Celebración principal de adoración y enseñanza bíblica"
    },
    {
      title: "Reunión de Oración",
      day: "Miércoles",
      time: "7:00 PM - 8:30 PM",
      recurrence: "Todos los miércoles",
      description: "Tiempo de comunión e intercesión"
    },
    {
      title: "Estudio Bíblico Huimilpan",
      day: "Viernes",
      time: "8:00 PM - 9:00 PM",
      recurrence: "Todos los viernes",
      description: "Estudio profundo de las Escrituras"
    }
  ]

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Reuniones</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
        {meetings.map((meeting, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-600">
            <h3 className="text-xl font-bold mb-2">{meeting.title}</h3>
            <p className="font-semibold text-gray-600 mb-2">
              {meeting.day} • {meeting.time}
            </p>
            <p className="text-sm text-gray-500 italic">{meeting.recurrence}</p>
            <p className="mt-3 text-gray-700">{meeting.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}