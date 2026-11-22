const destinations = [
  "Chiang Mai", "Chiang Rai", "Pattaya", "Phuket", "Bangkok", "Krabi", "Rayong", "Hua Hin", "Cha-am", "Kanchanaburi", "Koh Samui", "Nakhon Nayok", "Khao Kho", "Khao Yai", "Koh Phi Phi", "Koh Tao", "Koh Phangan", "Koh Lipe", "Koh Chang", "Koh Samet", "Ayutthaya", "Sukhothai", "Koh Larn"
];

const translations = {
  en: {
    "nav.destinations": "Destinations", "nav.packages": "Journeys", "nav.rentals": "Self-drive", "nav.why": "Why us", "nav.signin": "Sign in", "nav.plan": "Plan my trip",
    "hero.eyebrow": "PRIVATE JOURNEYS · BEAUTIFULLY ARRANGED", "hero.title": "Thailand,<br><em>tailored to you.</em>", "hero.copy": "Arrive with a dream. We shape the stay, the table, the road, and every remarkable moment in between.", "hero.cta": "Create my journey", "hero.explore": "Explore signature journeys",
    "finder.where": "Where would you like to go?", "finder.duration": "Journey length", "finder.style": "Travel style",
    "intro.eyebrow": "YOUR THAILAND, YOUR RHYTHM", "intro.title": "Not a fixed tour.<br>A journey that fits.", "intro.copy": "We begin when you arrive. Choose the places, pace, hotel, restaurants, and how you move—we arrange the details around you.", "intro.link": "See how it works <span>→</span>",
    "benefit.one.title": "Made around you", "benefit.one.copy": "Adjust your days, destinations, dining, and stays before you confirm.", "benefit.two.title": "One seamless arrival", "benefit.two.copy": "From airport welcome to every local transfer, your route is handled.", "benefit.three.title": "Travel your way", "benefit.three.copy": "Choose a private driver or take the wheel with a car or motorcycle.", "benefit.four.title": "Book with confidence", "benefit.four.copy": "Free cancellation, less only any hotel fee that cannot be refunded.",
    "dest.eyebrow": "23 PLACES TO BEGIN", "dest.title": "Find your kind of Thailand.", "dest.all": "All", "dest.city": "Cities", "dest.nature": "Nature", "dest.island": "Islands", "dest.viewall": "View all destinations",
    "journeys.eyebrow": "SIGNATURE STARTING POINTS", "journeys.title": "Stay for a day.<br>Remember it for years.", "journeys.copy": "Every journey is editable. Swap a place, extend a stay, choose a different table—nothing is fixed until you confirm.",
    "style.eyebrow": "TRAVEL THAT FEELS LIKE YOU", "style.title": "Different ages.<br>Different energies.<br><em>Your kind of wonderful.</em>", "style.slow.title": "Slow & serene", "style.slow.copy": "Temples, gardens, rivers, gentle days", "style.social.title": "Social & vibrant", "style.social.copy": "Cozy cafés, beaches, nightlife, city energy", "style.family.title": "Family explorer", "style.family.copy": "Easy logistics, shared discovery, flexible pace", "style.island.title": "Island reset", "style.island.copy": "Turquoise water, soft sand, nothing rushed",
    "rental.eyebrow": "TAKE YOUR OWN ROAD", "rental.title": "Prefer the wheel?", "rental.copy": "Choose the vehicle type, brand, model, and year that suits you. Self-drive cars start from ฿800 per day; a private car with driver starts from ฿1,700 per day.", "rental.one": "Motorcycles priced by brand and model", "rental.two": "Hotel or airport handover options", "rental.three": "Sedan, 7-seater, van, premium, or pickup", "rental.cta": "Explore self-drive",
    "promise.eyebrow": "A CLEAR CANCELLATION PROMISE", "promise.title": "Plans can change.<br>Peace of mind shouldn’t.", "promise.copy": "Cancel without a Twar Mal cancellation fee and receive a full refund. If your chosen hotel has a non-refundable policy, only that hotel charge is deducted.", "promise.note": "Your exact hotel conditions are shown before card payment.",
    "final.eyebrow": "YOUR JOURNEY STARTS HERE", "final.title": "Where will Thailand<br><em>take you?</em>", "final.cta": "Start planning"
  },
  th: {
    "nav.destinations": "จุดหมาย", "nav.packages": "แพ็กเกจ", "nav.rentals": "เช่ารถขับเอง", "nav.why": "ทำไมต้องเรา", "nav.signin": "เข้าสู่ระบบ", "nav.plan": "วางแผนทริป",
    "hero.eyebrow": "ทริปส่วนตัว · ออกแบบอย่างพิถีพิถัน", "hero.title": "เที่ยวเมืองไทย<br><em>ในแบบของคุณ</em>", "hero.copy": "แค่บอกความฝัน เราจะจัดที่พัก ร้านอาหาร การเดินทาง และทุกช่วงเวลาพิเศษให้ลงตัว", "hero.cta": "สร้างทริปของฉัน", "hero.explore": "ดูทริปแนะนำ",
    "finder.where": "อยากไปที่ไหน?", "finder.duration": "ระยะเวลา", "finder.style": "สไตล์การเที่ยว",
    "intro.eyebrow": "เมืองไทยของคุณ จังหวะของคุณ", "intro.title": "ไม่ใช่ทัวร์สำเร็จรูป<br>แต่เป็นทริปที่พอดี", "intro.copy": "เราเริ่มดูแลตั้งแต่คุณมาถึง เลือกสถานที่ จังหวะ ที่พัก ร้านอาหาร และการเดินทาง แล้วเราจัดรายละเอียดทั้งหมดให้", "intro.link": "ดูขั้นตอน <span>→</span>",
    "benefit.one.title": "ออกแบบรอบตัวคุณ", "benefit.one.copy": "ปรับวัน สถานที่ ร้านอาหาร และที่พักได้ก่อนยืนยัน", "benefit.two.title": "เดินทางราบรื่น", "benefit.two.copy": "ตั้งแต่รับที่สนามบินจนถึงทุกการเดินทางในพื้นที่", "benefit.three.title": "เที่ยวในแบบคุณ", "benefit.three.copy": "เลือกรถพร้อมคนขับ หรือขับรถยนต์และมอเตอร์ไซค์เอง", "benefit.four.title": "จองอย่างสบายใจ", "benefit.four.copy": "ยกเลิกฟรี หักเฉพาะค่าโรงแรมที่ไม่สามารถคืนได้",
    "dest.eyebrow": "23 จุดหมายให้เริ่มต้น", "dest.title": "พบเมืองไทยในแบบที่คุณชอบ", "dest.all": "ทั้งหมด", "dest.city": "เมือง", "dest.nature": "ธรรมชาติ", "dest.island": "เกาะ", "dest.viewall": "ดูจุดหมายทั้งหมด",
    "journeys.eyebrow": "ทริปแนะนำสำหรับเริ่มต้น", "journeys.title": "อยู่เพียงหนึ่งวัน<br>จดจำไปอีกหลายปี", "journeys.copy": "ทุกทริปแก้ไขได้ เปลี่ยนสถานที่ เพิ่มวัน หรือเลือกร้านใหม่ ทุกอย่างยืดหยุ่นจนกว่าคุณจะยืนยัน",
    "style.eyebrow": "การเดินทางที่เป็นตัวคุณ", "style.title": "ต่างวัย ต่างพลัง<br><em>แต่พิเศษในแบบของคุณ</em>", "style.slow.title": "สบายและสงบ", "style.slow.copy": "วัด สวน แม่น้ำ และวันสบาย ๆ", "style.social.title": "สนุกและมีสีสัน", "style.social.copy": "คาเฟ่ ชายหาด ชีวิตกลางคืน และเมือง", "style.family.title": "ครอบครัวนักสำรวจ", "style.family.copy": "เดินทางง่าย ค้นพบร่วมกัน จังหวะยืดหยุ่น", "style.island.title": "พักใจบนเกาะ", "style.island.copy": "ทะเลสีฟ้า หาดนุ่ม และไม่ต้องเร่งรีบ",
    "rental.eyebrow": "เลือกเส้นทางด้วยตัวเอง", "rental.title": "อยากขับเองไหม?", "rental.copy": "เลือกประเภทรถ ยี่ห้อ รุ่น และปี รถเช่าขับเองเริ่มต้น ฿800 ต่อวัน และรถพร้อมคนขับเริ่มต้น ฿1,700 ต่อวัน", "rental.one": "มอเตอร์ไซค์คิดราคาตามยี่ห้อและรุ่น", "rental.two": "รับรถที่โรงแรมหรือสนามบิน", "rental.three": "รถเก๋ง 7 ที่นั่ง รถตู้ รถพรีเมียม หรือกระบะ", "rental.cta": "ดูรถเช่าขับเอง",
    "promise.eyebrow": "คำสัญญาเรื่องการยกเลิก", "promise.title": "แผนเปลี่ยนได้<br>ความสบายใจไม่ควรเปลี่ยน", "promise.copy": "ยกเลิกได้โดยไม่มีค่าธรรมเนียมจาก Twar Mal และรับเงินคืนเต็มจำนวน หากโรงแรมที่เลือกไม่คืนเงิน จะหักเฉพาะค่าโรงแรมนั้น", "promise.note": "เงื่อนไขโรงแรมจะแสดงชัดเจนก่อนชำระด้วยบัตร",
    "final.eyebrow": "การเดินทางเริ่มที่นี่", "final.title": "เมืองไทยจะพาคุณ<br><em>ไปที่ไหน?</em>", "final.cta": "เริ่มวางแผน"
  }
};

Object.assign(translations.en, {
  "legal.eyebrow": "CLEAR BEFORE YOU CONFIRM",
  "legal.title": "Travel terms,<br><em>in plain language.</em>",
  "legal.intro": "These prototype policies explain what the website estimates, what Twar Mal arranges, and what must be confirmed before a real payment.",
  "legal.pricing.title": "Pricing & confirmation",
  "legal.pricing.copy": "All amounts are planning estimates in THB. A booking exists only after availability, taxes, activity tickets, hotel conditions, vehicle terms, and the final written quotation are confirmed. Restaurant and delivery bills are paid directly and are never part of the website payment.",
  "legal.cancel.title": "Cancellation & refunds",
  "legal.cancel.copy": "Twar Mal does not add a cancellation fee. Refundable amounts return to the original payment method. If a selected hotel, activity, or supplier is non-refundable, only that confirmed non-refundable amount is deducted. Processing time depends on the future payment provider and card issuer.",
  "legal.rental.title": "Vehicle rental terms",
  "legal.rental.copy": "Drivers must meet the confirmed age, licence, identity, deposit, and insurance requirements. Fuel, tolls, parking, ferries, overtime, traffic fines, damage, and late return charges are confirmed before payment. Koh Larn permits motorcycle rental only through this planner.",
  "legal.privacy.title": "Privacy & prototype data",
  "legal.privacy.copy": "This version is a frontend demonstration. Planner details stay in the current browser session and test account names may be stored on this device. Do not enter real passwords or card details. A production privacy notice and secure data controls are required before collecting customer information.",
  "legal.scope.title": "Service scope",
  "legal.scope.copy": "Twar Mal arranges the local itinerary, selected activity allowance, hotel, and local transportation after arrival. Flights and intercity bus or train tickets are not sold here. Travelers remain responsible for passports, visas, travel insurance, personal expenses, and following local laws.",
  "legal.draft": "Policy draft for demonstration and academic review · professional legal review is required before commercial launch."
});

Object.assign(translations.th, {
  "legal.eyebrow": "ชัดเจนก่อนยืนยัน",
  "legal.title": "เงื่อนไขการเดินทาง<br><em>อ่านง่ายและตรงไปตรงมา</em>",
  "legal.intro": "นโยบายต้นแบบนี้อธิบายว่ายอดใดเป็นเพียงประมาณการ Twar Mal จัดอะไรให้ และสิ่งใดต้องยืนยันก่อนชำระเงินจริง",
  "legal.pricing.title": "ราคาและการยืนยัน",
  "legal.pricing.copy": "ยอดทั้งหมดเป็นประมาณการเพื่อวางแผนในสกุลเงินบาท การจองจะเกิดขึ้นเมื่อยืนยันห้องว่าง ภาษี บัตรเข้ากิจกรรม เงื่อนไขโรงแรม เงื่อนไขรถ และใบเสนอราคาฉบับสุดท้ายแล้ว ค่าอาหารและเดลิเวอรีชำระโดยตรงและไม่รวมในการชำระบนเว็บไซต์",
  "legal.cancel.title": "การยกเลิกและคืนเงิน",
  "legal.cancel.copy": "Twar Mal ไม่คิดค่าธรรมเนียมยกเลิก เงินที่คืนได้จะคืนผ่านช่องทางเดิม หากโรงแรม กิจกรรม หรือผู้ให้บริการที่เลือกไม่คืนเงิน จะหักเฉพาะยอดที่ยืนยันว่าไม่สามารถคืนได้ ระยะเวลาคืนเงินขึ้นอยู่กับผู้ให้บริการชำระเงินและธนาคารผู้ออกบัตรในอนาคต",
  "legal.rental.title": "เงื่อนไขการเช่ารถ",
  "legal.rental.copy": "ผู้ขับต้องผ่านข้อกำหนดเรื่องอายุ ใบขับขี่ เอกสารยืนยันตัวตน เงินมัดจำ และประกันภัย ค่าเชื้อเพลิง ทางด่วน ที่จอดรถ เรือเฟอร์รี ล่วงเวลา ค่าปรับ ความเสียหาย และคืนรถล่าช้าจะยืนยันก่อนชำระเงิน สำหรับเกาะล้าน ระบบนี้ให้เช่าได้เฉพาะมอเตอร์ไซค์",
  "legal.privacy.title": "ความเป็นส่วนตัวและข้อมูลต้นแบบ",
  "legal.privacy.copy": "เวอร์ชันนี้เป็นตัวอย่างฝั่งหน้าเว็บ รายละเอียดในแพลนเนอร์อยู่ในเซสชันเบราว์เซอร์ และชื่อบัญชีทดลองอาจบันทึกไว้ในอุปกรณ์นี้ ห้ามใช้รหัสผ่านหรือข้อมูลบัตรจริง ก่อนเก็บข้อมูลลูกค้าต้องมีประกาศความเป็นส่วนตัวและระบบรักษาความปลอดภัยสำหรับใช้งานจริง",
  "legal.scope.title": "ขอบเขตบริการ",
  "legal.scope.copy": "Twar Mal จัดแผนเที่ยว งบกิจกรรมที่เลือก โรงแรม และการเดินทางในพื้นที่หลังลูกค้ามาถึง เราไม่ขายตั๋วเครื่องบิน รถโดยสารระหว่างเมือง หรือตั๋วรถไฟ ผู้เดินทางรับผิดชอบหนังสือเดินทาง วีซ่า ประกันการเดินทาง ค่าใช้จ่ายส่วนตัว และการปฏิบัติตามกฎหมายท้องถิ่น",
  "legal.draft": "ร่างนโยบายสำหรับการสาธิตและการประเมินทางวิชาการ · ต้องผ่านการตรวจสอบทางกฎหมายก่อนเปิดให้บริการเชิงพาณิชย์"
});

