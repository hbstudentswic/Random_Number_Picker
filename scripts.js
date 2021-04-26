const maxnum = document.querySelector('#max-form');
const minnum = document.querySelector('#min-form');
const color = document.querySelector('#color');
const p = document.createElement('p');
document.body.appendChild(p);

maxnum.addEventListener('submit', event => {
  event.preventDefault();
  const newmax = event.target.elements[0].value;
  console.log(newmax);
});

minnum.addEventListener('submit', event => {
  event.preventDefault();
  const newmin = event.target.elements[0].value;
  console.log(newmin);
});
