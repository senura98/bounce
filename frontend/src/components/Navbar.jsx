const Navbar = () => (
    <nav className="flex justify-between items-center p-4 bg-dark text-light">
      <div className="text-3xl font-bold">A-Space</div>
      <ul className="flex space-x-6">
        <li className="hover:text-primary">About</li>
        <li className="hover:text-primary">Technology</li>
        <li className="hover:text-primary">Galaxy</li>
        <li className="hover:text-primary">Satellite</li>
      </ul>
      <button className="bg-primary text-dark font-semibold py-2 px-4 rounded">Agus Salman</button>
    </nav>
  );

  export default Navbar;