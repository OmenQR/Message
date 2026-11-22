const ADMIN_LINK='https://t.me/Lustylatino';
const UPI_ID='santoshkumarkgg321@okhdfcbank';
const selected=new Set();
const $=id=>document.getElementById(id);
const grid=$('folderGrid');

// Edit these names whenever you want. Keep the list in the same order as folder numbers.
const folderNames = [
  'Desi c.-334MB', 'Sleeping S!s rec (indian)-873MB', 'FOLDERS 89440-1.7GB', 'DIFOEOFID0 -1.3GB', 'Cipi-8-1.9GB', 'C9-343MB', 'C5-429MB', 'C1-646MB', 'hot sℹ️s-519MB',
  'tied up collection-1.4GB', '4GR9HJF8-1.7GB', '90KJFS9DFFD-1.9GB', 'NKDJFOPSIFPOI-469MB', 'DNFJKSDFOSDOPI-1.6GB', '12-366MB', '13-172MB', '14-350MB', '15-398MB',
  '18-366MB', '11-572MB', '10-174MB', 'Indian ccp2-874MB', 'FSDDSFSDF 6 by- D1pak-691MB', '1.5GB SDFSDFDF by rxgnar-1.5GB', 'Foreign SDFDSF-1.7GB', 'Foreign WDASD-1.2GB', 'cpp4-840MB',
  'TDASDADASD-1.1GB', 'New CPP hot collection-1.6GB', 'New c.p. premium collection (2)-1.5GB', 'SDADASDA-1.1GB', 'Ind cpp1-1.0GB', 'sis 7-350MB', 'sis 5-485MB', 'sis 6-698MB', 'INDIAN ciipii DATABASE - 1-1.5GB',
  'Indian_simpi @dd_free_dishh-1.7GB', 'rp2-620MB', 'rp3-458MB', 'Rp 5-542MB', 'rp 1-499MB', 'real sℹ️s 2-408MB', 'real sℹ️s 3-664MB', 'jungle RP special-518MB', 'premium Rp @roman69-486MB',
  'cipii1-264MB', '100 VIDEO CP (1)-600MB', 'Desi c-334MB', 'Indian Cp1-697MB', 'DSADASDASD (110 Vids)-1.3GB', 'DSADASDA (160 Vids)-1.1GB', 'DASDASD collection-889MB', 'DADSAD ind 26 videos-1.8GB', 'indian SADASD-17MB',
  'F#RECD-1.8GB', 'PaDASDani DADSADASD-96MB', 'INDIAN ciipii DATABASE - 1-1.5GB', 'Indian_simpi @dd_free_dishh-1.7GB', 'Sleeping S!s rec (indian)-873MB', 'Siss 2-945MB', 'best br0 s!s by raxgnar-1.4GB', 'real RP2-1GB', 'new DASD folder-882MB',
  'best DASDA by rxgnar-1GB', 'teen DAS1-1.6GB', 'grapexrapz1-1.4GB', '5 must primium ©️ 𝙋 collection ❤️-941MB', '4 must primium ©️ 𝙋 collection ❤️-1.2GB', '2 must primium ©️ 𝙋 collection 💖-1.5GB', '1 must primium ©️ 𝙋 collection 💖 (2)-1.2GB', 'Forced new-1.9GB', 'sipi-7-1.9GB',
  'INDIAN rpp DATABASE - 5-1.2GB', 'INDIAN insict 📁2-1.2GB', 'INDIAN 🍇 2-620MB', '10 new ©️🅿️ collections 💔1.2GB', 'new DASDA primium collection 2🥰-1.1GB', 'NEW DASDA HOT COLLECTION-1.4GB', 'ExclusivDASD DASDW-1.2GB', '(14) 100 VIDEO FILE ⚠️-875MB', 'best DASDASD-1.7GB'
];