const destinationHighlights = {
  "Chiang Mai": [["Old City temples", "วัดในเขตเมืองเก่า"], ["Doi Suthep viewpoint", "จุดชมวิวดอยสุเทพ"], ["Nimman cafés", "คาเฟ่ย่านนิมมาน"], ["Baan Kang Wat craft village", "ชุมชนงานคราฟต์บ้านข้างวัด"], ["Mae Kampong village", "หมู่บ้านแม่กำปอง"], ["Sunday Walking Street", "ถนนคนเดินวันอาทิตย์"]],
  "Chiang Rai": [["White Temple", "วัดร่องขุ่น"], ["Blue Temple", "วัดร่องเสือเต้น"], ["Baan Dam Museum", "พิพิธภัณฑ์บ้านดำ"], ["Singha Park", "สิงห์ปาร์ค"], ["Golden Triangle", "สามเหลี่ยมทองคำ"], ["Clock Tower evening", "หอนาฬิกายามค่ำ"]],
  Pattaya: [["Sanctuary of Truth", "ปราสาทสัจธรรม"], ["Jomtien Beach", "หาดจอมเทียน"], ["Nong Nooch Garden", "สวนนงนุช"], ["Pattaya viewpoint", "จุดชมวิวพัทยา"], ["Art in Paradise", "อาร์ตอินพาราไดซ์"], ["Night market", "ตลาดกลางคืน"]],
  Phuket: [["Old Phuket Town", "ย่านเมืองเก่าภูเก็ต"], ["Promthep Cape", "แหลมพรหมเทพ"], ["Kata Beach", "หาดกะตะ"], ["Wat Chalong", "วัดฉลอง"], ["Phang Nga Bay", "อ่าวพังงา"], ["Sunset beach time", "ชมพระอาทิตย์ตกริมทะเล"]],
  Bangkok: [["Grand Palace district", "ย่านพระบรมมหาราชวัง"], ["Wat Arun riverside", "วัดอรุณริมแม่น้ำ"], ["Bangkok Art and Culture Centre", "หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร"], ["Chinatown walk", "เดินเที่ยวย่านเยาวราช"], ["Canal or river experience", "ล่องคลองหรือแม่น้ำ"], ["Rooftop or night market", "รูฟท็อปหรือตลาดกลางคืน"]],
  Krabi: [["Railay Beach", "หาดไร่เลย์"], ["Emerald Pool", "สระมรกต"], ["Four Islands trip", "ทริปสี่เกาะ"], ["Tiger Cave Temple", "วัดถ้ำเสือ"], ["Ao Nang waterfront", "ริมทะเลอ่าวนาง"], ["Sunset cruise", "ล่องเรือชมพระอาทิตย์ตก"]],
  Rayong: [["Mae Ramphueng Beach", "หาดแม่รำพึง"], ["Rayong Botanical Garden", "สวนพฤกษศาสตร์ระยอง"], ["Yomjinda Road", "ถนนยมจินดา"], ["Khao Laem Ya", "เขาแหลมหญ้า"], ["Fruit orchard", "สวนผลไม้"], ["Local seafood evening", "อาหารทะเลท้องถิ่นยามเย็น"]],
  "Hua Hin": [["Hua Hin Beach", "ชายหาดหัวหิน"], ["Cicada Market", "ตลาดซิเคด้า"], ["Khao Takiab", "เขาตะเกียบ"], ["Maruekhathaiyawan Palace", "พระราชนิเวศน์มฤคทายวัน"], ["Vana Nava or spa", "วานา นาวาหรือสปา"], ["Night market", "ตลาดโต้รุ่ง"]],
  "Cha-am": [["Cha-am Beach", "ชายหาดชะอำ"], ["Mrighadayavan Palace", "พระราชนิเวศน์มฤคทายวัน"], ["Swiss Sheep Farm", "สวิสชีพฟาร์ม"], ["Khao Nang Panthurat", "เขานางพันธุรัต"], ["Mangrove learning center", "ศูนย์เรียนรู้ป่าชายเลน"], ["Seafood promenade", "เดินเล่นและชิมอาหารทะเล"]],
  Kanchanaburi: [["Bridge over the River Kwai", "สะพานข้ามแม่น้ำแคว"], ["Erawan Waterfall", "น้ำตกเอราวัณ"], ["Hellfire Pass", "ช่องเขาขาด"], ["Historic railway", "ทางรถไฟสายประวัติศาสตร์"], ["Riverside rest", "พักผ่อนริมแม่น้ำ"], ["Local market", "ตลาดท้องถิ่น"]],
  "Koh Samui": [["Chaweng Beach", "หาดเฉวง"], ["Big Buddha Temple", "วัดพระใหญ่"], ["Ang Thong Marine Park", "อุทยานแห่งชาติหมู่เกาะอ่างทอง"], ["Fisherman's Village", "หมู่บ้านชาวประมง"], ["Na Muang Waterfall", "น้ำตกหน้าเมือง"], ["Sunset beach lounge", "พักผ่อนริมหาดยามเย็น"]],
  "Nakhon Nayok": [["Khun Dan Prakan Chon Dam", "เขื่อนขุนด่านปราการชล"], ["Sarika Waterfall", "น้ำตกสาริกา"], ["Wang Takhrai", "วังตะไคร้"], ["Bamboo garden", "สวนไผ่"], ["Rafting option", "กิจกรรมล่องแก่ง"], ["Riverside evening", "เย็นสบายริมแม่น้ำ"]],
  "Khao Kho": [["Sea of mist viewpoint", "จุดชมทะเลหมอก"], ["Wat Pha Sorn Kaew", "วัดพระธาตุผาซ่อนแก้ว"], ["Wind farm", "ทุ่งกังหันลม"], ["Pino Latte viewpoint", "จุดชมวิวพิโน่ ลาเต้"], ["Local farm", "ฟาร์มท้องถิ่น"], ["Quiet mountain evening", "ค่ำคืนสงบบนภูเขา"]],
  "Khao Yai": [["Khao Yai National Park", "อุทยานแห่งชาติเขาใหญ่"], ["Haew Suwat Waterfall", "น้ำตกเหวสุวัต"], ["Scenic vineyard", "ไร่องุ่นทิวทัศน์สวย"], ["Art museum", "พิพิธภัณฑ์ศิลปะ"], ["Wildlife viewpoint", "จุดชมสัตว์ป่า"], ["Resort evening", "พักผ่อนยามเย็นที่รีสอร์ต"]],
  "Koh Phi Phi": [["Maya Bay", "อ่าวมาหยา"], ["Phi Phi viewpoint", "จุดชมวิวพีพี"], ["Pileh Lagoon", "ปิเละลากูน"], ["Snorkeling stop", "จุดดำน้ำตื้น"], ["Long Beach", "ลองบีช"], ["Beach sunset", "ชมพระอาทิตย์ตกริมทะเล"]],
  "Koh Tao": [["Sairee Beach", "หาดทรายรี"], ["Koh Nang Yuan", "เกาะนางยวน"], ["Shark Bay", "อ่าวฉลาม"], ["Snorkeling or diving", "ดำน้ำตื้นหรือดำน้ำลึก"], ["John-Suwan viewpoint", "จุดชมวิวจอห์น-สุวรรณ"], ["Island sunset", "ชมพระอาทิตย์ตกบนเกาะ"]],
  "Koh Phangan": [["Thong Nai Pan Beach", "หาดท้องนายปาน"], ["Than Sadet Waterfall", "น้ำตกธารเสด็จ"], ["Haad Rin", "หาดริ้น"], ["Yoga or wellness", "โยคะหรือเวลเนส"], ["Local market", "ตลาดท้องถิ่น"], ["Sunset viewpoint", "จุดชมพระอาทิตย์ตก"]],
  "Koh Lipe": [["Pattaya Beach", "หาดพัทยา"], ["Sunrise Beach", "หาดซันไรซ์"], ["Tarutao snorkeling", "ดำน้ำตื้นหมู่เกาะตะรุเตา"], ["Walking Street", "ถนนคนเดิน"], ["Sunset Beach", "หาดซันเซ็ต"], ["Island relaxation", "พักผ่อนบนเกาะ"]],
  "Koh Chang": [["White Sand Beach", "หาดทรายขาว"], ["Klong Plu Waterfall", "น้ำตกคลองพลู"], ["Bang Bao village", "หมู่บ้านบางเบ้า"], ["Island snorkeling", "ดำน้ำตื้นรอบเกาะ"], ["Mangrove route", "เส้นทางป่าชายเลน"], ["Beach sunset", "ชมพระอาทิตย์ตกริมทะเล"]],
  "Koh Samet": [["Sai Kaew Beach", "หาดทรายแก้ว"], ["Ao Prao", "อ่าวพร้าว"], ["Island viewpoint", "จุดชมวิวบนเกาะ"], ["Snorkeling trip", "ทริปดำน้ำตื้น"], ["Fire show area", "พื้นที่ชมโชว์ควงไฟ"], ["Quiet beach evening", "ค่ำคืนสงบริมหาด"]],
  Ayutthaya: [["Wat Mahathat", "วัดมหาธาตุ"], ["Wat Chaiwatthanaram", "วัดไชยวัฒนาราม"], ["Historic park route", "เส้นทางอุทยานประวัติศาสตร์"], ["Chao Sam Phraya Museum", "พิพิธภัณฑสถานแห่งชาติเจ้าสามพระยา"], ["Riverside experience", "กิจกรรมริมแม่น้ำ"], ["Night market", "ตลาดกลางคืน"]],
  Sukhothai: [["Sukhothai Historical Park", "อุทยานประวัติศาสตร์สุโขทัย"], ["Wat Mahathat", "วัดมหาธาตุ"], ["Si Satchanalai", "ศรีสัชนาลัย"], ["Local ceramics", "งานเครื่องสังคโลก"], ["Cycling route", "เส้นทางปั่นจักรยาน"], ["Old-town evening", "ยามเย็นในเมืองเก่า"]],
  "Koh Larn": [["Tawaen Beach", "หาดตาแหวน"], ["Tien Beach", "หาดเทียน"], ["Samae Beach", "หาดแสม"], ["Khao Nom viewpoint", "จุดชมวิวเขานม"], ["Motorcycle island loop", "ขี่มอเตอร์ไซค์รอบเกาะ"], ["Sunset by the pier", "ชมพระอาทิตย์ตกใกล้ท่าเรือ"]]
};

const hotelProfiles = {
  chiangMai: { budget: { range: "฿700–฿1,200", rates: [850, 1100] }, mid: { range: "฿1,300–฿2,500", rates: [1600, 2300] }, premium: { range: "From ฿2,500", rates: [3500, 6500] } },
  northern: { budget: { range: "฿700–฿1,300", rates: [800, 1150] }, mid: { range: "฿1,400–฿2,800", rates: [1700, 2400] }, premium: { range: "From ฿3,000", rates: [3800, 6000] } },
  bangkok: { budget: { range: "฿1,200–฿2,500", rates: [1400, 2100] }, mid: { range: "฿3,000–฿7,000", rates: [3400, 5200] }, premium: { range: "From ฿8,000", rates: [8500, 12000] } },
  pattaya: { budget: { range: "฿900–฿1,800", rates: [1000, 1500] }, mid: { range: "฿1,800–฿3,500", rates: [2100, 3000] }, premium: { range: "From ฿4,000", rates: [4800, 7500] } },
  phuket: { budget: { range: "฿1,200–฿2,500", rates: [1500, 2200] }, mid: { range: "฿2,800–฿6,000", rates: [3400, 5200] }, premium: { range: "From ฿6,500", rates: [7500, 12000] } },
  krabi: { budget: { range: "฿900–฿1,900", rates: [1100, 1650] }, mid: { range: "฿2,000–฿4,500", rates: [2400, 3800] }, premium: { range: "From ฿5,000", rates: [5800, 9000] } },
  coast: { budget: { range: "฿800–฿1,700", rates: [950, 1450] }, mid: { range: "฿1,800–฿3,800", rates: [2200, 3300] }, premium: { range: "From ฿4,500", rates: [5200, 8500] } },
  island: { budget: { range: "฿1,000–฿2,600", rates: [1300, 2200] }, mid: { range: "฿2,800–฿6,000", rates: [3300, 5200] }, premium: { range: "From ฿6,500", rates: [7200, 11000] } },
  nature: { budget: { range: "฿700–฿1,400", rates: [850, 1200] }, mid: { range: "฿1,400–฿3,000", rates: [1700, 2600] }, premium: { range: "From ฿3,200", rates: [3800, 6500] } },
  heritage: { budget: { range: "฿700–฿1,300", rates: [800, 1150] }, mid: { range: "฿1,400–฿2,800", rates: [1650, 2400] }, premium: { range: "From ฿3,000", rates: [3400, 5200] } },
  kohLarn: { budget: { range: "฿900–฿1,500", rates: [1000, 1350] }, mid: { range: "฿1,600–฿2,800", rates: [1900, 2500] }, premium: { range: "From ฿3,200", rates: [3800, 5200] } }
};

const hotelCatalog = {
  "Chiang Mai": { profile: "chiangMai", budget: ["Hop Inn Chiang Mai Airport", "B2 Chiang Mai Boutique"], mid: ["Sabai Sabai Chiang Mai Hotel", "De Lanna Hotel"], premium: ["Raya Heritage", "Anantara Chiang Mai Resort"] },
  "Chiang Rai": { profile: "northern", budget: ["Hop Inn Chiang Rai", "B2 Chiang Rai Boutique & Budget"], mid: ["The Heritage Chiang Rai Hotel", "Laluna Hotel & Resort"], premium: ["Le Méridien Chiang Rai Resort", "The Riverie by Katathani"] },
  Pattaya: { profile: "pattaya", budget: ["Red Planet Pattaya", "ibis Pattaya"], mid: ["Hotel Amber Pattaya", "Centara Life Avenue Hotel Pattaya"], premium: ["Andaz Pattaya Jomtien Beach", "MASON Pattaya"] },
  Phuket: { profile: "phuket", budget: ["Lub d Phuket Patong", "The Crib Patong"], mid: ["Deevana Plaza Phuket Patong", "Sugar Marina Resort"], premium: ["The Nai Harn Phuket", "The Slate"] },
  Bangkok: { profile: "bangkok", budget: ["ibis Bangkok Siam", "Rambuttri Village Inn & Plaza"], mid: ["The Quarter Ari by UHG", "Centara Watergate Pavilion Hotel"], premium: ["The Okura Prestige Bangkok", "Mandarin Oriental Bangkok"] },
  Krabi: { profile: "krabi", budget: ["ibis Styles Krabi Ao Nang", "Wake Up Aonang Hotel"], mid: ["Holiday Inn Resort Krabi Ao Nang Beach", "Aonang Villa Resort"], premium: ["Rayavadee", "Banyan Tree Krabi"] },
  Rayong: { profile: "coast", budget: ["Hop Inn Rayong", "PLAAI Plus Hotel Rayong"], mid: ["Holiday Inn & Suites Rayong City Centre", "Novotel Rayong Star Convention Centre"], premium: ["Rayong Marriott Resort & Spa", "Le Vimarn Cottages & Spa"] },
  "Hua Hin": { profile: "coast", budget: ["ibis Hua Hin", "Hua Hin Terminal"], mid: ["Amari Hua Hin", "G Hua Hin Resort & Mall"], premium: ["Anantara Hua Hin Resort", "Chiva-Som Hua Hin"] },
  "Cha-am": { profile: "coast", budget: ["Cha Am My House", "The Beach Cha Am Guest House"], mid: ["Centara Life Cha-Am Beach Resort", "FuramaXclusive Sandara Hua Hin"], premium: ["SO/ Sofitel Hua Hin", "Dusit Thani Hua Hin"] },
  Kanchanaburi: { profile: "nature", budget: ["Hop Inn Kanchanaburi", "Pongphen Guesthouse"], mid: ["Natee The Riverfront Hotel", "U Inchantree Kanchanaburi"], premium: ["The FloatHouse River Kwai", "Dheva Mantra Resort"] },
  "Koh Samui": { profile: "island", budget: ["Lub d Koh Samui Chaweng Beach", "Samui Verticolor"], mid: ["Outrigger Koh Samui Beach Resort", "Chaweng Regent Beach Resort"], premium: ["SALA Samui Choengmon Beach Resort", "Cape Fahn Hotel"] },
  "Nakhon Nayok": { profile: "nature", budget: ["Field Town Apartment", "Baan Suan Khun Yaiy"], mid: ["At Rice Resort", "Villa Panalai"], premium: ["The Forest Home Resort", "Royal Hills Golf Resort & Spa"] },
  "Khao Kho": { profile: "nature", budget: ["Khao Kho Overview Resort", "Phukaew Resort"], mid: ["Pino Latte Resort & Hotel", "Krin Resort"], premium: ["The Blue Sky Resort Khao Kho", "Sirinati Khao Kho"] },
  "Khao Yai": { profile: "nature", budget: ["Pakchong Phubade Hotel", "Khao Yai Garden Lodge"], mid: ["dusitD2 Khao Yai", "Botanica Khao Yai"], premium: ["InterContinental Khao Yai Resort", "Mövenpick Resort Khao Yai"] },
  "Koh Phi Phi": { profile: "island", budget: ["Ibiza House Phi Phi", "Coco's Guesthouse"], mid: ["Phi Phi CoCo Beach Resort", "Phi Phi Cliff Beach Resort"], premium: ["SAii Phi Phi Island Village", "Zeavola Resort"] },
  "Koh Tao": { profile: "island", budget: ["Sairee Cottage Resort", "Good Dream Hotel"], mid: ["Ban's Diving Resort", "Koh Tao Cabana"], premium: ["Cape Shark Villas", "Jamahkiri Dive Resort & Spa"] },
  "Koh Phangan": { profile: "island", budget: ["Shiralea Backpackers Resort", "Phanganist Hostel"], mid: ["Phangan Bayshore Resort", "Summer Luxury Beach Resort"], premium: ["Anantara Rasananda Koh Phangan Villas", "Santhiya Koh Phangan Resort & Spa"] },
  "Koh Lipe": { profile: "island", budget: ["The Reef Hotel", "Bloom Cafe & Hostel"], mid: ["Akira Lipe Resort", "Idyllic Concept Resort"], premium: ["Irene Pool Villa Resort", "Serendipity Beach Resort"] },
  "Koh Chang": { profile: "island", budget: ["Pajamas Koh Chang", "Nature Beach Resort"], mid: ["KC Grande Resort Koh Chang", "Awa Resort Koh Chang"], premium: ["The Retreat Koh Chang", "GajaPuri Resort Koh Chang"] },
  "Koh Samet": { profile: "island", budget: ["Samed Green Inn", "Runa Runa Best Guesthouse"], mid: ["Sai Kaew Beach Resort", "Ao Prao Resort"], premium: ["Paradee", "Le Vimarn Cottages & Spa"] },
  Ayutthaya: { profile: "heritage", budget: ["Hop Inn Ayutthaya", "Baan Luang Harn"], mid: ["Sala Ayutthaya", "Centara Ayutthaya"], premium: ["Baan Pomphet", "Kantary Hotel Ayutthaya"] },
  Sukhothai: { profile: "heritage", budget: ["TR Guesthouse", "OldTown Boutique House"], mid: ["Legendha Sukhothai", "Thai Thai Sukhothai Resort"], premium: ["Sriwilai Sukhothai", "Sukhothai Treasure Resort & Spa"] },
  "Koh Larn": { profile: "kohLarn", budget: ["Lareena Resort Koh Larn Pattaya", "Chill Days @ Koh Larn"], mid: ["Suntosa Resort", "Samanta by the Sea"], premium: ["Myth Koh Larn Resort", "Rocco Villa Koh Larn"] }
};

const hotelCatalogAdditions = {
  "Chiang Mai": { budget: "The51Hometel", mid: "U Nimman Chiang Mai", premium: "137 Pillars House Chiang Mai" },
  "Chiang Rai": { budget: "Work Den Chiangrai", mid: "Mora Boutique Hotel", premium: "Anantara Golden Triangle Elephant Camp & Resort" },
  Pattaya: { budget: "Travelodge Pattaya", mid: "OZO North Pattaya", premium: "Cape Dara Resort" },
  Phuket: { budget: "The Memory at On On Hotel", mid: "Courtyard by Marriott Phuket Patong Beach Resort", premium: "Rosewood Phuket" },
  Bangkok: { budget: "The Yard Bangkok", mid: "Amara Bangkok", premium: "Capella Bangkok" },
  Krabi: { budget: "Aonang Buri Resort", mid: "Panan Krabi Resort", premium: "Phulay Bay, a Ritz-Carlton Reserve" },
  Rayong: { budget: "Golden City Rayong Hotel", mid: "Kantary Bay Hotel Rayong", premium: "Aksorn Rayong, The Vitality Collection" },
  "Hua Hin": { budget: "Hop Inn Hua Hin", mid: "The Standard, Hua Hin", premium: "V Villas Hua Hin" },
  "Cha-am": { budget: "I Calm Resort Cha Am", mid: "Veranda Resort & Villas Hua Hin Cha Am", premium: "Baba Beach Club Hua Hin" },
  Kanchanaburi: { budget: "River Kwai Hotel", mid: "Princess River Kwai Hotel", premium: "Cross River Kwai" },
  "Koh Samui": { budget: "Chaweng Budget Hotel", mid: "Karma Resort", premium: "Four Seasons Resort Koh Samui" },
  "Nakhon Nayok": { budget: "Loft Village Nakhon Nayok", mid: "Rabiangprai Valley", premium: "Reindeer Park Resort" },
  "Khao Kho": { budget: "Imperial Phukaew Hill Resort", mid: "Mossview Resort", premium: "The Sense Resort Khao Kho" },
  "Khao Yai": { budget: "The One House Resort Pak Chong", mid: "Thames Valley Khao Yai", premium: "Kirimaya Golf Resort Spa" },
  "Koh Phi Phi": { budget: "PP Insula", mid: "Phi Phi Holiday Resort", premium: "Villa 360 Resort & Spa" },
  "Koh Tao": { budget: "Sunrise Koh Tao", mid: "Simple Life Cliff View Resort", premium: "The Tarna Align Resort" },
  "Koh Phangan": { budget: "First and Frang Hotel", mid: "Buri Rasa Village Phangan", premium: "Kupu Kupu Phangan Beach Villas & Spa" },
  "Koh Lipe": { budget: "Family Song Koh Lipe", mid: "Mali Resort Pattaya Beach", premium: "Ten Moons Lipe Resort" },
  "Koh Chang": { budget: "TP Hut Bungalows", mid: "The Dewa Koh Chang", premium: "Santhiya Tree Koh Chang Resort" },
  "Koh Samet": { budget: "Sky Cottage", mid: "Samed Villa Resort", premium: "Samed Tamarind Beach Resort" },
  Ayutthaya: { budget: "Niwas Ayutthaya", mid: "Classic Kameo Hotel Ayutthaya", premium: "Sala Bang Pa-In" },
  Sukhothai: { budget: "Blue House Sukhothai", mid: "Le Charme Sukhothai Historical Park", premium: "Ananda Museum Gallery Hotel" },
  "Koh Larn": { budget: "Baan I Taley On Sea", mid: "The Castello Resort", premium: "Tawaen Beach Resort" }
};

Object.entries(hotelCatalogAdditions).forEach(([destination, tiers]) => {
  Object.entries(tiers).forEach(([tier, name]) => hotelCatalog[destination][tier].push(name));
});

Object.values(hotelProfiles).forEach((profile) => {
  Object.values(profile).forEach((tier) => {
    const [low, high] = tier.rates;
    tier.rates.push(Math.round(((low + high) / 2) / 50) * 50);
  });
});

