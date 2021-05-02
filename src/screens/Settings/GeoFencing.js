import React, { useState } from "react";

function GeoFencing() {
  const [openBtn, setOpenBtn] = useState(false);
  

  const openTab = () => {
    setOpenBtn(!openBtn);
  };
  

  return (
    <div>
      <div className="flex shadow-md h-16 items-center justify-center">
        <p className="font-bold text-2xl">Geofencing</p>
      </div>
      <div className="h-96 bg-black w-auto m-4">
      
  
      </div>
      <div className="flex justify-center h-screen relative ">
        {openBtn ? (
          <div>
          <button 
              className="font-bold text-sm text-center shadow-xl w-auto h-7
                text-white rounded focus:outline-none mr-4 pl-2 pr-2"
              style={{ backgroundColor: "#ff6600" }}
              
            >
              save
            </button>
            <button
              className="font-bold text-sm text-center shadow-xl w-auto h-7
                text-white rounded focus:outline-none mr-4 pl-2 pr-2"
              style={{ backgroundColor: "#ff6600" }}
              onClick={openTab}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button
              className="font-bold text-sm text-center shadow-xl w-auto h-7
                text-white rounded focus:outline-none mr-4 pl-2 pr-2"
              style={{ backgroundColor: "#ff6600" }}
              onClick={openTab}
            >
              Edit Polygon
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeoFencing;
