export const getFloof = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof', {
    headers: {
      origin: null
    }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'No Floof :(';
      return json;
    });
};
