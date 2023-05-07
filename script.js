const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');

changeButton.addEventListener('click', () => {
  const blockId = blockIdInput.value;
  const color = colorInput.value;
  
  gridItems.forEach((item) => {
    item.style.backgroundColor = 'transparent';
  });
  
  const blockItem = document.getElementById(blockId);
  blockItem.style.backgroundColor = color;
});