const vehicleCatalog = {
  moto: [
    { type: "Scooter", brand: "Honda", model: "Scoopy", year: 2023, rate: 200, capacity: 2 },
    { type: "Scooter", brand: "Honda", model: "Click 125", year: 2025, rate: 250, capacity: 2 },
    { type: "Scooter", brand: "Yamaha", model: "Fazzio", year: 2024, rate: 250, capacity: 2 },
    { type: "Sport scooter", brand: "Honda", model: "Click 160", year: 2025, rate: 350, capacity: 2 },
    { type: "Sport scooter", brand: "Honda", model: "PCX 160", year: 2025, rate: 450, capacity: 2 },
    { type: "Touring scooter", brand: "Yamaha", model: "NMAX 155", year: 2024, rate: 450, capacity: 2 },
    { type: "Touring scooter", brand: "Honda", model: "ADV 160", year: 2025, rate: 500, capacity: 2 },
    { type: "Touring", brand: "Yamaha", model: "XMAX 300", year: 2025, rate: 800, capacity: 2 },
    { type: "Touring", brand: "Honda", model: "Forza 350", year: 2025, rate: 800, capacity: 2 },
    { type: "Touring", brand: "Honda", model: "ADV 350", year: 2025, rate: 900, capacity: 2 }
  ],
  car: [
    { type: "Sedan", brand: "Toyota", model: "Yaris Ativ", year: 2022, rate: 800, capacity: 4 },
    { type: "Sedan", brand: "Honda", model: "City", year: 2023, rate: 1000, capacity: 4 },
    { type: "Sedan", brand: "Toyota", model: "Corolla Altis", year: 2024, rate: 1100, capacity: 4 },
    { type: "Sedan", brand: "Honda", model: "Civic", year: 2024, rate: 1300, capacity: 4 },
    { type: "7-seater", brand: "Mitsubishi", model: "Xpander", year: 2024, rate: 1500, capacity: 7 },
    { type: "7-seater", brand: "Toyota", model: "Fortuner", year: 2024, rate: 1900, capacity: 7 },
    { type: "Van", brand: "Toyota", model: "Commuter", year: 2023, rate: 2200, capacity: 10 },
    { type: "Van", brand: "Hyundai", model: "H-1", year: 2023, rate: 2400, capacity: 10 },
    { type: "Pickup", brand: "Isuzu", model: "D-Max", year: 2023, rate: 1300, capacity: 5 },
    { type: "Pickup", brand: "Toyota", model: "Hilux Revo", year: 2024, rate: 1400, capacity: 5 },
    { type: "Premium", brand: "BMW", model: "X1", year: 2024, rate: 2600, capacity: 4 },
    { type: "Premium", brand: "BMW", model: "5 Series", year: 2023, rate: 3500, capacity: 4 },
    { type: "Premium", brand: "Mercedes-Benz", model: "E-Class", year: 2024, rate: 3800, capacity: 4 }
  ],
  driver: [
    { type: "Sedan", brand: "Toyota", model: "Yaris Ativ + driver", year: 2022, rate: 1700, capacity: 4 },
    { type: "Sedan", brand: "Honda", model: "City + driver", year: 2023, rate: 1900, capacity: 4 },
    { type: "Sedan", brand: "Toyota", model: "Camry + driver", year: 2023, rate: 2200, capacity: 4 },
    { type: "7-seater", brand: "Toyota", model: "Fortuner + driver", year: 2022, rate: 2500, capacity: 7 },
    { type: "7-seater", brand: "Mitsubishi", model: "Pajero Sport + driver", year: 2024, rate: 2700, capacity: 7 },
    { type: "Van", brand: "Toyota", model: "Commuter + driver", year: 2023, rate: 2800, capacity: 10 },
    { type: "Van", brand: "Hyundai", model: "H-1 + driver", year: 2023, rate: 3000, capacity: 10 },
    { type: "Premium", brand: "Mercedes-Benz", model: "E-Class + driver", year: 2023, rate: 4500, capacity: 4 },
    { type: "Premium", brand: "Toyota", model: "Alphard + driver", year: 2024, rate: 5500, capacity: 7 }
  ]
};

const pricing = {
  tiers: {
    budget: { label: "Budget Friendly", perGuestDay: 900, activityPerGuestDay: 250 },
    mid: { label: "Mid-range", perGuestDay: 1450, activityPerGuestDay: 450 },
    premium: { label: "Premium", perGuestDay: 2650, activityPerGuestDay: 850 }
  },
  roomCategoryMultipliers: { normal: 1, family: 1.6, presidential: 4 },
  roomViewMultipliers: { standard: 1, landscape: 1.1, mountain: 1.15, sea: 1.25 }
};

const budgetProfiles = {
  budget: {
    label: "Budget-smart match",
    tier: "budget",
    mealPerGuestDay: 450,
    mealTitle: "Hotel breakfast + local favorites",
    mealPreference: "Local favorites & hidden gems",
    mealOptions: "Hotel breakfast, local favorites, halal-friendly, or vegetarian-friendly places"
  },
  mid: {
    label: "Balanced match",
    tier: "mid",
    mealPerGuestDay: 800,
    mealTitle: "Local favorites + one special meal",
    mealPreference: "Surprise me",
    mealOptions: "Hotel breakfast, local favorites, surprise-me picks, or one special restaurant"
  },
  premium: {
    label: "Premium match",
    tier: "premium",
    mealPerGuestDay: 1500,
    mealTitle: "Curated and high-end dining",
    mealPreference: "High-end restaurant",
    mealOptions: "Hotel breakfast, curated local dining, high-end restaurants, or chef-led experiences"
  }
};

function chargedHotelNights(days) {
  return Math.max(1, days - 1);
}

function roundedHundred(amount) {
  return Math.round(amount / 100) * 100;
}

function roomCapacity(category) {
  return category === "family" || category === "presidential" ? 4 : 2;
}

function requiredRoomCount(category, travelers) {
  return Math.max(1, Math.ceil(travelers / roomCapacity(category)));
}

function requiredVehicleCount(vehicle, travelers) {
  return vehicle ? Math.max(1, Math.ceil(travelers / vehicle.capacity)) : 0;
}

function allowedBudgetOverage(maximum) {
  return Math.min(2500, Math.max(100, roundedHundred(maximum * 0.06)));
}

function travelerPartyTotal(adults, children, seniors) {
  return Math.max(1, Math.round(Number(adults || 1)))
    + Math.max(0, Math.round(Number(children || 0)))
    + Math.max(0, Math.round(Number(seniors || 0)));
}

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const plannerModal = qs("#planner-modal");
const accountModal = qs("#account-modal");
const plannerForm = qs("#planner-form");
const bookingReview = qs(".booking-review");
const destinationSelect = qs("#planner-destination");
const quickDestinationSelect = qs("#quick-destination");
const durationSelect = qs("#planner-duration");
const travelerInput = qs("#traveler-count");
const adultInput = qs("#adult-count");
const childInput = qs("#child-count");
const seniorInput = qs("#senior-count");
const accessibilityLevelSelect = qs("#accessibility-level");
const accessibilityNotesInput = qs("#accessibility-notes");
const hotelSelect = qs("#hotel-choice");
const roomCategorySelect = qs("#room-category");
const roomViewSelect = qs("#room-view");
const bedTypeSelect = qs("#bed-type");
const roomCountInput = qs("#room-count");
const transportSelect = qs("#transport-choice");
const vehicleTypeSelect = qs("#vehicle-type");
const vehicleModelSelect = qs("#vehicle-model");
const vehicleCountInput = qs("#vehicle-count");
const tripBudgetMinInput = qs("#trip-budget-min");
const tripBudgetMaxInput = qs("#trip-budget-max");
const mealBudgetMinInput = qs("#meal-budget-min");
const mealBudgetMaxInput = qs("#meal-budget-max");
const fineDiningInput = qs("#meal-fine-dining");
const tierInputs = qsa('[name="plan-tier"]');
let currentLanguage = "en";
let toastTimer;
let mealPlans = [];
let itineraryPlans = [];
let itineraryCustomized = false;
let roomCountAutomatic = true;
let vehicleCountAutomatic = true;
let lastBudgetRecommendation = null;
let lastBudgetMatches = [];
let appliedMealAllowance = null;
let appliedBestFitOverage = false;
let budgetTierRecalculation = false;
let plannerReturnFocus = null;
let accountReturnFocus = null;

const l = (english, thai) => currentLanguage === "th" ? thai : english;

const plannerStaticCopy = [
  ["#planner-modal .planner-heading .eyebrow", "DESIGN YOUR JOURNEY", "ออกแบบการเดินทางของคุณ"],
  ["#planner-title", "A few details.<br><em>Endless possibilities.</em>", "รายละเอียดเพียงเล็กน้อย<br><em>สร้างความเป็นไปได้ไม่สิ้นสุด</em>", "html"],
  ["label:has(#planner-destination) > span", "Destination", "จุดหมาย"],
  ["label:has(#planner-duration) > span", "Journey length", "ระยะเวลาเดินทาง"],
  ["#planner-duration option[value='1']", "1 day", "1 วัน"],
  ["#planner-duration option[value='3']", "3 days", "3 วัน"],
  ["#planner-duration option[value='7']", "1 week", "1 สัปดาห์"],
  ["#planner-duration option[value='14']", "2 weeks", "2 สัปดาห์"],
  ["#planner-duration option[value='custom']", "Custom duration", "กำหนดจำนวนวันเอง"],
  ["label:has(#custom-days) > span", "Number of days", "จำนวนวัน"],
  ["label:has(#traveler-count) > span", "Total travelers", "จำนวนผู้เดินทางทั้งหมด"],
  ["#traveler-composition-title", "Who is traveling?", "มีใครร่วมเดินทางบ้าง?"],
  [".traveler-composition-head > span", "Maximum 12 guests · the same package estimate is used per traveler until the final quote.", "สูงสุด 12 คน · ใช้อัตราแพ็กเกจประมาณการเดียวกันต่อคนจนกว่าจะมีใบเสนอราคาสุดท้าย"],
  ["label:has(#adult-count) > span", "Adults", "ผู้ใหญ่"],
  ["label:has(#child-count) > span", "Children", "เด็ก"],
  ["label:has(#senior-count) > span", "Seniors", "ผู้สูงอายุ"],
  ["label:has(#start-date) > span", "Preferred start date", "วันที่ต้องการเริ่มเดินทาง"],
  ["label:has(#planner-style) > span", "Travel style", "สไตล์การเดินทาง"],
  ["#planner-style option:nth-child(1)", "Slow & serene", "สบายและสงบ"],
  ["#planner-style option:nth-child(2)", "Social & vibrant", "สนุกและมีสีสัน"],
  ["#planner-style option:nth-child(3)", "Family explorer", "ครอบครัวนักสำรวจ"],
  ["#planner-style option:nth-child(4)", "Island reset", "พักใจบนเกาะ"],
  ["label:has(#pickup-point) > span", "Arrival or pickup point", "จุดรับเมื่อเดินทางถึง"],
  ["#pickup-point option:nth-child(1)", "Airport or station", "สนามบินหรือสถานี"],
  ["#pickup-point option:nth-child(2)", "Hotel", "โรงแรม"],
  ["#pickup-point option:nth-child(3)", "Meet in the city", "พบกันในเมือง"],
  ["#pickup-point option:nth-child(4)", "No pickup needed", "ไม่ต้องการรถรับ"],
  ["label:has(#arrival-details) > span", "Arrival details · optional", "รายละเอียดการเดินทางถึง · ไม่บังคับ"],
  ["label:has(#must-see) > span", "Must-see places & activities · optional", "สถานที่และกิจกรรมที่ต้องไป · ไม่บังคับ"],
  ["label:has(#accessibility-level) > span", "Accessibility preference", "ความต้องการด้านการเข้าถึง"],
  ["#accessibility-level option[value='none']", "No special requirement", "ไม่มีความต้องการพิเศษ"],
  ["#accessibility-level option[value='step-free']", "Step-free routes", "เส้นทางไม่มีขั้นบันได"],
  ["#accessibility-level option[value='wheelchair']", "Wheelchair-friendly planning", "แผนที่รองรับรถเข็น"],
  ["#accessibility-level option[value='reduced-walking']", "Reduced walking and more rest", "เดินน้อยลงและพักมากขึ้น"],
  ["#accessibility-level option[value='sensory']", "Visual, hearing, or sensory support", "การช่วยเหลือด้านการมองเห็น การได้ยิน หรือประสาทสัมผัส"],
  ["#accessibility-level option[value='other']", "Other requirement", "ความต้องการอื่น"],
  ["label:has(#accessibility-notes) > span", "Accessibility notes · optional", "รายละเอียดการเข้าถึง · ไม่บังคับ"],
  [".trip-scope-note strong", "What Twar Mal arranges", "สิ่งที่ Twar Mal จัดให้"],
  [".trip-scope-note span:nth-child(2)", "Your editable itinerary, selected activity allowance, hotel, and local transportation after arrival.", "แผนเที่ยวที่แก้ไขได้ งบกิจกรรมที่เลือก โรงแรม และการเดินทางในพื้นที่หลังมาถึง"],
  [".trip-scope-note span:nth-child(3)", "<b>Not sold here:</b> flights, intercity bus or train tickets, and restaurant or delivery bills.", "<b>ไม่ได้จำหน่ายที่นี่:</b> ตั๋วเครื่องบิน รถโดยสารหรือรถไฟระหว่างเมือง และค่าอาหารหรือเดลิเวอรี", "html"],
  [".budget-kicker", "SMART BUDGET PLANNER", "ระบบวางแผนงบอัจฉริยะ"],
  ["#budget-title", "What is your total trip budget?", "งบรวมสำหรับทริปของคุณเท่าไร?"],
  [".budget-advisor-head > div:first-child > p", "Tell us your minimum and maximum total in THB. We will match the travel package, hotel room, included activity allowance, transportation, and an optional meal budget.", "ระบุงบขั้นต่ำและสูงสุดเป็นเงินบาท เราจะจับคู่แพ็กเกจ ห้องพัก งบกิจกรรมที่รวมอยู่ การเดินทาง และงบอาหารที่เลือกใส่ได้"],
  ["label[for='trip-budget-min'] > span", "Minimum budget · THB", "งบขั้นต่ำ · บาท"],
  ["label[for='trip-budget-min'] > small", "The least you plan to spend.", "ยอดต่ำสุดที่วางแผนจะใช้"],
  ["label[for='trip-budget-max'] > span", "Maximum budget · THB", "งบสูงสุด · บาท"],
  ["label[for='trip-budget-max'] > small", "Your limit for the website total plus any meal budget you enter.", "วงเงินสูงสุดสำหรับยอดเว็บไซต์รวมกับงบอาหารที่คุณระบุ"],
  ["#apply-budget", "Use best-fit suggestions", "ใช้คำแนะนำที่เหมาะที่สุด"],
  ["#budget-recommendations article:nth-child(1) > span", "01 · TRAVEL PACKAGE", "01 · แพ็กเกจท่องเที่ยว"],
  ["#budget-recommendations article:nth-child(2) > span", "02 · HOTEL ROOM", "02 · ห้องพัก"],
  ["#budget-recommendations article:nth-child(3) > span", "03 · ATTRACTIONS & ACTIVITIES", "03 · สถานที่และกิจกรรม"],
  ["#budget-recommendations article:nth-child(4) > span", "04 · TRANSPORTATION", "04 · การเดินทาง"],
  ["#budget-recommendations article:nth-child(5) > span", "05 · MEALS", "05 · มื้ออาหาร"],
  [".tier-picker > legend", "Comfort level", "ระดับความสะดวกสบาย"],
  [".tier-picker-grid label:nth-child(1) strong", "Budget Friendly", "ประหยัด"],
  [".tier-picker-grid label:nth-child(2) strong", "Mid-range", "ระดับกลาง"],
  [".tier-picker-grid label:nth-child(3) strong", "Premium", "พรีเมียม"],
  ["label:has(#hotel-choice) > span", "Hotel", "โรงแรม"],
  ["label:has(#room-category) > span", "Room category", "ประเภทห้อง"],
  ["#room-category option[value='normal']", "Normal room · base rate", "ห้องปกติ · ราคาพื้นฐาน"],
  ["#room-category option[value='family']", "Family room · +60%", "ห้องครอบครัว · +60%"],
  ["#room-category option[value='presidential']", "Presidential room · ×4", "ห้องเพรสซิเดนเชียล · ×4"],
  ["label:has(#room-view) > span", "Room view", "วิวห้องพัก"],
  ["#room-view option[value='standard']", "Standard / no special view · included", "วิวมาตรฐาน / ไม่มีวิวพิเศษ · รวมแล้ว"],
  ["#room-view option[value='landscape']", "Landscape view · +10%", "วิวทิวทัศน์ · +10%"],
  ["#room-view option[value='mountain']", "Mountain view · +15%", "วิวภูเขา · +15%"],
  ["#room-view option[value='sea']", "Sea view · +25%", "วิวทะเล · +25%"],
  ["label:has(#bed-type) > span", "Bed type · no price change", "ประเภทเตียง · ราคาไม่เปลี่ยน"],
  ["#bed-type option[value='single']", "Single bed", "เตียงเดี่ยว"],
  ["#bed-type option[value='twin']", "Twin beds", "เตียงคู่แยก"],
  ["#bed-type option[value='king']", "King-size bed", "เตียงคิงไซส์"],
  ["label:has(#bed-type) > small", "Bed choice does not change the room price.", "การเลือกเตียงไม่เปลี่ยนราคาห้อง"],
  ["label:has(#room-count) > span", "Number of rooms", "จำนวนห้อง"],
  ["label:has(#transport-choice) > span", "Getting around", "การเดินทางในพื้นที่"],
  ["#transport-choice option[value='none']", "No Twar Mal transportation · ฿0", "ไม่ใช้รถของ Twar Mal · ฿0"],
  ["#transport-choice option[value='moto']", "Motorcycle rental · model-based", "เช่ามอเตอร์ไซค์ · ราคาตามรุ่น"],
  ["label:has(#vehicle-type) > span", "Vehicle type", "ประเภทรถ"],
  ["label:has(#vehicle-model) > span", "Brand, model & year", "ยี่ห้อ รุ่น และปี"],
  [".meal-planner > legend", "Meal planner · restaurant bills are not added", "วางแผนมื้ออาหาร · ไม่รวมค่าอาหารจากร้าน"],
  [".meal-planner > p", "Set a meal budget for the whole trip, then plan breakfast, lunch, or dinner for any day. Customers pay restaurants directly. You can still reserve part of a modest meal budget for one fine-dining experience.", "กำหนดงบอาหารทั้งทริป แล้ววางแผนอาหารเช้า กลางวัน หรือเย็นในแต่ละวัน ลูกค้าชำระกับร้านโดยตรง และสามารถกันงบสำหรับมื้อไฟน์ไดนิ่งหนึ่งมื้อได้"],
  ["label[for='meal-budget-min'] > span", "Meal budget minimum · THB", "งบอาหารขั้นต่ำ · บาท"],
  ["label[for='meal-budget-min'] > small", "Total restaurant allowance for the whole trip.", "งบค่าอาหารรวมตลอดทริป"],
  ["label[for='meal-budget-max'] > span", "Meal budget maximum · THB", "งบอาหารสูงสุด · บาท"],
  ["label[for='meal-budget-max'] > small", "This remains outside the website card payment.", "ยอดนี้ไม่รวมในการชำระผ่านเว็บไซต์"],
  [".fine-dining-toggle strong", "Keep room for one fine-dining meal", "กันงบสำหรับไฟน์ไดนิ่งหนึ่งมื้อ"],
  [".fine-dining-toggle small", "Assign it to breakfast, lunch, or dinner below. The planner protects a sensible allowance for that one special meal.", "กำหนดเป็นมื้อเช้า กลางวัน หรือเย็นด้านล่าง ระบบจะกันงบที่เหมาะสมสำหรับมื้อพิเศษนี้"],
  ["label:has(#meal-day) > span", "Day", "วัน"],
  ["label:has(#meal-type) > span", "Meal", "มื้ออาหาร"],
  ["#meal-type option[value='Breakfast']", "Breakfast", "อาหารเช้า"],
  ["#meal-type option[value='Lunch']", "Lunch", "อาหารกลางวัน"],
  ["#meal-type option[value='Dinner']", "Dinner", "อาหารเย็น"],
  ["label:has(#meal-preference) > span", "Preference", "ความต้องการ"],
  ["#meal-preference option[value='Breakfast at hotel']", "Breakfast at hotel", "อาหารเช้าที่โรงแรม"],
  ["#meal-preference option[value='Local favorites & hidden gems']", "Local favorites & hidden gems", "ร้านท้องถิ่นและร้านลับ"],
  ["#meal-preference option[value='Halal-friendly']", "Halal-friendly", "อาหารฮาลาล"],
  ["#meal-preference option[value='Vegetarian-friendly']", "Vegetarian-friendly", "อาหารมังสวิรัติ"],
  ["#meal-preference option[value='High-end restaurant']", "High-end restaurant", "ร้านอาหารระดับสูง"],
  ["#meal-preference option[value='Surprise me']", "Surprise me", "ให้เราเลือกให้"],
  ["label:has(#restaurant-name) > span", "Restaurant", "ร้านอาหาร"],
  ["#add-meal", "Add this meal <span>＋</span>", "เพิ่มมื้อนี้ <span>＋</span>", "html"],
  [".itinerary-heading legend", "Day-by-day itinerary", "แผนเที่ยวรายวัน"],
  [".itinerary-heading p", "Start with suggestions for your destination, travel style, ages, accessibility needs, meals, and must-see places. Every time slot remains editable.", "เริ่มจากคำแนะนำตามจุดหมาย สไตล์ อายุ ความต้องการด้านการเข้าถึง มื้ออาหาร และสถานที่ที่ต้องไป ทุกช่วงเวลายังแก้ไขได้"],
  ["#regenerate-itinerary", "Regenerate suggestions", "สร้างคำแนะนำใหม่"],
  [".itinerary-note", "Suggested stops are not reservations. Exact opening hours, tickets, travel times, accessibility, and availability are confirmed in the final quotation.", "สถานที่ที่แนะนำยังไม่ใช่การจอง เวลาเปิด บัตรเข้าชม เวลาเดินทาง การเข้าถึง และห้องว่างจะยืนยันในใบเสนอราคาสุดท้าย"],
  ["label:has(#special-request) > span", "Anything you want to add or change?", "ต้องการเพิ่มหรือเปลี่ยนอะไรไหม?"],
  [".estimate-status", "Estimate only · final written quote before any real payment", "เป็นเพียงประมาณการ · ต้องมีใบเสนอราคาสุดท้ายก่อนชำระเงินจริง"],
  ["#review-trip-button", "Review & confirm <span>→</span>", "ตรวจสอบและยืนยัน <span>→</span>", "html"],
  [".estimate-disclaimer", "Hotel estimates are added to this total and confirmed for your dates before payment. Restaurant bills are never included. Seasonal rates, availability, taxes, fuel, parking, ferries, overtime, and deposits may change the final confirmed quote.", "รวมราคาโรงแรมโดยประมาณในยอดนี้และจะยืนยันตามวันที่ก่อนชำระ ไม่รวมค่าอาหารจากร้าน ราคาตามฤดูกาล ห้องว่าง ภาษี เชื้อเพลิง ที่จอดรถ เรือเฟอร์รี ล่วงเวลา และเงินมัดจำอาจทำให้ใบเสนอราคาสุดท้ายเปลี่ยนแปลง"],
  [".review-card .eyebrow", "YOUR JOURNEY", "การเดินทางของคุณ"],
  [".review-total span", "Estimated website payment", "ยอดชำระผ่านเว็บไซต์โดยประมาณ"],
  [".review-confirmation-note", "Not a confirmed booking · availability and the final written quotation must be accepted first.", "ยังไม่ใช่การจองที่ยืนยันแล้ว · ต้องยืนยันห้องว่างและยอมรับใบเสนอราคาสุดท้ายก่อน"],
  [".secure-row strong", "Card payment", "ชำระด้วยบัตร"],
  [".secure-row small", "Prototype checkout · no charge will be made", "ระบบชำระเงินต้นแบบ · ไม่มีการเรียกเก็บเงินจริง"],
  [".checkout-card .demo-warning", "<strong>Demonstration only.</strong> Never enter a real card number. Use the safe test details below.", "<strong>สำหรับสาธิตเท่านั้น</strong> ห้ามใส่เลขบัตรจริง โปรดใช้ข้อมูลทดสอบที่ปลอดภัยด้านล่าง", "html"],
  ["#fill-test-card", "Fill safe test card", "กรอกบัตรทดสอบที่ปลอดภัย"],
  ["label:has(#card-name) > span", "Name on card", "ชื่อบนบัตร"],
  ["label:has(#card-number) > span", "Card number", "หมายเลขบัตร"],
  ["label:has(#card-expiry) > span", "Expiry", "วันหมดอายุ"],
  ["label:has(#card-cvc) > span", "CVC", "รหัส CVC"],
  ["#demo-payment", "Complete test booking", "เสร็จสิ้นการจองทดสอบ"],
  [".checkout-card > p:last-child", "Nothing is submitted or stored. Live card processing requires a certified payment provider and secure backend before launch.", "ไม่มีข้อมูลถูกส่งหรือจัดเก็บ การรับชำระเงินจริงต้องใช้ผู้ให้บริการที่ได้รับการรับรองและระบบหลังบ้านที่ปลอดภัยก่อนเปิดบริการ"],
  [".back-to-plan", "← Edit journey", "← แก้ไขแผนเที่ยว"]
];

