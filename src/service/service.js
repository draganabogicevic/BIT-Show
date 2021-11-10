const handleResponse = (response) => {
  if(!response.ok) {
    throw new Error(response.status);
  } else {
    return response.json();
  }
}

export function getShows () {
  let link = "http://api.tvmaze.com/shows";
  return (fetch(link, {
    method: "GET"
  }).then(response => {
    return handleResponse(response);
  })
  .catch((error) => {
    const errorToDisplay = error.toString();
    return errorToDisplay;
  }))
}