import { useState } from "react";
import { ItemsMenu } from "./ItemsMenu";
export const AllMenuDetails = ({ res,detail,fixShow }) => {
  const show=()=>{
    console.log("clicked");
    fixShow()

  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50  shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer " onClick={show}>
          <span className="font-bold text-lg">
            {res.name}
          </span>
          <span>🔽</span>
        </div>
        {
                 (detail)? <ItemsMenu data={res.categories}/> : null
        }
      </div>
    </div>
  );
};
