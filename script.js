const folders = Array.from({length:81},(_,i)=>`Folder ${i+1}`);
const selected = new Set();
const grid = document.getElementById('folderGrid');
const countEl = document.getElementById('selectedCount');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartPrice = document.getElementById('cartPrice');
const priceHint = document.getElementById('priceHint');
const checkoutBtn = document.getElementById('checkoutBtn');
const modal = document.getElementById('paymentModal');
const tgAdmin = 'waylay09';
const upiId = 'santoshkumarkgg321@okhdfcbank';

function priceFor(n){
 if(n<3) return null;
 if(n<=3) return 100;
 if(n<=10) return 200;
 if(n===81) return 500;
 return null;
}
function priceText(n){
 if(n<3) return 'Select at least 3 folders.';
 if(n>=11 && n<=80) return 'Price for 11–80 folders is not configured yet. Please contact admin.';
 return `Package price: ₹${priceFor(n)}`;
}
function render(){
 const search=(document.getElementById('folderSearch').value||'').toLowerCase().trim();
 grid.innerHTML='';
 folders.forEach((name,i)=>{
  if(search && !name.toLowerCase().includes(search) && !String(i+1).includes(search)) return;
  const btn=document.createElement('button');btn.className='folder-option'+(selected.has(i+1)?' selected':'');btn.type='button';btn.textContent=name;btn.setAttribute('aria-pressed',selected.has(i+1));
  btn.addEventListener('click',()=>{selected.has(i+1)?selected.delete(i+1):selected.add(i+1);render();});
  grid.appendChild(btn);
 });
 const n=selected.size, price=priceFor(n);
 countEl.textContent=n;cartCount.textContent=`${n} folders`;cartPrice.textContent=price===null?'—':`₹${price}`;
 priceHint.textContent=priceText(n);
 checkoutBtn.disabled=!(n>=3 && price!==null);
 if(!n) cartItems.innerHTML='<p class="empty-cart">Your cart is waiting.<br>Select at least 3 folders.</p>';
 else {const ul=document.createElement('ul');[...selected].sort((a,b)=>a-b).forEach(x=>{const li=document.createElement('li');li.textContent=`Folder ${x}`;ul.appendChild(li)});cartItems.replaceChildren(ul);}
}
document.getElementById('folderSearch').addEventListener('input',render);
document.getElementById('clearSelection').addEventListener('click',()=>{selected.clear();render()});
render();

document.querySelectorAll('.preview').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('lightboxImage').src=btn.dataset.image;document.getElementById('lightbox').classList.add('open')}));
document.querySelectorAll('.sale-img').forEach(btn=>btn.addEventListener('click',()=>{const img=btn.querySelector('img');if(img.complete && img.naturalWidth){document.getElementById('lightboxImage').src=img.src;document.getElementById('lightbox').classList.add('open')}}));
document.getElementById('lightboxClose').addEventListener('click',()=>document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')e.currentTarget.classList.remove('open')});

checkoutBtn.addEventListener('click',()=>{
 const n=selected.size, p=priceFor(n);if(!p)return;
 document.getElementById('summaryCount').textContent=`${n} folders selected`;
 document.getElementById('summaryPrice').textContent=`₹${p}`;
 document.getElementById('upiText').textContent=upiId;
 document.getElementById('upiLink').href=`upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent('Study Material')}&am=${p}&cu=INR&tn=${encodeURIComponent('Folder order')}`;
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');
});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.getElementById('closePayment').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.getElementById('copyUpi').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(upiId);document.getElementById('copyUpi').textContent='COPIED ✓'}catch(e){document.getElementById('upiText').textContent=upiId}});
document.getElementById('submitOrder').addEventListener('click',()=>{
 const telegramId=document.getElementById('telegramId').value.trim();
 const username=document.getElementById('telegramUsername').value.trim();
 const utr=document.getElementById('utr').value.trim();
 const proof=document.getElementById('paymentProof').files[0];
 const n=selected.size,p=priceFor(n);
 if(!telegramId){alert('Please enter your Telegram ID. It is required for delivery.');return}
 if(!p){alert('Your selected folder count does not have a configured price.');return}
 if(!utr&&!proof){alert('Please attach a payment screenshot or enter your UTR.');return}
 const order=`STUDY MATERIAL ORDER\nFolders: ${[...selected].sort((a,b)=>a-b).map(x=>'Folder '+x).join(', ')}\nCount: ${n}\nAmount: ₹${p}\nTelegram ID: ${telegramId}\nUsername: ${username||'Not provided'}\nUTR: ${utr||'Screenshot attached separately'}\nPayment proof: ${proof?proof.name:'UTR provided'}\n\nPlease verify payment and send the selected folders to the Telegram ID above.`;
 const url=`https://t.me/${tgAdmin}?text=${encodeURIComponent(order)}`;
 window.open(url,'_blank','noopener');
 alert('Order details have been prepared in Telegram. Attach the payment screenshot there before sending. This static website does not upload the file automatically.');
});
document.getElementById('ageEnter').addEventListener('click',()=>{document.getElementById('ageGate').style.display='none'});
document.getElementById('ageExit').addEventListener('click',()=>{document.body.innerHTML='<main style="min-height:100vh;display:grid;place-items:center;text-align:center;padding:30px;color:#fff;background:#080507;font-family:Arial"><h1>Access unavailable</h1></main>'});
document.querySelector('.hamburger').addEventListener('click',()=>document.querySelector('.header nav').classList.toggle('show'));
