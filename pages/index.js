import React, { useEffect, useState } from "react";
import axios from "axios";

import Filters from "../components/Filters";
import Cards from "../components/Cards";

const fetchData = async () => await axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
.then(res => ({
  error: false,
  launchesData: res.data,
}))
.catch((err) => ({
  error: true,
  launchesData: null,
  err
})
);

const Home = ({ error, launchesData, err }) => {
  const [launches, setLaunches] = useState([]);
  const [filter, setFilter] = useState({ launch_year: null, launch_success: null, land_success: null});

  useEffect(() => {
    setLaunches((prevValue) => [...prevValue, ...launchesData]);
  }, []);

  useEffect(() => {
    axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`, { params: filter }).then(res => setLaunches(res.data)).catch((err) => console.log(error));
  }, [filter.launch_year, filter.launch_success, filter.land_success]);

  const handleFilters = (event) => {
    const { dataset } = event.target;
    setFilter((prevState) => ({ ...prevState, [dataset.name]: dataset.value }));
    console.log(filter);
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">SpaceX Launch Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        <div className="col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <Filters handleFilters={handleFilters} filter={filter} />
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-3 h-screen overflow-y-scroll">
          <Cards launches={launches} />
        </div>
      </div>
      <div className="text-center p-5">
        <p className="text-2xl"><label className="font-bold">Developed by: </label>Amrendra Nath</p>
      </div>
    </div>
  );
}

export default Home;

export const getStaticProps = async () => {
  const data = await fetchData();

  return {
    props: data,
  };
}