// Require an explicit 18+ confirmation before exposing any page content.
const ageGate=$('ageGate');
function lockForAge(){
 const accepted=sessionStorage.getItem('studyMaterialAdultConfirmed')==='yes';
 if(accepted){ageGate.hidden=true;document.body.classList.remove('age-locked')}
 else{ageGate.hidden=false;document.body.classList.add('age-locked')}
}
$('confirmAdult').addEventListener('click',()=>{sessionStorage.setItem('studyMaterialAdultConfirmed','yes');ageGate.hidden=true;document.body.classList.remove('age-locked')});
$('leaveSite').addEventListener('click',()=>{ageGate.innerHTML='<div class="age-gate-card"><div class="age-gate-mark">18<span>+</span></div><h1>Access <i>restricted.</i></h1><p>This website is strictly for adults aged 18 and above. You cannot continue.</p></div>';document.body.classList.add('age-locked')});
lockForAge();

function amount(n){if(n<1)return null;if(n<=3)return 100;if(n<=10)return 200;return 500;}
function sorted(){return [...selected].sort((a,b)=>a-b)}
function render(){
 const q=$('search').value.trim().toLowerCase();
 grid.innerHTML='';
 folderNames.forEach((title,index)=>{
  const i=index+1;
  if(q&&!title.toLowerCase().includes(q)&&!String(i).includes(q))return;
  const b=document.createElement('button');b.type='button';b.className='folder'+(selected.has(i)?' selected':'');b.textContent=title;
  b.setAttribute('aria-pressed',String(selected.has(i)));
  b.addEventListener('click',()=>{selected.has(i)?selected.delete(i):selected.add(i);render()});
  grid.appendChild(b);
 });
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
 $('modalFolderList').innerHTML=sorted().map(i=>`<span>${folderNames[i-1]}</span>`).join('');
 $('reviewCount').textContent=`${n} folders selected`;$('reviewTotal').textContent=`₹${p}`;
 $('payAmount').textContent=p;$('payUpi').textContent=UPI_ID;$('upiPayAmount').textContent=p;$('upiPay').href=`upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent('Gyan Kumar Gupta')}&am=${p}&cu=INR&tn=${encodeURIComponent('Study Material order')}`;
}
$('search').addEventListener('input',render);
$('clearSelection').addEventListener('click',()=>{selected.clear();render()});
$('selectAll').addEventListener('click',()=>{for(let i=1;i<=81;i++)selected.add(i);render()});
$('reviewOrder').addEventListener('click',()=>{updateOrder();openModal('reviewModal')});
$('toDetails').addEventListener('click',()=>{closeModal('reviewModal');openModal('detailsModal')});
$('toPayment').addEventListener('click',()=>{
 const id=$('tgId').value.trim();
 if(!id){alert('Please enter a contact or delivery ID (Telegram, phone, Instagram, or another reachable contact).');$('tgId').focus();return}
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
 const orderText=`STUDY MATERIAL ORDER\nFolders: ${sorted().map(i=>folderNames[i-1]).join(', ')}\nTotal folders: ${n}\nAmount: ₹${p}\nPayee: Gyan Kumar Gupta\nUPI ID: ${UPI_ID}\nCustomer contact / delivery ID (as entered): ${id}\nCustomer username: ${username||'Not provided'}\nUTR: ${utr||'Payment screenshot selected: '+file.name}\n\nPlease verify payment and contact the customer using the contact / delivery detail they provided.`;
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
// Navigation is always visible at the top and scrolls away naturally with the page.

render();


// In-page image viewer: arrows, keyboard and touch-swipe navigation.
const gallerySets={
 previews:Array.from({length:9},(_,i)=>({src:`screenshot${i+1}.png`,label:`PREVIEW ${String(i+1).padStart(2,'0')}`})),
 sales:['sale.png','sale2.png','sale3.png','sale4.png','sale5.png'].map((src,i)=>({src,label:`SALE / ${String(i+1).padStart(2,'0')}`}))
};
let activeGallery='previews',activeImage=0,touchStartX=0;
const lightbox=$('lightbox');
function showGalleryImage(){const item=gallerySets[activeGallery][activeImage];$('lightboxImage').src=item.src;$('lightboxImage').alt=item.label;$('lightboxCaption').textContent=`${item.label}  ·  ${activeImage+1} / ${gallerySets[activeGallery].length}`;}
function openGallery(name,index){activeGallery=name;activeImage=index;showGalleryImage();lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeGallery(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';}
function moveGallery(step){const count=gallerySets[activeGallery].length;activeImage=(activeImage+step+count)%count;showGalleryImage();}
document.querySelectorAll('.gallery-open').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openGallery(el.dataset.gallery,Number(el.dataset.index));}));
$('lightboxClose').addEventListener('click',closeGallery);$('lightboxPrev').addEventListener('click',()=>moveGallery(-1));$('lightboxNext').addEventListener('click',()=>moveGallery(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeGallery()});
document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('open'))return;if(e.key==='Escape')closeGallery();if(e.key==='ArrowLeft')moveGallery(-1);if(e.key==='ArrowRight')moveGallery(1)});
lightbox.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX},{passive:true});
lightbox.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchStartX;if(Math.abs(dx)>45)moveGallery(dx<0?1:-1)},{passive:true});


