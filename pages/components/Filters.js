import React from "react";

const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function filters({ handleFilters }) {
  return (
    <div className="m-1 p-2 rounded bg-white">
      <h3 className="font-bold text-xl">Filters</h3>
      <div className="mb-2">
        <p className="text-center border-b-2 border-gray-500 mx-8">Launch Year</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {
          years.map((year, index) => {
            return (
              <div className="col-span-1 border rounded mx-5 mb-2 p-2 bg-green-300 hover:bg-green-400" key={index}>
                <p className="text-center cursor-pointer" data-value={year} data-name="launch_year" onClick={handleFilters} >{year}</p>
              </div>
            );
          })
        }
      </div>
      <div className="my-2">
        <p className="text-center border-b-2 border-gray-500 mx-8">Successful Launch</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 border rounded mx-5 mb-2 p-2 bg-green-300 hover:bg-green-400">
          <p className="text-center cursor-pointer" data-value="true" data-name="launch_success" onClick={handleFilters}>True</p>
        </div>
        <div className="col-span-1 border rounded mx-5 mb-2 p-2 bg-green-300 hover:bg-green-400">
          <p className="text-center cursor-pointer" data-value="false" data-name="launch_success" onClick={handleFilters}>False</p>
        </div>
      </div>
      <div className="my-2">
        <p className="text-center border-b-2 border-gray-500 mx-8">Successful Landing</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 border rounded mx-5 mb-2 p-2 bg-green-300 hover:bg-green-400">
          <p className="text-center cursor-pointer" data-value="true" data-name="land_success" onClick={handleFilters}>True</p>
        </div>
        <div className="col-span-1 border rounded mx-5 mb-2 p-2 bg-green-300 hover:bg-green-400">
          <p className="text-center cursor-pointer" data-value="false" data-name="land_success" onClick={handleFilters}>False</p>
        </div>
      </div>
    </div>
  );
}

export default filters;
