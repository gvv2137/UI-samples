const cards = document.querySelectorAll('.card');
let selectedUnit = null;

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedUnit = card.getAttribute('data-unit');
  });
});

document.getElementById('addToCartBtn').addEventListener('click', () => {
    if (selectedUnit == 2) {
        const selectedSize = sizeSelect.value;
        const selectedColor = colorSelect.value;
        alert(`You selected ${selectedUnit} Unit(s) - Size: ${selectedSize}, Colour: ${selectedColor}. Added to cart!`);
    } else if (selectedUnit) {
        alert(`You selected ${selectedUnit} Unit(s). Added to cart!`);
}else {
    alert('Please select a unit option.');
  }
});

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Black', 'White', 'Red', 'Blue'];

const sizeSelect = document.getElementById('sizeSelect');
const colorSelect = document.getElementById('colorSelect');

sizes.forEach(size => {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
});

colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
});

