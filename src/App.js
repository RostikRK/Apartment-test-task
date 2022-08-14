import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import ApartmentFilter from "./components/ApartmentFilter";
import './styles/App.css'
import ApartmentsList from "./components/ApartmentsList";
import ApartmentService from "./API/ApartmentService";

function App() {
  const [apartments, setApartments] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})


  async function fetchApartmentsQuery() {
    const apartments_ = await ApartmentService.getAll(filter.sort, filter.query);
    setApartments(apartments_)
}


  useEffect(() => {
    fetchApartmentsQuery()
  }, [filter])

  return (
    <div className="App">
      <Header fetcher={fetchApartmentsQuery}/>
      <ApartmentFilter filter={filter} setFilter={setFilter}/>
      <ApartmentsList apartments={apartments}/>
    </div>
  );
}

export default App;
