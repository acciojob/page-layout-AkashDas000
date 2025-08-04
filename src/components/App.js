
import React from "react";
import './../styles/App.css';

const App = () => {
  const relatives = [
    { key: "relativeListItem1", name: "Uncle Raj" },
    { key: "relativeListItem2", name: "Aunt Sita" },
    { key: "relativeListItem3", name: "Cousin Neha" },
    { key: "relativeListItem4", name: "Grandpa Mohan" },
    { key: "relativeListItem5", name: "Grandma Laxmi" }
  ]
  return (
    <div>
        {/* Do not remove the main div */}
       <ol key='relativeList'>
       {
        relatives.map((relatives) =>  (
          <li key={relatives.key}>{relatives.name}</li>
        ))
       }
       </ol>
    </div>
  )
}

export default App
