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
let lastBudgetRecommendation = null;
let lastBudgetMatches = [];
let appliedMealAllowance = null;
let appliedBestFitOverage = false;
let budgetTierRecalculation = false;
let plannerReturnFocus = null;
let accountReturnFocus = null;

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
  if (!startValue) return "To be confirmed";
  const start = new Date(`${startValue}T00:00:00`);
  const end = new Date(start);
  end.setDate(end.getDate() + days - 1);
  const formatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });
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
  return Math.min(12, Math.max(1, Math.round(Number(travelerInput.value || 1))));
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
  minInput.setCustomValidity(minimumTooLow ? `${label} minimum must be at least ${formatTHB(minimumAllowed)}.` : invalidOrder ? `${label} minimum cannot be higher than the maximum.` : "");
  maxInput.setCustomValidity(maximumTooLow ? `${label} maximum must be at least ${formatTHB(minimumAllowed)}.` : invalidOrder ? `${label} maximum cannot be lower than the minimum.` : "");
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
    option.textContent = `${name} · est. ${formatTHB(Number(option.dataset.rate))} / room / night`;
    hotelSelect.append(option);
  });
  const recommend = document.createElement("option");
  recommend.value = "recommend";
  recommend.dataset.rate = String(profile.rates[0]);
  recommend.textContent = `Let Twar Mal recommend another ${pricing.tiers[tier].label.toLowerCase()} hotel`;
  hotelSelect.append(recommend);
  const own = document.createElement("option");
  own.value = "own";
  own.dataset.rate = "0";
  own.textContent = "I’ll book my own hotel · ฿0";
  hotelSelect.append(own);
  if (previous && qsa("option", hotelSelect).some((option) => option.value === previous)) hotelSelect.value = previous;
  qs("#hotel-range-note").textContent = `${destinationSelect.value} · ${pricing.tiers[tier].label} range ${profile.range} per room/night. Examples are researched planning estimates; live dates are confirmed before payment.`;
  syncHotelFields();
  syncRoomRequirement();
}

function syncHotelFields() {
  const hotelBookedSeparately = hotelSelect.value === "own";
  [roomCategorySelect, roomViewSelect, bedTypeSelect, roomCountInput].forEach((input) => {
    input.disabled = hotelBookedSeparately;
  });
  if (hotelBookedSeparately) qs("#hotel-range-note").textContent = "Hotel booked separately — no room charge is added to the Twar Mal estimate.";
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
    qs("#room-capacity-note").textContent = "No room quantity is charged because the hotel is booked separately.";
    return;
  }
  const required = requiredRoomCount(roomCategorySelect.value, travelerCount());
  const entered = Math.max(1, Math.round(Number(roomCountInput.value || 1)));
  roomCountInput.min = String(required);
  if (entered < required) {
    roomCountInput.value = String(required);
    if (showNotice) showToast(`Room quantity increased to ${required} for ${travelerCount()} travelers.`);
  }
  qs("#room-capacity-note").textContent = `${roomCapacity(roomCategorySelect.value)} guests per room for planning · minimum ${required} room${required > 1 ? "s" : ""}.`;
}

function syncVehicleRequirement(showNotice = false) {
  const vehicle = selectedVehicle();
  if (!vehicle) {
    vehicleCountInput.min = "1";
    qs("#vehicle-capacity-note").textContent = "Minimum quantity is calculated when a vehicle is selected.";
    return;
  }
  const required = requiredVehicleCount(vehicle, travelerCount());
  const entered = Math.max(1, Math.round(Number(vehicleCountInput.value || 1)));
  vehicleCountInput.min = String(required);
  if (entered < required) {
    vehicleCountInput.value = String(required);
    if (showNotice) showToast(`Vehicle quantity increased to ${required} for ${travelerCount()} travelers.`);
  }
  qs("#vehicle-capacity-note").textContent = `${vehicle.capacity} guests per vehicle · minimum ${required} vehicle${required > 1 ? "s" : ""}.`;
}

