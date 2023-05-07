const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');

// add event listener to change button
changeButton.addEventListener('click', () => {
  const blockId = blockIdInput.value;
  const color = colorInput.value;
  
  // loop through grid items and reset background color to transparent
  gridItems.forEach((item) => {
    item.style.backgroundColor = 'transparent';
  });
  
  // change background color of specific block id
  const blockItem = document.getElementById(blockId);
  blockItem.style.backgroundColor = color;
});

// add event listener to reset button
resetButton.addEventListener('click', () => {
  // loop through grid items and reset background color to transparent
  gridItems.forEach((item) => {
    item.style.backgroundColor = 'transparent';
  });
});
