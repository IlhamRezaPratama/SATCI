/* ===========================================================
   SATCI — Navbar + Customizer Casing (checkout via WhatsApp)
   =========================================================== */

(function () {
  'use strict';

  /* ---------- Konfigurasi ---------- */
  var WA_NUMBER = '6281111111111'; // TODO: ganti nomor WA admin (format 62xxx, tanpa +)

  /* ---------- Tahun footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar ---------- */
  var navbar    = document.getElementById('navbar');
  var navToggleCheck = document.getElementById('navToggleCheck');
  var navLinks  = document.getElementById('navLinks');
  var toTop     = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (navbar) navbar.classList.toggle('scrolled', y > 30);
    if (toTop)  toTop.classList.toggle('show', y > 400);
    activateSection();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile dihandle dengan checkbox + CSS (pure CSS hamburger).
  // JS hanya bantu tutup menu setelah klik link.
  if (navLinks && navToggleCheck) {
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') navToggleCheck.checked = false;
    });
  }

  var sectionIds = ['beranda', 'katalog', 'visi-misi', 'layanan', 'struktur', 'mitra'];
  var navLinkEls = navLinks ? navLinks.querySelectorAll('a') : [];
  function activateSection() {
    var scrollPos = window.scrollY + 120;
    var current = sectionIds[0];
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) current = id;
    });
    navLinkEls.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ===========================================================
     DATA PRODUK
     Tinggal edit object DATA di bawah kalau mau tambah/ubah
     merek, tipe HP, atau jenis case.
     =========================================================== */

  var DATA = {
    merek: {
      apple:   'Apple',
      samsung: 'Samsung',
      xiaomi:  'Xiaomi',
      oppo:    'Oppo',
      vivo:    'Vivo',
      realme:  'Realme',
      infinix: 'Infinix',
      tecno:   'Tecno',
      honor:   'Honor',
      oneplus: 'OnePlus',
      nothing: 'Nothing',
      asus:    'Asus ROG'
    },
    bahan: {
      softcase: { label: 'Softcase',   harga: 79000 },
      hardcase: { label: 'Hardcase',   harga: 99000 },
      glass:    { label: 'Glass Case', harga: 129000 }
    },
    tipe: {
      apple: [
        'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16',
        'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
        'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
        'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 Mini',
        'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 Mini',
        'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
        'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X',
        'iPhone SE 2022', 'iPhone SE 2020',
        'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7'
      ],
      samsung: [
        'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S24 FE',
        'Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23', 'Galaxy S23 FE',
        'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22',
        'Galaxy S21 Ultra', 'Galaxy S21+', 'Galaxy S21', 'Galaxy S21 FE',
        'Galaxy S20 Ultra', 'Galaxy S20+', 'Galaxy S20', 'Galaxy S20 FE',
        'Galaxy Note 20 Ultra', 'Galaxy Note 20', 'Galaxy Note 10+', 'Galaxy Note 10',
        'Galaxy Z Fold 6', 'Galaxy Z Fold 5', 'Galaxy Z Flip 6', 'Galaxy Z Flip 5',
        'Galaxy A55', 'Galaxy A54', 'Galaxy A53', 'Galaxy A52', 'Galaxy A35', 'Galaxy A34',
        'Galaxy A33', 'Galaxy A25', 'Galaxy A24', 'Galaxy A23', 'Galaxy A15', 'Galaxy A14', 'Galaxy A13',
        'Galaxy A05s', 'Galaxy A05', 'Galaxy A04s', 'Galaxy A04',
        'Galaxy M54', 'Galaxy M34', 'Galaxy M14', 'Galaxy M04'
      ],
      xiaomi: [
        'Xiaomi 14 Ultra', 'Xiaomi 14 Pro', 'Xiaomi 14', 'Xiaomi 14T Pro', 'Xiaomi 14T',
        'Xiaomi 13 Pro', 'Xiaomi 13', 'Xiaomi 13T Pro', 'Xiaomi 13T',
        'Xiaomi 12 Pro', 'Xiaomi 12', 'Xiaomi 12T Pro', 'Xiaomi 12T',
        'Xiaomi 11T Pro', 'Xiaomi 11T', 'Mi 11 Lite', 'Mi 10T Pro', 'Mi 10T',
        'Redmi Note 13 Pro+', 'Redmi Note 13 Pro', 'Redmi Note 13',
        'Redmi Note 12 Pro+', 'Redmi Note 12 Pro', 'Redmi Note 12',
        'Redmi Note 11 Pro', 'Redmi Note 11', 'Redmi Note 10 Pro', 'Redmi Note 10',
        'Redmi Note 9 Pro', 'Redmi Note 9', 'Redmi Note 8 Pro', 'Redmi Note 8',
        'Redmi 13C', 'Redmi 12C', 'Redmi 12', 'Redmi 10C', 'Redmi 10', 'Redmi 9A', 'Redmi 9C',
        'POCO X6 Pro', 'POCO X6', 'POCO X5 Pro', 'POCO X5', 'POCO X4 Pro',
        'POCO F6 Pro', 'POCO F6', 'POCO F5 Pro', 'POCO F5', 'POCO F4', 'POCO F3',
        'POCO M6 Pro', 'POCO M5', 'POCO M4 Pro', 'POCO M3'
      ],
      oppo: [
        'Find N3 Flip', 'Find N3', 'Find N2 Flip', 'Find X7 Ultra', 'Find X7',
        'Find X6 Pro', 'Find X5 Pro', 'Find X5', 'Find X3 Pro',
        'Reno 12 Pro', 'Reno 12', 'Reno 11 Pro', 'Reno 11', 'Reno 11 F',
        'Reno 10 Pro+', 'Reno 10 Pro', 'Reno 10',
        'Reno 8 Pro', 'Reno 8', 'Reno 8T', 'Reno 7 Pro', 'Reno 7',
        'Reno 6 Pro', 'Reno 6', 'Reno 5', 'Reno 4', 'Reno 3 Pro', 'Reno 3',
        'A98', 'A78', 'A77s', 'A77', 'A76', 'A74', 'A72', 'A57', 'A55', 'A54',
        'A38', 'A18', 'A17', 'A16', 'A15', 'A12', 'A9',
        'A3 Pro', 'A3', 'A3s'
      ],
      vivo: [
        'X100 Pro', 'X100', 'X90 Pro', 'X90', 'X80 Pro', 'X80',
        'X70 Pro', 'X70', 'X60 Pro', 'X60',
        'V30 Pro', 'V30', 'V30e', 'V29 Pro', 'V29', 'V29e',
        'V27 Pro', 'V27', 'V27e', 'V25 Pro', 'V25', 'V25e',
        'V23 Pro', 'V23', 'V23e', 'V21', 'V20', 'V19',
        'Y36', 'Y35', 'Y33s', 'Y27', 'Y22s', 'Y22', 'Y21', 'Y20', 'Y17s', 'Y16', 'Y15s',
        'Y12s', 'Y11s', 'Y03',
        'T3', 'T2', 'T1 Pro', 'T1'
      ],
      realme: [
        'GT 6', 'GT 5 Pro', 'GT Neo 6', 'GT Neo 5', 'GT Neo 3', 'GT Neo 2', 'GT Master Edition',
        '13 Pro+', '13 Pro', '12 Pro+', '12 Pro', '12', '12+',
        '11 Pro+', '11 Pro', '11', '11x',
        '10 Pro+', '10 Pro', '10',
        '9 Pro+', '9 Pro', '9',
        '8 Pro', '8', '8i',
        'C67', 'C65', 'C55', 'C53', 'C51', 'C35', 'C33', 'C31', 'C30', 'C25', 'C21', 'C15', 'C12', 'C11',
        'Narzo 70 Pro', 'Narzo 60 Pro', 'Narzo 60', 'Narzo 50', 'Narzo 30'
      ],
      infinix: [
        'Note 40 Pro+', 'Note 40 Pro', 'Note 40', 'Note 30 Pro', 'Note 30',
        'Note 12 Pro', 'Note 12', 'Note 11 Pro', 'Note 11',
        'Zero 30 5G', 'Zero 30 4G', 'Zero 20', 'Zero X Pro', 'Zero X',
        'Hot 50 Pro+', 'Hot 50 Pro', 'Hot 50', 'Hot 40 Pro', 'Hot 40',
        'Hot 30 Play', 'Hot 30', 'Hot 20',
        'Smart 8 Pro', 'Smart 8', 'Smart 7', 'Smart 6',
        'GT 20 Pro', 'GT 10 Pro'
      ],
      tecno: [
        'Camon 30 Premier', 'Camon 30 Pro', 'Camon 30', 'Camon 20 Pro', 'Camon 20',
        'Camon 19 Pro', 'Camon 19', 'Camon 18',
        'Spark 20 Pro+', 'Spark 20 Pro', 'Spark 20',
        'Spark 10 Pro', 'Spark 10', 'Spark 9', 'Spark 8',
        'Pova 6 Pro', 'Pova 6', 'Pova 5 Pro', 'Pova 5', 'Pova 4 Pro', 'Pova 4',
        'Phantom X2 Pro', 'Phantom X2', 'Phantom V Fold', 'Phantom V Flip'
      ],
      honor: [
        'Magic 6 Pro', 'Magic 6', 'Magic 5 Pro', 'Magic 5', 'Magic V2',
        '200 Pro', '200', '100 Pro', '100',
        '90 Pro', '90', '80 Pro', '80', '70 Pro', '70',
        'X9b', 'X9a', 'X8b', 'X8', 'X7b', 'X7a', 'X6', 'X5',
        'Play 40', 'Play 30'
      ],
      oneplus: [
        '12 Pro', '12', '12R', '11 Pro', '11', '11R',
        '10 Pro', '10T', '10R', '9 Pro', '9', '9R', '9RT',
        '8 Pro', '8T', '8',
        'Nord 4', 'Nord 3', 'Nord 2T', 'Nord 2',
        'Nord CE 4', 'Nord CE 3', 'Nord CE 2',
        'Ace 3', 'Ace 2V'
      ],
      nothing: [
        'Phone (2a) Plus', 'Phone (2a)', 'Phone (2)', 'Phone (1)',
        'CMF Phone 1'
      ],
      asus: [
        'ROG Phone 8 Pro', 'ROG Phone 8', 'ROG Phone 7 Ultimate', 'ROG Phone 7',
        'ROG Phone 6 Pro', 'ROG Phone 6', 'ROG Phone 5s Pro', 'ROG Phone 5s', 'ROG Phone 5',
        'Zenfone 11 Ultra', 'Zenfone 10', 'Zenfone 9', 'Zenfone 8'
      ]
    }
  };

  /* ===========================================================
     CUSTOMIZER
     =========================================================== */

  var $ = function (id) { return document.getElementById(id); };

  var state = {
    merek: '',
    tipe: '',
    bahan: '',
    harga: 0,
    desainFileName: '',
    nama: '',
    qty: 1,
    note: ''
  };

  /* -------- Element refs -------- */
  var merekGroup = $('czMerek');
  var bahanGroup = $('czBahan');
  var tipeSelect = $('czTipe');

  var uploadLabel = document.querySelector('.cz-upload');
  var uploadInput = $('czUpload');
  var removeBtn   = $('czRemove');

  var namaInput = $('czNama');
  var qtyInput  = $('czQty');
  var noteInput = $('czNote');

  var sumMerek    = $('sumMerek');
  var sumTipe     = $('sumTipe');
  var sumBahan    = $('sumBahan');
  var sumDesain   = $('sumDesain');
  var sumQty      = $('sumQty');
  var sumTotal    = $('sumTotal');
  var checkoutBtn = $('czCheckout');

  /* -------- Render dinamis -------- */
  function renderMerek() {
    var keys = Object.keys(DATA.merek);
    merekGroup.innerHTML = keys.map(function (k, i) {
      return '<button type="button" class="cz-opt' + (i === 0 ? ' active' : '') +
             '" data-value="' + k + '">' + DATA.merek[k] + '</button>';
    }).join('');
    state.merek = keys[0];
  }

  function renderBahan() {
    var keys = Object.keys(DATA.bahan);
    bahanGroup.innerHTML = keys.map(function (k) {
      var b = DATA.bahan[k];
      return '<option value="' + k + '" data-harga="' + b.harga + '">' +
             b.label + ' — ' + formatHarga(b.harga) +
             '</option>';
    }).join('');
    state.bahan = keys[0];
    state.harga = DATA.bahan[keys[0]].harga;
  }

  function populateTipe() {
    var list = (DATA.tipe && DATA.tipe[state.merek]) || [];
    tipeSelect.innerHTML = list.map(function (t) {
      return '<option value="' + t + '">' + t + '</option>';
    }).join('');
    state.tipe = list[0] || '';
  }

  /* -------- Events -------- */
  merekGroup.addEventListener('click', function (e) {
    var btn = e.target.closest('.cz-opt');
    if (!btn) return;
    merekGroup.querySelectorAll('.cz-opt').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    state.merek = btn.getAttribute('data-value');
    populateTipe();
    update();
  });

  bahanGroup.addEventListener('change', function () {
    var key = bahanGroup.value;
    state.bahan = key;
    state.harga = (DATA.bahan[key] && DATA.bahan[key].harga) || 0;
    update();
  });

  tipeSelect.addEventListener('change', function () {
    state.tipe = tipeSelect.value;
    update();
  });

  uploadInput.addEventListener('change', function () {
    var file = uploadInput.files && uploadInput.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('Ukuran file maksimal 5MB.');
      uploadInput.value = '';
      return;
    }
    state.desainFileName = file.name;
    uploadLabel.classList.add('has-file');
    removeBtn.hidden = false;
    removeBtn.textContent = '✕ Hapus: ' + file.name;
    update();
  });

  removeBtn.addEventListener('click', function () {
    state.desainFileName = '';
    uploadInput.value = '';
    uploadLabel.classList.remove('has-file');
    removeBtn.hidden = true;
    update();
  });

  namaInput.addEventListener('input', function () { state.nama = namaInput.value; update(); });
  qtyInput.addEventListener('input', function () {
    var v = parseInt(qtyInput.value, 10);
    if (isNaN(v) || v < 1) v = 1;
    if (v > 99) v = 99;
    state.qty = v;
    update();
  });
  noteInput.addEventListener('input', function () { state.note = noteInput.value; });

  /* -------- Helpers -------- */
  function formatHarga(n) {
    return 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function update() {
    sumMerek.textContent  = (DATA.merek && DATA.merek[state.merek]) || '-';
    sumTipe.textContent   = state.tipe || '-';
    sumBahan.textContent  = (DATA.bahan && DATA.bahan[state.bahan] && DATA.bahan[state.bahan].label) || '-';
    sumDesain.textContent = state.desainFileName ? state.desainFileName : 'Polos';
    sumQty.textContent    = state.qty + ' pcs';
    sumTotal.textContent  = formatHarga(state.harga * state.qty);

    checkoutBtn.href = buildWaUrl();
  }

  function buildWaUrl() {
    var merekLabel = (DATA.merek && DATA.merek[state.merek]) || '-';
    var bahanLabel = (DATA.bahan && DATA.bahan[state.bahan] && DATA.bahan[state.bahan].label) || '-';
    var lines = [
      'Halo Admin SATCI 👋',
      'Saya ingin memesan casing dengan detail berikut:',
      '',
      '🧾 *DETAIL PESANAN*',
      '• Nama      : ' + (state.nama || '-'),
      '• Merek HP  : ' + merekLabel,
      '• Tipe HP   : ' + (state.tipe || '-'),
      '• Jenis Case: ' + bahanLabel,
      '• Desain    : ' + (state.desainFileName ? ('File ' + state.desainFileName) : 'Polos / tanpa upload'),
      '• Jumlah    : ' + state.qty + ' pcs',
      '• Catatan   : ' + (state.note || '-'),
      '',
      '💰 *TOTAL*',
      formatHarga(state.harga) + ' x ' + state.qty + ' = ' + formatHarga(state.harga * state.qty),
      ''
    ];
    if (state.desainFileName) {
      lines.push('📎 Saya akan mengirim ulang file desain "' + state.desainFileName + '" di chat ini. Terima kasih!');
    } else {
      lines.push('Mohon dibantu info selanjutnya ya, terima kasih!');
    }
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  /* -------- Init -------- */
  renderMerek();
  renderBahan();
  populateTipe();
  update();

  /* ---------- Reveal on scroll ---------- */
  function observeReveal(nodes) {
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  var revealTargets = document.querySelectorAll(
    '.section-head, .layanan-card, .misi-list li, .org-card, .mitra-card, .hero-content, .hero-visual, .tentang-inner, .katalog-head, .cz-form, .cz-preview'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  observeReveal(revealTargets);
})();
