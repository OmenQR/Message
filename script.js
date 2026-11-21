const ADMIN_LINK='https://t.me/Lustylatino';
const UPI_ID='santoshkumarkgg321@okhdfcbank';
const selected=new Set();
const $=id=>document.getElementById(id);
const grid=$('folderGrid');
function amount(n){if(n<1)return null;if(n<=3)return 100;if(n<=10)return 200;return 500;}
function sorted(){return [...selected].sort((a,b)=>a-b)}
function render(){
 const q=$('search').value.trim().toLowerCase();
 grid.innerHTML='';
 for(let i=1;i<=81;i++){
  const title=`Folder ${i}`;
  if(q&&!title.toLowerCase().includes(q)&&!String(i).includes(q))continue;
  const b=document.createElement('button');b.type='button';b.className='folder'+(selected.has(i)?' selected':'');b.textContent=title;
  b.setAttribute('aria-pressed',String(selected.has(i)));
  b.addEventListener('click',()=>{selected.has(i)?selected.delete(i):selected.add(i);render()});
  grid.appendChild(b);
 }
 const n=selected.size,p=amount(n),left=Math.max(0,1-n);
 $('cartCount').textContent=n;$('selectedNum').textContent=n;
 $('selectionHint').textContent=n?`${n} folder${n===1?'':'s'} selected`:'No folders selected yet.';
 $('remainingText').textContent=left?'Choose at least 1 folder to continue':n===81?'All 81 folders selected':'Selection updated';
 $('progressPercent').textContent=`${Math.min(100,Math.round(n/81*100))}%`;
 $('progressBar').style.width=`${Math.min(100,n/81*100)}%`;
 $('estimatedTotal').textContent=p===null?'—':`₹${p}`;
 $('pricingNote').textContent=n===0?'Choose folders to see your total.':n<=3?'1–3 folders · ₹100':n<=10?'4–10 folders · ₹200':'11–81 folders · ₹500';
 $('reviewOrder').disabled=!(n>=1&&p!==null);
}
function openModal(id){$(id).classList.add('open');$(id).setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(id){$(id).classList.remove('open');$(id).setAttribute('aria-hidden','true');if(!document.querySelector('.modal.open'))document.body.style.overflow=''}
function updateOrder(){
 const n=selected.size,p=amount(n);
 $('modalFolderList').innerHTML=sorted().map(i=>`<span>Folder ${i}</span>`).join('');
 $('reviewCount').textContent=`${n} folders selected`;$('reviewTotal').textContent=`₹${p}`;
 $('payAmount').textContent=p;$('payUpi').textContent=UPI_ID;
}
$('search').addEventListener('input',render);
$('clearSelection').addEventListener('click',()=>{selected.clear();render()});
$('selectAll').addEventListener('click',()=>{for(let i=1;i<=81;i++)selected.add(i);render()});
$('reviewOrder').addEventListener('click',()=>{updateOrder();openModal('reviewModal')});
$('toDetails').addEventListener('click',()=>{closeModal('reviewModal');openModal('detailsModal')});
$('toPayment').addEventListener('click',()=>{
 const id=$('tgId').value.trim();
 if(!id){alert('Please enter your Telegram ID or username.');$('tgId').focus();return}
 if(!/^[0-9]{5,15}$/.test(id)){alert('Please enter a valid numeric Telegram User ID.');$('tgId').focus();return}
 closeModal('detailsModal');openModal('paymentModal');
});
$('copyUpi').addEventListener('click',async()=>{
 try{await navigator.clipboard.writeText(UPI_ID);$('copyUpi').textContent='COPIED ✓'}catch(e){alert('UPI ID: '+UPI_ID)}
});
$('submitProof').addEventListener('click',()=>{
 const file=$('proofFile').files[0],utr=$('utr').value.trim(),id=$('tgId').value.trim(),username=$('tgUsername').value.trim();
 if(!file&&!utr){alert('Please upload a payment screenshot or enter the UTR.');return}
 if(file&&file.size>8*1024*1024){alert('Please choose an image under 8 MB.');return}
 const n=selected.size,p=amount(n);
 if(!p){alert('Please select at least one folder.');return}
 // Static GitHub Pages cannot transmit the chosen file or verify payment.
 // Keep the Telegram destination hidden from the page until this final step.
 const orderText=`STUDY MATERIAL ORDER\nFolders: ${sorted().map(i=>'Folder '+i).join(', ')}\nTotal folders: ${n}\nAmount: ₹${p}\nPayee: Gyan Kumar Gupta\nUPI ID: ${UPI_ID}\nCustomer Telegram ID / contact: ${id}\nCustomer username: ${username||'Not provided'}\nUTR: ${utr||'Payment screenshot selected: '+file.name}\n\nPlease verify payment and deliver the selected folders to the provided Telegram ID.`;
 const tgUrl=ADMIN_LINK+'?text='+encodeURIComponent(orderText);
 closeModal('paymentModal');
 // Keep order data ready for customer to send; the final destination appears only now.
 $('finalModal').dataset.orderUrl=tgUrl;
 openModal('finalModal');
});
$('finalModal').addEventListener('click',e=>{
 if(e.target.closest('.final-link')){
  const orderUrl=$('finalModal').dataset.orderUrl;
  if(orderUrl){e.preventDefault();window.open(orderUrl,'_blank','noopener');}
 }
});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.close)));
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.open').forEach(m=>closeModal(m.id))}});
$('navToggle').addEventListener('click',()=>$('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>$('nav').classList.remove('open')));
render();