const plannerPlaceholderCopy = [
  ["#arrival-details", "Flight or train number, arrival time, hotel, or meeting point", "หมายเลขเที่ยวบินหรือรถไฟ เวลาถึง โรงแรม หรือจุดนัดพบ"],
  ["#must-see", "Temples, beaches, markets, nightlife, accessible activities, or exact places you want included…", "วัด ชายหาด ตลาด ชีวิตกลางคืน กิจกรรมที่เข้าถึงได้ หรือสถานที่ที่ต้องการ…"],
  ["#accessibility-notes", "Mobility equipment, pace, assistance, or room access", "อุปกรณ์ช่วยเคลื่อนไหว จังหวะ การช่วยเหลือ หรือการเข้าห้อง"],
  ["#restaurant-name", "Hotel, restaurant name, or leave for us", "ชื่อโรงแรม ร้านอาหาร หรือให้เราเลือก"],
  ["#special-request", "Places you love, mobility needs, hotel preference, celebrations…", "สถานที่ที่ชอบ ความต้องการด้านการเคลื่อนไหว โรงแรม งานฉลอง…"]
];

function applyPlannerStaticLanguage() {
  plannerStaticCopy.forEach(([selector, english, thai, mode]) => qsa(selector).forEach((element) => {
    if (mode === "html") element.innerHTML = l(english, thai);
    else element.textContent = l(english, thai);
  }));
  plannerPlaceholderCopy.forEach(([selector, english, thai]) => qsa(selector).forEach((element) => {
    element.placeholder = l(english, thai);
  }));
  qs("[data-close-modal]").setAttribute("aria-label", l("Close planner", "ปิดหน้าวางแผน"));
}

function travelerComposition() {
  const adults = Math.max(1, Math.round(Number(adultInput.value || 1)));
  const children = Math.max(0, Math.round(Number(childInput.value || 0)));
  const seniors = Math.max(0, Math.round(Number(seniorInput.value || 0)));
  const total = travelerPartyTotal(adults, children, seniors);
  return { adults, children, seniors, total, invalid: total > 12 };
}

function syncTravelerComposition(showNotice = false) {
  const composition = travelerComposition();
  travelerInput.value = String(composition.total);
  const message = composition.invalid
    ? l("Maximum 12 travelers. Reduce one or more groups.", "รองรับผู้เดินทางสูงสุด 12 คน กรุณาลดจำนวนในหนึ่งกลุ่มขึ้นไป")
    : currentLanguage === "th"
      ? `ผู้ใหญ่ ${composition.adults} คน · เด็ก ${composition.children} คน · ผู้สูงอายุ ${composition.seniors} คน · รวม ${composition.total} คน`
      : `${composition.adults} adult${composition.adults === 1 ? "" : "s"} · ${composition.children} child${composition.children === 1 ? "" : "ren"} · ${composition.seniors} senior${composition.seniors === 1 ? "" : "s"} · ${composition.total} total`;
  [adultInput, childInput, seniorInput].forEach((input) => {
    input.setCustomValidity(composition.invalid ? l("The traveler total cannot exceed 12.", "จำนวนผู้เดินทางรวมต้องไม่เกิน 12 คน") : "");
    input.toggleAttribute("aria-invalid", composition.invalid);
  });
  const status = qs("#traveler-status");
  status.textContent = message;
  status.classList.toggle("invalid", composition.invalid);
  if (showNotice && composition.invalid) showToast(message);
  return composition;
}

function translatedHighlight(pair) {
  return pair?.[currentLanguage === "th" ? 1 : 0] || l("Flexible local discovery", "เที่ยวชมท้องถิ่นแบบยืดหยุ่น");
}

function eveningSuggestion(style) {
  const suggestions = {
    "Slow & serene": ["Gentle dinner area and an early rest", "ย่านอาหารค่ำบรรยากาศสบายและพักผ่อนเร็ว"],
    "Social & vibrant": ["Lively market, café, or nightlife area", "ตลาด คาเฟ่ หรือย่านกลางคืนที่มีชีวิตชีวา"],
    "Family explorer": ["Easy family dinner and relaxed evening", "มื้อเย็นสำหรับครอบครัวและช่วงค่ำสบาย ๆ"],
    "Island reset": ["Sunset, beach time, and a quiet evening", "ชมพระอาทิตย์ตก พักริมหาด และค่ำคืนสงบ"]
  };
  return translatedHighlight(suggestions[style] || suggestions["Slow & serene"]);
}

function itineraryTransportSummary() {
  const vehicle = selectedVehicle();
  if (!vehicle) return l("Transport: arrange independently", "การเดินทาง: จัดเอง");
  return currentLanguage === "th"
    ? `การเดินทาง: ${vehicle.brand} ${vehicle.model}`
    : `Transport: ${vehicle.brand} ${vehicle.model}`;
}

function suggestedItineraryDay(day) {
  const highlights = destinationHighlights[destinationSelect.value] || [];
  const composition = travelerComposition();
  const accessibility = accessibilityLevelSelect.value;
  const gentle = composition.seniors > 0 || accessibility !== "none";
  const first = translatedHighlight(highlights[((day - 1) * 2) % Math.max(1, highlights.length)]);
  const second = translatedHighlight(highlights[((day - 1) * 2 + 1) % Math.max(1, highlights.length)]);
  const mustSee = qs("#must-see").value.trim();
  const morning = day === 1
    ? l(`Arrival or pickup, then ${first}`, `รับหรือพบกันเมื่อเดินทางถึง แล้วไป${first}`)
    : gentle
      ? l(`Relaxed start, then ${first}`, `เริ่มวันแบบสบาย ๆ แล้วไป${first}`)
      : first;
  const afternoon = mustSee && day === 1 ? mustSee : gentle
    ? l(`${second} with extra rest and easy access`, `${second} พร้อมเวลาพักและเส้นทางที่สะดวกขึ้น`)
    : second;
  const evening = eveningSuggestion(qs("#planner-style").value);
  return { day, morning, afternoon, evening };
}

function syncItineraryDays(force = false) {
  const days = durationDays();
  if (force) itineraryCustomized = false;
  const existing = new Map(itineraryPlans.map((item) => [item.day, item]));
  itineraryPlans = Array.from({ length: days }, (_, index) => {
    const day = index + 1;
    return !force && existing.has(day) ? existing.get(day) : suggestedItineraryDay(day);
  });
  renderItineraryPlans();
}

function renderItineraryPlans() {
  const list = qs("#itinerary-list");
  if (!list) return;
  list.innerHTML = "";
  itineraryPlans.forEach((item) => {
    const card = document.createElement("article");
    card.className = "itinerary-day";
    const head = document.createElement("div");
    head.className = "itinerary-day-head";
    const title = document.createElement("strong");
    title.textContent = currentLanguage === "th" ? `วันที่ ${item.day}` : `Day ${item.day}`;
    const transport = document.createElement("span");
    transport.textContent = itineraryTransportSummary();
    head.append(title, transport);
    const slots = document.createElement("div");
    slots.className = "itinerary-slots";
    [["morning", l("Morning", "ช่วงเช้า")], ["afternoon", l("Afternoon", "ช่วงบ่าย")], ["evening", l("Evening", "ช่วงเย็น")]].forEach(([slot, labelText]) => {
      const label = document.createElement("label");
      label.className = "field";
      const span = document.createElement("span");
      span.textContent = labelText;
      const input = document.createElement("input");
      input.type = "text";
      input.value = item[slot];
      input.dataset.itineraryDay = String(item.day);
      input.dataset.itinerarySlot = slot;
      input.setAttribute("aria-label", `${title.textContent} ${labelText}`);
      label.append(span, input);
      slots.append(label);
    });
    const dayMeals = mealPlans.filter((meal) => meal.day === item.day);
    const meals = document.createElement("p");
    meals.className = "itinerary-day-meals";
    meals.textContent = dayMeals.length
      ? `${l("Meals", "มื้ออาหาร")}: ${dayMeals.map((meal) => `${localizedMealName(meal.meal)} · ${meal.restaurant}`).join(" | ")}`
      : l("Meals: flexible · restaurant costs remain outside the website payment", "มื้ออาหาร: ยืดหยุ่น · ค่าอาหารไม่รวมในการชำระบนเว็บไซต์");
    card.append(head, slots, meals);
    list.append(card);
  });
}

function clearAppliedBestFit() {
  appliedMealAllowance = null;
  appliedBestFitOverage = false;
}

destinations.forEach((name) => {
  const option = document.createElement("option");
  option.value = option.textContent = name;
  destinationSelect.append(option);
});
destinationSelect.value = "Bangkok";
quickDestinationSelect.innerHTML = destinations.map((name) => `<option value="${name}">${name}</option>`).join("");
quickDestinationSelect.value = "Bangkok";

function localDateInputValue(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().split("T")[0];
}

function formatTripDateRange(startValue, days) {
  if (!startValue) return l("To be confirmed", "รอยืนยัน");
  const start = new Date(`${startValue}T00:00:00`);
  const end = new Date(start);
  end.setDate(end.getDate() + days - 1);
  const formatter = new Intl.DateTimeFormat(currentLanguage === "th" ? "th-TH" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  return days === 1 ? formatter.format(start) : `${formatter.format(start)} – ${formatter.format(end)}`;
}

const earliestStart = new Date();
earliestStart.setDate(earliestStart.getDate() + 1);
const suggestedStart = new Date();
suggestedStart.setDate(suggestedStart.getDate() + 21);
qs("#start-date").min = localDateInputValue(earliestStart);
qs("#start-date").value = localDateInputValue(suggestedStart);

function formatTHB(amount) {
  return new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(amount);
}

function durationDays() {
  const selected = durationSelect.value === "custom" ? Number(qs("#custom-days").value || 1) : Number(durationSelect.value);
  return Math.min(30, Math.max(1, Math.round(selected)));
}

function travelerCount() {
  return Math.max(1, travelerComposition().total);
}

function setRangeValidity(minInput, maxInput, label, minimumAllowed = 0) {
  const minimum = Number(minInput.value || 0);
  const maximum = Number(maxInput.value || 0);
  const hasMinimum = minInput.value !== "";
  const hasMaximum = maxInput.value !== "";
  const minimumTooLow = hasMinimum && minimum < minimumAllowed;
  const maximumTooLow = hasMaximum && maximum < minimumAllowed;
  const invalidOrder = hasMinimum && hasMaximum && minimum > maximum;
  const invalid = minimumTooLow || maximumTooLow || invalidOrder;
  minInput.setCustomValidity(minimumTooLow
    ? currentLanguage === "th" ? `งบขั้นต่ำต้องไม่น้อยกว่า ${formatTHB(minimumAllowed)}` : `${label} minimum must be at least ${formatTHB(minimumAllowed)}.`
    : invalidOrder ? l(`${label} minimum cannot be higher than the maximum.`, "งบขั้นต่ำต้องไม่สูงกว่างบสูงสุด") : "");
  maxInput.setCustomValidity(maximumTooLow
    ? currentLanguage === "th" ? `งบสูงสุดต้องไม่น้อยกว่า ${formatTHB(minimumAllowed)}` : `${label} maximum must be at least ${formatTHB(minimumAllowed)}.`
    : invalidOrder ? l(`${label} maximum cannot be lower than the minimum.`, "งบสูงสุดต้องไม่ต่ำกว่างบขั้นต่ำ") : "");
  minInput.toggleAttribute("aria-invalid", invalid);
  maxInput.toggleAttribute("aria-invalid", invalid);
  maxInput.min = String(hasMinimum ? Math.max(minimumAllowed, minimum) : minimumAllowed);
  minInput.max = hasMaximum ? String(maximum) : "";
  return { minimum, maximum, hasMinimum, hasMaximum, invalid, minimumTooLow, maximumTooLow, invalidOrder };
}

function tripBudgetRange() {
  return setRangeValidity(tripBudgetMinInput, tripBudgetMaxInput, "Trip budget", 1000);
}

function mealBudgetRange(profileKey = selectedTier()) {
  const range = setRangeValidity(mealBudgetMinInput, mealBudgetMaxInput, "Meal budget", 0);
  const days = Math.max(1, durationDays());
  const travelers = Math.max(1, Number(travelerInput.value || 1));
  const hasBudget = range.hasMinimum && range.hasMaximum;
  const base = budgetProfiles[profileKey].mealPerGuestDay * travelers * days;
  const fineDiningSupplement = fineDiningInput.checked ? 1400 * travelers : 0;
  const suggested = hasBudget ? roundedHundred(base + fineDiningSupplement) : 0;
  const minimum = hasBudget ? range.minimum : 0;
  const maximum = hasBudget ? range.maximum : 0;
  return { ...range, hasBudget, minimum, maximum, suggested, fineDiningSupplement };
}

function selectedTier() {
  return qs('[name="plan-tier"]:checked').value;
}

function chooseTier(tier) {
  const input = qs(`[name="plan-tier"][value="${tier}"]`);
  if (input) input.checked = true;
}

function syncHotels(preserveSelection = false) {
  const catalog = hotelCatalog[destinationSelect.value];
  const tier = selectedTier();
  const profile = hotelProfiles[catalog.profile][tier];
  const previous = preserveSelection ? hotelSelect.value : "";
  hotelSelect.innerHTML = "";
  catalog[tier].forEach((name, index) => {
    const option = document.createElement("option");
    option.value = `${tier}-${index}`;
    option.dataset.rate = String(profile.rates[index] || profile.rates[0]);
    option.textContent = currentLanguage === "th"
      ? `${name} · ประมาณ ${formatTHB(Number(option.dataset.rate))} / ห้อง / คืน`
      : `${name} · est. ${formatTHB(Number(option.dataset.rate))} / room / night`;
    hotelSelect.append(option);
  });
  const recommend = document.createElement("option");
  recommend.value = "recommend";
  recommend.dataset.rate = String(profile.rates[0]);
  recommend.textContent = currentLanguage === "th"
    ? `ให้ Twar Mal แนะนำโรงแรม${localizedTierLabel(tier)}แห่งอื่น`
    : `Let Twar Mal recommend another ${pricing.tiers[tier].label.toLowerCase()} hotel`;
  hotelSelect.append(recommend);
  const own = document.createElement("option");
  own.value = "own";
  own.dataset.rate = "0";
  own.textContent = l("I’ll book my own hotel · ฿0", "ฉันจะจองโรงแรมเอง · ฿0");
  hotelSelect.append(own);
  if (previous && qsa("option", hotelSelect).some((option) => option.value === previous)) hotelSelect.value = previous;
  qs("#hotel-range-note").textContent = currentLanguage === "th"
    ? `${destinationSelect.value} · ช่วงราคา${localizedTierLabel(tier)} ${profile.range} ต่อห้อง/คืน ตัวอย่างเป็นราคาประมาณการเพื่อวางแผน วันที่จริงจะยืนยันก่อนชำระเงิน`
    : `${destinationSelect.value} · ${pricing.tiers[tier].label} range ${profile.range} per room/night. Examples are researched planning estimates; live dates are confirmed before payment.`;
  syncHotelFields();
  syncRoomRequirement();
}

function syncHotelFields() {
  const hotelBookedSeparately = hotelSelect.value === "own";
  [roomCategorySelect, roomViewSelect, bedTypeSelect, roomCountInput].forEach((input) => {
    input.disabled = hotelBookedSeparately;
  });
  if (hotelBookedSeparately) qs("#hotel-range-note").textContent = l("Hotel booked separately — no room charge is added to the Twar Mal estimate.", "จองโรงแรมแยกเอง — ไม่เพิ่มค่าห้องในประมาณการของ Twar Mal");
}

function selectedHotelRate() {
  return Number(hotelSelect.selectedOptions[0]?.dataset.rate || 0);
}

function selectedVehicle() {
  if (transportSelect.value === "none") return null;
  return vehicleCatalog[transportSelect.value].find((vehicle) => vehicleModelSelect.value === `${vehicle.brand}-${vehicle.model}-${vehicle.year}`) || null;
}

function syncRoomRequirement(showNotice = false) {
  if (hotelSelect.value === "own") {
    roomCountInput.min = "1";
    qs("#room-capacity-note").textContent = l("No room quantity is charged because the hotel is booked separately.", "ไม่คิดจำนวนห้องเพราะจองโรงแรมแยกเอง");
    return;
  }
  const required = requiredRoomCount(roomCategorySelect.value, travelerCount());
  const entered = Math.max(1, Math.round(Number(roomCountInput.value || 1)));
  roomCountInput.min = String(required);
  if (roomCountAutomatic || entered < required) {
    roomCountInput.value = String(required);
    if (showNotice && entered < required) showToast(currentLanguage === "th" ? `เพิ่มจำนวนห้องเป็น ${required} ห้องสำหรับผู้เดินทาง ${travelerCount()} คน` : `Room quantity increased to ${required} for ${travelerCount()} travelers.`);
  }
  qs("#room-capacity-note").textContent = currentLanguage === "th"
    ? `วางแผน ${roomCapacity(roomCategorySelect.value)} คนต่อห้อง · ขั้นต่ำ ${required} ห้อง`
    : `${roomCapacity(roomCategorySelect.value)} guests per room for planning · minimum ${required} room${required > 1 ? "s" : ""}.`;
}

function syncVehicleRequirement(showNotice = false) {
  const vehicle = selectedVehicle();
  if (!vehicle) {
    vehicleCountInput.min = "1";
    qs("#vehicle-capacity-note").textContent = l("Minimum quantity is calculated when a vehicle is selected.", "ระบบจะคำนวณจำนวนขั้นต่ำเมื่อเลือกรถ");
    return;
  }
  const required = requiredVehicleCount(vehicle, travelerCount());
  const entered = Math.max(1, Math.round(Number(vehicleCountInput.value || 1)));
  vehicleCountInput.min = String(required);
  if (vehicleCountAutomatic || entered < required) {
    vehicleCountInput.value = String(required);
    if (showNotice && entered < required) showToast(currentLanguage === "th" ? `เพิ่มจำนวนรถเป็น ${required} คันสำหรับผู้เดินทาง ${travelerCount()} คน` : `Vehicle quantity increased to ${required} for ${travelerCount()} travelers.`);
  }
  qs("#vehicle-capacity-note").textContent = currentLanguage === "th"
    ? `${vehicle.capacity} คนต่อคัน · ขั้นต่ำ ${required} คัน`
    : `${vehicle.capacity} guests per vehicle · minimum ${required} vehicle${required > 1 ? "s" : ""}.`;
}

function syncVehicleModels() {
  const mode = transportSelect.value;
  if (mode === "none") return;
  const previous = vehicleModelSelect.value;
  vehicleModelSelect.innerHTML = "";
  vehicleCatalog[mode].filter((vehicle) => vehicle.type === vehicleTypeSelect.value).forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = `${vehicle.brand}-${vehicle.model}-${vehicle.year}`;
    option.textContent = `${vehicle.brand} ${vehicle.model} · ${vehicle.year} · ${formatTHB(vehicle.rate)} / ${l("day", "วัน")}`;
    vehicleModelSelect.append(option);
  });
  if (qsa("option", vehicleModelSelect).some((option) => option.value === previous)) vehicleModelSelect.value = previous;
}

