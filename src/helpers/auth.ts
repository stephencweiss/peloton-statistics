// const axios = require("axios").default;
const { cosmiconfig, cosmiconfigSync } = require("cosmiconfig");

module.exports = function auth() {
  const explorerSync = cosmiconfigSync("pelo-stats");
  const searchedFor = explorerSync.search();
  console.log(searchedFor);
};
// const lambda = async () => {
//   const authDetails = await axios({
//     method: "POST",
//     url: `${process.env.BASE_URL}auth/login`,
//     headers: {
//       "cache-control": "no-cache",
//       "content-type": "application/json",
//       connection: "keep-alive",
//       "peloton-platform": "web",
//     },
//     data: {
//       username_or_email: process.env.USERNAME,
//       password: process.env.PASSWORD,
//       with_pubsub: false,
//     },
//   })
//     .then((res: any) => res.data)
//     .catch((err: any) => console.log(`error: ${err}`));

//   //   console.log(authDetails);
//   const { session_id } = authDetails;

//   const workoutDetails = await axios
//     .get(`${process.env.BASE_URL}api/me`, {
//       withCredentials: true,
//       headers: {
//         "cache-control": "no-cache",
//         "content-type": "application/json",
//         connection: "keep-alive",
//         "peloton-platform": "web",
//         Cookie: `peloton_session_id=${session_id}`,
//       },
//     })
//     .then((res: any) => res.data)
//     .catch((err: any) => console.log({ err }));

//   const response = {
//     statusCode: 200,
//     body: JSON.stringify("Hello from Lambda!"),
//   };
//   return response;
// };

// module.exports = { auth: lambda };

// lambda();
