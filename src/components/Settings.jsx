import { useState } from "react";
// const Settings = () => {
//   return <h2> Страница с настройками</h2>;
// };
function Settings() {
  const[count, setCount] = useState(0);
  return (
    <div className="row">
      <div className="col-6">Количество кликов: {count}</div>
      <div className="col-6">
        <button className="btn btn-warning" onClick={()=>{
          setCount(count + 1);
        }}>Нажимай тут</button>
      </div>
    </div>
  )
}

export default Settings;