const setCounter = (counter_value) =>
{
  document.querySelector('#counter').innerHTML = counter_value;
};
const api = 'https://g2so8vmt91.execute-api.us-west-2.amazonaws.com/Prod';
fetch(api + '/', { method: 'POST' }).then(res => res.json()) .then(result => setCounter(result[0].counter_value));
fetch(api + '/') .then(res => res.json()).then(result => setCounter(result[0].counter_value));