function syncVehicleModels() {
  const mode = transportSelect.value;
  if (mode === "none") return;
  const previous = vehicleModelSelect.value;
  vehicleModelSelect.innerHTML = "";
  vehicleCatalog[mode].filter((vehicle) => vehicle.type === vehicleTypeSelect.value).forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = `${vehicle.brand}-${vehicle.model}-${vehicle.year}`;
    option.textContent = `${vehicle.brand} ${vehicle.model} · ${vehicle.year} · ${formatTHB(vehicle.rate)} / day`;
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
  carOption.textContent = isKohLarn ? "Self-drive car · unavailable on Koh Larn" : "Self-drive car · from ฿800 / day";
  driverOption.textContent = isKohLarn ? "Private car + driver · unavailable on Koh Larn" : "Private car + driver · from ฿1,700 / day";

  if (isKohLarn && ["car", "driver"].includes(transportSelect.value)) {
    transportSelect.value = "moto";
    if (showNotice) showToast("Koh Larn allows motorcycle rental only — your transport was changed.");
  }

  const hasVehicle = transportSelect.value !== "none";
  qsa(".vehicle-detail-field").forEach((field) => { field.hidden = !hasVehicle; });
  qs(".vehicle-count-field").hidden = !hasVehicle;
  if (!hasVehicle) {
    qs("#transport-policy").textContent = isKohLarn ? "Koh Larn: only motorcycle rental is available." : "Choose a vehicle type and model to see its daily rate.";
    syncVehicleRequirement();
    return;
  }

  const mode = transportSelect.value;
  const previousType = vehicleTypeSelect.value;
  const types = [...new Set(vehicleCatalog[mode].map((vehicle) => vehicle.type))];
  vehicleTypeSelect.innerHTML = types.map((type) => `<option>${type}</option>`).join("");
  if (types.includes(previousType)) vehicleTypeSelect.value = previousType;
  syncVehicleModels();
  qs("#vehicle-count-label").textContent = mode === "moto" ? "Motorcycles" : mode === "driver" ? "Driver vehicles" : "Cars";
  const vehicle = selectedVehicle();
  qs("#transport-policy").textContent = isKohLarn
    ? `Koh Larn motorcycle rate: ${formatTHB(vehicle?.rate || 200)} per vehicle/day.`
    : `${vehicle ? `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} per vehicle/day.` : "Choose a model."} Fuel, tolls, parking, ferry charges, overtime, and deposits are confirmed separately.`;
  syncVehicleRequirement();
}

function syncMealDayOptions() {
  const days = Math.max(1, durationDays());
  const previous = Number(qs("#meal-day").value || 1);
  qs("#meal-day").innerHTML = Array.from({ length: days }, (_, index) => `<option value="${index + 1}">Day ${index + 1}</option>`).join("");
  qs("#meal-day").value = String(Math.min(previous, days));
  mealPlans = mealPlans.filter((meal) => meal.day <= days);
  renderMealPlans();
}

