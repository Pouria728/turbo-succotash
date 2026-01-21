const products = [
  {
    id: 1,
    name: "Volkswagen Beetle 1967",
    price: 2200000000,
    desc: "خودروی کلاسیک محبوب با طراحی خاص و موتور عقب"
  },
  {
    id: 2,
    name: "Volkswagen Golf Mk1 1976",
    price: 2500000000,
    desc: "نسل اول گلف، آغازگر خودروهای هاچ‌بک مدرن"
  },
  {
    id: 3,
    name: "Opel Kadett C 1979",
    price: 1800000000,
    desc: "خودروی اقتصادی آلمانی با دوام بالا"
  },
  {
    id: 4,
    name: "Opel Rekord D 1975",
    price: 2000000000,
    desc: "سدان خانوادگی کلاسیک از اوپل"
  },
  {
    id: 5,
    name: "BMW E21 320 1978",
    price: 3200000000,
    desc: "اولین نسل سری ۳ بی‌ام‌و"
  },
  {
    id: 6,
    name: "BMW E30 1985",
    price: 3800000000,
    desc: "مدل افسانه‌ای با هندلینگ عالی"
  },
  {
    id: 7,
    name: "Mercedes-Benz W123 1978",
    price: 4200000000,
    desc: "نماد دوام و کیفیت مرسدس بنز"
  },
  {
    id: 8,
    name: "Mercedes-Benz W114 1974",
    price: 3900000000,
    desc: "سدان لوکس کلاسیک"
  },
  {
    id: 9,
    name: "Peugeot 504 1976",
    price: 1700000000,
    desc: "خودروی محبوب اروپایی با سواری نرم"
  },
  {
    id: 10,
    name: "Peugeot 404 1970",
    price: 1500000000,
    desc: "طراحی کلاسیک و دوام بالا"
  },
  {
    id: 11,
    name: "Renault 5 1975",
    price: 1400000000,
    desc: "خودروی کوچک شهری کلاسیک"
  },
  {
    id: 12,
    name: "Renault 12 1973",
    price: 1600000000,
    desc: "سادگی و کارایی فرانسوی"
  },
  {
    id: 13,
    name: "Fiat 124 1972",
    price: 1550000000,
    desc: "سدان محبوب دهه ۷۰ میلادی"
  },
  {
    id: 14,
    name: "Fiat 128 1974",
    price: 1450000000,
    desc: "یکی از اولین خودروهای دیفرانسیل جلو"
  },
  {
    id: 15,
    name: "Volvo 240 1980",
    price: 3000000000,
    desc: "ایمنی بالا و طراحی مکعبی خاص"
  }
];

// دریافت id از آدرس
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// اگر در صفحه جزئیات هستیم
if (productId) {
  const product = products.find(p => p.id == productId);

  document.getElementById("name").innerText = product.name;
  document.getElementById("desc").innerText = product.desc;
  document.getElementById("price").innerText =
    "قیمت: " + product.price.toLocaleString() + " تومان";
}

// افزودن به سبد خرید
function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(p => p.id == productId);

  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id == productId);
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("به سبد خرید اضافه شد");
}