function syncTransportFields(showNotice = false) {
  const isKohLarn = destinationSelect.value === "Koh Larn";
  const carOption = qs('#transport-choice option[value="car"]');
  const driverOption = qs('#transport-choice option[value="driver"]');
  carOption.disabled = isKohLarn;
  driverOption.disabled = isKohLarn;
  carOption.textContent = isKohLarn ? l("Self-drive car · unavailable on Koh Larn", "รถยนต์ขับเอง · ไม่มีบริการบนเกาะล้าน") : l("Self-drive car · from ฿800 / day", "รถยนต์ขับเอง · เริ่ม ฿800 / วัน");
  driverOption.textContent = isKohLarn ? l("Private car + driver · unavailable on Koh Larn", "รถส่วนตัวพร้อมคนขับ · ไม่มีบริการบนเกาะล้าน") : l("Private car + driver · from ฿1,700 / day", "รถส่วนตัวพร้อมคนขับ · เริ่ม ฿1,700 / วัน");

  if (isKohLarn && ["car", "driver"].includes(transportSelect.value)) {
    transportSelect.value = "moto";
    if (showNotice) showToast(l("Koh Larn allows motorcycle rental only — your transport was changed.", "เกาะล้านให้เช่าเฉพาะมอเตอร์ไซค์ ระบบจึงเปลี่ยนตัวเลือกการเดินทางแล้ว"));
  }

  const hasVehicle = transportSelect.value !== "none";
  qsa(".vehicle-detail-field").forEach((field) => { field.hidden = !hasVehicle; });
  qs(".vehicle-count-field").hidden = !hasVehicle;
  if (!hasVehicle) {
    qs("#transport-policy").textContent = isKohLarn ? l("Koh Larn: only motorcycle rental is available.", "เกาะล้าน: มีเฉพาะมอเตอร์ไซค์ให้เช่า") : l("Choose a vehicle type and model to see its daily rate.", "เลือกประเภทรถและรุ่นเพื่อดูราคาต่อวัน");
    syncVehicleRequirement();
    return;
  }

  const mode = transportSelect.value;
  const previousType = vehicleTypeSelect.value;
  const types = [...new Set(vehicleCatalog[mode].map((vehicle) => vehicle.type))];
  vehicleTypeSelect.innerHTML = types.map((type) => `<option value="${type}">${localizedVehicleType(type)}</option>`).join("");
  if (types.includes(previousType)) vehicleTypeSelect.value = previousType;
  syncVehicleModels();
  qs("#vehicle-count-label").textContent = mode === "moto" ? l("Motorcycles", "มอเตอร์ไซค์") : mode === "driver" ? l("Driver vehicles", "รถพร้อมคนขับ") : l("Cars", "รถยนต์");
  const vehicle = selectedVehicle();
  qs("#transport-policy").textContent = isKohLarn
    ? currentLanguage === "th" ? `ราคามอเตอร์ไซค์เกาะล้าน: ${formatTHB(vehicle?.rate || 200)} ต่อคัน/วัน` : `Koh Larn motorcycle rate: ${formatTHB(vehicle?.rate || 200)} per vehicle/day.`
    : currentLanguage === "th"
      ? `${vehicle ? `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} ต่อคัน/วัน` : "เลือกรุ่นรถ"} ค่าเชื้อเพลิง ทางด่วน ที่จอดรถ เรือเฟอร์รี ล่วงเวลา และเงินมัดจำจะยืนยันแยกต่างหาก`
      : `${vehicle ? `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} per vehicle/day.` : "Choose a model."} Fuel, tolls, parking, ferry charges, overtime, and deposits are confirmed separately.`;
  syncVehicleRequirement();
}

function syncMealDayOptions() {
  const days = Math.max(1, durationDays());
  const previous = Number(qs("#meal-day").value || 1);
  qs("#meal-day").innerHTML = Array.from({ length: days }, (_, index) => `<option value="${index + 1}">${currentLanguage === "th" ? "วันที่" : "Day"} ${index + 1}</option>`).join("");
  qs("#meal-day").value = String(Math.min(previous, days));
  mealPlans = mealPlans.filter((meal) => meal.day <= days);
  renderMealPlans();
}

function localizedMealName(value) {
  const names = { Breakfast: "อาหารเช้า", Lunch: "อาหารกลางวัน", Dinner: "อาหารเย็น" };
  return currentLanguage === "th" ? names[value] || value : value;
}

function localizedMealPreference(value) {
  const names = {
    "Breakfast at hotel": "อาหารเช้าที่โรงแรม",
    "Local favorites & hidden gems": "ร้านท้องถิ่นและร้านลับ",
    "Halal-friendly": "อาหารฮาลาล",
    "Vegetarian-friendly": "อาหารมังสวิรัติ",
    "High-end restaurant": "ร้านอาหารระดับสูง",
    "Surprise me": "ให้เราเลือกให้"
  };
  return currentLanguage === "th" ? names[value] || value : value;
}

function localizedTierLabel(value) {
  const names = { budget: "ประหยัด", mid: "ระดับกลาง", premium: "พรีเมียม" };
  return currentLanguage === "th" ? names[value] || value : pricing.tiers[value]?.label || value;
}

function localizedBudgetProfile(profileKey) {
  if (currentLanguage !== "th") return budgetProfiles[profileKey];
  const thai = {
    budget: { label: "ตัวเลือกประหยัด", mealTitle: "อาหารท้องถิ่นคุ้มค่า", mealOptions: "อาหารเช้าที่โรงแรม ร้านท้องถิ่น ฮาลาล มังสวิรัติ หรือเดลิเวอรี" },
    mid: { label: "ตัวเลือกระดับกลาง", mealTitle: "อาหารท้องถิ่นและร้านยอดนิยม", mealOptions: "อาหารเช้าที่โรงแรม ร้านท้องถิ่น ร้านยอดนิยม ฮาลาล หรือมังสวิรัติ" },
    premium: { label: "ตัวเลือกพรีเมียม", mealTitle: "อาหารคัดสรรและระดับสูง", mealOptions: "อาหารเช้าที่โรงแรม ร้านท้องถิ่นที่คัดสรร ร้านระดับสูง หรือประสบการณ์กับเชฟ" }
  };
  return { ...budgetProfiles[profileKey], ...thai[profileKey] };
}

function localizedStyle(value) {
  const names = { "Slow & serene": "สบายและสงบ", "Social & vibrant": "สนุกและมีสีสัน", "Family explorer": "ครอบครัวนักสำรวจ", "Island reset": "พักใจบนเกาะ" };
  return currentLanguage === "th" ? names[value] || value : value;
}

function localizedPickup(value) {
  const names = { "Airport or station": "สนามบินหรือสถานี", Hotel: "โรงแรม", "Meet in the city": "พบกันในเมือง", "No pickup needed": "ไม่ต้องการรถรับ" };
  return currentLanguage === "th" ? names[value] || value : value;
}

function localizedAccessibility(value) {
  const names = { none: "ไม่มีความต้องการพิเศษ", "step-free": "เส้นทางไม่มีขั้นบันได", wheelchair: "แผนที่รองรับรถเข็น", "reduced-walking": "เดินน้อยลงและพักมากขึ้น", sensory: "การช่วยเหลือด้านการมองเห็น การได้ยิน หรือประสาทสัมผัส", other: "ความต้องการอื่น" };
  return currentLanguage === "th" ? names[value] || value : accessibilityLevelSelect.options[accessibilityLevelSelect.selectedIndex].text;
}

function localizedVehicleType(value) {
  const names = { Scooter: "สกู๊ตเตอร์", "Sport scooter": "สปอร์ตสกู๊ตเตอร์", "Touring scooter": "ทัวริ่งสกู๊ตเตอร์", Touring: "ทัวริ่ง", Sedan: "รถเก๋ง", "7-seater": "รถ 7 ที่นั่ง", Van: "รถตู้", Pickup: "รถกระบะ", Premium: "รถพรีเมียม" };
  return currentLanguage === "th" ? names[value] || value : value;
}

function renderMealPlans() {
  const list = qs("#meal-plan-list");
  list.innerHTML = "";
  if (!mealPlans.length) {
    const empty = document.createElement("span");
    empty.className = "meal-empty";
    empty.textContent = l("No meals planned yet. Restaurant costs stay outside this total.", "ยังไม่ได้วางแผนมื้ออาหาร ค่าอาหารไม่รวมในยอดนี้");
    list.append(empty);
    renderItineraryPlans();
    return;
  }
  mealPlans.sort((a, b) => a.day - b.day || ["Breakfast", "Lunch", "Dinner"].indexOf(a.meal) - ["Breakfast", "Lunch", "Dinner"].indexOf(b.meal));
  mealPlans.forEach((item) => {
    const row = document.createElement("div");
    row.className = "meal-plan-item";
    const copy = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = `${currentLanguage === "th" ? "วันที่" : "Day"} ${item.day} · ${localizedMealName(item.meal)}`;
    const small = document.createElement("small");
    small.textContent = `${item.restaurant} · ${localizedMealPreference(item.preference)} · ${l("pay directly at venue", "ชำระโดยตรงที่ร้าน")}`;
    copy.append(strong, small);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.dataset.removeMeal = item.id;
    remove.setAttribute("aria-label", `Remove Day ${item.day} ${item.meal}`);
    remove.textContent = "×";
    row.append(copy, remove);
    list.append(row);
  });
  renderItineraryPlans();
}

function destinationExperienceType() {
  const profile = hotelCatalog[destinationSelect.value].profile;
  if (["island", "coast", "phuket", "krabi", "pattaya", "kohLarn"].includes(profile)) return "coast";
  if (["chiangMai", "northern", "nature"].includes(profile)) return "nature";
  if (profile === "heritage") return "heritage";
  return "city";
}

function recommendedView(profileKey) {
  if (profileKey === "budget") return "standard";
  if (profileKey === "mid") return destinationExperienceType() === "nature" ? "mountain" : "landscape";
  if (destinationExperienceType() === "coast") return "sea";
  if (destinationExperienceType() === "nature") return "mountain";
  return "landscape";
}

function activitySuggestion(profileKey) {
  const type = destinationExperienceType();
  const suggestions = {
    city: {
      budget: ["Essential city highlights", "Choose temples, markets, public viewpoints, or one paid highlight."],
      mid: ["Culture plus a signature experience", "Choose a guided culture half-day, river experience, or evening attraction."],
      premium: ["Privately curated city days", "Choose private guiding, a priority experience, premium wellness, or a signature evening."]
    },
    coast: {
      budget: ["Beaches and local discoveries", "Choose beach time, viewpoints, walking streets, or one shared activity."],
      mid: ["Island or water highlights", "Choose a shared boat, snorkeling trip, or island day with relaxed local stops."],
      premium: ["Private coastal experiences", "Choose a private boat, premium water activity, spa time, or sunset experience."]
    },
    nature: {
      budget: ["Scenic essentials", "Choose temples, trails, waterfalls, viewpoints, or a local market."],
      mid: ["Guided nature and culture", "Choose a guided nature day, temple route, local craft, or food experience."],
      premium: ["Private nature and wellness", "Choose private guiding, a signature landscape experience, or premium wellness time."]
    },
    heritage: {
      budget: ["Historic essentials", "Choose historic parks, temples, local markets, or self-paced cultural stops."],
      mid: ["Guided heritage journey", "Choose a guided heritage route, museum stop, or local cultural experience."],
      premium: ["Private heritage immersion", "Choose a private expert-led route, premium transfers, or an exclusive cultural experience."]
    }
  };
  const [title, copy] = suggestions[type][profileKey];
  if (currentLanguage === "th") {
    const thaiSuggestions = {
      city: { budget: ["ไฮไลต์สำคัญในเมือง", "เลือกวัด ตลาด จุดชมวิวสาธารณะ หรือกิจกรรมมีค่าเข้าหนึ่งแห่ง"], mid: ["วัฒนธรรมและประสบการณ์เด่น", "เลือกทัวร์วัฒนธรรมครึ่งวัน กิจกรรมริมแม่น้ำ หรือสถานที่ยามค่ำ"], premium: ["วันเที่ยวเมืองแบบส่วนตัว", "เลือกไกด์ส่วนตัว กิจกรรมพิเศษ เวลเนสระดับสูง หรือค่ำคืนซิกเนเจอร์"] },
      coast: { budget: ["ชายหาดและการค้นพบท้องถิ่น", "เลือกเวลาริมหาด จุดชมวิว ถนนคนเดิน หรือกิจกรรมร่วมหนึ่งอย่าง"], mid: ["ไฮไลต์เกาะและกิจกรรมทางน้ำ", "เลือกทริปเรือ ดำน้ำตื้น หรือเที่ยวเกาะพร้อมจุดแวะสบาย ๆ"], premium: ["ประสบการณ์ชายฝั่งแบบส่วนตัว", "เลือกเรือส่วนตัว กิจกรรมทางน้ำระดับสูง สปา หรือกิจกรรมชมพระอาทิตย์ตก"] },
      nature: { budget: ["ธรรมชาติสำคัญ", "เลือกวัด เส้นทางธรรมชาติ น้ำตก จุดชมวิว หรือตลาดท้องถิ่น"], mid: ["ธรรมชาติและวัฒนธรรมพร้อมไกด์", "เลือกวันเที่ยวธรรมชาติพร้อมไกด์ เส้นทางวัด งานคราฟต์ หรืออาหาร"], premium: ["ธรรมชาติและเวลเนสแบบส่วนตัว", "เลือกไกด์ส่วนตัว ประสบการณ์ทิวทัศน์พิเศษ หรือเวลเนสระดับสูง"] },
      heritage: { budget: ["สถานที่ประวัติศาสตร์สำคัญ", "เลือกอุทยานประวัติศาสตร์ วัด ตลาด หรือจุดวัฒนธรรมแบบเที่ยวเอง"], mid: ["เส้นทางมรดกพร้อมไกด์", "เลือกเส้นทางประวัติศาสตร์พร้อมไกด์ พิพิธภัณฑ์ หรือกิจกรรมวัฒนธรรม"], premium: ["สัมผัสมรดกแบบส่วนตัว", "เลือกผู้เชี่ยวชาญส่วนตัว การเดินทางระดับสูง หรือประสบการณ์วัฒนธรรมพิเศษ"] }
    };
    const [thaiTitle, thaiCopy] = thaiSuggestions[type][profileKey];
    return { title: thaiTitle, copy: thaiCopy };
  }
  return { title, copy };
}

