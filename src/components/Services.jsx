export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold mb-2">Day Cruises</h3>
            <p className="text-gray-600">Enjoy a full day on the water with stunning views</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold mb-2">Sunset Cruises</h3>
            <p className="text-gray-600">Romantic evening experiences on the open sea</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold mb-2">Corporate Events</h3>
            <p className="text-gray-600">Host your events on a luxury yacht</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold mb-2">Private Charters</h3>
            <p className="text-gray-600">Customized itineraries for your group</p>
          </div>
        </div>
      </div>
    </section>
  );
}