// VIP monthly Telegram membership checkout. GitHub Pages is static: proof files
// stay on the visitor's device, so ask them to attach the screenshot in Telegram.
$('joinVip').addEventListener('click',()=>openModal('vipDetailsModal'));
$('vipToPayment').addEventListener('click',()=>{
 const contact=$('vipContact').value.trim();
 if(!contact){alert('Please enter your Telegram ID or phone number.');$('vipContact').focus();return;}
 closeModal('vipDetailsModal');openModal('vipPaymentModal');
});
$('vipCopyUpi').addEventListener('click',async()=>{
 try{await navigator.clipboard.writeText(UPI_ID);$('vipCopyUpi').textContent='COPIED ✓';}
 catch(e){alert('UPI ID: '+UPI_ID);}
});
$('vipSubmit').addEventListener('click',()=>{
 const contact=$('vipContact').value.trim(),username=$('vipUsername').value.trim();
 const file=$('vipProofFile').files[0],utr=$('vipUtr').value.trim();
 if(!contact){alert('Please enter your Telegram ID or phone number.');closeModal('vipPaymentModal');openModal('vipDetailsModal');$('vipContact').focus();return;}
 if(!file&&!utr){alert('Please upload your payment screenshot or enter the UTR.');return;}
 if(file&&file.size>8*1024*1024){alert('Please choose an image under 8 MB.');return;}
 const message=`VIP TELEGRAM GROUP MEMBERSHIP REQUEST\nMembership: ₹100 / 30 days\nCustomer Telegram ID / phone: ${contact}\nTelegram username: ${username||'Not provided'}\nUTR: ${utr||'Payment screenshot selected: '+file.name}\nPayment recipient: Gyan Kumar Gupta\nUPI ID: ${UPI_ID}\n\nPlease verify the payment and share the private group invite after approval.`;
 $('vipTelegramLink').href='https://t.me/Lustylatino?text='+encodeURIComponent(message);
 closeModal('vipPaymentModal');openModal('vipFinalModal');
});


// Fallback click handler for the VIP button. This also works if another
// page interaction handler fails to initialize on some mobile browsers.
window.openVipModal = function(){
 const modal=document.getElementById('vipDetailsModal');
 if(!modal) return;
 modal.classList.add('open');
 modal.setAttribute('aria-hidden','false');
 document.body.style.overflow='hidden';
};

// Use each actual MP4's first frame as its thumbnail; never autoplay the gallery tiles.
(() => {
 document.querySelectorAll('.video-thumb').forEach(thumb=>{
   thumb.addEventListener('loadedmetadata',()=>{try{thumb.currentTime=0.15;}catch(e){}} ,{once:true});
   thumb.addEventListener('seeked',()=>thumb.pause(),{once:true});
 });
 const modal=document.getElementById('videoModal'), player=document.getElementById('previewVideo'), close=document.getElementById('videoModalClose'), caption=document.getElementById('videoModalCaption'); if(!modal||!player||!close)return;
 function closePlayer(){player.pause();player.removeAttribute('src');player.load();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
 document.querySelectorAll('[data-video-index]').forEach(tile=>tile.addEventListener('click',async()=>{const n=Number(tile.dataset.videoIndex);player.pause();player.src=`video${n}.mp4`;player.load();caption.textContent='DEMO VIDEO · JOIN PREMIUM EXCLUSIVE GROUP FOR MORE';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';try{await player.play();}catch(e){}}));
 close.addEventListener('click',closePlayer);modal.addEventListener('click',e=>{if(e.target===modal)closePlayer();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closePlayer();});
})();
