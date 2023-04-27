// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQBroHepos_gOP7tG5m0BhYlmQAahipUxIJNlogeZ6bt-5hlEMKJOTqVyVRX_MEw1A5wNVpeRWraRBZybe8FDluIMnnTBdSQQBD7YHYiWKghbYZa0zpuW3CiZ5q3VZWDkMmnKJdFLBzSx33ZPaR5wZuOCPCJR2HBTDXQbykVHs2I3MIFf4dU2AF2bpIaI4NUq3AL2dtjNugebb2E12jB098yE7J-2g7aM0L1PFL1zfRvjQ3lIbyBQ5KDzLsGpVNrC3e1U4mY8B3Ucm0qsvMaZkCOAS45eV4X8cLN8S5vY7BR7I_USo_HCLNEZkmY-rNmjdxLMRkzuJp05vJgF3cr044V0tqwHYFT4flb6FZMEv69Hno";
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
  ).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map((artist) => artist.name).join(", ")}`
  )
);
