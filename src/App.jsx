// import logo from './logo.svg';
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";


const Messages = () => {
  return <h2> Страница с сообщениями</h2>;
};

const Settings = () => {
  return <h2> Страница с настройками</h2>;
};

const Friends = () => {
  return <h2> Мои друзья</h2>;
};

function App(props) {
  console.log(props);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <>
    // <h1>Hello, world!</h1>
    // <h2>Hello!</h2>
    // </>
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-3">
          <div
            className="nav flex-column nav-pills"
            aria-orientation="vertical"
          >
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Мои друзья
            </NavLink>
          </div>
        </div>
        <div className="col-sm-9">
          <Routes>
            <Route path="/profile" element={<Profile function={props.function}/>} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
