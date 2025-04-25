import React from "react";
import { Link } from "react-router-dom";

function ContentCards() {
  return (
    <>
      <div className="block dark:bg-neutral-800 border-1 border-cyan-950 bg-sky-800 text-white rounded-2xl p-2 w-[18rem] h-[42vh] "  style={{ fontFamily: "Raleway, sans-serif" , fontSize: "0.8rem"}}>
        <div>
            <div className="flex flex-row ">
                <div className="w-1/2">
                  img
                </div>
                <div className="w-1/2">
                  <dir>
                    bold heading
                  </dir>
                  <div>
                    thin heading
                  </div>
                </div>
            </div>
            <div>
                location
            </div>
            <div>
                <div>
                  eligible
                </div>
                <div>
                  job type
                </div>
                <div>
                  amount
                </div>
            </div>
            <div>
                description para
            </div>
            <div>
                dated
            </div>
        </div>
      </div>
    </>
  );
}

export default ContentCards;
