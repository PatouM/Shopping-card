var drill_counter, dmm_counter, psi_counter;



document.getElementById('add_drill').addEventListener('click', (event) => {
  let element_add_items = document.getElementById('add_items');
  let new_li = document.createElement('li');
  new_li.innerText = 'drill';

  element_add_items.appendChild(new_li);
  let element_drill_counter = document.getElementById('drill_counter');
  drill_counter = (typeof drill_counter === 'number' ? drill_counter : 0) + 1;
  element_drill_counter.innerText = 'drill_counter';
  element_drill_counter.style.backgroundColor = '#ff6666';

});

document.getElementById('add_psi').addEventListener('click', (event) => {
  let element_add_items2 = document.getElementById('add_items');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Preciva Soldering Iron Station';

  element_add_items2.appendChild(new_li2);
  let element_psi_counter = document.getElementById('psi_counter');
  psi_counter = (typeof psi_counter === 'number' ? psi_counter : 0) + 1;
  element_psi_counter.innerText = 'psi_counter';
  element_psi_counter.style.backgroundColor = '#ffff66';

});

document.getElementById('add_dmm').addEventListener('click', (event) => {
  let element_add_items3 = document.getElementById('add_items');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'digital multi-meter';

  element_add_items3.appendChild(new_li3);
  let element_dmm_counter = document.getElementById('dmm_counter');
  dmm_counter = (typeof dmm_counter === 'number' ? dmm_counter : 0) + 1;
  element_dmm_counter.innerText = 'dmm_counter';
  element_dmm_counter.style.backgroundColor = '#66ffff';

});