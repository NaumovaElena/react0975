import { useEffect, useState } from "react";
// const Settings = () => {
//   return <h2> Страница с настройками</h2>;
// };

// import { useState } from "react";
// function Settings() {
  // присваиваем 2 свойства методу useState()
//   const[count, setCount] = useState(0);
//   return (
//     <div className="row">
//       <div className="col-6">Количество кликов: {count}</div>
//       <div className="col-6">
//         <button className="btn btn-warning" onClick={()=>{
//           setCount(count + 1);
//         }}>Нажимай тут</button>
//       </div>
//     </div>
//   )
// }


const Settings = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
       try {
        let response = await fetch(url);
        let json = await response.json();
        setAdvice(json.slip.advice);
       } catch (error) {
        console.log("error", error);
       }
    }
    fetchData();
  }, []);
  return <div>{advice}</div>;
};


export default Settings;