function renderMealPlans() {
  const list = qs("#meal-plan-list");
  list.innerHTML = "";
  if (!mealPlans.length) {
    const empty = document.createElement("span");
    empty.className = "meal-empty";
    empty.textContent = "No meals planned yet. Restaurant costs stay outside this total.";
    list.append(empty);
    return;
  }
  mealPlans.sort((a, b) => a.day - b.day || ["Breakfast", "Lunch", "Dinner"].indexOf(a.meal) - ["Breakfast", "Lunch", "Dinner"].indexOf(b.meal));
  mealPlans.forEach((item) => {
    const row = document.createElement("div");
    row.className = "meal-plan-item";
    const copy = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = `Day ${item.day} · ${item.meal}`;
    const small = document.createElement("small");
    small.textContent = `${item.restaurant} · ${item.preference} · pay directly at venue`;
    copy.append(strong, small);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.dataset.removeMeal = item.id;
    remove.setAttribute("aria-label", `Remove Day ${item.day} ${item.meal}`);
    remove.textContent = "×";
    row.append(copy, remove);
    list.append(row);
  });
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
      ? "Restaurant spending is a planning allowance only and will not be added to the website payment total."
      : "No meal cost is added unless you enter both meal-budget fields.";
    unlockComfortLevels();
    qs("#tier-budget-note").textContent = "Enter a valid total budget range to see which comfort levels are affordable.";
  };

  if (rawMealRange.invalid || rawMealRange.hasMinimum !== rawMealRange.hasMaximum || fineDiningBudgetTooLow) {
    if (fineDiningBudgetTooLow) {
      mealBudgetMaxInput.setCustomValidity(`Allow at least ${formatTHB(fineDiningMinimum)} for one fine-dining meal for this group.`);
      mealBudgetMaxInput.setAttribute("aria-invalid", "true");
    }
    mealStatus.classList.add("invalid");
    mealStatus.textContent = fineDiningBudgetTooLow
      ? `Allow at least ${formatTHB(fineDiningMinimum)} for one fine-dining meal for ${Math.max(1, Number(travelerInput.value || 1))} guest${Number(travelerInput.value || 1) > 1 ? "s" : ""}.`
      : rawMealRange.invalid
      ? "Meal budget minimum cannot be higher than the maximum."
      : "Enter both the meal budget minimum and maximum, or leave both blank.";
    resetSuggestions(
      "Check your meal budget range.",
      fineDiningBudgetTooLow
        ? `Increase the meal maximum to at least ${formatTHB(fineDiningMinimum)} to protect one fine-dining meal.`
        : "Both meal amounts must form a valid range before we can match the full trip."
    );
    return false;
  }

  mealStatus.classList.remove("invalid");
  if (rawMealRange.hasMinimum) {
    mealStatus.textContent = `${formatTHB(rawMealRange.minimum)}–${formatTHB(rawMealRange.maximum)} reserved for restaurant bills${fineDiningInput.checked ? ", including one fine-dining meal" : ""}.`;
  } else {
    mealStatus.textContent = `No meal budget added. ${fineDiningInput.checked ? "Your fine-dining preference is saved, but its cost remains outside this estimate." : "Restaurant, hotel dining, and delivery costs stay outside this estimate."}`;
  }

  if (minimum < 1000 || maximum < 1000 || !tripRange.hasMinimum || !tripRange.hasMaximum) {
    resetSuggestions("Enter your minimum and maximum budget.", "We will show the complete travel options inside your range.");
    return false;
  }
  if (tripRange.invalid || maximum < minimum) {
    resetSuggestions("Maximum budget must be equal to or higher than the minimum.", "Adjust the two amounts to continue.");
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
  const availableLabels = ["budget", "mid", "premium"].filter((tier) => affordableTiers.has(tier)).map((tier) => pricing.tiers[tier].label);
  qs("#tier-budget-note").textContent = availableLabels.length
    ? `Available for this budget: ${availableLabels.join(" · ")}. Higher comfort levels are locked to protect your maximum.`
    : "No comfort level fits this maximum yet. Increase the maximum or shorten the trip.";

  if (!recommendation) {
    recommendations.hidden = true;
    applyButton.disabled = true;
    const cheapestAbove = candidates.filter((candidate) => candidate.suggestedSpend > maximum).sort((a, b) => a.suggestedSpend - b.suggestedSpend)[0];
    qs("#budget-status").textContent = "No complete combination fits this range yet.";
    qs("#budget-spend").textContent = cheapestAbove
      ? `The closest complete trip is ${formatTHB(cheapestAbove.suggestedSpend - maximum)} above your maximum. Increase the maximum, shorten the trip${rawMealRange.hasMinimum ? ", or reduce the meal range" : ""}.`
      : "Adjust the range or trip details to continue.";
    qs("#budget-note").textContent = "Best fit is disabled until the complete estimated trip is inside the range or only slightly above it.";
    return Boolean(tierChanged);
  }

  recommendations.hidden = false;
  applyButton.disabled = false;

  if (matches.length > 1) {
    qs("#budget-status").textContent = `${matches.length} complete combinations fit · ${recommendation.profile.label} is the best fit`;
  } else if (matches.length === 1) {
    qs("#budget-status").textContent = `${recommendation.profile.label} fits inside your budget range`;
  } else {
    qs("#budget-status").textContent = `Closest best fit is slightly higher by ${formatTHB(overage)}`;
  }
  qs("#budget-spend").textContent = `Your range ${formatTHB(minimum)}–${formatTHB(maximum)} · best-fit trip spend ${formatTHB(recommendation.suggestedSpend)} · website card payment ${formatTHB(recommendation.websiteSubtotal)}`;

  const viewLabels = { standard: "standard view", landscape: "landscape view", mountain: "mountain view", sea: "sea view" };
  const packageOptions = representativeMatches.map((candidate) => `${pricing.tiers[candidate.profile.tier].label} ${formatTHB(candidate.planSubtotal)}`);
  qs("#budget-package-title").textContent = representativeMatches.length > 1
    ? `${representativeMatches.length} comfort levels fit · ${recommendation.days} days`
    : `${pricing.tiers[recommendation.profile.tier].label} · ${recommendation.days}-day travel package`;
  qs("#budget-package-copy").textContent = `Affordable levels: ${packageOptions.join(" · ")}. Best fit: ${recommendation.profile.label} for ${recommendation.travelers} guest${recommendation.travelers > 1 ? "s" : ""}.`;

  const hotelNames = [...new Set(optionSet.map((candidate) => candidate.hotelName))];
  qs("#budget-hotel-title").textContent = `${hotelNames.length} hotel options fit · ${formatTHBRange(optionSet.map((candidate) => candidate.hotelSubtotal))}`;
  qs("#budget-hotel-copy").textContent = `${hotelNames.slice(0, 6).join(" · ")}${hotelNames.length > 6 ? ` · plus ${hotelNames.length - 6} more` : ""}. Best fit: normal room with ${viewLabels[recommendation.roomView]} at ${recommendation.hotelName}.`;

  const activityTitles = [...new Set(optionSet.map((candidate) => candidate.activity.title))];
  qs("#budget-activity-title").textContent = `${activityTitles.join(" · ")} · ${formatTHB(recommendation.activitySubtotal)} included allowance`;
  qs("#budget-activity-copy").textContent = `${recommendation.activity.copy} This allowance is already inside the travel-package price; exact ticket inclusions are confirmed before payment.`;

  const transportLabels = optionSet.map((candidate) => {
    const label = candidate.transport.mode === "driver" ? "Private driver" : candidate.transport.mode === "moto" ? "Motorcycle" : candidate.transport.mode === "car" ? "Self-drive car" : "No agency transportation";
    return `${label} ${formatTHB(candidate.transportSubtotal)}`;
  });
  const distinctTransportLabels = [...new Set(transportLabels)];
  qs("#budget-transport-title").textContent = `${distinctTransportLabels.length} transportation option${distinctTransportLabels.length > 1 ? "s" : ""} · ${formatTHBRange(optionSet.map((candidate) => candidate.transportSubtotal))}`;
  qs("#budget-transport-copy").textContent = `${distinctTransportLabels.slice(0, 5).join(" · ")}. Best fit: ${recommendation.transport.vehicle ? `${recommendation.transport.vehicle.brand} ${recommendation.transport.vehicle.model} × ${recommendation.transport.count}` : "no agency transportation"}.`;

  if (recommendation.mealRange.hasBudget) {
    const mealLabels = optionSet.map((candidate) => `${candidate.profile.mealTitle} ${formatTHB(candidate.mealSubtotal)}`);
    const distinctMealLabels = [...new Set(mealLabels)];
    qs("#budget-meal-title").textContent = `${distinctMealLabels.length} meal allowance option${distinctMealLabels.length > 1 ? "s" : ""} · ${formatTHBRange(optionSet.map((candidate) => candidate.mealSubtotal))}`;
    qs("#budget-meal-copy").textContent = `${distinctMealLabels.slice(0, 5).join(" · ")}. Best-fit choices: ${recommendation.profile.mealOptions}${fineDiningInput.checked ? ", with one fine-dining meal protected" : ""}. Pay restaurants directly.`;
    qs("#budget-note").textContent = `${slightlyOver ? `This best fit is ${formatTHB(overage)} above your maximum. ` : ""}Website card payment: ${formatTHB(recommendation.websiteSubtotal)}. Keep ${formatTHB(recommendation.mealSubtotal)} outside the website for restaurant bills.`;
  } else {
    qs("#budget-meal-title").textContent = "No meal budget added · ฿0";
    qs("#budget-meal-copy").textContent = `Choose restaurants, hotel dining, or delivery freely${fineDiningInput.checked ? ", including your fine-dining preference" : ""}. Pay the restaurant or delivery provider directly.`;
    qs("#budget-note").textContent = `${slightlyOver ? `This best fit is ${formatTHB(overage)} above your maximum. ` : ""}Website card payment: ${formatTHB(recommendation.websiteSubtotal)}. Meal costs are not estimated or charged.`;
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
  transportSelect.value = recommendation.transport.mode;
  syncTransportFields();
  if (recommendation.transport.vehicle) {
    vehicleTypeSelect.value = recommendation.transport.vehicle.type;
    syncVehicleModels();
    vehicleModelSelect.value = `${recommendation.transport.vehicle.brand}-${recommendation.transport.vehicle.model}-${recommendation.transport.vehicle.year}`;
    vehicleCountInput.value = String(recommendation.transport.count);
  }
  appliedMealAllowance = recommendation.mealSubtotal;
  appliedBestFitOverage = recommendation.suggestedSpend > Number(tripBudgetMaxInput.value || 0);
  qs("#meal-preference").value = recommendation.profile.mealPreference;
  calculateEstimate();
  const maximum = Number(tripBudgetMaxInput.value || 0);
  const overage = recommendation.suggestedSpend - maximum;
  showToast(`${recommendation.profile.label} applied${overage > 0 ? ` · ${formatTHB(overage)} slightly above the maximum` : " inside your budget range"}.`);
}

function calculateEstimate() {
  const days = Math.max(1, durationDays());
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
  qs("#estimate-label").textContent = meals.hasBudget ? "Estimated total trip spend" : "Website estimate · meals excluded";
  qs("#estimate-total").textContent = formatTHB(total);
  const roomNote = hotelSelect.value === "own" ? "hotel not included" : `${rooms} room${rooms > 1 ? "s" : ""}`;
  const nightNote = nights ? `${nights} hotel night${nights > 1 ? "s" : ""}` : "hotel booked separately";
  qs("#estimate-note").textContent = `for ${travelers} guest${travelers > 1 ? "s" : ""} · ${days} day${days > 1 ? "s" : ""} · ${roomNote} · ${nightNote}`;
  qs("#estimate-breakdown").textContent = meals.hasBudget
    ? `Package ${formatTHB(planSubtotal)} (activities ${formatTHB(activitySubtotal)}) + hotel ${formatTHB(hotelSubtotal)} + transport ${formatTHB(transportSubtotal)} + meal budget ${formatTHB(mealAllowance)} paid direct · card ${formatTHB(websiteTotal)}`
    : `Package ${formatTHB(planSubtotal)} (activities ${formatTHB(activitySubtotal)}) + hotel ${formatTHB(hotelSubtotal)} + transport ${formatTHB(transportSubtotal)} · meals excluded · card ${formatTHB(websiteTotal)}`;

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
  reviewButton.disabled = overBudget || tripRange.invalid || meals.invalid || !mealBudgetMinInput.validity.valid || !mealBudgetMaxInput.validity.valid;
  const alert = qs("#estimate-budget-alert");
  if (overBudget) {
    alert.textContent = `This selection is ${formatTHB(total - tripRange.maximum)} above your maximum. Use Best Fit or choose lower-cost options before continuing.`;
  } else if (belowRange) {
    alert.textContent = `This selection is below your minimum by ${formatTHB(tripRange.minimum - total)}. You can keep the savings or use Best Fit for a closer match.`;
  } else if (appliedBestFitOverage && total > tripRange.maximum) {
    alert.textContent = `Best Fit is slightly above your maximum by ${formatTHB(total - tripRange.maximum)}.`;
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
  calculateEstimate();
}));

