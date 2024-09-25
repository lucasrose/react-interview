export const secrets = {
    client_id: "Mzg5OTcwMjN8MTcwMjkxMzE2OS41NjczMDg0",
    client_secret:
      "bb8329d6bab5d068a18b802a2010d633b4652a7c7b340f65e9badfaaeaca4914",
  };
  
  export const endpoints = {
    events: `https://api.seatgeek.com/2/events?client_id=${secrets.client_id}&client_secret=${secrets.client_secret}`,
  };

// Example Event Response

//   export type EventResult = {
//     id: number;
//     short_title: string;
//     status: string;
//     title: string;
//     type: string;
//     url: string;
//     venue: {
//       address: string;
//       city: string;
//       display_location: string;
//       name: string;
//     };
//   };

// The api supports a query parameter with ?q=search+term