function candidateTransportOptions(profileKey, travelers) {
  const isKohLarn = destinationSelect.value === "Koh Larn";
  const modesByTier = {
    budget: ["none", "moto", "car"],
    mid: ["moto", "car", "driver"],
    premium: ["car", "driver"]
  };
  const modes = isKohLarn ? ["moto"] : modesByTier[profileKey];
  return modes.flatMap((mode) => {
    if (mode === "none") return { mode, vehicle: null, count: 0 };
    return vehicleCatalog[mode].map((vehicle) => ({ mode, vehicle, count: requiredVehicleCount(vehicle, travelers) }));
  });
}

function buildBudgetCandidates(profileKey) {
  const profile = budgetProfiles[profileKey];
  const days = Math.max(1, durationDays());
  const nights = chargedHotelNights(days);
  const travelers = travelerCount();
  const catalog = hotelCatalog[destinationSelect.value];
  const hotelProfile = hotelProfiles[catalog.profile][profile.tier];
  const roomCategory = "normal";
  const roomView = recommendedView(profileKey);
  const rooms = Math.max(requiredRoomCount(roomCategory, travelers), Math.round(Number(roomCountInput.value || 1)));
  const planSubtotal = pricing.tiers[profile.tier].perGuestDay * travelers * days;
  const activitySubtotal = pricing.tiers[profile.tier].activityPerGuestDay * travelers * days;
  const mealRange = mealBudgetRange(profileKey);
  if (mealRange.invalid || mealRange.maximum < mealRange.minimum) return [];
  const targetMeal = Math.min(mealRange.maximum, Math.max(mealRange.minimum, mealRange.suggested));
  const mealChoices = [...new Set([mealRange.minimum, targetMeal, mealRange.maximum].map(roundedHundred))];
  const transportOptions = candidateTransportOptions(profileKey, travelers);
  const candidates = [];

  catalog[profile.tier].forEach((hotelName, hotelIndex) => {
    const hotelRate = hotelProfile.rates[hotelIndex] || hotelProfile.rates[0];
    const hotelSubtotal = Math.round(hotelRate * pricing.roomCategoryMultipliers[roomCategory] * pricing.roomViewMultipliers[roomView] * rooms * nights);
    transportOptions.forEach((transport) => {
      const transportSubtotal = transport.vehicle ? transport.vehicle.rate * days * transport.count : 0;
      mealChoices.forEach((mealSubtotal) => {
        const websiteSubtotal = planSubtotal + hotelSubtotal + transportSubtotal;
        candidates.push({
          id: `${profileKey}-${hotelIndex}-${transport.mode}-${transport.vehicle?.brand || "none"}-${transport.vehicle?.model || "none"}-${mealSubtotal}`,
          profileKey,
          profile,
          days,
          travelers,
          rooms,
          hotelIndex,
          hotelName,
          hotelOptions: catalog[profile.tier],
          hotelRate,
          roomCategory,
          roomView,
          planSubtotal,
          activitySubtotal,
          hotelSubtotal,
          transport,
          transportSubtotal,
          mealSubtotal,
          mealRange,
          websiteSubtotal,
          suggestedSpend: websiteSubtotal + mealSubtotal,
          activity: activitySuggestion(profileKey)
        });
      });
    });
  });
  return candidates;
}

function formatTHBRange(values) {
  const low = Math.min(...values);
  const high = Math.max(...values);
  return low === high ? formatTHB(low) : `${formatTHB(low)}–${formatTHB(high)}`;
}

function refreshBudgetSuggestions() {
  const tripRange = tripBudgetRange();
  const minimum = tripRange.minimum;
  const maximum = tripRange.maximum;
  const rawMealRange = setRangeValidity(mealBudgetMinInput, mealBudgetMaxInput, "Meal budget", 0);
  const recommendations = qs("#budget-recommendations");
  const applyButton = qs("#apply-budget");
  const mealStatus = qs("#meal-budget-status");
  const fineDiningMinimum = 1400 * Math.max(1, Number(travelerInput.value || 1));
  const fineDiningBudgetTooLow = fineDiningInput.checked && rawMealRange.hasMaximum && rawMealRange.maximum < fineDiningMinimum;
  const unlockComfortLevels = () => tierInputs.forEach((input) => { input.disabled = false; });
  const resetSuggestions = (status, detail) => {
    lastBudgetRecommendation = null;
    lastBudgetMatches = [];
    recommendations.hidden = true;
    applyButton.disabled = true;
    qs("#budget-status").textContent = status;
    qs("#budget-spend").textContent = detail;
    qs("#budget-note").textContent = rawMealRange.hasMinimum
      ? l("Restaurant spending is a planning allowance only and will not be added to the website payment total.", "งบร้านอาหารใช้เพื่อวางแผนเท่านั้นและไม่เพิ่มในยอดชำระผ่านเว็บไซต์")
      : l("No meal cost is added unless you enter both meal-budget fields.", "จะไม่เพิ่มค่าอาหาร เว้นแต่คุณกรอกงบอาหารทั้งขั้นต่ำและสูงสุด");
    unlockComfortLevels();
    qs("#tier-budget-note").textContent = l("Enter a valid total budget range to see which comfort levels are affordable.", "กรอกช่วงงบรวมที่ถูกต้องเพื่อดูระดับความสะดวกสบายที่จ่ายได้");
  };

  if (rawMealRange.invalid || rawMealRange.hasMinimum !== rawMealRange.hasMaximum || fineDiningBudgetTooLow) {
    if (fineDiningBudgetTooLow) {
      mealBudgetMaxInput.setCustomValidity(currentLanguage === "th" ? `ควรกันงบอย่างน้อย ${formatTHB(fineDiningMinimum)} สำหรับไฟน์ไดนิ่งหนึ่งมื้อของกลุ่มนี้` : `Allow at least ${formatTHB(fineDiningMinimum)} for one fine-dining meal for this group.`);
      mealBudgetMaxInput.setAttribute("aria-invalid", "true");
    }
    mealStatus.classList.add("invalid");
    mealStatus.textContent = fineDiningBudgetTooLow
      ? currentLanguage === "th" ? `ควรกันงบอย่างน้อย ${formatTHB(fineDiningMinimum)} สำหรับไฟน์ไดนิ่งหนึ่งมื้อของผู้เดินทาง ${Math.max(1, Number(travelerInput.value || 1))} คน` : `Allow at least ${formatTHB(fineDiningMinimum)} for one fine-dining meal for ${Math.max(1, Number(travelerInput.value || 1))} guest${Number(travelerInput.value || 1) > 1 ? "s" : ""}.`
      : rawMealRange.invalid
      ? l("Meal budget minimum cannot be higher than the maximum.", "งบอาหารขั้นต่ำต้องไม่สูงกว่างบสูงสุด")
      : l("Enter both the meal budget minimum and maximum, or leave both blank.", "กรอกงบอาหารทั้งขั้นต่ำและสูงสุด หรือเว้นว่างทั้งสองช่อง");
    resetSuggestions(
      l("Check your meal budget range.", "ตรวจสอบช่วงงบอาหาร"),
      fineDiningBudgetTooLow
        ? currentLanguage === "th" ? `เพิ่มงบอาหารสูงสุดเป็นอย่างน้อย ${formatTHB(fineDiningMinimum)} เพื่อกันงบไฟน์ไดนิ่งหนึ่งมื้อ` : `Increase the meal maximum to at least ${formatTHB(fineDiningMinimum)} to protect one fine-dining meal.`
        : l("Both meal amounts must form a valid range before we can match the full trip.", "งบอาหารทั้งสองค่าต้องเป็นช่วงที่ถูกต้องก่อนจับคู่ทริปทั้งหมด")
    );
    return false;
  }

  mealStatus.classList.remove("invalid");
  if (rawMealRange.hasMinimum) {
    mealStatus.textContent = currentLanguage === "th"
      ? `กันงบ ${formatTHB(rawMealRange.minimum)}–${formatTHB(rawMealRange.maximum)} สำหรับค่าอาหาร${fineDiningInput.checked ? " รวมไฟน์ไดนิ่งหนึ่งมื้อ" : ""}`
      : `${formatTHB(rawMealRange.minimum)}–${formatTHB(rawMealRange.maximum)} reserved for restaurant bills${fineDiningInput.checked ? ", including one fine-dining meal" : ""}.`;
  } else {
    mealStatus.textContent = currentLanguage === "th"
      ? `ไม่เพิ่มงบอาหาร ${fineDiningInput.checked ? "บันทึกความต้องการไฟน์ไดนิ่งแล้ว แต่ค่าใช้จ่ายยังอยู่นอกประมาณการนี้" : "ค่าอาหารจากร้าน โรงแรม และเดลิเวอรีไม่รวมในประมาณการนี้"}`
      : `No meal budget added. ${fineDiningInput.checked ? "Your fine-dining preference is saved, but its cost remains outside this estimate." : "Restaurant, hotel dining, and delivery costs stay outside this estimate."}`;
  }

  if (minimum < 1000 || maximum < 1000 || !tripRange.hasMinimum || !tripRange.hasMaximum) {
    resetSuggestions(l("Enter your minimum and maximum budget.", "กรอกงบขั้นต่ำและสูงสุด"), l("We will show the complete travel options inside your range.", "เราจะแสดงตัวเลือกทริปทั้งหมดที่อยู่ในช่วงงบของคุณ"));
    return false;
  }
  if (tripRange.invalid || maximum < minimum) {
    resetSuggestions(l("Maximum budget must be equal to or higher than the minimum.", "งบสูงสุดต้องเท่ากับหรือสูงกว่างบขั้นต่ำ"), l("Adjust the two amounts to continue.", "ปรับจำนวนทั้งสองเพื่อดำเนินการต่อ"));
    return false;
  }

  const candidates = ["budget", "mid", "premium"].flatMap(buildBudgetCandidates);
  const matches = candidates.filter((candidate) => candidate.suggestedSpend >= minimum && candidate.suggestedSpend <= maximum);
  const tierRank = { budget: 1, mid: 2, premium: 3 };
  const midpoint = (minimum + maximum) / 2;
  matches.sort((a, b) => tierRank[b.profileKey] - tierRank[a.profileKey]
    || Math.abs(a.suggestedSpend - midpoint) - Math.abs(b.suggestedSpend - midpoint)
    || b.suggestedSpend - a.suggestedSpend);
  const closestAbove = candidates
    .filter((candidate) => candidate.suggestedSpend > maximum)
    .sort((a, b) => a.suggestedSpend - b.suggestedSpend || tierRank[b.profileKey] - tierRank[a.profileKey])[0];
  const overage = closestAbove ? closestAbove.suggestedSpend - maximum : Infinity;
  const slightlyOver = !matches.length && closestAbove && overage <= allowedBudgetOverage(maximum);
  const recommendation = matches[0] || (slightlyOver ? closestAbove : null);
  const optionSet = matches.length ? matches : recommendation ? [recommendation] : [];
  const representativeMatches = ["budget", "mid", "premium"]
    .map((tier) => optionSet.filter((candidate) => candidate.profileKey === tier).sort((a, b) => b.suggestedSpend - a.suggestedSpend)[0])
    .filter(Boolean);
  lastBudgetRecommendation = recommendation;
  lastBudgetMatches = representativeMatches;

  const affordableTiers = new Set(candidates.filter((candidate) => candidate.suggestedSpend <= maximum).map((candidate) => candidate.profileKey));
  if (slightlyOver && recommendation) affordableTiers.add(recommendation.profileKey);
  tierInputs.forEach((input) => { input.disabled = !affordableTiers.has(input.value); });
  const tierChanged = qs('[name="plan-tier"]:checked')?.disabled && recommendation;
  if (tierChanged) chooseTier(recommendation.profileKey);
  const availableLabels = ["budget", "mid", "premium"].filter((tier) => affordableTiers.has(tier)).map(localizedTierLabel);
  qs("#tier-budget-note").textContent = availableLabels.length
    ? currentLanguage === "th" ? `ใช้ได้กับงบนี้: ${availableLabels.join(" · ")} ระดับที่สูงกว่าถูกล็อกเพื่อรักษางบสูงสุด` : `Available for this budget: ${availableLabels.join(" · ")}. Higher comfort levels are locked to protect your maximum.`
    : l("No comfort level fits this maximum yet. Increase the maximum or shorten the trip.", "ยังไม่มีระดับความสะดวกสบายที่ตรงกับงบสูงสุดนี้ โปรดเพิ่มงบหรือลดจำนวนวัน");

  if (!recommendation) {
    recommendations.hidden = true;
    applyButton.disabled = true;
    const cheapestAbove = candidates.filter((candidate) => candidate.suggestedSpend > maximum).sort((a, b) => a.suggestedSpend - b.suggestedSpend)[0];
    qs("#budget-status").textContent = l("No complete combination fits this range yet.", "ยังไม่มีชุดตัวเลือกครบถ้วนที่อยู่ในช่วงงบนี้");
    qs("#budget-spend").textContent = cheapestAbove
      ? currentLanguage === "th" ? `ทริปครบชุดที่ใกล้ที่สุดสูงกว่างบสูงสุด ${formatTHB(cheapestAbove.suggestedSpend - maximum)} โปรดเพิ่มงบ ลดจำนวนวัน${rawMealRange.hasMinimum ? " หรือลดงบอาหาร" : ""}` : `The closest complete trip is ${formatTHB(cheapestAbove.suggestedSpend - maximum)} above your maximum. Increase the maximum, shorten the trip${rawMealRange.hasMinimum ? ", or reduce the meal range" : ""}.`
      : l("Adjust the range or trip details to continue.", "ปรับช่วงงบหรือรายละเอียดทริปเพื่อดำเนินการต่อ");
    qs("#budget-note").textContent = l("Best fit is disabled until the complete estimated trip is inside the range or only slightly above it.", "จะใช้ตัวเลือกที่เหมาะที่สุดได้เมื่อประมาณการทั้งทริปอยู่ในช่วงงบหรือสูงกว่าเพียงเล็กน้อย");
    return Boolean(tierChanged);
  }

  recommendations.hidden = false;
  applyButton.disabled = false;
  const recommendationProfile = localizedBudgetProfile(recommendation.profileKey);

  if (matches.length > 1) {
    qs("#budget-status").textContent = currentLanguage === "th" ? `มี ${matches.length} ชุดตัวเลือกครบถ้วน · ${recommendationProfile.label} เหมาะที่สุด` : `${matches.length} complete combinations fit · ${recommendation.profile.label} is the best fit`;
  } else if (matches.length === 1) {
    qs("#budget-status").textContent = currentLanguage === "th" ? `${recommendationProfile.label} อยู่ในช่วงงบของคุณ` : `${recommendation.profile.label} fits inside your budget range`;
  } else {
    qs("#budget-status").textContent = currentLanguage === "th" ? `ตัวเลือกที่ใกล้เคียงที่สุดสูงกว่าเล็กน้อย ${formatTHB(overage)}` : `Closest best fit is slightly higher by ${formatTHB(overage)}`;
  }
  qs("#budget-spend").textContent = currentLanguage === "th"
    ? `ช่วงงบ ${formatTHB(minimum)}–${formatTHB(maximum)} · ค่าใช้จ่ายทริปที่เหมาะที่สุด ${formatTHB(recommendation.suggestedSpend)} · ชำระผ่านเว็บไซต์ ${formatTHB(recommendation.websiteSubtotal)}`
    : `Your range ${formatTHB(minimum)}–${formatTHB(maximum)} · best-fit trip spend ${formatTHB(recommendation.suggestedSpend)} · website card payment ${formatTHB(recommendation.websiteSubtotal)}`;

  const viewLabels = currentLanguage === "th" ? { standard: "วิวมาตรฐาน", landscape: "วิวทิวทัศน์", mountain: "วิวภูเขา", sea: "วิวทะเล" } : { standard: "standard view", landscape: "landscape view", mountain: "mountain view", sea: "sea view" };
  const packageOptions = representativeMatches.map((candidate) => `${localizedTierLabel(candidate.profile.tier)} ${formatTHB(candidate.planSubtotal)}`);
  qs("#budget-package-title").textContent = representativeMatches.length > 1
    ? currentLanguage === "th" ? `เหมาะ ${representativeMatches.length} ระดับ · ${recommendation.days} วัน` : `${representativeMatches.length} comfort levels fit · ${recommendation.days} days`
    : currentLanguage === "th" ? `${localizedTierLabel(recommendation.profile.tier)} · แพ็กเกจ ${recommendation.days} วัน` : `${pricing.tiers[recommendation.profile.tier].label} · ${recommendation.days}-day travel package`;
  qs("#budget-package-copy").textContent = currentLanguage === "th" ? `ระดับที่จ่ายได้: ${packageOptions.join(" · ")} ตัวเลือกเหมาะที่สุด: ${recommendationProfile.label} สำหรับ ${recommendation.travelers} คน` : `Affordable levels: ${packageOptions.join(" · ")}. Best fit: ${recommendation.profile.label} for ${recommendation.travelers} guest${recommendation.travelers > 1 ? "s" : ""}.`;

  const hotelNames = [...new Set(optionSet.map((candidate) => candidate.hotelName))];
  qs("#budget-hotel-title").textContent = currentLanguage === "th" ? `มีโรงแรม ${hotelNames.length} ตัวเลือก · ${formatTHBRange(optionSet.map((candidate) => candidate.hotelSubtotal))}` : `${hotelNames.length} hotel options fit · ${formatTHBRange(optionSet.map((candidate) => candidate.hotelSubtotal))}`;
  qs("#budget-hotel-copy").textContent = currentLanguage === "th" ? `${hotelNames.slice(0, 6).join(" · ")}${hotelNames.length > 6 ? ` · และอีก ${hotelNames.length - 6} แห่ง` : ""} ตัวเลือกเหมาะที่สุด: ห้องปกติ ${viewLabels[recommendation.roomView]} ที่ ${recommendation.hotelName}` : `${hotelNames.slice(0, 6).join(" · ")}${hotelNames.length > 6 ? ` · plus ${hotelNames.length - 6} more` : ""}. Best fit: normal room with ${viewLabels[recommendation.roomView]} at ${recommendation.hotelName}.`;

  const activityTitles = [...new Set(optionSet.map((candidate) => candidate.activity.title))];
  qs("#budget-activity-title").textContent = currentLanguage === "th" ? `${activityTitles.join(" · ")} · รวมงบ ${formatTHB(recommendation.activitySubtotal)}` : `${activityTitles.join(" · ")} · ${formatTHB(recommendation.activitySubtotal)} included allowance`;
  qs("#budget-activity-copy").textContent = currentLanguage === "th" ? `${recommendation.activity.copy} งบนี้รวมอยู่ในราคาแพ็กเกจแล้ว รายการบัตรเข้าชมที่แน่นอนจะยืนยันก่อนชำระเงิน` : `${recommendation.activity.copy} This allowance is already inside the travel-package price; exact ticket inclusions are confirmed before payment.`;

  const transportLabels = optionSet.map((candidate) => {
    const label = candidate.transport.mode === "driver" ? l("Private driver", "รถพร้อมคนขับ") : candidate.transport.mode === "moto" ? l("Motorcycle", "มอเตอร์ไซค์") : candidate.transport.mode === "car" ? l("Self-drive car", "รถยนต์ขับเอง") : l("No agency transportation", "ไม่ใช้รถของบริษัท");
    return `${label} ${formatTHB(candidate.transportSubtotal)}`;
  });
  const distinctTransportLabels = [...new Set(transportLabels)];
  qs("#budget-transport-title").textContent = currentLanguage === "th" ? `มีการเดินทาง ${distinctTransportLabels.length} ตัวเลือก · ${formatTHBRange(optionSet.map((candidate) => candidate.transportSubtotal))}` : `${distinctTransportLabels.length} transportation option${distinctTransportLabels.length > 1 ? "s" : ""} · ${formatTHBRange(optionSet.map((candidate) => candidate.transportSubtotal))}`;
  qs("#budget-transport-copy").textContent = currentLanguage === "th" ? `${distinctTransportLabels.slice(0, 5).join(" · ")} ตัวเลือกเหมาะที่สุด: ${recommendation.transport.vehicle ? `${recommendation.transport.vehicle.brand} ${recommendation.transport.vehicle.model} × ${recommendation.transport.count}` : "ไม่ใช้รถของบริษัท"}` : `${distinctTransportLabels.slice(0, 5).join(" · ")}. Best fit: ${recommendation.transport.vehicle ? `${recommendation.transport.vehicle.brand} ${recommendation.transport.vehicle.model} × ${recommendation.transport.count}` : "no agency transportation"}.`;

  if (recommendation.mealRange.hasBudget) {
    const mealLabels = optionSet.map((candidate) => `${localizedBudgetProfile(candidate.profileKey).mealTitle} ${formatTHB(candidate.mealSubtotal)}`);
    const distinctMealLabels = [...new Set(mealLabels)];
    qs("#budget-meal-title").textContent = currentLanguage === "th" ? `มีงบอาหาร ${distinctMealLabels.length} ตัวเลือก · ${formatTHBRange(optionSet.map((candidate) => candidate.mealSubtotal))}` : `${distinctMealLabels.length} meal allowance option${distinctMealLabels.length > 1 ? "s" : ""} · ${formatTHBRange(optionSet.map((candidate) => candidate.mealSubtotal))}`;
    qs("#budget-meal-copy").textContent = currentLanguage === "th" ? `${distinctMealLabels.slice(0, 5).join(" · ")} ตัวเลือกเหมาะที่สุด: ${recommendationProfile.mealOptions}${fineDiningInput.checked ? " พร้อมกันงบไฟน์ไดนิ่งหนึ่งมื้อ" : ""} ชำระกับร้านโดยตรง` : `${distinctMealLabels.slice(0, 5).join(" · ")}. Best-fit choices: ${recommendation.profile.mealOptions}${fineDiningInput.checked ? ", with one fine-dining meal protected" : ""}. Pay restaurants directly.`;
    qs("#budget-note").textContent = currentLanguage === "th" ? `${slightlyOver ? `ตัวเลือกนี้สูงกว่างบสูงสุด ${formatTHB(overage)} ` : ""}ชำระผ่านเว็บไซต์ ${formatTHB(recommendation.websiteSubtotal)} และกัน ${formatTHB(recommendation.mealSubtotal)} ไว้ชำระค่าอาหารโดยตรง` : `${slightlyOver ? `This best fit is ${formatTHB(overage)} above your maximum. ` : ""}Website card payment: ${formatTHB(recommendation.websiteSubtotal)}. Keep ${formatTHB(recommendation.mealSubtotal)} outside the website for restaurant bills.`;
  } else {
    qs("#budget-meal-title").textContent = l("No meal budget added · ฿0", "ไม่เพิ่มงบอาหาร · ฿0");
    qs("#budget-meal-copy").textContent = currentLanguage === "th" ? `เลือกร้าน อาหารโรงแรม หรือเดลิเวอรีได้อย่างอิสระ${fineDiningInput.checked ? " รวมความต้องการไฟน์ไดนิ่ง" : ""} ชำระกับร้านหรือผู้ให้บริการโดยตรง` : `Choose restaurants, hotel dining, or delivery freely${fineDiningInput.checked ? ", including your fine-dining preference" : ""}. Pay the restaurant or delivery provider directly.`;
    qs("#budget-note").textContent = currentLanguage === "th" ? `${slightlyOver ? `ตัวเลือกนี้สูงกว่างบสูงสุด ${formatTHB(overage)} ` : ""}ชำระผ่านเว็บไซต์ ${formatTHB(recommendation.websiteSubtotal)} ไม่ประมาณการหรือเรียกเก็บค่าอาหาร` : `${slightlyOver ? `This best fit is ${formatTHB(overage)} above your maximum. ` : ""}Website card payment: ${formatTHB(recommendation.websiteSubtotal)}. Meal costs are not estimated or charged.`;
  }
  return Boolean(tierChanged);
}

