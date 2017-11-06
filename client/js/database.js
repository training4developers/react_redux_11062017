

export const refreshColors = () => {
  return fetch('http://localhost:3010/colors')
    .then(res => res.json());
};

export const deleteColor = colorId => {
  return fetch('http://localhost:3010/colors/' + encodeURIComponent(colorId), {
    method: 'DELETE',
  })
    .then(res => res.json());
};

export const insertColor = color => {
  return fetch('http://localhost:3010/colors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(color),
  })
    .then(res => res.json());
};