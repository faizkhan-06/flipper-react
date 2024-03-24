import { NavLink } from "react-router-dom";

// const GridMain = () => {
//   return (
//     <>
//       <div className=" grid lg:grid-cols-3  md:grid-cols-2 gap-5 mt-7 m-5 text-white">
//         <div className=" p-0.5 h-96 rounded-2xl bg-gray-700 ">
//           <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto">
//             <div className=" w-96 p-4 rounded-lg">
//               <img src="../img/1343656.jpg" alt="" className="rounded-lg" />
//             </div>
//             <span className=" p-3 text-lg text-center max-w-96 overflow-hidden">
//               Assassin's creed Victory and Glory | assasins pride | hails to
//               assasins
//             </span>
//             <div className="flex justify-start items-center w-96 pl-4 pr-4 space-x-5">
//               <span className="w-10 rounded-full">
//                 <img
//                   src="../img/profile.jpg"
//                   alt="profile pic"
//                   className=" rounded-full"
//                 />
//               </span>
//               <div className=" flex flex-col">
//                 <div className="flex flex-col ">
//                   <span>Assasin's Master</span>
//                   <span className=" text-xs text-gray-400">200K subs</span>
//                 </div>
//                 <div className="flex gap-1 ">
//                   <span className=" text-xs text-gray-400">100k views |</span>
//                   <span className=" text-xs text-gray-400">1 month ago</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GridMain;

const GridMain = () => {
  const VideoArray = [
    {
      Image: "../img/1343656.jpg",
      Title:
        "Assassin's creed Victory and Glory | assasins pride | hails to assasins",
      UserProfile: "../img/profile.jpg",
      UserName: "Assasin's Master",
      Subscribers: "200K subs",
      Views: "100k views",
      UplaodDate: "1 Month ago",
    },
    {
      Image: "../img/1343656.jpg",
      Title:
        "Assassin's creed Victory and Glory | assasins pride | hails to assasins",
      UserProfile: "../img/profile.jpg",
      UserName: "Assasin's Master",
      Subscribers: "200K subs",
      Views: "100k views",
      UplaodDate: "1 Month ago",
    },
    {
      Image: "../img/1343656.jpg",
      Title:
        "Assassin's creed Victory and Glory | assasins pride | hails to assasins",
      UserProfile: "../img/profile.jpg",
      UserName: "Assasin's Master",
      Subscribers: "200K subs",
      Views: "100k views",
      UplaodDate: "1 Month ago",
    },
    {
      Image: "../img/1343656.jpg",
      Title:
        "Assassin's creed Victory and Glory | assasins pride | hails to assasins",
      UserProfile: "../img/profile.jpg",
      UserName: "Assasin's Master",
      Subscribers: "200K subs",
      Views: "100k views",
      UplaodDate: "1 Month ago",
    },
    {
      Image: "../img/1343656.jpg",
      Title:
        "Assassin's creed Victory and Glory | assasins pride | hails to assasins",
      UserProfile: "../img/profile.jpg",
      UserName: "Assasin's Master",
      Subscribers: "200K subs",
      Views: "100k views",
      UplaodDate: "1 Month ago",
    },
    {
      Image: "../img/1343656.jpg",
      Title:
        "Assassin's creed Victory and Glory | assasins pride | hails to assasins",
      UserProfile: "../img/profile.jpg",
      UserName: "Assasin's Master",
      Subscribers: "200K subs",
      Views: "100k views",
      UplaodDate: "1 Month ago",
    },
  ];
  return (
    <>
      {" "}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-7 m-5 text-white container">
        {VideoArray.map((videoData) => (
          <div
            className="p-0.5 h-96 rounded-2xl bg-gray-900"
            key={videoData.Title}
          >
            <NavLink to="/video">
              <div className="h-full rounded-2xl bg-gray-950 flex items-center flex-col sm:m-auto hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="w-96 p-4 rounded-lg">
                  <img src={videoData.Image} alt="" className="rounded-lg" />
                </div>
                <span className="p-3 text-lg text-center max-w-96 overflow-hidden">
                  {videoData.Title}
                </span>
                <div className="flex justify-start items-center w-96 pl-4 pr-4 space-x-5">
                  <span className="w-10 rounded-full border-2 border-gray-900">
                    <img
                      src={videoData.UserProfile}
                      alt="profile pic"
                      className="rounded-full"
                    />
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <span>{videoData.UserName}</span>
                      <span className="text-xs text-gray-400">
                        {videoData.Subscribers}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-xs text-gray-400">
                        {videoData.Views} |
                      </span>
                      <span className="text-xs text-gray-400">
                        {videoData.UplaodDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridMain;
