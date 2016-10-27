var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: "Пошив Одежды в Харькове | Пошив Оптом Дешево| Odejda UA",
    description: "Ателье - Odejda-ua предоставляет широкий спектр услуг по пошиву одежды. Наш швейный цех производит рикотажные платья, женскую одежду оптом, шьем верхнюю одежду. ",
    keywords: "пошив одежды, швейный цех, ремонт одежды, женская одежда оптом, поставщики одежды, трикотажные платья, швейное производство, швейное ателье, ателье по пошиву верхней одежды, пошив на заказ",
  });
});

router.get('/poshiv-odejdy', function (req, res, next) {
  res.render('pages/poshiv-odejdy', {
    title: "Пошив Одежды | Odejda UA",
    description: "Индивидуальный Пошив Одежды в Харькове, низкие цены, высокое качество",
    keywords: "пошив одежды"
  });
});

router.get('/poshiv-jenskoi-odejdy', function (req, res, next) {
  res.render('jenskaia/index', {
    title: "Пошив Женской Одежды | Odejda UA",
    description: "Пошив женской одежды в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив женской одежды"
  });
});

router.get('/poshiv-mujskoi-odejdy', function (req, res, next) {
  res.render('mujskaia/index', {
    title: "Пошив Мужской Одежды | Odejda UA",
    description: "Пошив мужской одежды в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив мужской одежды"
  });
});

router.get('/remont-odejdy', function (req, res, next) {
  res.render('pages/remont-odejdy', {
    title: "Ремонт одежды | Odejda UA",
    description: "Ремонт одежды в Харькове, низкие цены, индвидуальный подход",
    keywords: "Ремонт одежды в харькове"
  });
});

router.get('/about', function (req, res, next) {
  res.render('pages/about', {
    title: "О нас | Odejda UA",
    description: "Информация о нашей компании",
    keywords: "отзывы"
  });
});

router.get('/contacts', function (req, res, next) {
  res.render('pages/contact', {
    title: "Контакты | Odejda UA",
    description: "Как нас найти в Харькове",
    keywords: "контакты ателье"
  });
});

router.get('/poshiv-korporativnoi-odejdy', function (req, res, next) {
  res.render('pages/poshiv-korporativnoi-odejdy', {
    title: "Пошив Корпоративной Одежды | Odejda UA",
    description: "Корпоративная одежда в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Корпоративная одежда, пошив"
  });
});

router.get('/poshiv-spezodejdy', function (req, res, next) {
  res.render('pages/poshiv-spezodejdy', {
    title: "Пошив Спецодежды | Odejda UA",
    description: "Пошив спецодежды в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "пошив одежды"
  });
});

router.get('/poshiv-mujskoi-odejdy/kostumi', function (req, res, next) {
  res.render('mujskaia/kostumi', {
    title: "Пошив Мужских Костюмов | Odejda UA",
    description: "Пошив мужских костюмов в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив мужских костюмов"
  });
});

router.get('/poshiv-mujskoi-odejdy/pidjak', function (req, res, next) {
  res.render('mujskaia/pidjak', {
    title: "Пошив Пиджака | Odejda UA",
    description: "Пошив пиджака в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив пиджака"
  });
});

router.get('/poshiv-odejdy/optom', function (req, res, next) {
  res.render('pages/optom', {
    title: "Пошив Оптом | Odejda UA",
    description: "Пошив Оптом в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив Оптом, одежда оптом, пошив дешево"
  });
});

router.get('/poshiv-odejdy/textil', function (req, res, next) {
  res.render('pages/textil', {
    title: "Пошив текстиля | Odejda UA",
    description: "Пошив текстиля в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив текстиля, пошив одежды"
  });
});

router.get('/poshiv-vechernix-platev', function (req, res, next) {
  res.render('pages/poshiv-vechernix-platev', {
    title: "Пошив вечерних платьев | Odejda UA",
    description: "Пошив вечерних платьев в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив вечерних платьев"
  });
});

router.get('/poshiv-svadebnyx-platev', function (req, res, next) {
  res.render('pages/poshiv-svadebnyx-platev', {
    title: "Пошив свадебных платьев | Odejda UA",
    description: "Пошив свадебных платьев в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив свадебных платьев"
  });
});

router.get('/plate-podruzhki-nevesty', function (req, res, next) {
  res.render('pages/plate-podruzhki-nevesty', {
    title: "Платье подружки невесты | Odejda UA",
    description: "Платье подружки невесты в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Платье подружки невесты"
  });
});

router.get('/poshiv-platev', function (req, res, next) {
  res.render('pages/poshiv-platev', {
    title: "Пошив платьев | Odejda UA",
    description: "Пошив платьев в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив платьев"
  });
});

router.get('/malenkoe-chernoe-plate', function (req, res, next) {
  res.render('pages/malenkoe-chernoe-plate', {
    title: "Маленькое черное платье | Odejda UA",
    description: "Маленькое черное платье в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Маленькое черное платье"
  });
});

router.get('/platya-korotkie', function (req, res, next) {
  res.render('pages/platya-korotkie', {
    title: "Платья короткие",
    description: "Платья короткие в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Платья короткие"
  });
});

router.get('/yubka-karandash', function (req, res, next) {
  res.render('pages/yubka-karandash', {
    title: "Юбка карандаш | Odejda UA",
    description: "Юбка карандаш в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Юбка карандаш"
  });
});

router.get('/poshiv-mexa', function (req, res, next) {
  res.render('pages/poshiv-mexa', {
    title: "Пошив меха | Odejda UA",
    description: "Пошив меха в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив меха"
  });
});

router.get('/remont-mexa', function (req, res, next) {
  res.render('pages/remont-mexa', {
    title: "Ремонт меха | Odejda UA",
    description: "Ремонт меха в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Ремонт меха"
  });
});

router.get('/poshiv-kozhi', function (req, res, next) {
  res.render('pages/poshiv-kozhi', {
    title: "Пошив кожи | Odejda UA",
    description: "Пошив кожи в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив кожи"
  });
});

router.get('/remont-kozhi', function (req, res, next) {
  res.render('pages/remont-kozhi', {
    title: "Ремонт кожи | Odejda UA",
    description: "Ремонт кожи в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Ремонт кожи"
  });
});

router.get('/poshiv-kupalnikov', function (req, res, next) {
  res.render('pages/poshiv-kupalnikov', {
    title: "Пошив купальников | Odejda UA",
    description: "Пошив купальников в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив купальников"
  });
});

router.get('/moda-dlya-beremennyx', function (req, res, next) {
  res.render('pages/moda-dlya-beremennyx', {
    title: "Мода для беременных | Odejda UA",
    description: "Мода для беременных в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Мода для беременных"
  });
});

router.get('/poshiv-detskoj-odezhdy', function (req, res, next) {
  res.render('pages/poshiv-detskoj-odezhdy', {
    title: "Пошив детской одежды | Odejda UA",
    description: "Пошив детской одежды в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Пошив детской одежды"
  });
});

router.get('/kostyumy-na-xellouin', function (req, res, next) {
  res.render('pages/kostyumy-na-xellouin', {
    title: "Костюмы на Хэллоуин | Odejda UA",
    description: "Костюмы на Хэллоуин в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Костюмы на Хэллоуин"
  });
});

router.get('/tematicheskie-kostyumy', function (req, res, next) {
  res.render('pages/tematicheskie-kostyumy', {
    title: "Тематические костюмы | Odejda UA",
    description: "Тематические костюмы в Харькове, индвидуальный подход, низкие цены, высокое качество",
    keywords: "Тематические костюмы"
  });
});

module.exports = router;