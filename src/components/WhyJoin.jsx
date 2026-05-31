export default function WhyJoin() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Join YachtWay</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Premium Fleet</h3>
            <p className="text-gray-600">Access to a carefully curated collection of luxury yachts</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Expert Crew</h3>
            <p className="text-gray-600">Experienced captains and crew dedicated to your comfort</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">Best Prices</h3>
            <p className="text-gray-600">Competitive rates with transparent pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
