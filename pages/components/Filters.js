import React from "react";

const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function filters() {
  return (
    <div className="m-1 p-2 rounded bg-white">
      <h3 className="font-bold text-xl">Filters</h3>
      <div>
        <p className="text-center border-b-2 border-gray-500 mx-8">Launch Year</p>
      </div>
    </div>
  );
}

export default filters;