travelerInput.addEventListener("input", () => {
  clearAppliedBestFit();
  syncRoomRequirement(true);
  syncVehicleRequirement(true);
  calculateEstimate();
});

[hotelSelect, roomCategorySelect, roomViewSelect, bedTypeSelect, roomCountInput, vehicleCountInput].forEach((input) => input.addEventListener("input", () => {
  clearAppliedBestFit();
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
  vehicleTypeSelect.value = "";
  syncTransportFields(true);
  syncVehicleRequirement(true);
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
  if (vehicle) qs("#transport-policy").textContent = `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} per vehicle/day. Fuel, tolls, parking, ferry charges, overtime, and deposits are confirmed separately.`;
  syncVehicleRequirement(true);
  calculateEstimate();
});

destinationSelect.addEventListener("change", () => {
  clearAppliedBestFit();
  if (mealPlans.length) showToast("Meal plans cleared because the destination changed.");
  mealPlans = [];
  renderMealPlans();
  syncHotels();
  syncTransportFields(true);
  calculateEstimate();
});

tierInputs.forEach((input) => input.addEventListener("change", () => {
  clearAppliedBestFit();
  syncHotels();
  calculateEstimate();
}));

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
  const hotelName = hotelSelect.value === "own" ? "Customer's hotel" : hotelSelect.options[hotelSelect.selectedIndex].text.split(" · ")[0];
  const typedRestaurant = qs("#restaurant-name").value.trim();
  const restaurant = typedRestaurant || (preference === "Breakfast at hotel" ? hotelName : "Twar Mal to recommend");
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
  showToast(`${existing ? "Meal updated" : "Meal added"}. Its restaurant bill is not included in the total.`);
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
  const estimate = calculateEstimate();
  const tripBudgetMinimum = Number(tripBudgetMinInput.value || 0);
  const tripBudgetMaximum = Number(tripBudgetMaxInput.value || 0);
  const roomCategory = roomCategorySelect.options[roomCategorySelect.selectedIndex].text;
  const roomView = roomViewSelect.options[roomViewSelect.selectedIndex].text;
  const bedType = bedTypeSelect.options[bedTypeSelect.selectedIndex].text;
  const vehicleDescription = estimate.vehicle
    ? `${estimate.vehicle.type} · ${estimate.vehicle.brand} ${estimate.vehicle.model} ${estimate.vehicle.year} × ${estimate.vehicleCount}`
    : "No Twar Mal transportation";
  const startDateLabel = formatTripDateRange(qs("#start-date").value, estimate.days);
  const rows = [
    ["Destination", destinationSelect.value],
    ["Travel dates", startDateLabel],
    ["Travelers", String(estimate.travelers)],
    ["Comfort level", pricing.tiers[estimate.tier].label],
    ["Travel style", qs("#planner-style").value],
    ["Arrival / pickup", qs("#pickup-point").value],
    ["Journey design & support", formatTHB(estimate.serviceSubtotal)],
    ["Attractions & activities allowance", `${formatTHB(estimate.activitySubtotal)} · included in package`]
  ];
  const arrivalDetails = qs("#arrival-details").value.trim();
  if (arrivalDetails) rows.push(["Arrival details", arrivalDetails]);
  const mustSee = qs("#must-see").value.trim();
  if (mustSee) rows.push(["Must-see places & activities", mustSee]);
  if (hotelSelect.value === "own") {
    rows.push(["Hotel", "Booked separately · ฿0"]);
  } else {
    rows.push(
      ["Hotel", `${hotelSelect.options[hotelSelect.selectedIndex].text} · ${formatTHB(estimate.hotelSubtotal)}`],
      ["Hotel stay", `${estimate.nights} night${estimate.nights > 1 ? "s" : ""}`],
      ["Rooms", `${estimate.rooms} × ${roomCategory}`],
      ["View", roomView],
      ["Bed", `${bedType} · no price change`]
    );
  }
  rows.push(["Transport", `${vehicleDescription} · ${formatTHB(estimate.transportSubtotal)}`]);
  rows.push(mealBudgetMinInput.value !== "" && mealBudgetMaxInput.value !== ""
    ? ["Meal budget", `${formatTHB(estimate.mealAllowance)} · paid directly to restaurants or delivery providers`]
    : ["Meal cost", "Not added · pay restaurants, hotels, or delivery providers directly"]);
  rows.push([estimate.hasMealBudget ? "Estimated total trip spend" : "Website booking estimate", formatTHB(estimate.total)]);
  if (tripBudgetMinimum >= 1000 && tripBudgetMaximum >= tripBudgetMinimum) {
    rows.splice(2, 0, ["Trip budget range", `${formatTHB(tripBudgetMinimum)}–${formatTHB(tripBudgetMaximum)}`]);
    if (lastBudgetRecommendation) {
      const recommendationIsInRange = lastBudgetRecommendation.suggestedSpend >= tripBudgetMinimum && lastBudgetRecommendation.suggestedSpend <= tripBudgetMaximum;
      const matchLabel = recommendationIsInRange
        ? `${lastBudgetMatches.length} comfort option${lastBudgetMatches.length > 1 ? "s" : ""} in range`
        : `Best fit ${formatTHB(lastBudgetRecommendation.suggestedSpend - tripBudgetMaximum)} above maximum`;
      rows.splice(3, 0, ["Budget guidance", `${matchLabel} · best-fit spend ${formatTHB(lastBudgetRecommendation.suggestedSpend)}`]);
    }
  }
  const mealBudgetMinimum = Number(mealBudgetMinInput.value || 0);
  const mealBudgetMaximum = Number(mealBudgetMaxInput.value || 0);
  if (mealBudgetMinInput.value !== "" && mealBudgetMaxInput.value !== "" && mealBudgetMaximum >= mealBudgetMinimum) {
    rows.push(["Meal budget range", `${formatTHB(mealBudgetMinimum)}–${formatTHB(mealBudgetMaximum)}${fineDiningInput.checked ? " · includes one fine-dining meal" : ""}`]);
  }
  if (!mealPlans.length) rows.push(["Meals", "Not planned · restaurant bills excluded"]);
  mealPlans.forEach((meal) => rows.push([`Day ${meal.day} · ${meal.meal}`, `${meal.restaurant} · ${meal.preference} · pay directly`]));
  const specialRequest = qs("#special-request").value.trim();
  if (specialRequest) rows.push(["Special requests", specialRequest]);
  qs("#review-title").textContent = `${estimate.days} day${estimate.days > 1 ? "s" : ""} in ${destinationSelect.value}`;
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
  name.setCustomValidity(name.value.trim().length >= 2 ? "" : "Enter the cardholder name.");
  number.setCustomValidity(digits.length >= 13 && digits.length <= 19 && passesLuhn(digits) ? "" : "Enter a valid card number.");
  const expiryMatch = expiry.value.trim().match(/^(0[1-9]|1[0-2])\s*\/\s*(\d{2})$/);
  let expiryValid = false;
  if (expiryMatch) {
    const expiryMonth = Number(expiryMatch[1]);
    const expiryYear = 2000 + Number(expiryMatch[2]);
    const expiryDate = new Date(expiryYear, expiryMonth, 0, 23, 59, 59);
    expiryValid = expiryDate >= new Date();
  }
  expiry.setCustomValidity(expiryValid ? "" : "Enter a valid future expiry date in MM / YY format.");
  cvc.setCustomValidity(/^\d{3,4}$/.test(cvc.value.trim()) ? "" : "Enter a valid 3 or 4 digit CVC.");
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
  showToast("Test booking completed — nothing was submitted and no card was charged.");
});

qs("#fill-test-card").addEventListener("click", () => {
  const nextYear = String((new Date().getFullYear() + 1) % 100).padStart(2, "0");
  qs("#card-name").value = "Test Traveler";
  qs("#card-number").value = "4242 4242 4242 4242";
  qs("#card-expiry").value = `12 / ${nextYear}`;
  qs("#card-cvc").value = "123";
  qsa(".checkout-card input").forEach((input) => input.setCustomValidity(""));
  showToast("Safe test card filled. No real payment details are used.");
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

qs(".lang-toggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "th" : "en";
  document.documentElement.lang = currentLanguage;
  qsa(".lang-toggle span").forEach((span, index) => span.classList.toggle("active", (currentLanguage === "en" && index === 0) || (currentLanguage === "th" && index === 1)));
  qsa("[data-i18n]").forEach((element) => {
    const value = translations[currentLanguage][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  const guest = localStorage.getItem("twarMalGuest");
  if (guest) setAccountName(guest);
});

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
syncHotels();
syncTransportFields();
syncMealDayOptions();
calculateEstimate();
