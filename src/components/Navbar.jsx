export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl">YachtWay</div>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600">About</a></li>
            <li><a href="/booking" className="hover:text-blue-600">Booking</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
