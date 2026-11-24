const ADMIN_LINK='https://t.me/Lustylatino';
const UPI_ID='santoshkumarkgg321@okhdfcbank';
const selected=new Set();
// Edit each folder's name and size independently below.
const folders=[
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'},
 {name:'Gameplay GTA-6',size:'1.5 GB'}
];

const $=id=>document.getElementById(id);
const grid=$('folderGrid');

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
 folders.forEach((folder,index)=>{
  const i=index+1,title=folder.name;
  if(q&&!title.toLowerCase().includes(q)&&!String(i).includes(q)&&!folder.size.toLowerCase().includes(q))return;
  const b=document.createElement('button');b.type='button';b.className='folder'+(selected.has(i)?' selected':'');
  const name=document.createElement('span');name.textContent=title;name.style.display='block';
  const size=document.createElement('small');size.textContent=folder.size;size.style.display='block';size.style.marginTop='4px';size.style.opacity='.8';
  b.append(name,size);
  b.setAttribute('aria-pressed',String(selected.has(i)));
  b.addEventListener('click',()=>{selected.has(i)?selected.delete(i):selected.add(i);render()});
  grid.appendChild(b);
 });
 const n=selected.size,p=amount(n),left=Math.max(0,1-n);
 $('cartCount').textContent=n;$('selectedNum').textContent=n;
 $('selectionHint').textContent=n?`${n} folder${n===1?'':'s'} selected`:'No folders selected yet.';
 $('remainingText').textContent=left?'Choose at least 1 folder to continue':n===folders.length?'All folders selected':'Selection updated';
 $('progressPercent').textContent=`${Math.min(100,Math.round(n/folders.length*100))}%`;
 $('progressBar').style.width=`${Math.min(100,n/folders.length*100)}%`;
 $('estimatedTotal').textContent=p===null?'—':`₹${p}`;
 $('pricingNote').textContent=n===0?'Choose folders to see your total.':n<=3?'1–3 folders · ₹100':n<=10?'4–10 folders · ₹200':'11–81 folders · ₹500';
 $('reviewOrder').disabled=!(n>=1&&p!==null);
}
function openModal(id){$(id).classList.add('open');$(id).setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(id){$(id).classList.remove('open');$(id).setAttribute('aria-hidden','true');if(!document.querySelector('.modal.open'))document.body.style.overflow=''}
function updateOrder(){
 const n=selected.size,p=amount(n);
 $('modalFolderList').innerHTML='';
  sorted().forEach(i=>{
   const item=document.createElement('span');item.textContent=`${folders[i-1].name} · ${folders[i-1].size}`;$('modalFolderList').appendChild(item);
  });
 $('reviewCount').textContent=`${n} folders selected`;$('reviewTotal').textContent=`₹${p}`;
 $('payAmount').textContent=p;$('payUpi').textContent=UPI_ID;$('upiPayAmount').textContent=p;$('upiPay').href=`upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent('Gyan Kumar Gupta')}&am=${p}&cu=INR&tn=${encodeURIComponent('Study Material order')}`;
}
$('search').addEventListener('input',render);
$('clearSelection').addEventListener('click',()=>{selected.clear();render()});
$('selectAll').addEventListener('click',()=>{for(let i=1;i<=folders.length;i++)selected.add(i);render()});
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
 const id=$('tgId').value.trim(),username=$('tgUsername').value.trim();
 const n=selected.size,p=amount(n);
 const screenshot=$('paymentScreenshot').files[0],utr=$('paymentUtr').value.trim();
 if(!p){alert('Please select at least one folder.');return}
 if(!screenshot&&!utr){alert('Please upload a payment screenshot or enter the UTR.');return}
 const proofLine=utr?`UTR / Transaction ID: ${utr}`:'Payment screenshot selected (please attach the image again in Telegram chat).';
 const orderText=`STUDY MATERIAL ORDER\nFolders: ${sorted().map(i=>`${folders[i-1].name} (${folders[i-1].size})`).join(', ')}\nTotal folders: ${n}\nAmount: ₹${p}\nPayee: Gyan Kumar Gupta\nUPI ID: ${UPI_ID}\n${proofLine}\nCustomer contact / delivery ID: ${id}\nCustomer username: ${username||'Not provided'}\n\nPlease verify the payment and complete the order.`;
 const tgUrl=ADMIN_LINK+'?text='+encodeURIComponent(orderText);
 closeModal('paymentModal');$('finalModal').dataset.orderUrl=tgUrl;openModal('finalModal');
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


// VIP weekly Telegram membership checkout. GitHub Pages is static: proof files
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
 const screenshot=$('vipPaymentScreenshot').files[0],utr=$('vipPaymentUtr').value.trim();
 if(!contact){alert('Please enter your Telegram ID or phone number.');closeModal('vipPaymentModal');openModal('vipDetailsModal');$('vipContact').focus();return;}
 if(!screenshot&&!utr){alert('Please upload a payment screenshot or enter the UTR.');return;}
 const proofLine=utr?`UTR / Transaction ID: ${utr}`:'Payment screenshot selected (please attach the image again in Telegram chat).';
 const message=`VIP TELEGRAM GROUP MEMBERSHIP REQUEST\nMembership: ₹49 / 7 days\nCustomer Telegram ID / phone: ${contact}\nTelegram username: ${username||'Not provided'}\nPayment recipient: Gyan Kumar Gupta\nUPI ID: ${UPI_ID}\n${proofLine}\n\nPlease verify the payment and complete the membership request.`;
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


// English / Hindi language switch. Product names, folder names, UPI ID and amounts stay unchanged.
const hindiText = {"AGE-RESTRICTED WEBSITE": "केवल 18 साल या उससे अधिक उम्र वालों के लिए", "Adults": "केवल बड़े", "only.": "के लिए।", "This website is strictly for adults aged 18 and above.": "यह वेबसाइट सिर्फ 18 साल या उससे अधिक उम्र के लोगों के लिए है।", "By continuing, you confirm that you are at least 18 years old and legally permitted to view the material in your location.": "आगे बढ़कर आप पुष्टि करते हैं कि आपकी उम्र कम से कम 18 साल है और आपके यहाँ इस सामग्री को देखना कानूनी है।", "If you are under 18, please leave this website now.": "अगर आपकी उम्र 18 साल से कम है, तो कृपया अभी वेबसाइट बंद कर दें।", "I AM 18 OR OLDER — ENTER": "मेरी उम्र 18 साल या उससे अधिक है — आगे बढ़ें", "I AM UNDER 18": "मेरी उम्र 18 साल से कम है", "Home": "होम", "Video Gallery": "वीडियो देखें", "Free Group": "फ्री ग्रुप", "Folders": "वीडियो फोल्डर", "Recent Sales": "हाल की बिक्री", "VIP Group": "VIP ग्रुप", "Support": "सहायता", "18+ ONLY": "केवल 18+", "START HERE · FREE ACCESS": "यहाँ से शुरू करें · मुफ्त", "Join our": "हमारे", "free Telegram group.": "फ्री Telegram ग्रुप से जुड़ें।", "Get started with the community, then explore the video previews below.": "पहले हमारे ग्रुप से जुड़ें। फिर नीचे दिए गए वीडियो के नमूने देखें।", "JOIN FREE GROUP": "फ्री ग्रुप से जुड़ें", "A QUICK LOOK": "एक छोटी सी झलक", "Some demo videos": "कुछ नमूना वीडियो", "are here.": "यहाँ दिए गए हैं।", "Join our Premium Exclusive Group for more such videos.": "ऐसे और वीडियो देखने के लिए हमारे Premium Exclusive Group से जुड़ें।", "DEMO VIDEOS": "नमूना वीडियो", "VIDEO PREVIEW 01": "वीडियो नमूना 01", "VIDEO PREVIEW 02": "वीडियो नमूना 02", "VIDEO PREVIEW 03": "वीडियो नमूना 03", "VIDEO PREVIEW 04": "वीडियो नमूना 04", "VIDEO PREVIEW 05": "वीडियो नमूना 05", "VIDEO PREVIEW 06": "वीडियो नमूना 06", "VIDEO PREVIEW 07": "वीडियो नमूना 07", "VIDEO PREVIEW 08": "वीडियो नमूना 08", "These are only blurred demo videos.": "ये सिर्फ धुंधले नमूना वीडियो हैं।", "Join our Premium Telegram Group Membership to access the full videos in clear, high quality.": "पूरे वीडियो साफ और अच्छी क्वालिटी में देखने के लिए Premium Telegram Group की सदस्यता लें।", "JOIN PREMIUM MEMBERSHIP": "प्रीमियम सदस्यता लें", "THE PRIVATE COLLECTION": "खास वीडियो कलेक्शन", "YOUR": "आपका", "AFTER-HOURS": "खास समय का", "OBSESSION.": "पसंदीदा कलेक्शन।", "A curated digital collection. Pick your favourites. Make it yours.": "यहाँ दिए गए वीडियो फोल्डर देखें और अपनी पसंद के फोल्डर चुनें।", "✦ Carefully Curated": "✦ चुना हुआ कलेक्शन", "✦ Private Access": "✦ निजी एक्सेस", "✦ Instant Order Request": "✦ तुरंत ऑर्डर भेजें", "EXPLORE THE COLLECTION": "वीडियो फोल्डर देखें", "PRIVATE": "निजी", "COLLECTION": "कलेक्शन", "01 / CURATED COLLECTION": "01 / चुना हुआ कलेक्शन", "SCROLL TO EXPLORE ↓": "नीचे जाकर देखें ↓", "PRIVATE COMMUNITY · WEEKLY ACCESS": "निजी ग्रुप · साप्ताहिक सदस्यता", "Join the": "हमारे", "VIP group.": "VIP ग्रुप से जुड़ें।", "/ 7 days": "/ 7 दिन", "This is a separate weekly group membership — join the Telegram community for daily video posts, member conversations and active moderation.": "यह वीडियो फोल्डर खरीदने से अलग साप्ताहिक सदस्यता है। इसमें आपको Telegram ग्रुप में रोज़ नए पोस्ट, दूसरे सदस्यों से बातचीत और एडमिन की देखरेख मिलेगी।", "Daily posts and random video updates": "रोज़ नए पोस्ट और वीडियो अपडेट", "Chat and interact with other members": "दूसरे सदस्यों से बातचीत करें", "Respectful conversations and admin moderation": "सभ्य बातचीत और एडमिन की निगरानी", "7 days of access · renewable for ₹49/week": "7 दिन की सदस्यता · ₹49 देकर फिर से बढ़ाएँ", "Group membership is separate from video-folder purchases.": "VIP ग्रुप की सदस्यता और वीडियो फोल्डर की खरीदारी अलग-अलग हैं।", "You do not need to buy folders to join the group.": "ग्रुप में जुड़ने के लिए वीडियो फोल्डर खरीदना ज़रूरी नहीं है।", "JOIN VIP GROUP": "VIP ग्रुप से जुड़ें", "Access is shared only after the admin verifies your payment.": "आपका पेमेंट चेक होने के बाद ही ग्रुप का लिंक दिया जाएगा।", "PRIVATE TELEGRAM": "निजी TELEGRAM", "COMMUNITY": "ग्रुप", "₹49 · 7 DAYS": "₹49 · 7 दिन", "TAKE A CLOSER LOOK": "और करीब से देखें", "Inside the": "कलेक्शन के", "collection": "अंदर", "A FEW PREVIEWS · 01—09": "कुछ नमूने · 01—09", "ONE-TIME VIDEO FOLDER PURCHASES": "एक बार भुगतान करके फोल्डर खरीदें", "Buy video": "वीडियो", "folders.": "फोल्डर।", "Looking for more premium videos? Browse and purchase individual video folders separately from the weekly VIP group membership. Each folder contains approximately 120–150 videos.": "और वीडियो चाहिए? यहाँ से अपनी पसंद के फोल्डर अलग-अलग खरीद सकते हैं। हर फोल्डर में लगभग 120–150 वीडियो हैं। VIP ग्रुप की सदस्यता इससे अलग है।", "YOUR CART": "आपकी चुनी हुई चीज़ें", "SELECT ALL 81": "सभी 81 चुनें", "REMOVE ALL": "सभी हटाएँ", "Choose your folders to see the live total.": "फोल्डर चुनें, कुल कीमत यहाँ दिखेगी।", "81 AVAILABLE": "81 फोल्डर उपलब्ध", "YOUR SELECTION": "आपका चुनाव", "FOLDERS": "फोल्डर", "SELECTED": "चुने गए", "Choose 3 more to unlock checkout": "खरीदारी आगे बढ़ाने के लिए फोल्डर चुनें", "01—03 FOLDERS": "1–3 फोल्डर", "04—10 FOLDERS": "4–10 फोल्डर", "11—81 FOLDERS": "11–81 फोल्डर", "ESTIMATED TOTAL": "कुल कीमत", "Select folders to see your total.": "फोल्डर चुनने पर कुल कीमत दिखेगी।", "REVIEW YOUR ORDER": "ऑर्डर जाँचें", "KEEP IT PERSONAL": "इसे निजी रखें", "✦ PRIVATE PURCHASE · PERSONAL ACCESS ONLY": "✦ सिर्फ आपके निजी इस्तेमाल के लिए", "Please don't share your purchased folders with anyone. You paid for your selection — enjoy it personally. Respect the creator and keep your access private.": "खरीदे गए फोल्डर किसी दूसरे व्यक्ति को न भेजें। आपने इन्हें अपने लिए खरीदा है, इसलिए इनका इस्तेमाल निजी तौर पर करें।", "THE LATEST UPDATES": "नई जानकारी", "Recent": "हाल की", "sales.": "बिक्री।", "CUSTOMER ORDER PROOFS": "ग्राहकों के ऑर्डर के प्रमाण", "PRIVATE COLLECTION": "निजी कलेक्शन", "PREMIUM ACCESS": "प्रीमियम एक्सेस", "STEP 01 / ORDER REVIEW": "चरण 01 / ऑर्डर जाँचें", "Your selected": "आपके चुने हुए", "Please check your selection before moving to payment.": "पेमेंट करने से पहले चुने गए फोल्डर एक बार देख लें।", "CONTINUE": "आगे बढ़ें", "STEP 02 / DELIVERY DETAILS": "चरण 02 / जानकारी भरें", "Where should we": "आपको कहाँ", "send it?": "भेजना है?", "TELEGRAM USER ID": "TELEGRAM ID या संपर्क नंबर", "* REQUIRED": "* ज़रूरी", "TELEGRAM USERNAME": "TELEGRAM USERNAME", "OPTIONAL": "ज़रूरी नहीं", "Enter any reachable contact or delivery ID: Telegram numeric ID, @username, phone number, Instagram ID, or another contact detail. The admin will use exactly what you provide.": "अपना ऐसा संपर्क दें जिस पर एडमिन आपसे बात कर सके। जैसे Telegram ID, @username, मोबाइल नंबर या Instagram ID।", "CONTINUE TO PAYMENT": "पेमेंट करने आगे बढ़ें", "STEP 03 / SECURE YOUR ORDER": "चरण 03 / पेमेंट करें", "Make it": "ऑर्डर", "official.": "पूरा करें।", "SCAN & PAY": "QR कोड स्कैन करके पेमेंट करें", "PAY TO": "पेमेंट प्राप्तकर्ता", "COPY UPI ID": "UPI ID कॉपी करें", "WITH UPI APP": "UPI ऐप से पेमेंट करें", "Please don't share the folders with anyone. You have paid for them, so only you must enjoy your selection. ♥": "खरीदे गए फोल्डर किसी और को न भेजें। इनका इस्तेमाल सिर्फ आप करें। ♥", "PAYMENT PROOF": "पेमेंट का स्क्रीनशॉट", "OR ENTER UTR / TRANSACTION ID": "या UTR / Transaction ID डालें", "I HAVE PAID — SUBMIT ORDER": "पेमेंट हो गया — ऑर्डर भेजें", "Payment is manually verified by the admin. Keep your transaction reference handy.": "एडमिन आपके पेमेंट की जाँच करेगा। अपना Transaction ID संभालकर रखें।", "VIP MEMBERSHIP / STEP 01": "VIP सदस्यता / चरण 01", "Your": "आपकी", "membership.": "सदस्यता।", "for 7 days · renewable": "7 दिनों के लिए · नवीकरण योग्य", "TELEGRAM ID OR PHONE NUMBER": "TELEGRAM ID या मोबाइल नंबर", "VIP MEMBERSHIP / STEP 02": "VIP सदस्यता / चरण 02", "Complete your": "अपना", "payment.": "पेमेंट पूरा करें।", "PAY ₹49 WITH UPI APP": "UPI ऐप से ₹49 पेमेंट करें", "PAYMENT SCREENSHOT": "पेमेंट का स्क्रीनशॉट", "OPTIONAL IF UTR IS ENTERED": "UTR डालने पर स्क्रीनशॉट ज़रूरी नहीं", "SUBMIT MEMBERSHIP REQUEST": "सदस्यता का अनुरोध भेजें", "Your membership starts after manual payment verification. You will receive the private group invite after approval. If you selected a screenshot, attach it in Telegram after it opens.": "एडमिन पेमेंट जाँचने के बाद आपकी सदस्यता शुरू करेगा। मंज़ूरी मिलने पर ग्रुप का निजी लिंक मिलेगा। अगर स्क्रीनशॉट चुना है, तो Telegram खुलने पर उसे वहाँ भेजें।", "VIP REQUEST READY": "VIP अनुरोध तैयार है", "Send your": "अपना अनुरोध", "request.": "भेजें।", "Your payment details are prepared. Send the request to the admin and attach your payment screenshot if you selected one. The private group invite will be shared after payment verification.": "आपके पेमेंट की जानकारी तैयार है। एडमिन को अनुरोध भेजें। अगर स्क्रीनशॉट चुना है, तो Telegram में उसे भी जोड़ें। पेमेंट जाँचने के बाद ग्रुप का लिंक मिलेगा।", "CONTINUE TO TELEGRAM": "TELEGRAM पर जाएँ", "Membership: ₹49 / 7 days. Please keep conversations respectful.": "सदस्यता: ₹49 / 7 दिन। सदस्यता नवीकरण योग्य है। ग्रुप में सभ्य भाषा का इस्तेमाल करें।", "ORDER DETAILS PREPARED": "ऑर्डर की जानकारी तैयार है", "One last": "बस एक आखिरी", "step.": "काम बाकी है।", "Your order details are ready. Send your order and payment proof to the admin. Your folders will be delivered to the Telegram ID you provided after payment verification.": "आपके ऑर्डर की जानकारी तैयार है। इसे एडमिन को भेजें और पेमेंट का स्क्रीनशॉट भी जोड़ें। पेमेंट जाँचने के बाद फोल्डर आपके दिए गए Telegram ID पर भेजे जाएँगे।", "Your order details will be prepared for Telegram. Attach your payment screenshot there before sending the message.": "Telegram खुलने पर अपना पेमेंट स्क्रीनशॉट जोड़कर मैसेज भेजें।", "BLURRED DEMO PREVIEW · FULL QUALITY WITH PREMIUM MEMBERSHIP": "धुंधला नमूना वीडियो · पूरे वीडियो Premium सदस्यता में", "1 folder selected": "1 फोल्डर चुना गया", "folders selected": "फोल्डर चुने गए", "No folders selected yet.": "अभी कोई फोल्डर नहीं चुना गया है।", "Choose at least 1 folder to continue": "आगे बढ़ने के लिए कम से कम 1 फोल्डर चुनें", "All 81 folders selected": "सभी 81 फोल्डर चुन लिए गए", "Selection updated": "चुनाव अपडेट हो गया", "Choose folders to see your total.": "कुल कीमत देखने के लिए फोल्डर चुनें।", "1–3 folders · ₹100": "1–3 फोल्डर · ₹100", "4–10 folders · ₹200": "4–10 फोल्डर · ₹200", "11–81 folders · ₹500": "11–81 फोल्डर · ₹500", "0 folders": "0 फोल्डर", "COPIED ✓": "कॉपी हो गया ✓", "Please enter a contact or delivery ID (Telegram, phone, Instagram, or another reachable contact).": "कृपया Telegram ID, मोबाइल नंबर या कोई ऐसा संपर्क भरें जहाँ आपसे बात हो सके।", "Please choose an image under 8 MB.": "कृपया 8 MB से छोटी इमेज चुनें।", "Please upload a payment screenshot or enter the UTR.": "पेमेंट का स्क्रीनशॉट अपलोड करें या UTR नंबर डालें।", "Please select at least one folder.": "कृपया कम से कम एक फोल्डर चुनें।", "Please enter your Telegram ID or phone number.": "कृपया अपना Telegram ID या मोबाइल नंबर डालें।", "VIP TELEGRAM GROUP MEMBERSHIP REQUEST": "VIP TELEGRAM ग्रुप सदस्यता का अनुरोध", "DEMO VIDEO · JOIN PREMIUM EXCLUSIVE GROUP FOR MORE": "नमूना वीडियो · ऐसे और वीडियो के लिए Premium Exclusive Group से जुड़ें", "PAY ₹": "पेमेंट ₹", "Find a folder by number or name": "नंबर या नाम से फोल्डर खोजें", "Telegram ID, @username, phone number or Instagram ID": "अपना Telegram ID, @username, मोबाइल नंबर या Instagram ID डालें", "@yourusername (optional)": "@yourusername (ज़रूरी नहीं)", "12-digit UTR / transaction reference": "12 अंकों का UTR / Transaction ID डालें", "Enter Telegram ID, phone number or other contact": "Telegram ID, मोबाइल नंबर या कोई दूसरा संपर्क डालें", "Enter UTR / transaction reference": "UTR / Transaction ID डालें", "Play video preview 1": "वीडियो नमूना 1 चलाएँ", "Play video preview 2": "वीडियो नमूना 2 चलाएँ", "Play video preview 3": "वीडियो नमूना 3 चलाएँ", "Play video preview 4": "वीडियो नमूना 4 चलाएँ", "Play video preview 5": "वीडियो नमूना 5 चलाएँ", "Play video preview 6": "वीडियो नमूना 6 चलाएँ", "Play video preview 7": "वीडियो नमूना 7 चलाएँ", "Play video preview 8": "वीडियो नमूना 8 चलाएँ", "Close": "बंद करें", "Previous": "पिछला", "Next": "अगला", "2 folders selected": "2 फोल्डर चुने गए", "3 folders selected": "3 फोल्डर चुने गए", "4 folders selected": "4 फोल्डर चुने गए", "5 folders selected": "5 फोल्डर चुने गए", "6 folders selected": "6 फोल्डर चुने गए", "7 folders selected": "7 फोल्डर चुने गए", "8 folders selected": "8 फोल्डर चुने गए", "9 folders selected": "9 फोल्डर चुने गए", "10 folders selected": "10 फोल्डर चुने गए", "11 folders selected": "11 फोल्डर चुने गए", "12 folders selected": "12 फोल्डर चुने गए", "13 folders selected": "13 फोल्डर चुने गए", "14 folders selected": "14 फोल्डर चुने गए", "15 folders selected": "15 फोल्डर चुने गए", "16 folders selected": "16 फोल्डर चुने गए", "17 folders selected": "17 फोल्डर चुने गए", "18 folders selected": "18 फोल्डर चुने गए", "19 folders selected": "19 फोल्डर चुने गए", "20 folders selected": "20 फोल्डर चुने गए", "21 folders selected": "21 फोल्डर चुने गए", "22 folders selected": "22 फोल्डर चुने गए", "23 folders selected": "23 फोल्डर चुने गए", "24 folders selected": "24 फोल्डर चुने गए", "25 folders selected": "25 फोल्डर चुने गए", "26 folders selected": "26 फोल्डर चुने गए", "27 folders selected": "27 फोल्डर चुने गए", "28 folders selected": "28 फोल्डर चुने गए", "29 folders selected": "29 फोल्डर चुने गए", "30 folders selected": "30 फोल्डर चुने गए", "31 folders selected": "31 फोल्डर चुने गए", "32 folders selected": "32 फोल्डर चुने गए", "33 folders selected": "33 फोल्डर चुने गए", "34 folders selected": "34 फोल्डर चुने गए", "35 folders selected": "35 फोल्डर चुने गए", "36 folders selected": "36 फोल्डर चुने गए", "37 folders selected": "37 फोल्डर चुने गए", "38 folders selected": "38 फोल्डर चुने गए", "39 folders selected": "39 फोल्डर चुने गए", "40 folders selected": "40 फोल्डर चुने गए", "41 folders selected": "41 फोल्डर चुने गए", "42 folders selected": "42 फोल्डर चुने गए", "43 folders selected": "43 फोल्डर चुने गए", "44 folders selected": "44 फोल्डर चुने गए", "45 folders selected": "45 फोल्डर चुने गए", "46 folders selected": "46 फोल्डर चुने गए", "47 folders selected": "47 फोल्डर चुने गए", "48 folders selected": "48 फोल्डर चुने गए", "49 folders selected": "49 फोल्डर चुने गए", "50 folders selected": "50 फोल्डर चुने गए", "51 folders selected": "51 फोल्डर चुने गए", "52 folders selected": "52 फोल्डर चुने गए", "53 folders selected": "53 फोल्डर चुने गए", "54 folders selected": "54 फोल्डर चुने गए", "55 folders selected": "55 फोल्डर चुने गए", "56 folders selected": "56 फोल्डर चुने गए", "57 folders selected": "57 फोल्डर चुने गए", "58 folders selected": "58 फोल्डर चुने गए", "59 folders selected": "59 फोल्डर चुने गए", "60 folders selected": "60 फोल्डर चुने गए", "61 folders selected": "61 फोल्डर चुने गए", "62 folders selected": "62 फोल्डर चुने गए", "63 folders selected": "63 फोल्डर चुने गए", "64 folders selected": "64 फोल्डर चुने गए", "65 folders selected": "65 फोल्डर चुने गए", "66 folders selected": "66 फोल्डर चुने गए", "67 folders selected": "67 फोल्डर चुने गए", "68 folders selected": "68 फोल्डर चुने गए", "69 folders selected": "69 फोल्डर चुने गए", "70 folders selected": "70 फोल्डर चुने गए", "71 folders selected": "71 फोल्डर चुने गए", "72 folders selected": "72 फोल्डर चुने गए", "73 folders selected": "73 फोल्डर चुने गए", "74 folders selected": "74 फोल्डर चुने गए", "75 folders selected": "75 फोल्डर चुने गए", "76 folders selected": "76 फोल्डर चुने गए", "77 folders selected": "77 फोल्डर चुने गए", "78 folders selected": "78 फोल्डर चुने गए", "79 folders selected": "79 फोल्डर चुने गए", "80 folders selected": "80 फोल्डर चुने गए", "81 folders selected": "81 फोल्डर चुने गए"};
hindiText["I HAVE PAID — CONTINUE TO TELEGRAM"] = "पेमेंट हो गया — TELEGRAM पर जाएँ";
hindiText["Continue to Telegram to discuss and complete your order with the admin."] = "ऑर्डर पूरा करने के लिए एडमिन से Telegram पर बात करें।";
hindiText["CONTINUE TO TELEGRAM"] = "TELEGRAM पर जाएँ";
hindiText["Continue to Telegram to discuss your VIP membership with the admin."] = "VIP सदस्यता के लिए एडमिन से Telegram पर बात करें।";
hindiText["Your VIP request is ready. Continue to Telegram to discuss membership and complete the process with the admin."] = "आपका VIP अनुरोध तैयार है। आगे की बात और प्रक्रिया पूरी करने के लिए Telegram पर जाएँ।";
hindiText["Your order details are ready. Continue to Telegram to discuss and complete your order with the admin."] = "आपके ऑर्डर की जानकारी तैयार है। ऑर्डर पूरा करने के लिए Telegram पर एडमिन से बात करें।";
hindiText["Your order details will be prepared for Telegram. The admin will guide you through the next step in chat."] = "Telegram चैट में एडमिन आपको आगे की प्रक्रिया बताएगा।";
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = localStorage.getItem('studyMaterialLanguage') || 'en';
function rememberAndTranslate(root=document.body) {
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 let node;
 while((node=walker.nextNode())){
   if(!originalTextNodes.has(node)) originalTextNodes.set(node,node.nodeValue);
   const original=originalTextNodes.get(node);
   const clean=original.trim();
   if(!clean) continue;
   const translated=currentLanguage==='hi' ? hindiText[clean] : clean;
   if(translated!==undefined) {
     const leading=original.match(/^\s*/)?.[0]||'', trailing=original.match(/\s*$/)?.[0]||'';
     node.nodeValue=leading+translated+trailing;
   }
 }
 const elements=root.querySelectorAll ? root.querySelectorAll('input, video, img, button, a') : [];
 elements.forEach(el=>{
   ['placeholder','aria-label','alt'].forEach(attr=>{
     if(!el.hasAttribute(attr)) return;
     let saved=originalAttributes.get(el);
     if(!saved){saved={};originalAttributes.set(el,saved);}
     if(saved[attr]===undefined) saved[attr]=el.getAttribute(attr);
     const original=saved[attr];
     el.setAttribute(attr,currentLanguage==='hi' ? (hindiText[original]||original) : original);
   });
 });
}
function setLanguage(lang,showHint=false){
 currentLanguage=lang;
 localStorage.setItem('studyMaterialLanguage',lang);
 document.documentElement.lang=lang==='hi'?'hi':'en';
 rememberAndTranslate();
 const btn=document.getElementById('languageToggle');
 if(btn) btn.textContent=lang==='hi'?'हिंदी ✓':'हिंदी में देखें';
 const prompt=document.getElementById('languagePrompt');
 if(prompt) prompt.hidden=true;
}
(function setupLanguageSwitch(){
 const header=document.querySelector('.header');
 if(!header) return;
 const toggle=document.createElement('button');
 toggle.type='button';toggle.id='languageToggle';toggle.className='language-toggle';
 toggle.textContent=currentLanguage==='hi'?'हिंदी ✓':'हिंदी में देखें';
 toggle.addEventListener('click',()=>setLanguage(currentLanguage==='hi'?'en':'hi'));
 header.insertBefore(toggle,header.querySelector('nav'));
 const prompt=document.createElement('button');
 prompt.type='button';prompt.id='languagePrompt';prompt.className='language-prompt';
 prompt.innerHTML='<span class="language-prompt-arrow">➜</span><span>हिंदी में देखने के लिए यहाँ क्लिक करें</span>';
 prompt.addEventListener('click',()=>setLanguage('hi',true));
 document.body.appendChild(prompt);
 const firstShown=localStorage.getItem('studyMaterialHindiHintShown')==='yes';
 let promptTimer=null;
 let promptScrollHandler=null;
 function showLanguagePromptOnce(){
   if(firstShown || currentLanguage==='hi' || prompt.hidden===false) return;
   prompt.hidden=false;
   localStorage.setItem('studyMaterialHindiHintShown','yes');
   promptTimer=setTimeout(()=>{prompt.hidden=true;},5000);
   promptScrollHandler=()=>{
     prompt.hidden=true;
     clearTimeout(promptTimer);
     window.removeEventListener('scroll',promptScrollHandler);
     promptScrollHandler=null;
   };
   window.addEventListener('scroll',promptScrollHandler,{passive:true,once:true});
 }
 prompt.hidden=true;
 if(!firstShown && currentLanguage==='en' && $('ageGate')?.hidden) showLanguagePromptOnce();
 const confirm=$('confirmAdult');
 if(confirm) confirm.addEventListener('click',()=>{
   if(!firstShown && currentLanguage==='en') showLanguagePromptOnce();
 });
 rememberAndTranslate();
})();

// Re-apply translations after dynamically generated folder/cart/modal content.
const _renderForLanguage=render; render=function(){_renderForLanguage();rememberAndTranslate();};
const _openModalForLanguage=openModal; openModal=function(id){_openModalForLanguage(id);rememberAndTranslate();};
const _updateOrderForLanguage=updateOrder; updateOrder=function(){_updateOrderForLanguage();rememberAndTranslate();};
rememberAndTranslate();

hindiText["PAYMENT SCREENSHOT"] = "पेमेंट का स्क्रीनशॉट";
hindiText["OPTIONAL IF UTR IS ENTERED"] = "UTR डालने पर ज़रूरी नहीं";
hindiText["OR ENTER UTR / TRANSACTION ID"] = "या UTR / Transaction ID डालें";
hindiText["OPTIONAL IF SCREENSHOT IS SELECTED"] = "स्क्रीनशॉट चुनने पर ज़रूरी नहीं";
hindiText["Enter either a payment screenshot or your UTR / transaction ID."] = "पेमेंट का स्क्रीनशॉट अपलोड करें या UTR / Transaction ID डालें।";
hindiText["SUBMIT PAYMENT PROOF"] = "पेमेंट का प्रमाण भेजें";
hindiText["After submitting, continue to Telegram to contact the admin."] = "प्रमाण भेजने के बाद एडमिन से बात करने के लिए Telegram पर जाएँ।";
hindiText["Please upload a payment screenshot or enter the UTR."] = "कृपया पेमेंट का स्क्रीनशॉट अपलोड करें या UTR नंबर डालें।";


// Added translations for the latest text edits in index.html.
hindiText["Membership is renewable"] = "सदस्यता नवीकरण योग्य है";
hindiText["This is a separate weekly group membership — GET EXCLUSIVE access of our PREMIUM GROUP for daily EXCLUSICE and NEW videos, Active member conversations (in moderation)."] = "यह वीडियो फोल्डर खरीदने से अलग साप्ताहिक सदस्यता है — हमारे PREMIUM GROUP में रोज़ EXCLUSIVE और NEW वीडियो, साथ ही सदस्यों के बीच बातचीत (मॉडरेशन के साथ) मिलेगी।";
hindiText["Daily Exclusive New Videos"] = "रोज़ नए EXCLUSIVE वीडियो";
hindiText["Members can vote to choose which type of VIDEOS they want next"] = "सदस्य वोट करके तय कर सकते हैं कि अगली बार किस तरह के VIDEOS चाहिए";
hindiText["Inside \"OUR MOST EXCLUSIVE FOLDER\""] = "\"हमारे सबसे EXCLUSIVE FOLDER\" के अंदर";
hindiText["SUBMIT PAYMENT PROOF"] = "पेमेंट का प्रमाण भेजें";
hindiText["OPTIONAL IF SCREENSHOT IS SELECTED"] = "स्क्रीनशॉट चुनने पर ज़रूरी नहीं";
hindiText["Enter either a payment screenshot or your UTR / transaction ID."] = "पेमेंट का स्क्रीनशॉट अपलोड करें या UTR / Transaction ID डालें।";
hindiText["After submitting, continue to Telegram to contact the admin."] = "प्रमाण भेजने के बाद एडमिन से बात करने के लिए Telegram पर जाएँ।";
hindiText["Your VIP request is ready. Continue to Telegram to discuss membership and complete the process with the admin."] = "आपका VIP अनुरोध तैयार है। सदस्यता के बारे में बात करने और प्रक्रिया पूरी करने के लिए Telegram पर जाएँ।";
hindiText["Your order details are ready. Continue to Telegram to discuss and complete your order with the admin."] = "आपके ऑर्डर की जानकारी तैयार है। ऑर्डर पूरा करने के लिए Telegram पर एडमिन से बात करें।";
hindiText["Your order details will be prepared for Telegram. The admin will guide you through the next step in chat."] = "आपके ऑर्डर की जानकारी Telegram के लिए तैयार की जाएगी। एडमिन चैट में आपको आगे की प्रक्रिया बताएगा।";
hindiText["Membership: ₹49 / 7 days. Membership is renewable. Please keep conversations respectful."] = "सदस्यता: ₹49 / 7 दिन। सदस्यता नवीकरण योग्य है। ग्रुप में सभ्य भाषा का इस्तेमाल करें।";
rememberAndTranslate();
