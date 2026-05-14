import billData from "../data/billData.json";

function Header() {
  return (
    <header className="app-header">
      <div className="header-icon">💰</div>
      <h1>{billData.appTitle}</h1>
      <p>Split bills fairly, every time</p>
    </header>
  );
}

export default Header;
