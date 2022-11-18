function GlobalNav({ className }) {
  return (
    <nav className={`global-nav ${className}`}>
      <ul className="global-nav__list">
        <li className="global-nav__item">
          <a className="global-nav__link" href="/">
            Home
  </a> </li>
        <li className="global-nav__item">
          <a className="global-nav__link" href="/about.html">
  About
  </a> </li>
        <li className="global-nav__item">
          <a className="global-nav__link" href="/cats.html">
  Cats
  </a> </li>
  </ul> </nav>
  );
}
export default GlobalNav