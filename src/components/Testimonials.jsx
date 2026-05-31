export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing experience! The crew was professional and attentive.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Best yacht charter company I've used. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma Williams",
      text: "Unforgettable memories with family. Will definitely book again.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Testimonials</h2>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
