import React from "react";
import { Movies } from "./components/Movies";
import "./app.css";
export function App() {
  const MoviesList = [
    {
      name: "The Godfather",
      date: 1972,
      genre: "Action, Mafia",
      plot: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.",
      imdbLink: "https://www.imdb.com/title/tt0068646/?ref_=chttp_t_2",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4dswLay9wWMfVGKjJjWCk4_tmE9jae-DUuoeKwXZRQ6raDHnjMVo-tVId215AZy8OWXoJN8BORS6ezOOd4zQaRXvJ_ytKg",
    },
    {
      name: "The Godfather part II",
      date: 1974,
      genre: "Action, Mafia",
      plot: "Michael Corleone’s (Al Pacino) 1958 struggle to expand the family business into Las Vegas and Cuba while facing betrayal and paranoia, and flashbacks to a young Vito Corleone’s (Robert De Niro) rise from a Sicilian immigrant to a powerful mafia don in New York City",
      imdbLink: "https://www.imdb.com/title/tt0071562/?ref_=tt_mlt_t_1",
      imgUrl:
        "data:image/jpeg;base64,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",
    },
    {
      name: "The Godfather part III",
      date: 1990,
      genre: "Action,Mafia",
      plot: "an aging Michael Corleone’s attempt to legitimize his criminal empire by acquiring the Vatican-controlled real estate company, Immobiliare",
      imdbLink:
        "https://www.imdb.com/title/tt0099674/?ref_=nv_sr_srsg_6_tt_7_nm_1_in_0_q_the%20godfather",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMDVjODgzNTEtNjBiNS00ODBjLWEwZjUtMDljZTFhOTA4M2MxXkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "Scarface",
      date: 1983,
      genre: "Action, Mafia",
      plot: "Tony Montana and his close friend Manny, build a strong drug empire in Miami. However as his power begins to grow, so does his ego and his enemies, and his own paranoia begins to plague his empire.",
      imdbLink:
        "https://www.imdb.com/title/tt0086250/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_scarface",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QulqW4e6YUhxCfIdgkCzlD3dGuoZ5XNNaPXmm59GstyFhmywEClYVtONNtWLwtraubLdwg&s=10",
    },
    {
      name: "Casino",
      date: 1995,
      genre: "Crime/Thriller",
      plot: "In early-1970s Las Vegas, low-level mobster Sam Ace Rothstein (Robert De Niro) gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro (Joe Pesci), his ex-hustler wife Ginger (Sharon Stone), her con-artist ex Lester Diamond (James Woods) and a handful of corrupt politicians put Sam in ever-increasing danger. Martin Scorsese directs this adaptation of Nicholas Pileggi's book.",
      imdbLink: "https://www.imdb.com/title/tt0112641/",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCjH3jZXi9mf79JbJ4QJKXed6BUTcSIX5DmwS0nkJCY4I7vvx0dnSPQdZZD64dDOckcR9&s=10",
    },
  ];
  return (
    <div id="App">
      <h1>Movies list </h1>
      <Movies Movies={MoviesList} />
    </div>
  );
}