function applyBudgetSuggestion() {
  if (!lastBudgetRecommendation) return;
  const recommendation = lastBudgetRecommendation;
  chooseTier(recommendation.profile.tier);
  syncHotels();
  hotelSelect.value = `${recommendation.profile.tier}-${recommendation.hotelIndex}`;
  roomCategorySelect.value = recommendation.roomCategory;
  roomViewSelect.value = recommendation.roomView;
  roomCountAutomatic = true;
  syncRoomRequirement();
  transportSelect.value = recommendation.transport.mode;
  syncTransportFields();
  if (recommendation.transport.vehicle) {
    vehicleTypeSelect.value = recommendation.transport.vehicle.type;
    syncVehicleModels();
    vehicleModelSelect.value = `${recommendation.transport.vehicle.brand}-${recommendation.transport.vehicle.model}-${recommendation.transport.vehicle.year}`;
    vehicleCountAutomatic = true;
    vehicleCountInput.value = String(recommendation.transport.count);
  }
  appliedMealAllowance = recommendation.mealSubtotal;
  appliedBestFitOverage = recommendation.suggestedSpend > Number(tripBudgetMaxInput.value || 0);
  qs("#meal-preference").value = recommendation.profile.mealPreference;
  calculateEstimate();
  const maximum = Number(tripBudgetMaxInput.value || 0);
  const overage = recommendation.suggestedSpend - maximum;
  showToast(currentLanguage === "th"
    ? `ใช้${localizedBudgetProfile(recommendation.profileKey).label}แล้ว${overage > 0 ? ` · สูงกว่างบสูงสุดเล็กน้อย ${formatTHB(overage)}` : " · อยู่ในช่วงงบของคุณ"}`
    : `${recommendation.profile.label} applied${overage > 0 ? ` · ${formatTHB(overage)} slightly above the maximum` : " inside your budget range"}.`);
}

function calculateEstimate() {
  const days = Math.max(1, durationDays());
  const composition = travelerComposition();
  const travelers = travelerCount();
  const nights = hotelSelect.value === "own" ? 0 : chargedHotelNights(days);
  const tier = selectedTier();
  const rooms = hotelSelect.value === "own"
    ? 0
    : Math.max(requiredRoomCount(roomCategorySelect.value, travelers), Math.round(Number(roomCountInput.value || 1)));
  const planSubtotal = pricing.tiers[tier].perGuestDay * travelers * days;
  const activitySubtotal = pricing.tiers[tier].activityPerGuestDay * travelers * days;
  const serviceSubtotal = planSubtotal - activitySubtotal;
  const roomCategoryMultiplier = pricing.roomCategoryMultipliers[roomCategorySelect.value];
  const roomViewMultiplier = pricing.roomViewMultipliers[roomViewSelect.value];
  const hotelRate = selectedHotelRate();
  const hotelSubtotal = Math.round(hotelRate * roomCategoryMultiplier * roomViewMultiplier * rooms * nights);
  const vehicle = selectedVehicle();
  const vehicleCount = vehicle
    ? Math.max(requiredVehicleCount(vehicle, travelers), Math.round(Number(vehicleCountInput.value || 1)))
    : 0;
  const transportSubtotal = vehicle ? vehicle.rate * days * vehicleCount : 0;
  const websiteTotal = planSubtotal + hotelSubtotal + transportSubtotal;
  const meals = mealBudgetRange(tier);
  const recommendedMealAllowance = Math.min(meals.maximum, Math.max(meals.minimum, meals.suggested));
  const mealAllowance = appliedMealAllowance === null ? recommendedMealAllowance : appliedMealAllowance;
  const total = websiteTotal + mealAllowance;
  qs("#estimate-label").textContent = meals.hasBudget ? l("Estimated total trip spend", "ค่าใช้จ่ายทริปรวมโดยประมาณ") : l("Website estimate · meals excluded", "ประมาณการเว็บไซต์ · ไม่รวมอาหาร");
  qs("#estimate-total").textContent = formatTHB(total);
  const roomNote = hotelSelect.value === "own" ? l("hotel not included", "ไม่รวมโรงแรม") : currentLanguage === "th" ? `${rooms} ห้อง` : `${rooms} room${rooms > 1 ? "s" : ""}`;
  const nightNote = nights ? currentLanguage === "th" ? `พักโรงแรม ${nights} คืน` : `${nights} hotel night${nights > 1 ? "s" : ""}` : l("hotel booked separately", "จองโรงแรมแยกเอง");
  qs("#estimate-note").textContent = currentLanguage === "th" ? `สำหรับ ${travelers} คน · ${days} วัน · ${roomNote} · ${nightNote}` : `for ${travelers} guest${travelers > 1 ? "s" : ""} · ${days} day${days > 1 ? "s" : ""} · ${roomNote} · ${nightNote}`;
  qs("#estimate-breakdown").textContent = meals.hasBudget
    ? currentLanguage === "th" ? `แพ็กเกจ ${formatTHB(planSubtotal)} (กิจกรรม ${formatTHB(activitySubtotal)}) + โรงแรม ${formatTHB(hotelSubtotal)} + การเดินทาง ${formatTHB(transportSubtotal)} + งบอาหารชำระตรง ${formatTHB(mealAllowance)} · บัตร ${formatTHB(websiteTotal)}` : `Package ${formatTHB(planSubtotal)} (activities ${formatTHB(activitySubtotal)}) + hotel ${formatTHB(hotelSubtotal)} + transport ${formatTHB(transportSubtotal)} + meal budget ${formatTHB(mealAllowance)} paid direct · card ${formatTHB(websiteTotal)}`
    : currentLanguage === "th" ? `แพ็กเกจ ${formatTHB(planSubtotal)} (กิจกรรม ${formatTHB(activitySubtotal)}) + โรงแรม ${formatTHB(hotelSubtotal)} + การเดินทาง ${formatTHB(transportSubtotal)} · ไม่รวมอาหาร · บัตร ${formatTHB(websiteTotal)}` : `Package ${formatTHB(planSubtotal)} (activities ${formatTHB(activitySubtotal)}) + hotel ${formatTHB(hotelSubtotal)} + transport ${formatTHB(transportSubtotal)} · meals excluded · card ${formatTHB(websiteTotal)}`;

  const tierChanged = refreshBudgetSuggestions();
  if (tierChanged && !budgetTierRecalculation) {
    budgetTierRecalculation = true;
    syncHotels();
    const recalculated = calculateEstimate();
    budgetTierRecalculation = false;
    return recalculated;
  }

  const tripRange = tripBudgetRange();
  const allowedMaximum = tripRange.maximum + (appliedBestFitOverage ? allowedBudgetOverage(tripRange.maximum) : 0);
  const overBudget = tripRange.hasMinimum && tripRange.hasMaximum && !tripRange.invalid && total > allowedMaximum;
  const belowRange = tripRange.hasMinimum && tripRange.hasMaximum && !tripRange.invalid && total < tripRange.minimum;
  const reviewButton = qs("#review-trip-button");
  reviewButton.disabled = composition.invalid || overBudget || tripRange.invalid || meals.invalid || !mealBudgetMinInput.validity.valid || !mealBudgetMaxInput.validity.valid;
  const alert = qs("#estimate-budget-alert");
  if (overBudget) {
    alert.textContent = currentLanguage === "th" ? `ตัวเลือกนี้สูงกว่างบสูงสุด ${formatTHB(total - tripRange.maximum)} ใช้คำแนะนำที่เหมาะที่สุดหรือเลือกตัวเลือกที่ถูกลงก่อนดำเนินการต่อ` : `This selection is ${formatTHB(total - tripRange.maximum)} above your maximum. Use Best Fit or choose lower-cost options before continuing.`;
  } else if (belowRange) {
    alert.textContent = currentLanguage === "th" ? `ตัวเลือกนี้ต่ำกว่างบขั้นต่ำ ${formatTHB(tripRange.minimum - total)} คุณสามารถประหยัดไว้หรือใช้ตัวเลือกที่เหมาะที่สุด` : `This selection is below your minimum by ${formatTHB(tripRange.minimum - total)}. You can keep the savings or use Best Fit for a closer match.`;
  } else if (appliedBestFitOverage && total > tripRange.maximum) {
    alert.textContent = currentLanguage === "th" ? `ตัวเลือกที่เหมาะที่สุดสูงกว่างบสูงสุดเล็กน้อย ${formatTHB(total - tripRange.maximum)}` : `Best Fit is slightly above your maximum by ${formatTHB(total - tripRange.maximum)}.`;
  } else {
    alert.textContent = "";
  }
  return { days, nights, travelers, rooms, tier, vehicle, vehicleCount, planSubtotal, serviceSubtotal, activitySubtotal, hotelSubtotal, transportSubtotal, mealAllowance, hasMealBudget: meals.hasBudget, websiteTotal, total };
}

function openPlanner(options = {}) {
  if (!plannerModal.classList.contains("open")) plannerReturnFocus = document.activeElement;
  if (options.destination && destinations.includes(options.destination)) destinationSelect.value = options.destination;
  if (options.duration) durationSelect.value = String(options.duration);
  if (options.style) qs("#planner-style").value = options.style;
  if (options.tier) chooseTier(options.tier);
  if (options.transport === "Self-drive rental") transportSelect.value = "car";
  syncHotels();
  syncTransportFields();
  syncMealDayOptions();
  syncTravelerComposition();
  syncItineraryDays(!itineraryPlans.length);
  qs(".custom-days-field").hidden = durationSelect.value !== "custom";
  plannerForm.hidden = false;
  bookingReview.hidden = true;
  qsa(".step-indicator span").forEach((el, index) => el.classList.toggle("active", index === 0));
  calculateEstimate();
  plannerModal.classList.add("open");
  plannerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    if (options.duration) durationSelect.value = String(options.duration);
    syncMealDayOptions();
    syncItineraryDays();
    calculateEstimate();
  });
  setTimeout(() => destinationSelect.focus(), 100);
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (modal === plannerModal) {
    qsa(".checkout-card input").forEach((input) => {
      input.value = "";
      input.setCustomValidity("");
    });
  }
  if (modal === accountModal) qsa('input[type="password"]', accountModal).forEach((input) => { input.value = ""; });
  if (!qsa(".modal-shell.open").length) document.body.classList.remove("modal-open");
  const returnFocus = modal === plannerModal ? plannerReturnFocus : accountReturnFocus;
  if (returnFocus?.isConnected) setTimeout(() => returnFocus.focus(), 0);
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3800);
}

qsa(".open-planner").forEach((button) => button.addEventListener("click", () => openPlanner({ transport: button.dataset.transport })));
qsa("[data-close-modal]").forEach((button) => button.addEventListener("click", () => closeModal(plannerModal)));
qsa("[data-close-account]").forEach((button) => button.addEventListener("click", () => closeModal(accountModal)));

qs("#trip-finder").addEventListener("submit", (event) => {
  event.preventDefault();
  openPlanner({ destination: qs("#quick-destination").value, duration: qs("#quick-duration").value, style: qs("#quick-style").value });
});

