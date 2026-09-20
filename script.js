const overlay = document.getElementById('overlay');
const modal = document.getElementById('callModal');
const drawer = document.getElementById('cartDrawer');
const items = [];
const show = el => { overlay.classList.add('show'); el.classList.add('show'); };
const hideAll = () => { overlay.classList.remove('show'); modal.classList.remove('show'); drawer.classList.remove('show'); };
document.querySelectorAll('.open-call').forEach(btn => btn.addEventListener('click', () => show(modal)));
document.getElementById('cartButton').addEventListener('click', () => show(drawer));
document.getElementById('closeCart').addEventListener('click', hideAll);
document.querySelector('.close-modal').addEventListener('click', hideAll);
overlay.addEventListener('click', hideAll);
document.querySelectorAll('.add').forEach(button => button.addEventListener('click', () => {
  items.push(button.dataset.item);
  document.getElementById('cartCount').textContent = items.length;
  renderCart();
  show(drawer);
}));
function renderCart(){
 const target = document.getElementById('cartItems');
 target.innerHTML = items.length ? items.map((item,i)=>`<div class="cart-item">${item}<button data-index="${i}" aria-label="Remove ${item}">×</button></div>`).join('') : '<p class="empty">Your cart is waiting for the right parts.</p>';
 document.getElementById('checkout').disabled = !items.length;
 target.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{items.splice(+btn.dataset.index,1);document.getElementById('cartCount').textContent=items.length;renderCart()}));
}
