import React from "react";
import "./profile.css"; // Your custom styles if needed
import IconButtonWithBadge from "../../components/UI/button/IconButtonWithBadge";




function MoreContent() {
  return (
    <>
      <div>
        <div>
          <div>Added</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

function Profile() {
  return (
    <div className="min-h-screen w-full bg-[#e0e8ff] dark:bg-neutral-900">
      {/* Top Header Section */}
      <div className="w-full h-30 md:h-40   py-10 text-center"></div>

      {/* Profile Image Overlapping */}
      <div className="flex justify-center -mt-20 md:-mt-28">
        <img
          src="/images/myimage.jpg"
          alt="User"
          className="h-44 w-44 md:h-60 md:w-60 rounded-full md:rounded-[25%] object-cover shadow-lg"
        />
      </div>

      {/* Info Section */}
      <div className=" px-6 md:px-32 py-5">
        <div className="text-center md:text-left">
          <h2
            className="text-3xl text-center md:text-4xl md:font-bold"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Shivani Singh
          </h2>
          <p className="mt-2 text-center text-lg dark:text-amber-400">
            A passionate software developer.
          </p>
          <p className="mt-1 text-center text-base dark:text-blue-400">
            I am a full-stack web developer with a passion for UI/UX design and
            writing.
          </p>

          <div className="mt-6 flex flex-col md:flex-row justify-center gap-1 ">
            {/* <Button variant="contained" color="secondary">
              Connections
            </Button> */}
            <div>
              <IconButtonWithBadge
                text="CONNECTIONS"
                badgeNumber="5"
                badgeColor={"success"}
                btnColor={"primary"}
              />
            </div>
            <div>
              <IconButtonWithBadge
                text="ACTIVITES"
                badgeNumber="2"
                badgeColor={"primary"}
                btnColor={"secondary"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* More Content Section */}
      <MoreContent />
    </div>
  );
}

export default Profile;