qsa(".destination-card").forEach((card) => {
  const open = () => openPlanner({ destination: card.dataset.destination });
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

qsa(".destination-list button").forEach((button) => button.addEventListener("click", () => openPlanner({ destination: button.textContent })));
qsa(".package-card button").forEach((button) => button.addEventListener("click", () => openPlanner({ duration: button.closest(".package-card").dataset.duration })));
qsa(".tier-card").forEach((button) => button.addEventListener("click", () => openPlanner({ tier: button.dataset.tier })));
qsa(".style-options button").forEach((button) => button.addEventListener("click", () => {
  qsa(".style-options button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  openPlanner({ style: button.dataset.style });
}));

qsa(".filter-tabs button").forEach((button) => button.addEventListener("click", () => {
  qsa(".filter-tabs button").forEach((item) => {
    item.classList.remove("active");
    item.setAttribute("aria-pressed", "false");
  });
  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");
  qsa(".destination-card").forEach((card) => {
    card.hidden = button.dataset.filter !== "all" && !card.dataset.category.includes(button.dataset.filter);
  });
}));

qs(".all-destinations-toggle").addEventListener("click", (event) => {
  const list = qs(".destination-list");
  list.hidden = !list.hidden;
  event.currentTarget.setAttribute("aria-expanded", String(!list.hidden));
  event.currentTarget.lastElementChild.textContent = list.hidden ? "＋" : "−";
});

[durationSelect, qs("#custom-days")].forEach((input) => input.addEventListener("input", () => {
  clearAppliedBestFit();
  qs(".custom-days-field").hidden = durationSelect.value !== "custom";
  syncMealDayOptions();
  syncItineraryDays();
  calculateEstimate();
}));

[adultInput, childInput, seniorInput].forEach((input) => input.addEventListener("input", () => {
  clearAppliedBestFit();
  syncTravelerComposition(true);
  syncRoomRequirement(true);
  syncVehicleRequirement(true);
  if (!itineraryCustomized) syncItineraryDays(true);
  else renderItineraryPlans();
  calculateEstimate();
}));

[hotelSelect, roomCategorySelect, roomViewSelect, bedTypeSelect, roomCountInput, vehicleCountInput].forEach((input) => input.addEventListener("input", () => {
  clearAppliedBestFit();
  if (input === roomCountInput) roomCountAutomatic = false;
  if (input === vehicleCountInput) vehicleCountAutomatic = false;
  if (input === hotelSelect) {
    syncHotelFields();
    syncRoomRequirement();
  }
  if (input === roomCategorySelect || input === roomCountInput) syncRoomRequirement(input === roomCategorySelect);
  if (input === vehicleCountInput) syncVehicleRequirement();
  calculateEstimate();
}));

[tripBudgetMinInput, tripBudgetMaxInput, mealBudgetMinInput, mealBudgetMaxInput].forEach((input) => input.addEventListener("input", () => {
  clearAppliedBestFit();
  calculateEstimate();
}));
fineDiningInput.addEventListener("input", () => {
  clearAppliedBestFit();
  calculateEstimate();
});
qs("#apply-budget").addEventListener("click", applyBudgetSuggestion);

transportSelect.addEventListener("input", () => {
  clearAppliedBestFit();
  vehicleCountAutomatic = true;
  vehicleTypeSelect.value = "";
  syncTransportFields(true);
  syncVehicleRequirement(true);
  renderItineraryPlans();
  calculateEstimate();
});

vehicleTypeSelect.addEventListener("input", () => {
  clearAppliedBestFit();
  syncVehicleModels();
  syncTransportFields();
  syncVehicleRequirement(true);
  calculateEstimate();
});

vehicleModelSelect.addEventListener("input", () => {
  clearAppliedBestFit();
  const vehicle = selectedVehicle();
  if (vehicle) qs("#transport-policy").textContent = currentLanguage === "th"
    ? `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} ต่อคัน/วัน ค่าเชื้อเพลิง ทางด่วน ที่จอดรถ เรือเฟอร์รี ล่วงเวลา และเงินมัดจำจะยืนยันแยกต่างหาก`
    : `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} per vehicle/day. Fuel, tolls, parking, ferry charges, overtime, and deposits are confirmed separately.`;
  syncVehicleRequirement(true);
  renderItineraryPlans();
  calculateEstimate();
});

destinationSelect.addEventListener("change", () => {
  clearAppliedBestFit();
  if (mealPlans.length) showToast(l("Meal plans cleared because the destination changed.", "ล้างแผนมื้ออาหารแล้วเนื่องจากเปลี่ยนจุดหมาย"));
  mealPlans = [];
  renderMealPlans();
  syncItineraryDays(true);
  syncHotels();
  syncTransportFields(true);
  calculateEstimate();
});

tierInputs.forEach((input) => input.addEventListener("change", () => {
  clearAppliedBestFit();
  syncHotels();
  calculateEstimate();
}));

qs("#planner-style").addEventListener("input", () => {
  if (!itineraryCustomized) syncItineraryDays(true);
});

[accessibilityLevelSelect, accessibilityNotesInput].forEach((input) => input.addEventListener("input", () => {
  if (!itineraryCustomized) syncItineraryDays(true);
}));

qs("#must-see").addEventListener("input", () => {
  if (!itineraryCustomized) syncItineraryDays(true);
});

qs("#regenerate-itinerary").addEventListener("click", () => {
  syncItineraryDays(true);
  showToast(l("Itinerary suggestions regenerated. Every time slot is still editable.", "สร้างคำแนะนำแผนเที่ยวใหม่แล้ว ทุกช่วงเวลายังแก้ไขได้"));
});

qs("#itinerary-list").addEventListener("input", (event) => {
  const input = event.target.closest("[data-itinerary-day][data-itinerary-slot]");
  if (!input) return;
  const item = itineraryPlans.find((plan) => plan.day === Number(input.dataset.itineraryDay));
  if (!item) return;
  item[input.dataset.itinerarySlot] = input.value;
  itineraryCustomized = true;
});

qs("#meal-type").addEventListener("input", () => {
  if (qs("#meal-type").value !== "Breakfast" && qs("#meal-preference").value === "Breakfast at hotel") {
    qs("#meal-preference").value = "Local favorites & hidden gems";
  }
});

qs("#meal-preference").addEventListener("input", () => {
  if (qs("#meal-preference").value === "Breakfast at hotel") qs("#meal-type").value = "Breakfast";
  if (qs("#meal-preference").value === "High-end restaurant") fineDiningInput.checked = true;
  clearAppliedBestFit();
  calculateEstimate();
});

qs("#add-meal").addEventListener("click", () => {
  const preference = qs("#meal-preference").value;
  if (preference === "High-end restaurant") fineDiningInput.checked = true;
  const hotelName = hotelSelect.value === "own" ? l("Customer's hotel", "โรงแรมที่ลูกค้าจอง") : hotelSelect.options[hotelSelect.selectedIndex].text.split(" · ")[0];
  const typedRestaurant = qs("#restaurant-name").value.trim();
  const restaurant = typedRestaurant || (preference === "Breakfast at hotel" ? hotelName : l("Twar Mal to recommend", "ให้ Twar Mal แนะนำ"));
  const day = Number(qs("#meal-day").value);
  const meal = qs("#meal-type").value;
  const existing = mealPlans.find((item) => item.day === day && item.meal === meal);
  const nextMeal = { id: existing?.id || String(Date.now()), day, meal, preference, restaurant };
  mealPlans = existing
    ? mealPlans.map((item) => item.id === existing.id ? nextMeal : item)
    : [...mealPlans, nextMeal];
  qs("#restaurant-name").value = "";
  renderMealPlans();
  clearAppliedBestFit();
  calculateEstimate();
  showToast(existing
    ? l("Meal updated. Its restaurant bill is not included in the total.", "อัปเดตมื้ออาหารแล้ว ค่าอาหารจากร้านไม่รวมในยอดทั้งหมด")
    : l("Meal added. Its restaurant bill is not included in the total.", "เพิ่มมื้ออาหารแล้ว ค่าอาหารจากร้านไม่รวมในยอดทั้งหมด"));
});

qs("#meal-plan-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-meal]");
  if (!button) return;
  mealPlans = mealPlans.filter((meal) => meal.id !== button.dataset.removeMeal);
  renderMealPlans();
  clearAppliedBestFit();
  calculateEstimate();
});

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const composition = syncTravelerComposition();
  if (composition.invalid) {
    adultInput.reportValidity();
    return;
  }
  const estimate = calculateEstimate();
  const tripBudgetMinimum = Number(tripBudgetMinInput.value || 0);
  const tripBudgetMaximum = Number(tripBudgetMaxInput.value || 0);
  const roomCategory = roomCategorySelect.options[roomCategorySelect.selectedIndex].text;
  const roomView = roomViewSelect.options[roomViewSelect.selectedIndex].text;
  const bedType = bedTypeSelect.options[bedTypeSelect.selectedIndex].text;
  const vehicleDescription = estimate.vehicle
    ? `${localizedVehicleType(estimate.vehicle.type)} · ${estimate.vehicle.brand} ${estimate.vehicle.model} ${estimate.vehicle.year} × ${estimate.vehicleCount}`
    : l("No Twar Mal transportation", "ไม่ใช้รถของ Twar Mal");
  const startDateLabel = formatTripDateRange(qs("#start-date").value, estimate.days);
  const rows = [
    [l("Destination", "จุดหมาย"), destinationSelect.value],
    [l("Travel dates", "วันที่เดินทาง"), startDateLabel],
    [l("Travelers", "ผู้เดินทาง"), currentLanguage === "th" ? `รวม ${estimate.travelers} คน · ผู้ใหญ่ ${composition.adults} · เด็ก ${composition.children} · ผู้สูงอายุ ${composition.seniors}` : `${estimate.travelers} total · ${composition.adults} adult${composition.adults === 1 ? "" : "s"} · ${composition.children} child${composition.children === 1 ? "" : "ren"} · ${composition.seniors} senior${composition.seniors === 1 ? "" : "s"}`],
    [l("Comfort level", "ระดับความสะดวกสบาย"), localizedTierLabel(estimate.tier)],
    [l("Travel style", "สไตล์การเดินทาง"), localizedStyle(qs("#planner-style").value)],
    [l("Arrival / pickup", "การเดินทางถึง / จุดรับ"), localizedPickup(qs("#pickup-point").value)],
    [l("Journey design & support", "การออกแบบและดูแลทริป"), formatTHB(estimate.serviceSubtotal)],
    [l("Attractions & activities allowance", "งบสถานที่และกิจกรรม"), `${formatTHB(estimate.activitySubtotal)} · ${l("included in package", "รวมในแพ็กเกจ")}`]
  ];
  const accessibilityLevel = localizedAccessibility(accessibilityLevelSelect.value);
  const accessibilityNotes = accessibilityNotesInput.value.trim();
  if (accessibilityLevelSelect.value !== "none" || accessibilityNotes) rows.push([l("Accessibility", "การเข้าถึง"), `${accessibilityLevel}${accessibilityNotes ? ` · ${accessibilityNotes}` : ""}`]);
  const arrivalDetails = qs("#arrival-details").value.trim();
  if (arrivalDetails) rows.push([l("Arrival details", "รายละเอียดการเดินทางถึง"), arrivalDetails]);
  const mustSee = qs("#must-see").value.trim();
  if (mustSee) rows.push([l("Must-see places & activities", "สถานที่และกิจกรรมที่ต้องไป"), mustSee]);
  if (hotelSelect.value === "own") {
    rows.push([l("Hotel", "โรงแรม"), l("Booked separately · ฿0", "จองแยกเอง · ฿0")]);
  } else {
    rows.push(
      [l("Hotel", "โรงแรม"), `${hotelSelect.options[hotelSelect.selectedIndex].text} · ${formatTHB(estimate.hotelSubtotal)}`],
      [l("Hotel stay", "จำนวนคืนโรงแรม"), currentLanguage === "th" ? `${estimate.nights} คืน` : `${estimate.nights} night${estimate.nights > 1 ? "s" : ""}`],
      [l("Rooms", "ห้องพัก"), `${estimate.rooms} × ${roomCategory}`],
      [l("View", "วิว"), roomView],
      [l("Bed", "เตียง"), `${bedType} · ${l("no price change", "ราคาไม่เปลี่ยน")}`]
    );
  }
  rows.push([l("Transport", "การเดินทาง"), `${vehicleDescription} · ${formatTHB(estimate.transportSubtotal)}`]);
  rows.push(mealBudgetMinInput.value !== "" && mealBudgetMaxInput.value !== ""
    ? [l("Meal budget", "งบอาหาร"), `${formatTHB(estimate.mealAllowance)} · ${l("paid directly to restaurants or delivery providers", "ชำระกับร้านหรือผู้ให้บริการเดลิเวอรีโดยตรง")}`]
    : [l("Meal cost", "ค่าอาหาร"), l("Not added · pay restaurants, hotels, or delivery providers directly", "ไม่เพิ่มในยอด · ชำระกับร้าน โรงแรม หรือเดลิเวอรีโดยตรง")]);
  rows.push([estimate.hasMealBudget ? l("Estimated total trip spend", "ค่าใช้จ่ายทริปรวมโดยประมาณ") : l("Website booking estimate", "ประมาณการจองผ่านเว็บไซต์"), formatTHB(estimate.total)]);
  if (tripBudgetMinimum >= 1000 && tripBudgetMaximum >= tripBudgetMinimum) {
    rows.splice(2, 0, [l("Trip budget range", "ช่วงงบทริป"), `${formatTHB(tripBudgetMinimum)}–${formatTHB(tripBudgetMaximum)}`]);
    if (lastBudgetRecommendation) {
      const recommendationIsInRange = lastBudgetRecommendation.suggestedSpend >= tripBudgetMinimum && lastBudgetRecommendation.suggestedSpend <= tripBudgetMaximum;
      const matchLabel = recommendationIsInRange
        ? currentLanguage === "th" ? `มี ${lastBudgetMatches.length} ระดับในช่วงงบ` : `${lastBudgetMatches.length} comfort option${lastBudgetMatches.length > 1 ? "s" : ""} in range`
        : currentLanguage === "th" ? `ตัวเลือกเหมาะที่สุดสูงกว่างบ ${formatTHB(lastBudgetRecommendation.suggestedSpend - tripBudgetMaximum)}` : `Best fit ${formatTHB(lastBudgetRecommendation.suggestedSpend - tripBudgetMaximum)} above maximum`;
      rows.splice(3, 0, [l("Budget guidance", "คำแนะนำงบ"), `${matchLabel} · ${l("best-fit spend", "ค่าใช้จ่ายที่เหมาะที่สุด")} ${formatTHB(lastBudgetRecommendation.suggestedSpend)}`]);
    }
  }
  const mealBudgetMinimum = Number(mealBudgetMinInput.value || 0);
  const mealBudgetMaximum = Number(mealBudgetMaxInput.value || 0);
  if (mealBudgetMinInput.value !== "" && mealBudgetMaxInput.value !== "" && mealBudgetMaximum >= mealBudgetMinimum) {
    rows.push([l("Meal budget range", "ช่วงงบอาหาร"), `${formatTHB(mealBudgetMinimum)}–${formatTHB(mealBudgetMaximum)}${fineDiningInput.checked ? l(" · includes one fine-dining meal", " · รวมไฟน์ไดนิ่งหนึ่งมื้อ") : ""}`]);
  }
  if (!mealPlans.length) rows.push([l("Meals", "มื้ออาหาร"), l("Not planned · restaurant bills excluded", "ยังไม่วางแผน · ไม่รวมค่าอาหารจากร้าน")]);
  mealPlans.forEach((meal) => rows.push([`${currentLanguage === "th" ? "วันที่" : "Day"} ${meal.day} · ${localizedMealName(meal.meal)}`, `${meal.restaurant} · ${localizedMealPreference(meal.preference)} · ${l("pay directly", "ชำระโดยตรง")}`]));
  itineraryPlans.forEach((day) => rows.push([currentLanguage === "th" ? `แผนวันที่ ${day.day}` : `Day ${day.day} itinerary`, `${day.morning} · ${day.afternoon} · ${day.evening}`]));
  rows.push([l("Quote status", "สถานะราคา"), l("Planning estimate only · availability and final written quotation must be confirmed before real payment", "เป็นเพียงประมาณการเพื่อวางแผน · ต้องยืนยันห้องว่างและใบเสนอราคาสุดท้ายก่อนชำระเงินจริง")]);
  const specialRequest = qs("#special-request").value.trim();
  if (specialRequest) rows.push([l("Special requests", "คำขอพิเศษ"), specialRequest]);
  qs("#review-title").textContent = currentLanguage === "th" ? `${estimate.days} วันใน ${destinationSelect.value}` : `${estimate.days} day${estimate.days > 1 ? "s" : ""} in ${destinationSelect.value}`;
  const reviewLines = qs("#review-lines");
  reviewLines.innerHTML = "";
  rows.forEach(([key, value]) => {
    const row = document.createElement("div");
    const label = document.createElement("span");
    const detail = document.createElement("strong");
    label.textContent = key;
    detail.textContent = value;
    row.append(label, detail);
    reviewLines.append(row);
  });
  qs("#review-total").textContent = formatTHB(estimate.websiteTotal);
  plannerForm.hidden = true;
  bookingReview.hidden = false;
  qsa(".step-indicator span").forEach((el, index) => el.classList.toggle("active", index === 1));
  qs(".planner-modal").scrollTop = 0;
});

qs(".back-to-plan").addEventListener("click", () => {
  plannerForm.hidden = false;
  bookingReview.hidden = true;
  qsa(".step-indicator span").forEach((el, index) => el.classList.toggle("active", index === 0));
});

qsa(".checkout-card input").forEach((input) => input.addEventListener("input", () => input.setCustomValidity("")));
qs("#card-number").addEventListener("input", (event) => {
  event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim();
});
qs("#card-expiry").addEventListener("input", (event) => {
  const digits = event.currentTarget.value.replace(/\D/g, "").slice(0, 4);
  event.currentTarget.value = digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits;
});

function passesLuhn(number) {
  let sum = 0;
  let shouldDouble = false;
  for (let index = number.length - 1; index >= 0; index -= 1) {
    let digit = Number(number[index]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

function validatePreviewCard() {
  const name = qs("#card-name");
  const number = qs("#card-number");
  const expiry = qs("#card-expiry");
  const cvc = qs("#card-cvc");
  const digits = number.value.replace(/\D/g, "");
  name.setCustomValidity(name.value.trim().length >= 2 ? "" : l("Enter the cardholder name.", "กรอกชื่อผู้ถือบัตร"));
  number.setCustomValidity(digits.length >= 13 && digits.length <= 19 && passesLuhn(digits) ? "" : l("Enter a valid card number.", "กรอกหมายเลขบัตรที่ถูกต้อง"));
  const expiryMatch = expiry.value.trim().match(/^(0[1-9]|1[0-2])\s*\/\s*(\d{2})$/);
  let expiryValid = false;
  if (expiryMatch) {
    const expiryMonth = Number(expiryMatch[1]);
    const expiryYear = 2000 + Number(expiryMatch[2]);
    const expiryDate = new Date(expiryYear, expiryMonth, 0, 23, 59, 59);
    expiryValid = expiryDate >= new Date();
  }
  expiry.setCustomValidity(expiryValid ? "" : l("Enter a valid future expiry date in MM / YY format.", "กรอกวันหมดอายุในอนาคตที่ถูกต้องในรูปแบบ MM / YY"));
  cvc.setCustomValidity(/^\d{3,4}$/.test(cvc.value.trim()) ? "" : l("Enter a valid 3 or 4 digit CVC.", "กรอกรหัส CVC ที่ถูกต้อง 3 หรือ 4 หลัก"));
  const invalid = [name, number, expiry, cvc].find((input) => !input.checkValidity());
  if (invalid) {
    invalid.reportValidity();
    return false;
  }
  return true;
}

qs("#demo-payment").addEventListener("click", () => {
  if (!validatePreviewCard()) return;
  closeModal(plannerModal);
  showToast(l("Test booking completed — nothing was submitted and no card was charged.", "เสร็จสิ้นการจองทดสอบ — ไม่มีการส่งข้อมูลหรือเรียกเก็บเงิน"));
});

qs("#fill-test-card").addEventListener("click", () => {
  const nextYear = String((new Date().getFullYear() + 1) % 100).padStart(2, "0");
  qs("#card-name").value = "Test Traveler";
  qs("#card-number").value = "4242 4242 4242 4242";
  qs("#card-expiry").value = `12 / ${nextYear}`;
  qs("#card-cvc").value = "123";
  qsa(".checkout-card input").forEach((input) => input.setCustomValidity(""));
  showToast(l("Safe test card filled. No real payment details are used.", "กรอกบัตรทดสอบที่ปลอดภัยแล้ว ไม่มีการใช้ข้อมูลชำระเงินจริง"));
});

qsa(".account-trigger").forEach((button) => button.addEventListener("click", () => {
  accountReturnFocus = document.activeElement;
  accountModal.classList.add("open");
  accountModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setTimeout(() => qs("[data-account-tab]", accountModal).focus(), 100);
}));

qsa("[data-account-tab]").forEach((button) => button.addEventListener("click", () => {
  qsa("[data-account-tab]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  qs("#signin-form").hidden = button.dataset.accountTab !== "signin";
  qs("#signup-form").hidden = button.dataset.accountTab !== "signup";
}));

function setAccountName(name) {
  qsa(".account-trigger").forEach((button) => { button.textContent = `Hi, ${name.split(" ")[0]}`; });
  localStorage.setItem("twarMalGuest", name);
}

qs("#signin-form").addEventListener("submit", (event) => {
  event.preventDefault();
  setAccountName("Traveler");
  closeModal(accountModal);
  showToast("Welcome back. Your preview account is ready.");
});

qs("#signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = qs("#signup-name").value.trim();
  setAccountName(name || "Traveler");
  closeModal(accountModal);
  showToast("Preview account created on this device.");
});

const savedGuest = localStorage.getItem("twarMalGuest");
if (savedGuest) setAccountName(savedGuest);

function applyCurrentLanguage() {
  document.documentElement.lang = currentLanguage;
  qsa(".lang-toggle").forEach((toggle) => qsa("span", toggle).forEach((span, index) => span.classList.toggle("active", (currentLanguage === "en" && index === 0) || (currentLanguage === "th" && index === 1))));
  qsa("[data-i18n]").forEach((element) => {
    const value = translations[currentLanguage][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  applyPlannerStaticLanguage();
  syncTravelerComposition();
  syncHotels(true);
  syncTransportFields();
  syncMealDayOptions();
  if (!itineraryCustomized) syncItineraryDays(true);
  else renderItineraryPlans();
  calculateEstimate();
  if (!bookingReview.hidden) plannerForm.requestSubmit();
  const guest = localStorage.getItem("twarMalGuest");
  if (guest) setAccountName(guest);
}

qsa(".lang-toggle").forEach((button) => button.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "th" : "en";
  applyCurrentLanguage();
}));

qs(".menu-toggle").addEventListener("click", (event) => {
  const menu = qs("#nav-links");
  menu.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(menu.classList.contains("open")));
});
qsa("#nav-links a").forEach((link) => link.addEventListener("click", () => {
  qs("#nav-links").classList.remove("open");
  qs(".menu-toggle").setAttribute("aria-expanded", "false");
}));

window.addEventListener("scroll", () => qs(".site-header").classList.toggle("scrolled", window.scrollY > 70), { passive: true });
document.addEventListener("keydown", (event) => {
  const activeModal = qs(".modal-shell.open");
  if (event.key === "Escape") qsa(".modal-shell.open").forEach(closeModal);
  if (event.key === "Tab" && activeModal) {
    const focusable = qsa('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', activeModal)
      .filter((element) => !element.closest("[hidden]"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

qsa(".filter-tabs button").forEach((button) => button.setAttribute("aria-pressed", String(button.classList.contains("active"))));
applyPlannerStaticLanguage();
syncTravelerComposition();
syncHotels();
syncTransportFields();
syncMealDayOptions();
syncItineraryDays(true);
calculateEstimate();
