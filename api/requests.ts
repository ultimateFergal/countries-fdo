import axios from "axios";

// export function getSearchResults(query: string, page = 0): Promise<IGIFData> {
//     return axios
//       .get(
//         "https://api.giphy.com/v1/gifs/search",
//         {
//           params: {
//               q: query,
//               api_key: GIPHY_API_KEY,
//               limit: ITEMS_PER_PAGE,
//               rating: 'g',
//               bundle: 'messaging_non_clips',
//               lang: 'en',
//               offset: page
//           },
//         }
//       )
//       .then((res) => res.data);
//   }


export function getAllCountries(): Promise<any> {
    return axios
      .get(
        "https://restcountries.com/v3.1/all",
      )
      .then((res) => res.data);
  }

  export function getCountryByName(name: string | string[] | undefined): Promise<any> {
    return axios
      .get(
        `https://restcountries.com/v3.1/name/${name}`,
      )
      .then((res) => res.data);
  }
