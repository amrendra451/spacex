import React from "react";

function card({ launch }) {

  let launch_landing = "NA";
  let imageLink = '';
  let mission_name = 'NA';
  let flight_number = 0;
  let mission_id = [];
  let launch_year = [];
  let launch_success = '';

  if (launch) {
    const land_success = launch["rocket"]["first_stage"]["cores"][0]["land_success"];
    launch_landing = land_success ? "true" : land_success === false ? "false" : "NA";
    imageLink = launch.links.mission_patch_small;
    mission_name = launch.mission_name;
    flight_number = launch.flight_number;
    mission_id = launch.mission_id;
    launch_year = launch.launch_year;
    launch_success = launch.launch_success;
  }

  return (
    <div className="col-span-1 md:w-full m-1 p-4 rounded bg-white">
      <div className="max-w-sm rounded overflow-hidden">
        <div className="bg-gray-400">
          <img className="w-full" src={imageLink} alt={mission_name} />
        </div>
        <div className="py-4">
          <div className="font-bold text-xl mb-2 text-indigo-800">{`${mission_name} #${flight_number}`}</div>
          <div className="font-bold text-xl mb-2">Mission Ids: </div>
          <div>
            <ul className="ml-8 pb-2 list-disc">
              {mission_id.map((item, index) => <li className="text-indigo-700" key={index}>{item}</li>)}  
            </ul>
          </div>
          <div className="text-xl mb-2">Launch Year: <span className="text-indigo-700">{launch_year}</span></div>
          <div className="text-xl mb-2"><span>Successful<br /> Launch:</span> <span className="text-indigo-700 text-right">{launch_success.toString()}</span></div>
          <div className="text-xl mb-2"><span>Successful<br /> Landing:</span> <span className="text-indigo-700 text-right">{launch_landing}</span></div>
        </div>
      </div>
    </div>
  );
}

export default card;
