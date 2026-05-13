const planets = {
  mercury: {
    name: "ดาวพุธ",
    category: "ดาวเคราะห์หิน | ลำดับที่ 1",
    order: "1",
    day: "ประมาณ 59 วันโลก",
    year: "ประมาณ 88 วันโลก",
    summary: "ดาวเคราะห์ที่เล็กที่สุดและอยู่ใกล้ดวงอาทิตย์ที่สุด พื้นผิวเต็มไปด้วยหลุมอุกกาบาตและอุณหภูมิแกว่งมากระหว่างกลางวันกับกลางคืน",
    highlight: "แทบไม่มีบรรยากาศหนาแน่น จึงเก็บความร้อนได้ไม่ดี",
  },
  venus: {
    name: "ดาวศุกร์",
    category: "ดาวเคราะห์หิน | ลำดับที่ 2",
    order: "2",
    day: "ประมาณ 243 วันโลก",
    year: "ประมาณ 225 วันโลก",
    summary: "ดาวเคราะห์ที่มีขนาดใกล้เคียงโลก แต่มีบรรยากาศหนาแน่นมากและร้อนที่สุดในระบบสุริยะจากภาวะเรือนกระจก",
    highlight: "หมุนรอบตัวเองช้ามากและหมุนสวนทางกับดาวเคราะห์ส่วนใหญ่",
  },
  earth: {
    name: "โลก",
    category: "ดาวเคราะห์หิน | ลำดับที่ 3",
    order: "3",
    day: "ประมาณ 24 ชั่วโมง",
    year: "365.25 วัน",
    summary: "ดาวเคราะห์หินที่มีน้ำในสถานะของเหลวบนพื้นผิวจำนวนมาก และเป็นบ้านของสิ่งมีชีวิตเท่าที่เรารู้จัก",
    highlight: "มีชั้นบรรยากาศและสนามแม่เหล็กช่วยปกป้องสิ่งมีชีวิต",
  },
  mars: {
    name: "ดาวอังคาร",
    category: "ดาวเคราะห์หิน | ลำดับที่ 4",
    order: "4",
    day: "ประมาณ 24.6 ชั่วโมง",
    year: "ประมาณ 687 วันโลก",
    summary: "ดาวสีแดงที่นักวิทยาศาสตร์สนใจมาก เพราะมีร่องรอยภูมิประเทศที่ชี้ว่าอดีตอาจเคยมีน้ำไหลบนพื้นผิว",
    highlight: "มีภูเขาไฟโอลิมปัสมอนส์ซึ่งสูงที่สุดแห่งหนึ่งในระบบสุริยะ",
  },
  jupiter: {
    name: "ดาวพฤหัสบดี",
    category: "ดาวแก๊สยักษ์ | ลำดับที่ 5",
    order: "5",
    day: "ประมาณ 10 ชั่วโมง",
    year: "ประมาณ 11.9 ปีโลก",
    summary: "ดาวเคราะห์ที่ใหญ่ที่สุดในระบบสุริยะ ประกอบด้วยไฮโดรเจนและฮีเลียมเป็นหลัก พร้อมพายุขนาดยักษ์ที่สังเกตได้ชัดเจน",
    highlight: "จุดแดงใหญ่คือพายุหมุนขนาดใหญ่ที่ดำรงอยู่มายาวนาน",
  },
  saturn: {
    name: "ดาวเสาร์",
    category: "ดาวแก๊สยักษ์ | ลำดับที่ 6",
    order: "6",
    day: "ประมาณ 10.7 ชั่วโมง",
    year: "ประมาณ 29.5 ปีโลก",
    summary: "ดาวเคราะห์ที่มีวงแหวนโดดเด่นที่สุด วงแหวนประกอบด้วยน้ำแข็ง ฝุ่น และเศษหินจำนวนมากที่โคจรรอบดาว",
    highlight: "มีความหนาแน่นเฉลี่ยต่ำมากเมื่อเทียบกับดาวเคราะห์ขนาดใหญ่ดวงอื่น",
  },
  uranus: {
    name: "ดาวยูเรนัส",
    category: "ดาวน้ำแข็งยักษ์ | ลำดับที่ 7",
    order: "7",
    day: "ประมาณ 17 ชั่วโมง",
    year: "ประมาณ 84 ปีโลก",
    summary: "ดาวน้ำแข็งยักษ์สีฟ้าเขียวที่มีแกนหมุนเอียงมาก ทำให้ฤดูกาลแต่ละช่วงยาวนานผิดปกติเมื่อเทียบกับโลก",
    highlight: "แกนเอียงเกือบ 98 องศา จึงดูเหมือนกลิ้งไปตามวงโคจร",
  },
  neptune: {
    name: "ดาวเนปจูน",
    category: "ดาวน้ำแข็งยักษ์ | ลำดับที่ 8",
    order: "8",
    day: "ประมาณ 16 ชั่วโมง",
    year: "ประมาณ 165 ปีโลก",
    summary: "ดาวเคราะห์หลักที่อยู่ไกลจากดวงอาทิตย์ที่สุด มีสีฟ้าเข้มและมีสภาพอากาศรุนแรงพร้อมลมความเร็วสูง",
    highlight: "เป็นดาวเคราะห์ที่ค้นพบจากการคำนวณทางคณิตศาสตร์ก่อนสังเกตเห็นโดยตรง",
  },
};

const fields = {
  category: document.querySelector("#selected-category"),
  name: document.querySelector("#selected-name"),
  summary: document.querySelector("#selected-summary"),
  order: document.querySelector("#selected-order"),
  day: document.querySelector("#selected-day"),
  year: document.querySelector("#selected-year"),
  highlight: document.querySelector("#selected-highlight"),
};

const selectPlanet = (planetKey) => {
  const planet = planets[planetKey];

  if (!planet) {
    return;
  }

  fields.category.textContent = planet.category;
  fields.name.textContent = planet.name;
  fields.summary.textContent = planet.summary;
  fields.order.textContent = planet.order;
  fields.day.textContent = planet.day;
  fields.year.textContent = planet.year;
  fields.highlight.textContent = planet.highlight;

  document.querySelectorAll("[data-planet]").forEach((element) => {
    element.classList.toggle("active", element.dataset.planet === planetKey);
  });
};

document.querySelectorAll(".tab, .planet, .planet-card").forEach((element) => {
  element.addEventListener("click", () => selectPlanet(element.dataset.planet));
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectPlanet(element.dataset.planet);
    }
  });
});

selectPlanet("earth");
