const TB={H:{L:[[33,20.8,1.58,6.2,16.2,.57,.35,.17,1.03,.21,.29,9,.46,16,28,57,3021,1099,22],[39,23.9,1.72,7,16,.57,.35,.17,.97,.21,.30,8,.42,16,26,58,2796,954,19],[43,27.4,1.73,7.5,17.5,.58,.35,.17,.99,.21,.29,10,.41,16,27,61,3103,1021,20],[53,25.8,1.70,7.5,17.5,.64,.39,.18,1.10,.23,.34,10,.47,21,31,66,3687,1085,22],[55,29.4,1.80,7.4,17.4,.60,.37,.18,1.00,.22,.32,8,.42,19,28,62,3303,952,19]],
D:[[0,13.9,1.28,1.9,11.9,.31,.19,.13,.62,.16,.13,18,.51,13,38,30,5850,1595,85],[0,12.3,1.49,4.3,14.3,.39,.21,.14,.69,.17,.14,19,.54,15,43,32,6630,1810,181]],dc:[66,-100]},
J:{L:[[22,16.5,1.59,6.8,16.8,.56,.33,.16,.96,.20,.27,9,.45,13,25,53,2836,1031,21],[27,19.4,1.79,7.6,17.6,.56,.34,.16,.89,.20,.27,8,.41,14,23,54,2405,875,17],[31,21.9,1.78,7.6,17.6,.57,.34,.16,.93,.20,.27,8,.41,14,25,53,2616,951,19],[35,20.5,1.76,8,18,.63,.37,.17,1.01,.21,.31,9,.46,17,28,59,2796,1017,20],[37,23.5,1.85,8,18,.60,.35,.17,.92,.21,.29,8,.41,16,25,56,2520,884,18]],
D:[[0,10.4,1.36,1.8,11.8,.31,.21,.13,.62,.16,.12,18,.58,13,38,30,5850,1595,85],[0,9.4,1.44,3.7,13.7,.38,.23,.14,.68,.17,.14,19,.62,15,43,32,6510,1774,177]],dc:[66,-100]}};
const KT=['milk','dmi','nel','rup','cp','ca','p','mg','k','na','cl','cu','i','fe','mn','zn','va','vd','ve'];
const L={
fa:{ti:"جیره‌نویسی گاو شیری (NASEM 2021)",cow:"گاو",rat:"جیره",res:"نتیجه",bank:"بانک خوراک",breed:"نسل",H:"هولشتاین",J:"جرسی",par:"شکم زایمان",p1:"شکم اول",p2:"شکم دوم و بیشتر",stg:"مرحله",L:"شیردهی",D1:"خشک (۶۰–۲۱ روز پیش از زایمان)",D2:"خشک نزدیک زایمان (کمتر از ۲۱ روز)",bw:"وزن بدن (کیلو)",milk:"شیر روزانه (کیلو)",fat:"چربی شیر %",prot:"پروتین شیر %",dim:"روزهای شیردهی",bcs:"نمره وضعیت بدن (۱–۵)",add:"افزودن",srch:"جستجو...",all:"همه",f:"علوفه",c:"کنسانتره",m:"مواد معدنی",kg:"کیلو (تازه)",q:"کیفیت",q1:"۱ خوب",q2:"۲ بهتر",q3:"۳ عالی",del:"حذف",empty:"هنوز خوراکی اضافه نشده. از «بانک خوراک» اضافه کنید.",dmi:"مصرف ماده خشک (DMI)",dmip:"DMI پیش‌بینی‌شده",tot:"مجموع تازه",nutr:"ماده مغذی",val:"جیره",tgt:"هدف",st:"وضعیت",lo:"کمبود",ok:"کافی",hi:"زیاد",nelb:"انرژی تأمین‌شده (Mcal/روز)",nelr:"انرژی لازم نگهداری+شیر",milkE:"شیر قابل تولید از انرژی (کیلو)",vit:"ویتامین‌ها (باید از پریمکس تأمین شود)، در هر روز:",note:"یادداشت: نسخه ساده‌شده NASEM 2021. اهداف از جدول‌های 21-1 و 21-2 و ترکیب خوراک از جدول 19-1 و 19-3 کتاب گرفته شده است. کیفیت: ۲ = میانگین جدول، ۱ = یک انحراف معیار پایین‌تر، ۳ = یک انحراف معیار بهتر. اینها تخمین‌اند، نه آنالیز لابراتوار.",nel:"انرژی NEL (Mcal/kg)",capr:"نسبت کلسیم:فاسفور",cp:"پروتین خام %",rdp:"پروتین تجزیه‌پذیر شکمبه (RDP) %",rup:"پروتین عبوری (RUP) %",ndf:"فایبر NDF %",fndf:"NDF علوفه‌ای %",starch:"نشاسته % (حداکثر)",ca:"کلسیم %",p:"فاسفور %",mg:"مگنیزیم %",k:"پوتاشیم %",na:"سودیم %",cl:"کلر %",s:"گوگرد %",cu:"مس mg/kg",co:"کوبالت mg/kg",i:"ید mg/kg",fe:"آهن mg/kg",mn:"منگنیز mg/kg",se:"سلنیوم mg/kg",zn:"زنک mg/kg",dcad:"DCAD mEq/kg",dm:"ماده خشک % (تازه)",ash:"خاکستر %",sol:"پروتین محلول %CP",drup:"هضم RUP %",adf:"فایبر ADF %",lig:"لیگنین %",wsc:"قندهای محلول %",tfa:"اسیدهای چرب %",fat_:"چربی خام %",de:"انرژی قابل هضم DE (Mcal/kg)",mo:"مولیبدن mg/kg",dmb:"همه ارقام بر پایه ماده خشک است",advTitle:"پیشنهاد اصلاح جیره",newSrc:"باید از بانک خوراک اضافه شود",advLow:"کم است",advHi:"زیاد است",noFeed:"خوراکی برای اصلاح در جیره فعلی نیست — از بانک خوراک اضافه کنید",f_:"علوفه",c_:"کنسانتره",m_:"مواد معدنی",det:"ترکیب (کیفیت انتخاب‌شده)"},
ps:{ti:"د شودو غوا جیره لیکنه (NASEM 2021)",cow:"غوا",rat:"جیره",res:"پایله",bank:"د خوراکو بانک",breed:"نسل",H:"هولشټاین",J:"جرسي",par:"د زېږون شمېره",p1:"لومړی زېږون",p2:"دویم او ډېر",stg:"پړاو",L:"شیدې ورکوونکې",D1:"وچه (له زېږون ۶۰–۲۱ ورځې مخکې)",D2:"وچه، زېږون ته نږدې (له ۲۱ ورځو کم)",bw:"د بدن وزن (کیلو)",milk:"ورځنۍ شیدې (کیلو)",fat:"د شیدو غوړ %",prot:"د شیدو پروټین %",dim:"د شیدو ورځې",bcs:"د بدن حالت نمره (۱–۵)",add:"زیاتول",srch:"لټون...",all:"ټول",f:"واښه",c:"کنسانتریت",m:"معدني مواد",kg:"کیلو (تازه)",q:"کیفیت",q1:"۱ ښه",q2:"۲ غوره",q3:"۳ عالي",del:"ړنګول",empty:"لا تر اوسه خوراک نه دی زیات شوی. له «د خوراکو بانک» څخه یې زیات کړئ.",dmi:"د وچو موادو مصرف (DMI)",dmip:"اټکل شوی DMI",tot:"ټول تازه",nutr:"مغذي مواد",val:"جیره",tgt:"موخه",st:"حالت",lo:"کمښت",ok:"بسنه",hi:"ډېر",nelb:"برابره شوې انرژي (Mcal/ورځ)",nelr:"د ساتنې+شیدو لپاره اړینه انرژي",milkE:"له انرژۍ نه د تولید وړ شیدې (کیلو)",vit:"ویټامینونه (باید له پریمکس څخه برابر شي)، په ورځ کې:",note:"یادښت: د NASEM 2021 ساده شوې بڼه. موخې د کتاب له 21-1 او 21-2 جدولونو او د خوراکو جوړښت له 19-1 او 19-3 جدولونو اخیستل شوي. کیفیت: ۲ = د جدول منځنی، ۱ = یو معیاري انحراف ښکته، ۳ = یو معیاري انحراف غوره. دا اټکلونه دي، د لابراتوار تحلیل نه دی.",nel:"انرژي NEL (Mcal/kg)",capr:"د کلسیم:فاسفورس نسبت",cp:"خام پروټین %",rdp:"د خېټې تجزیه کېدونکی پروټین (RDP) %",rup:"تېرېدونکی پروټین (RUP) %",ndf:"فایبر NDF %",fndf:"د واښو NDF %",starch:"نشایسته % (اعظمي)",ca:"کلسیم %",p:"فاسفورس %",mg:"مګنیزیم %",k:"پوټاشیم %",na:"سوډیم %",cl:"کلورین %",s:"ګوګړ %",cu:"مس mg/kg",co:"کوبالټ mg/kg",i:"اوډین mg/kg",fe:"اوسپنه mg/kg",mn:"منګنیز mg/kg",se:"سیلینیم mg/kg",zn:"زنک mg/kg",dcad:"DCAD mEq/kg",dm:"وچه ماده % (تازه)",ash:"ايرې %",sol:"منحل پروټین %CP",drup:"د RUP هضم %",adf:"فایبر ADF %",lig:"لیګنین %",wsc:"منحل بوره %",tfa:"غوړې تېزابې %",fat_:"خام غوړ %",de:"هضمېدونکې انرژي DE (Mcal/kg)",mo:"مولیبډینم mg/kg",dmb:"ټول ارقام د وچې مادې پر بنسټ دي",advTitle:"د جیرې د اصلاح وړاندیز",newSrc:"باید له خوراکو بانک څخه زیات شي",advLow:"لږ دی",advHi:"ډېر دی",noFeed:"په اوسنۍ جیره کې د اصلاح لپاره خوراک نشته — له خوراکو بانک څخه زیات کړئ",f_:"واښه",c_:"کنسانتریت",m_:"معدني مواد",det:"جوړښت (ټاکلې کیفیت)"},
en:{ti:"Dairy Cow Ration (NASEM 2021)",cow:"Cow",rat:"Ration",res:"Result",bank:"Feed Bank",breed:"Breed",H:"Holstein",J:"Jersey",par:"Parity",p1:"First lactation",p2:"Second or later",stg:"Stage",L:"Lactating",D1:"Dry (60–21 d prepartum)",D2:"Dry close-up (<21 d)",bw:"Body weight (kg)",milk:"Milk (kg/d)",fat:"Milk fat %",prot:"Milk protein %",dim:"Days in milk",bcs:"Body condition score (1–5)",add:"Add",srch:"Search...",all:"All",f:"Forage",c:"Concentrate",m:"Minerals",kg:"kg as fed",q:"Quality",q1:"1 Good",q2:"2 Better",q3:"3 Excellent",del:"Remove",empty:"No feeds yet. Add from the Feed Bank.",dmi:"Dry matter intake (DMI)",dmip:"Predicted DMI",tot:"Total as fed",nutr:"Nutrient",val:"Ration",tgt:"Target",st:"Status",lo:"Low",ok:"OK",hi:"High",nelb:"Energy supplied (Mcal/d)",nelr:"Energy needed, maintenance+milk",milkE:"Milk supported by energy (kg)",vit:"Vitamins (supply via premix), per day:",note:"Note: simplified NASEM 2021. Targets come from book Tables 21-1/21-2; feed composition from Tables 19-1 and 19-3. Quality: 2 = table mean, 1 = one SD lower, 3 = one SD better. These are estimates, not laboratory analysis.",nel:"NEL (Mcal/kg)",capr:"Ca:P ratio",cp:"Crude protein %",rdp:"RDP %",rup:"RUP %",ndf:"NDF %",fndf:"Forage NDF %",starch:"Starch % (max)",ca:"Calcium %",p:"Phosphorus %",mg:"Magnesium %",k:"Potassium %",na:"Sodium %",cl:"Chloride %",s:"Sulfur %",cu:"Copper mg/kg",co:"Cobalt mg/kg",i:"Iodine mg/kg",fe:"Iron mg/kg",mn:"Manganese mg/kg",se:"Selenium mg/kg",zn:"Zinc mg/kg",dcad:"DCAD mEq/kg",dm:"DM % as fed",ash:"Ash %",sol:"Soluble protein %CP",drup:"RUP digestibility %",adf:"ADF %",lig:"Lignin %",wsc:"Water-soluble carb. %",tfa:"Fatty acids %",fat_:"Crude fat %",de:"Digestible energy DE (Mcal/kg)",mo:"Molybdenum mg/kg",dmb:"All values are on a dry-matter basis",advTitle:"Ration correction suggestions",newSrc:"not yet in ration — add from Feed Bank",advLow:"is low",advHi:"is high",noFeed:"No feed in the current ration can fix this — add one from the Feed Bank",f_:"forage",c_:"concentrate",m_:"mineral",det:"Composition (selected quality)"}};
Object.assign(L.fa,{auto:"محاسبه خودکار جیره",pr:"قیمت هر کیلو",cur:"واحد پول",hint:"خوراک‌هایی را که دارید یا می‌توانید بخرید از «بانک خوراک» اضافه کنید و قیمتشان را بنویسید (خالی = رایگان). اپ خودش از میان آن‌ها ارزان‌ترین جیره‌ای را می‌سازد که نیاز گاو را پوره کند و مقدار هر خوراک را می‌گوید. برای مواد معدنی (نمک، سنگ آهک، فاسفات، منبع کوبالت، ید، سلنیوم، مس، زنک...) هم از بانک اضافه کنید. مقدار منابع کم‌مصرف (Co، I، Se...) بسیار کم است و باید در پریمکس مخلوط شود.",caps:"حدود مصرف (مثلاً اوره ≤ ۱٪ ماده خشک، هر خوراک ≤ ۵۵٪، چربی کل ≤ ۶.۵٪) عمومی‌اند و از کتاب نیستند.",done:"جیره محاسبه شد ✓",unmet:"این نیازها تأمین نشد (خوراک یا منبع مناسب اضافه کنید):",cost:"هزینه روزانه",costm:"هزینه هر کیلو شیر",costd:"هزینه هر کیلو ماده خشک",gr:"گرام (تازه)"});
Object.assign(L.ps,{gr:"ګرام (تازه)",auto:"د جیرې اتومات محاسبه",pr:"د یو کیلو بیه",cur:"د پیسو واحد",hint:"هغه خوراکونه چې لرئ یا یې پېرلی شئ له «د خوراکو بانک» څخه زیات کړئ او بیه یې ولیکئ (خالي = وړیا). اپ پخپله له دوی څخه تر ټولو ارزانه جیره چې د غوا اړتیا پوره کړي جوړوي او د هر خوراک اندازه وايي. معدني مواد (مالګه، د چونې ډبره، فاسفیټ، د کوبالټ، اوډین، سیلینیم، مس، زنک سرچینې...) هم له بانک څخه زیات کړئ. د لږ مصرف سرچینو (Co، I، Se...) اندازه ډېره لږه ده او باید په پریمکس کې ګډه شي.",caps:"د مصرف حدونه (لکه یوریا ≤ ۱٪ وچه ماده، هر خوراک ≤ ۵۵٪، ټول غوړ ≤ ۶.۵٪) عمومي دي او د کتاب نه دي.",done:"جیره محاسبه شوه ✓",unmet:"دا اړتیاوې نه شوې پوره (مناسب خوراک یا سرچینه زیاته کړئ):",cost:"ورځنی لګښت",costm:"د یو کیلو شیدو لګښت",costd:"د یو کیلو وچې مادې لګښت"});
Object.assign(L.en,{gr:"grams as fed",auto:"Auto-formulate ration",pr:"Price per kg",cur:"Currency",hint:"Add the feeds you have or can buy from the Feed Bank and enter their prices (blank = free). The app builds the cheapest ration from them that meets the cow's needs and tells you how much of each to feed. Also add mineral sources (salt, limestone, phosphate, Co, I, Se, Cu, Zn sources...). Trace sources (Co, I, Se...) come out in tiny amounts and must go through a premix.",caps:"Inclusion limits (e.g. urea ≤ 1% of DM, any feed ≤ 55%, total fat ≤ 6.5%) are general practice, not from the book.",done:"Ration calculated ✓",unmet:"Could not meet (add a suitable feed or source):",cost:"Daily cost",costm:"Cost per kg milk",costd:"Cost per kg DM"});
// feed names (id -> [Dari, Pashto])
const FN={F1:["پودر یونجه","د یونجې پوډر"],F93:["یونجه (خشک، نیمه‌رس)","یونجه (وچه، منځنۍ پخه)"],F91:["یونجه (خشک، جوان)","یونجه (وچه، ځوانه)"],F92:["یونجه (خشک، رسیده)","یونجه (وچه، پخه)"],F94:["سیلاژ یونجه (جوان)","د یونجې سایلج (ځوان)"],F95:["سیلاژ یونجه (نیمه‌رس)","د یونجې سایلج (منځنی)"],F48:["سیلاژ جواری","د جوارو سایلج"],F49:["سیلاژ جواری (نارس)","د جوارو سایلج (ناپخه)"],F50:["سیلاژ جواری (رسیده)","د جوارو سایلج (پخه)"],F176:["کاه گندم","د غنمو کاه"],F170:["گندم آسیاب‌شده","غنم (ایشل شوي)"],F169:["سبوس گندم","د غنمو سبوس"],F173:["پسمانده آرد گندم (میدلینگ)","د غنمو میدلینګ"],F44:["جواری دانه (آرد متوسط)","جوار (منځنی وريت)"],F1070:["جواری دانه (آرد نرم)","جوار (نرم وريت)"],F8:["جو آسیاب‌شده","اوربشې (وريت شوي)"],F9:["علوفه جو","د اوربشو واښه"],F102:["جودر (یولاف) پهن‌شده","جودر (پرچ شوی)"],F103:["علوفه جودر","د جودرو واښه"],F132:["چاودار","چاودار"],F137:["سورگم آسیاب‌شده","سورګم (وريت شوی)"],F163:["تریتیکاله","ټریټیکال"],F123:["برنج","وریجې"],F118:["سبوس برنج","د وریجو سبوس"],F120:["پوست برنج","د وریجو پوټکی"],F58:["کنجاره پنبه‌دانه","د پنبې دانې کنجاره"],F56:["پنبه‌دانه کامل","پنبه‌دانه (بشپړه)"],F57:["پوست پنبه‌دانه","د پنبې دانې پوټکی"],F134:["کنجاره سویا (۴۸٪)","د سویا کنجاره (۴۸٪)"],F145:["کنجاره سویا (اکسپلر)","د سویا کنجاره (اکسپلر)"],F148:["سویا خام","خام سویا"],F149:["سویا برشته","وريتړل شوی سویا"],F144:["پوست سویا","د سویا پوټکی"],F157:["کنجاره آفتاب‌گردان","د لمرګلې کنجاره"],F158:["تخم آفتاب‌گردان","د لمرګلې تخم"],F111:["کنجاره بادام زمینی","د زمکني بادام کنجاره"],F14:["تفاله چغندر (خشک)","د چغندر پلپ (وچ)"],F16:["تفاله چغندر (تر)","د چغندر پلپ (لوند)"],F101:["شیره (ملاس)","شیره (مولاس)"],F168:["یوریا","یوریا"],F21:["تفاله جو مالت (خشک)","د اوربشو پاتې (وچ)"],F40:["گلوتن جواری (خشک)","د جوارو ګلوټین (وچ)"],F42:["پودر گلوتن جواری","د جوارو ګلوټین پوډر"],F75:["پودر ماهی","د کبانو پوډر"],F96:["کتان","کتان"],F99:["علوفه ارزن","د ارزنو واښه"],F138:["علوفه سورگم","د سورګم واښه"],F171:["علوفه گندم","د غنمو واښه"],F177:["آب پنیر (خشک)","د پنیر اوبه (وچې)"],F73:["چربی (پیه)","غوړ (پیه)"],F71:["روغن سویا","د سویا غوړ"],F1017:["نمک (کلورید سودیم)","مالګه (سوډیم کلوراید)"],F1013:["سنگ آهک آسیاب‌شده","د چونې ډبره (وريت)"],F1007:["دای‌کلسیم فاسفات","ډای کلسیم فاسفیټ"],F1020:["اکسید مگنیزیم","مګنیزیم اکسایډ"],F1033:["جوش شیرین (بای‌کربنات سودیم)","د سوډیم بای کاربونیټ"],F1044:["سلفات مس","د مسو سلفیټ"],F1038:["کاربونات کوبالت","د کوبالټ کاربونیټ"],F1031:["یدید پوتاشیم","د پوتاشیم آیوډایډ"],F1057:["سلفات منگنیز","د منګنیز سلفیټ"],F1067:["سلفات زنک","د زنک سلفیټ"],F1061:["سلنایت سودیم","سوډیم سیلینایټ"],F1011:["پودر استخوان","د هډوکو پوډر"]};
const S={lg:localStorage.getItem('lg')||'fa',tab:'cow',cat:'all',q:'',open:null,cur:'AFN',msg:'',cow:{br:'H',par:2,stg:'L',bw:600,milk:30,fat:3.7,prot:3.2,dim:100,bcs:3},rat:[]};
try{Object.assign(S,JSON.parse(localStorage.getItem('st')||'{}'),{tab:'cow',lg:localStorage.getItem('lg')||'fa'})}catch(e){}
const T=k=>(L[S.lg]||L.fa)[k]||k,F=id=>FEEDS.find(f=>f.id===id),fname=f=>(FN[f.id]&&FN[f.id][S.lg=='fa'?0:S.lg=='ps'?1:9])||f.n;
function sanitizeState(){
 if(!L[S.lg])S.lg='fa';
 if(!S.cow||typeof S.cow!=='object')S.cow={};
 const defaults={br:'H',par:2,stg:'L',bw:600,milk:30,fat:3.7,prot:3.1,bcs:3,dim:100};
 for(const [k,v] of Object.entries(defaults)){
  if(S.cow[k]===undefined)S.cow[k]=v;
 }
 if(!['H','J'].includes(S.cow.br))S.cow.br='H';
 if(!['L','D1','D2'].includes(S.cow.stg))S.cow.stg='L';
 for(const [k,min,max] of [['bw',100,1200],['milk',0,100],['fat',1,10],['prot',1,7],['bcs',1,5],['dim',0,700]]){
  const v=Number(S.cow[k]);S.cow[k]=Number.isFinite(v)?Math.min(max,Math.max(min,v)):defaults[k];
 }
 S.cow.par=S.cow.par===1?1:2;
 if(!Array.isArray(S.rat))S.rat=[];
 S.rat=S.rat.filter(x=>x&&F(x.id)&&Number.isFinite(Number(x.kg))&&Number(x.kg)>=0).slice(0,300)
  .map(x=>({id:x.id,kg:Math.min(10000,Number(x.kg)),t:[1,2,3].includes(Number(x.t))?Number(x.t):2,pr:Number.isFinite(Number(x.pr))&&Number(x.pr)>=0?String(x.pr):''}));
 if(typeof S.cur!=='string')S.cur='AFN';
 S.cur=S.cur.slice(0,12).replace(/[<>"'&]/g,'');
}
sanitizeState();
const save=()=>{try{localStorage.setItem('st',JSON.stringify({cow:S.cow,rat:S.rat,cur:S.cur}));localStorage.setItem('lg',S.lg)}catch(e){}};
// Quality tiers reflect the book's own Mean +/- SD spread for each feed (Table 19-1), not separate lab data:
// tier 3 (Excellent) = the better end of that spread, tier 2 (Better) = book Mean, tier 1 (Good) = the lower end.
// POS: higher value = better feed quality (moves up with tier). NEG: higher value = lower quality (moves down with tier).
const POS=['dm','cp','sol','drup','ivndf','starch','wsc','tfa','fat','de','ca','p','mg','k','na','cl','s','cu','fe','mn','zn','mo'];
const NEG=['ash','adip','ndip','adf','ndf','lig'];
function adj(f,tier){
 const s=tier-2,g=Object.assign({},f);if(!s)return g;
 POS.forEach(k=>{if(f[k]!=null&&f[k+'_sd']!=null)g[k]=Math.max(0,f[k]+s*f[k+'_sd'])});
 NEG.forEach(k=>{if(f[k]!=null&&f[k+'_sd']!=null)g[k]=Math.max(0,f[k]-s*f[k+'_sd'])});
 // DE has no SD in the book (it's a single derived value per feed); recompute it from the adjusted
 // fiber/protein/fat using the book's own Eq. 3-8 partial-derivative relationship instead of guessing.
 if(f.de!=null&&f.ndf!=null&&f.cp!=null){
  const dN=g.ndf-f.ndf,dC=g.cp-f.cp,dF=(g.fat||f.fat||0)-(f.fat||0);
  const dn=(f.ivndf||45)/100,dcp=1-(f.rup||30)/100*(1-(f.drup||75)/100);
  g.de=Math.max(0,f.de+0.042*dn*dN+0.0565*dcp*dC+0.0423*0.9*(-dN-dC)+0.0092*dF);
 }
 return g}
function simplex(cons,cost,n){const m=cons.length,T=cons.map(k=>{const r=k.a.map(v=>v/k.b);return r}),c=cost.slice(),info=[],B=[],rhs=cons.map(()=>1);
 const add=(i,v,cc,tag)=>{T.forEach(r=>r.push(0));T[i][T[i].length-1]=v;c.push(cc);info.push({i,tag});return c.length-1};
 cons.forEach((k,i)=>{if(k.t=='ge'){B[i]=add(i,1,k.pen,'d');add(i,-1,0,'s')}else if(k.t=='le'){B[i]=add(i,1,0,'s');add(i,-1,k.pen,'e')}else if(k.t=='eq'){B[i]=add(i,1,k.pen,'d');add(i,-1,k.pen,'e')}else B[i]=add(i,1,0,'s')});
 const N=c.length;let it=0;
 while(it++<10000){let j=-1,bj=-1e-7;for(let q=0;q<N;q++){let rc=c[q];for(let i=0;i<m;i++)rc-=c[B[i]]*T[i][q];if(rc<bj){bj=rc;j=q;if(it>2000)break}}
  if(j<0)break;let r=-1,best=1e18;for(let i=0;i<m;i++)if(T[i][j]>1e-7){const q=rhs[i]/T[i][j];if(q<best-1e-12||(Math.abs(q-best)<=1e-12&&B[i]<B[r])){best=q;r=i}}
  if(r<0)break;const pv=T[r][j];for(let q=0;q<N;q++)T[r][q]/=pv;rhs[r]/=pv;
  for(let i=0;i<m;i++)if(i!=r&&Math.abs(T[i][j])>1e-12){const f=T[i][j];for(let q=0;q<N;q++)T[i][q]-=f*T[r][q];rhs[i]-=f*rhs[r]}B[r]=j}
 const x=Array(N).fill(0);B.forEach((b,i)=>x[b]=rhs[i]);return{x:x.slice(0,n),dev:cons.map((k,i)=>{let d=0;info.forEach((f,q)=>{if(f.i==i&&f.tag=='d')d+=x[n+q]});return d})}}
// Each entry: [regex test, family key, cap as fraction of D]. Order matters (first match wins),
// same order used by both capOf (ceiling) and famOf (grouping key for the floor logic below).
const FAMS=[
 [/Urea/i,'urea',.01],
 [/Rumen-Protected/i,'rpfat',.03],
 [/Sodium chloride/i,'salt',.15],
 [/Molasses/i,'molasses',.08],
 [/^Fat,|Tallow|Soybean Oil|Calcium Soaps|Crude fat/i,'fat',.04],
 [/Soybean Meal/i,'soymeal',.22],
 [/Cottonseed Meal|Sunflower Meal|Canola Meal|Rapeseed Meal|Peanut Meal/i,'oilmeal',.16],
 [/Whole Cottonseed|Cottonseed, Whole/i,'wholecs',.15],
 [/Corn Gluten|Distillers|DDGS/i,'byprod',.20],
 [/Bran|Middlings|Mill ?Run|Hulls|Pulp/i,'byprod2',.20],
 [/Straw/i,'straw',.15],
 [/Hay/i,'hay',.35],
 [/Silage/i,'silage',.55],
];
function capOf(f,D){const n=f.n;
 if(f.c=='m')return(f.co>1e3||f.i>1e3||f.se>1e3||f.cu>1e3||f.zn>1e3||f.mn>1e3||f.fe>1e3)?.05*D:.3*D;
 for(const[re,,frac]of FAMS)if(re.test(n))return frac*D;
 if(f.c!='f'&&/Grain|Barley|Sorghum|Oats|Triticale|^Rye|Wheat(?!.*Bran)/i.test(n))return .30*D;
 return .55*D}
function famOf(f){const n=f.n;
 if(f.c=='m')return null;
 for(const[re,key]of FAMS)if(re.test(n))return key;
 if(f.c!='f'&&/Grain|Barley|Sorghum|Oats|Triticale|^Rye|Wheat(?!.*Bran)/i.test(n))return 'grain';
 return f.c=='f'?'otherforage':'otherconc';}
function auto(){sanitizeState();if(!S.rat.length){S.msg=T('empty');return}
 const STD=['F1017','F1013','F1007','F1020','F1033','F1067','F1044','F1038','F1031','F1057','F1061'];
 STD.forEach(id=>{if(!S.rat.some(x=>x.id==id))S.rat.push({id,kg:0,t:2,pr:''})});
 const t=target(),D=t.dmi,c=S.cow,dry=c.stg!='L',n=S.rat.length,fs=S.rat.map(x=>adj(F(x.id),x.t)),A=k=>fs.map(f=>f[k]||0),
  cap=fs.map(f=>capOf(f,D)),cs=S.rat.map((x,i)=>(+x.pr||0)*100/fs[i].dm),M=20*D*(Math.max(...cs)+1);let gu=.53,res,cons,prevGu=null;
 for(let pass=0;pass<8;pass++){
  if(prevGu!=null&&Math.abs(gu-prevGu)<0.003)break;
  prevGu=gu;
  cons=[];const sc=a=>a.map((v,i)=>v*cap[i]),G=(key,a,b,p)=>cons.push({key,a:sc(a),b,t:'ge',pen:p||M}),U=(key,a,b)=>cons.push({key,a:sc(a),b,t:'le',pen:M*.3});
  cons.push({key:'dm',a:sc(fs.map(()=>1)),b:D,t:'eq',pen:M*5});
  G('nel',A('de'),D*(t.nel/.66+gu));G('cp',A('cp'),D*t.cp);G('rup',fs.map(f=>(f.cp||0)*(f.rup||0)/100),D*t.rup);G('rdp',fs.map(f=>(f.cp||0)*(1-(f.rup||0)/100)),D*10);
  G('ndf',A('ndf'),D*25);G('fndf',fs.map(f=>/[fF]/.test(f.c)?f.ndf||0:0),D*19);
  if(fs.some(f=>f.c=='f')){
   // Forage:concentrate split by milk yield - common dairy-industry practice layered on top of the
   // book's own NDF minimums (NASEM itself sets no fixed F:C ratio, only minimum fiber).
   const fTarget = dry?.65 : c.milk<=30?.55 : c.milk<=50?.50 : .45;
   const forAr=fs.map(f=>f.c=='f'?1:0);
   G('forage',forAr,D*(fTarget-.03),M*.4);
   U('forage_hi',forAr,D*(fTarget+.03));
  }
  U('starch',A('starch'),D*(dry?20:30));U('fat',A('fat'),D*6.5);if(!dry)U('ndf_',A('ndf'),D*33);
  [['ca',t.ca],['p',t.p],['mg',t.mg],['k',t.k],['na',t.na],['cl',t.cl],['s',.2],['cu',t.cu],['zn',t.zn],['mn',t.mn],['fe',t.fe],['co',.2],['i',t.i],['se',.3]].forEach(([k,v])=>G(k,A(k),D*v));
  [['ca',1.5*t.ca],['p',1.4*t.p],['mg',1.8*t.mg],['na',2.5*t.na],['se',.5],['co',1],['i',5],['cu',2*t.cu],['zn',2*t.zn],['mn',2*t.mn]].forEach(([k,v])=>U(k+'_',A(k),D*v));
  if(c.stg!='D2')G('dcad',fs.map(f=>435*(f.na||0)+256*(f.k||0)-282*(f.cl||0)-624*(f.s||0)),D*(c.stg=='L'?({H:140,J:125})[c.br]:66));
  fs.forEach((f,i)=>cons.push({key:'cap',a:fs.map((_,j)=>j==i?1:0),b:1,t:'bd'}));
  {const fam={};fs.forEach((f,i)=>{const k=famOf(f);if(k)(fam[k]=fam[k]||[]).push(i)});
   fs.forEach((f,i)=>{const k=famOf(f);if(!k)return; // minerals excluded - they must stay at the exact small amount needed
    const grouped=(fam[k]||[]).length>=2;
    const floor=grouped?Math.min(cap[i]*0.25,0.07*D):Math.min(cap[i]*0.15,0.03*D);
    if(floor>1e-6)cons.push({key:'blend',a:sc(fs.map((_,j)=>j==i?1:0)),b:floor,t:'ge',pen:M*.15})});}
  res=simplex(cons,cs.map((v,i)=>v*cap[i]),n);
  S.rat.forEach((x,i)=>{const kg=res.x[i]*cap[i]*100/fs[i].dm;x.kg=kg<1e-6?0:+kg.toFixed(kg<1?6:2)});
  const o=calc();if(!o)break;gu=o.gas+o.ue}
 const bad=cons.map((k,i)=>res.dev[i]>2e-3&&k.key!='cap'&&k.key!='dm'?k.key:null).filter(Boolean);
 S.msg=T('done')+(bad.length?'<br><b>'+T('unmet')+'</b> '+bad.map(k=>T(k)).join('، '):'')}
function target(){sanitizeState();const c=S.cow,b=TB[c.br];let r;
 if(c.stg=='L'){const a=b.L,m=c.milk;let i=0;while(i<a.length-1&&a[i+1][0]<=m)i++;const lo=a[i],hi=a[Math.min(i+1,a.length-1)];
  const w=hi[0]==lo[0]?0:Math.min(1,Math.max(0,(m-lo[0])/(hi[0]-lo[0])));r=lo.map((v,j)=>v+(hi[j]-v)*w)}
 else r=b.D[c.stg=='D1'?0:1];
 const o={};KT.forEach((k,j)=>o[k]=r[j]);
 if(c.stg=='L'){const mE=c.milk*(9.29*c.fat/100+5.85*c.prot/100+3.95*.0485),pa=c.par>1?1:0; // Eq 2-1 & 3-14b
  o.dmi=(3.7+pa*5.7+.305*mE+.022*c.bw+(-.689-1.87*pa)*c.bcs)*(1-(.212+pa*.136)*Math.exp(-.053*c.dim));o.mE=mE}
 return o}
function calc(){sanitizeState();let D=0,A=0;const R=S.rat.map(x=>{const f=adj(F(x.id),x.t),dm=x.kg*f.dm/100;D+=dm;A+=x.kg;return{f,dm,x}});if(!D)return null;
 const a=k=>R.reduce((s,r)=>s+(r.f[k]||0)*r.dm,0)/D,o={D,A};
 ['cp','ndf','starch','fat','tfa','ca','p','mg','k','na','cl','s','cu','fe','mn','zn','co','i','se','de'].forEach(k=>o[k]=a(k));
 o.rup=R.reduce((s,r)=>s+(r.f.cp||0)*(r.f.rup||0)/100*r.dm,0)/D;o.rdp=o.cp-o.rup;
 o.fndf=R.reduce((s,r)=>s+(/[fF]/.test(r.f.c)?(r.f.ndf||0)*r.dm:0),0)/D;
 const dN=R.reduce((s,r)=>s+(r.f.ndf||0)*(r.f.ivndf||45)/100*r.dm,0)/D,
  adCP=R.reduce((s,r)=>s+(r.f.cp||0)/100*(1-(r.f.rup||0)/100*(1-(r.f.drup||75)/100))*r.dm,0)-.0156*D;
 const c=S.cow,mCP=c.stg=='L'?c.milk*c.prot/100/.945:0,UN=Math.max(0,(adCP-mCP)*1000/6.25);
 o.gas=(.294*D-.347*(o.tfa)+.0409*dN)/D;o.ue=.0146*UN/D;o.me=o.de-o.gas-o.ue;o.nel=.66*o.me; // Eq 3-8..3-12
 o.dcad=435*o.na+256*o.k-282*o.cl-624*o.s;o.R=R;return o}
const lb=x=>x=='low'?'lo':x,st=(v,t,hi)=>v<t*.95?'low':v>t*hi?'hi':'ok';
function rows(o,t){const c=S.cow,d=c.stg!='L',mn=[['nel',o.nel,t.nel,2,1.15],['cp',o.cp,t.cp,1,1.15],['rdp',o.rdp,10,1,1.3],['rup',o.rup,t.rup,1,1.4],['ndf',o.ndf,25,1,1.32],['fndf',o.fndf,19,1,1.9],
 ['ca',o.ca,t.ca,2,1.6],['p',o.p,t.p,2,1.5],['mg',o.mg,t.mg,2,1.8],['k',o.k,t.k,2,2.2],['na',o.na,t.na,2,3],['cl',o.cl,t.cl,2,3],['s',o.s,.2,2,1.6],['cu',o.cu,t.cu,1,4],['co',o.co,.2,2,10],['i',o.i,t.i,2,10],['fe',o.fe,t.fe,0,20],['mn',o.mn,t.mn,0,4],['se',o.se,.3,2,5],['zn',o.zn,t.zn,0,3]];
 const h=mn.map(([k,v,tg,dp,hi])=>`<tr><td>${T(k)}</td><td>${v.toFixed(dp)}</td><td>≥ ${tg.toFixed(dp)}</td><td><span class="s ${st(v,tg,hi)}">${T(lb(st(v,tg,hi)))}</span></td></tr>`);
 const ub=d?20:30,sx=o.starch>ub?'hi':'ok';h.splice(6,0,`<tr><td>${T('starch')}</td><td>${o.starch.toFixed(1)}</td><td>≤ ${ub}</td><td><span class="s ${sx}">${T(lb(sx))}</span></td></tr>`);
 if(c.stg!='D2'){const dc=TB[c.br].dc[0]&&(c.stg=='L'?({H:140,J:125})[c.br]:66),sd=st(o.dcad,dc,9);h.push(`<tr><td>${T('dcad')}</td><td>${o.dcad.toFixed(0)}</td><td>≥ ${dc}</td><td><span class="s ${sd}">${T(lb(sd))}</span></td></tr>`)}
 const cpr=o.p>0?o.ca/o.p:0,cprS=cpr<1.3?'low':cpr>2.4?'hi':'ok';
 h.push(`<tr><td>${T('capr')}</td><td>${cpr.toFixed(2)}:1</td><td>1.4–2.2:1</td><td><span class="s ${cprS}">${T(lb(cprS))}</span></td></tr>`);
 return h.join('')}
// NUT: [key, unit('pct'=%DM, 'mg'=mg/kg DM, 'mcal'=Mcal/kg DM), per-feed content rate function]
const NUT=[['nel','mcal',f=>f.de],['cp','pct',f=>f.cp],
 ['rdp','pct',f=>(f.cp!=null&&f.rup!=null)?f.cp*(1-f.rup/100):null],
 ['rup','pct',f=>(f.cp!=null&&f.rup!=null)?f.cp*f.rup/100:null],
 ['ndf','pct',f=>f.ndf],['fndf','pct',f=>f.c=='f'?f.ndf:null],['starch','pct',f=>f.starch],
 ['ca','pct',f=>f.ca],['p','pct',f=>f.p],['mg','pct',f=>f.mg],['k','pct',f=>f.k],
 ['na','pct',f=>f.na],['cl','pct',f=>f.cl],['s','pct',f=>f.s],
 ['cu','mg',f=>f.cu],['co','mg',f=>f.co],['i','mg',f=>f.i],['fe','mg',f=>f.fe],
 ['mn','mg',f=>f.mn],['se','mg',f=>f.se],['zn','mg',f=>f.zn]];
// Well-known concentrated source to fall back on when nothing already in the ration can fix a
// shortfall without an unreasonable amount (e.g. bulk forage can't realistically cover a Zn gap).
const KNOWN={ca:'F1013',p:'F1007',mg:'F1020',na:'F1017',cl:'F1017',cu:'F1044',co:'F1038',i:'F1031',
 se:'F1061',mn:'F1057',zn:'F1067',cp:'F134',rup:'F134',rdp:'F134',nel:'F44',ndf:'F176',fndf:'F176'};
function gramsFor(rv,f,diff,unit,o,curKg,isHi){
 const gapAbs=unit=='pct'?diff/100*o.D:diff*o.D;
 const kgDM=unit=='pct'?gapAbs/(rv/100):gapAbs/rv;
 let g=kgDM/(f.dm/100)*1000;
 if(isHi)g=Math.min(g,curKg*1000*0.95);
 return Math.max(0,g)}
function advise(o,t){const c=S.cow,d=c.stg!='L',R=o.R,items=[];
 const push=(key,v,tg,hiMul,isMax)=>{const status=isMax?(v>tg?'hi':'ok'):st(v,tg,hiMul);if(status!='ok')items.push({key,v,tg,status})};
 push('nel',o.nel,t.nel,1.15);push('cp',o.cp,t.cp,1.15);push('rdp',o.rdp,10,1.3);push('rup',o.rup,t.rup,1.4);
 push('ndf',o.ndf,25,1.32);push('fndf',o.fndf,19,1.9);push('starch',o.starch,d?20:30,1,true);
 push('ca',o.ca,t.ca,1.6);push('p',o.p,t.p,1.5);push('mg',o.mg,t.mg,1.8);push('k',o.k,t.k,2.2);
 push('na',o.na,t.na,3);push('cl',o.cl,t.cl,3);push('s',o.s,.2,1.6);
 push('cu',o.cu,t.cu,4);push('co',o.co,.2,10);push('i',o.i,t.i,10);push('fe',o.fe,t.fe,20);
 push('mn',o.mn,t.mn,4);push('se',o.se,.3,5);push('zn',o.zn,t.zn,3);
 if(!items.length)return'';
 const cards=items.map(it=>{
  const meta=NUT.find(x=>x[0]==it.key);if(!meta)return'';const[,unit,rate]=meta;
  const diff=it.status=='low'?(it.tg-it.v):(it.v-it.tg);
  let best=null,bestScore=-1;
  R.forEach(r=>{const rv=rate(r.f);if(rv==null||rv<=0)return;
   if(it.status=='hi'&&r.x.kg<=0)return;
   const score=it.status=='low'?rv:rv*r.dm;
   if(score>bestScore){bestScore=score;best={r,rv}}});
  let grams=0,srcF=null,srcKg=0,inRation=true;
  if(best){grams=gramsFor(best.rv,best.r.f,diff,unit,o,best.r.x.kg,it.status=='hi');srcF=best.r.f;srcKg=best.r.x.kg}
  const sane=unit=='mg'?1500:8000; // g as-fed - beyond this, a bulk feed is the wrong tool
  if(it.status=='low'&&(!best||grams>sane)&&KNOWN[it.key]){
   const kf=F(KNOWN[it.key]);
   if(kf){const kadj=adj(kf,2),rv2=NUT.find(x=>x[0]==it.key)[2](kadj);
    if(rv2){const g2=gramsFor(rv2,kadj,diff,unit,o,0,false);
     if(!best||g2<grams){grams=g2;srcF=kadj;srcKg=0;inRation=false}}}}
  let actionTxt;
  if(srcF){
   const rnd=grams<20?Math.round(grams):grams<200?Math.round(grams/5)*5:Math.round(grams/10)*10;
   const gTxt=grams>=1000?(grams/1000).toFixed(2)+' kg':(grams<1?grams.toFixed(2):rnd)+' g';
   const pool=srcF.c=='f'?T('f_'):srcF.c=='m'?T('m_'):T('c_');
   actionTxt=`${it.status=='low'?'+':'−'} ${gTxt} — ${fname(srcF)} (${pool})${inRation?'':' · '+T('newSrc')}`;
  } else actionTxt=T('noFeed');
  const dTxt=unit=='pct'?Math.abs(diff).toFixed(2)+'%':unit=='mg'?Math.abs(diff).toFixed(2)+' mg/kg':Math.abs(diff).toFixed(2)+' Mcal/kg';
  return`<div style="padding:7px 0;border-bottom:1px solid var(--bd)"><b>${T(it.key)}</b> ${it.status=='low'?T('advLow'):T('advHi')} (${dTxt})<br><small>${actionTxt}</small></div>`;
 }).join('');
 return`<div class="card"><b>${T('advTitle')}</b>${cards}</div>`}
const inp=(k,l,st,mn,mx)=>`<div><label>${T(l)}</label><input type="number" inputmode="decimal" step="${st}" value="${S.cow[k]}" onchange="S.cow.${k}=+this.value;save();R()"></div>`;
const opt=(k,arr)=>`<select onchange="S.cow.${k}=this.value=='1'||this.value=='2'?+this.value:this.value;save();R()">${arr.map(([v,l])=>`<option value="${v}" ${S.cow[k]==v?'selected':''}>${T(l)}</option>`).join('')}</select>`;
const DET=['dm','ash','cp','rup','sol','drup','ndf','adf','lig','starch','wsc','tfa','fat','de','ca','p','mg','k','na','cl','s','cu','fe','mn','zn','co','i','se','mo'];
function bank(){const q=S.q.toLowerCase(),l=FEEDS.filter(f=>(S.cat=='all'||f.c==S.cat)&&(!q||(f.n+fname(f)).toLowerCase().includes(q)));
 return`<input placeholder="${T('srch')}" value="${S.q}" oninput="S.q=this.value;R(1)"><div class="chips">${['all','f','c','m'].map(c=>`<button class="${S.cat==c?'on':''}" onclick="S.cat='${c}';R()">${T(c)}</button>`).join('')}</div>`+
 l.slice(0,80).map(f=>{const o=S.open==f.id,g=o?adj(f,2):f;return`<div class="card"><div class="fd"><b onclick="S.open=${o?'null':`'${f.id}'`};R(1)" style="flex:1">${fname(f)}</b><button class="b" onclick="addF('${f.id}')">+ ${T('add')}</button></div>`+
 (o?`<small>${T('dmb')}</small><table>${DET.filter(k=>f[k]!=null).map(k=>`<tr><td>${T(k=='fat'?'fat_':k)}${k=='rup'?' (%CP)':''}</td><td>${(+f[k]).toFixed(k=='de'||f[k]<10?2:1)}${f[k+'_sd']!=null?` <small>± ${f[k+'_sd']}</small>`:''}</td></tr>`).join('')}</table>`:'')+`</div>`}).join('')}
function addF(id){S.rat.push({id,kg:1,t:2,pr:''});save();tab('rat')}
function ration(){if(!S.rat.length)return`<div class="card">${T('empty')}</div>`;
 return`<div class="card"><small>${T('hint')}</small><div class="row"><div><label>${T('cur')}</label><input value="${S.cur}" onchange="S.cur=this.value.replace(/[^\p{L}\p{N} _-]/gu,'').slice(0,12);save()"></div></div><button class="b" style="width:100%;padding:12px;margin-top:8px" onclick="auto();save();tab('res')">🧮 ${T('auto')}</button><small>${T('caps')}</small></div>`+S.rat.map((x,i)=>{const f=F(x.id);return`<div class="card"><b>${fname(f)}</b> <small>DM ${f.dm}%</small><div class="row">${f.c=='m'?`<div><label>${T('gr')}</label><input type="number" inputmode="decimal" step="1" value="${+(x.kg*1000).toFixed(2)}" onchange="S.rat[${i}].kg=Math.max(0,Number(this.value)||0)/1000;save()"></div>`:`<div><label>${T('kg')}</label><input type="number" inputmode="decimal" step="0.1" value="${x.kg}" onchange="S.rat[${i}].kg=Math.max(0,Number(this.value)||0);save()"></div>`}<div><label>${T('q')}</label><select onchange="S.rat[${i}].t=+this.value;save()">${[1,2,3].map(n=>`<option value="${n}" ${x.t==n?'selected':''}>${T('q'+n)}</option>`).join('')}</select></div><div><label>${T('pr')}</label><input type="number" inputmode="decimal" step="0.5" value="${x.pr}" onchange="S.rat[${i}].pr=Math.max(0,Number(this.value)||0);save()"></div></div><div class="row"><button class="b" style="background:var(--r);flex:0 0 auto" onclick="S.rat.splice(${i},1);save();R()">${T('del')}</button></div></div>`}).join('')+`<button class="b" onclick="tab('res')" style="width:100%;padding:10px">${T('res')} ▶</button>`}
function result(){const o=calc();if(!o)return`<div class="card">${T('empty')}</div>`;const t=target(),c=S.cow,L_=c.stg=='L';
 let h=(S.msg?`<div class="card">${S.msg}</div>`:'')+`<div class="card"><table><tr><td>${T('tot')}</td><td>${o.A.toFixed(1)} kg</td></tr><tr><td>${T('dmi')}</td><td>${o.D.toFixed(1)} kg</td></tr><tr><td>${T('dmip')}</td><td>${t.dmi.toFixed(1)} kg</td></tr>`;
 const nb=o.nel*o.D;if(L_){const req=.10*Math.pow(c.bw,.75)+c.milk*t.mE;h+=`<tr><td>${T('nelb')}</td><td>${nb.toFixed(1)}</td></tr><tr><td>${T('nelr')}</td><td>${req.toFixed(1)}</td></tr><tr><td>${T('milkE')}</td><td>${Math.max(0,(nb-.10*Math.pow(c.bw,.75))/t.mE).toFixed(1)}</td></tr>`}
 const cost=S.rat.reduce((a,x)=>a+x.kg*(+x.pr||0),0);if(cost>0)h+=`<tr><td>${T('cost')}</td><td><b>${cost.toFixed(1)} ${S.cur}</b></td></tr>`+(L_&&c.milk>0?`<tr><td>${T('costm')}</td><td>${(cost/c.milk).toFixed(2)} ${S.cur}</td></tr>`:'')+`<tr><td>${T('costd')}</td><td>${(cost/o.D).toFixed(2)} ${S.cur}</td></tr>`;
 h+=`</table></div><div class="card"><table><tr><th>${T('nutr')}</th><th>${T('val')}</th><th>${T('tgt')}</th><th>${T('st')}</th></tr>${rows(o,t)}</table></div>`;
 h+=advise(o,t);
 h+=`<div class="card"><small>${T('vit')}</small><table>${[['A',t.va],['D',t.vd],['E',t.ve]].map(([n,v])=>`<tr><td>${n}</td><td>${Math.round(v*t.dmi).toLocaleString('en')} IU</td></tr>`).join('')}</table></div><small>${T('note')}</small>`;return h}
function cow(){const c=S.cow,l=c.stg=='L';return`<div class="card"><div class="g"><div><label>${T('breed')}</label>${opt('br',[['H','H'],['J','J']])}</div><div><label>${T('stg')}</label>${opt('stg',[['L','L'],['D1','D1'],['D2','D2']])}</div>`+
 `<div><label>${T('par')}</label>${opt('par',[[1,'p1'],[2,'p2']])}</div>${inp('bw','bw',5)}${l?inp('milk','milk',.5)+inp('fat','fat',.1)+inp('prot','prot',.1)+inp('dim','dim',1)+inp('bcs','bcs',.25):''}</div></div>`}
function R(keep){const f=document.activeElement;document.getElementById('m').innerHTML=({cow,rat:ration,res:result,bank})[S.tab]();
 if(keep&&f&&f.tagName=='INPUT'&&S.tab=='bank'){const n=document.querySelector('#m input');n.focus();n.setSelectionRange(n.value.length,n.value.length)}
 document.getElementById('nv').innerHTML=['cow','rat','res','bank'].map(k=>`<button class="${S.tab==k?'on':''}" onclick="tab('${k}')">${T(k)}</button>`).join('');document.getElementById('ti').textContent=T('ti')}
function tab(k){S.tab=k;R();scrollTo(0,0)}
function setL(v){S.lg=v;document.documentElement.lang=v;document.documentElement.dir=v=='en'?'ltr':'rtl';save();R()}
document.getElementById('lg').value=S.lg;setL(S.lg);
if('serviceWorker' in navigator&&/^https?:/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{});

