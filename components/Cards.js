import React from "react";

import Card from "./Card";

function cards({ launches }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2">
      {
        (launches || []).map((launch, index) => <Card launch={launch} key={index} />)
      }
    </div>
  );
}

export default cards;
