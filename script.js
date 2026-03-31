// ============================================================
// ДАННЫЕ - имитация реальных данных склада в Санкт-Петербурге
// ============================================================

const reagents = [
    { id: "ХР-0001", name: "Серная кислота", formula: "H₂SO₄", cas: "7664-93-9", qual: "х.ч.", pack: "2.5 л", price: 1450, cat: "acids", stock: "instock", ghs: "GHS05, GHS07", signal: "Опасность", hazard: "Вызывает серьёзные ожоги кожи и повреждение глаз" },
    { id: "ХР-0002", name: "Соляная кислота", formula: "HCl", cas: "7647-01-0", qual: "х.ч.", pack: "2.5 л", price: 980, cat: "acids", stock: "instock", ghs: "GHS05, GHS07", signal: "Опасность", hazard: "Вызывает серьёзные ожоги кожи; может вызвать раздражение дыхательных путей" },
    { id: "ХР-0003", name: "Азотная кислота", formula: "HNO₃", cas: "7697-37-2", qual: "х.ч.", pack: "1 л", price: 1280, cat: "acids", stock: "instock", ghs: "GHS03, GHS05, GHS07", signal: "Опасность", hazard: "Может усиливать горение, окислитель; вызывает серьёзные ожоги кожи" },
    { id: "ХР-0004", name: "Уксусная кислота (ледяная)", formula: "CH₃COOH", cas: "64-19-7", qual: "х.ч.", pack: "1 л", price: 890, cat: "acids", stock: "instock", ghs: "GHS02, GHS05", signal: "Опасность", hazard: "Легковоспламеняющаяся жидкость; вызывает серьёзные ожоги" },
    { id: "ХР-0005", name: "Фосфорная кислота", formula: "H₃PO₄", cas: "7664-38-2", qual: "ч.д.а.", pack: "1 л", price: 1120, cat: "acids", stock: "low", ghs: "GHS05", signal: "Опасность", hazard: "Вызывает серьёзные ожоги кожи и повреждение глаз" },
    { id: "ХР-0006", name: "Натрия гидроксид", formula: "NaOH", cas: "1310-73-2", qual: "х.ч.", pack: "1 кг", price: 680, cat: "bases", stock: "instock", ghs: "GHS05", signal: "Опасность", hazard: "Вызывает серьёзные ожоги кожи и повреждение глаз" },
    { id: "ХР-0007", name: "Калия гидроксид", formula: "KOH", cas: "1310-58-3", qual: "х.ч.", pack: "1 кг", price: 920, cat: "bases", stock: "instock", ghs: "GHS05, GHS07", signal: "Опасность", hazard: "Вызывает серьёзные ожоги кожи и повреждение глаз" },
    { id: "ХР-0008", name: "Аммиак водный 25%", formula: "NH₃·H₂O", cas: "1336-21-6", qual: "х.ч.", pack: "1 л", price: 560, cat: "bases", stock: "instock", ghs: "GHS05, GHS07, GHS09", signal: "Опасность", hazard: "Вызывает серьёзные ожоги; токсичен для водных организмов" },
    { id: "ХР-0009", name: "Кальция гидроксид", formula: "Ca(OH)₂", cas: "1305-62-0", qual: "ч.", pack: "1 кг", price: 320, cat: "bases", stock: "instock", ghs: "GHS05, GHS07", signal: "Опасность", hazard: "Вызывает серьёзное повреждение глаз; раздражает кожу" },
    { id: "ХР-0010", name: "Натрия хлорид", formula: "NaCl", cas: "7647-14-5", qual: "х.ч.", pack: "1 кг", price: 280, cat: "salts", stock: "instock", ghs: "—", signal: "—", hazard: "Не классифицирован как опасный" },
    { id: "ХР-0011", name: "Натрия карбонат", formula: "Na₂CO₃", cas: "497-19-8", qual: "х.ч.", pack: "1 кг", price: 420, cat: "salts", stock: "instock", ghs: "GHS07", signal: "Внимание", hazard: "Вызывает серьёзное раздражение глаз" },
    { id: "ХР-0012", name: "Калия перманганат", formula: "KMnO₄", cas: "7722-64-7", qual: "х.ч.", pack: "500 г", price: 1560, cat: "salts", stock: "low", ghs: "GHS03, GHS07, GHS09", signal: "Опасность", hazard: "Может усиливать горение; вреден при проглатывании" },
    { id: "ХР-0013", name: "Меди(II) сульфат пентагидрат", formula: "CuSO₄·5H₂O", cas: "7758-99-8", qual: "х.ч.", pack: "500 г", price: 780, cat: "salts", stock: "instock", ghs: "GHS07, GHS09", signal: "Внимание", hazard: "Вреден при проглатывании; вызывает раздражение кожи" },
    { id: "ХР-0014", name: "Натрия тиосульфат", formula: "Na₂S₂O₃·5H₂O", cas: "10102-17-7", qual: "х.ч.", pack: "1 кг", price: 640, cat: "salts", stock: "instock", ghs: "—", signal: "—", hazard: "Не классифицирован как опасный" },
    { id: "ХР-0015", name: "Серебра нитрат", formula: "AgNO₃", cas: "7761-88-8", qual: "х.ч.", pack: "100 г", price: 12800, cat: "salts", stock: "order", ghs: "GHS03, GHS05, GHS09", signal: "Опасность", hazard: "Может усиливать горение; вызывает серьёзные ожоги" },
    { id: "ХР-0016", name: "Ацетон", formula: "CH₃COCH₃", cas: "67-64-1", qual: "х.ч.", pack: "1 л", price: 520, cat: "solvents", stock: "instock", ghs: "GHS02, GHS07", signal: "Опасность", hazard: "Легковоспламеняющаяся жидкость; вызывает раздражение глаз" },
    { id: "ХР-0017", name: "Этанол (спирт этиловый)", formula: "C₂H₅OH", cas: "64-17-5", qual: "ос.ч.", pack: "1 л", price: 1280, cat: "solvents", stock: "instock", ghs: "GHS02", signal: "Опасность", hazard: "Легковоспламеняющаяся жидкость и пары" },
    { id: "ХР-0018", name: "Изопропанол", formula: "(CH₃)₂CHOH", cas: "67-63-0", qual: "х.ч.", pack: "1 л", price: 480, cat: "solvents", stock: "instock", ghs: "GHS02, GHS07", signal: "Опасность", hazard: "Легковоспламеняющаяся жидкость; вызывает раздражение глаз" },
    { id: "ХР-0019", name: "Толуол", formula: "C₆H₅CH₃", cas: "108-88-3", qual: "х.ч.", pack: "1 л", price: 620, cat: "solvents", stock: "instock", ghs: "GHS02, GHS07, GHS08", signal: "Опасность", hazard: "Легковоспламеняющийся; может нарушать фертильность" },
    { id: "ХР-0020", name: "Диэтиловый эфир", formula: "(C₂H₅)₂O", cas: "60-29-7", qual: "х.ч.", pack: "1 л", price: 1680, cat: "solvents", stock: "low", ghs: "GHS02, GHS07", signal: "Опасность", hazard: "Чрезвычайно легковоспламеняющаяся жидкость" },
    { id: "ХР-0021", name: "Хлороформ", formula: "CHCl₃", cas: "67-66-3", qual: "х.ч.", pack: "1 л", price: 1420, cat: "solvents", stock: "instock", ghs: "GHS07, GHS08", signal: "Внимание", hazard: "Вреден при проглатывании; предположительно канцероген" },
    { id: "ХР-0022", name: "Фенолфталеин", formula: "C₂₀H₁₄O₄", cas: "77-09-8", qual: "ч.д.а.", pack: "100 г", price: 1890, cat: "indicators", stock: "instock", ghs: "GHS08", signal: "Внимание", hazard: "Предположительно канцероген" },
    { id: "ХР-0023", name: "Метиловый оранжевый", formula: "C₁₄H₁₄N₃NaO₃S", cas: "547-58-0", qual: "ч.д.а.", pack: "50 г", price: 2240, cat: "indicators", stock: "instock", ghs: "GHS07", signal: "Внимание", hazard: "Вреден при проглатывании" },
    { id: "ХР-0024", name: "Лакмус", formula: "—", cas: "—", qual: "ч.д.а.", pack: "25 г", price: 1560, cat: "indicators", stock: "low", ghs: "—", signal: "—", hazard: "Не классифицирован как опасный" },
    { id: "ХР-0025", name: "Универсальный индикатор (раствор)", formula: "—", cas: "—", qual: "—", pack: "100 мл", price: 980, cat: "indicators", stock: "instock", ghs: "GHS02, GHS07", signal: "Внимание", hazard: "Содержит спиртовой раствор" },
    { id: "ХР-0026", name: "Глюкоза безводная", formula: "C₆H₁₂O₆", cas: "50-99-7", qual: "х.ч.", pack: "500 г", price: 560, cat: "organic", stock: "instock", ghs: "—", signal: "—", hazard: "Не классифицирован как опасный" },
    { id: "ХР-0027", name: "Щавелевая кислота", formula: "H₂C₂O₄·2H₂O", cas: "6153-56-6", qual: "х.ч.", pack: "500 г", price: 720, cat: "organic", stock: "instock", ghs: "GHS05, GHS07", signal: "Опасность", hazard: "Вреден при проглатывании; вызывает серьёзные повреждения глаз" },
    { id: "ХР-0028", name: "Лимонная кислота", formula: "C₆H₈O₇·H₂O", cas: "5949-29-1", qual: "х.ч.", pack: "1 кг", price: 480, cat: "organic", stock: "instock", ghs: "GHS07", signal: "Внимание", hazard: "Вызывает серьёзное раздражение глаз" },
    { id: "ХР-0029", name: "Стандарт-титр pH 4.01", formula: "—", cas: "—", qual: "СТ", pack: "6 ампул", price: 1240, cat: "standards", stock: "instock", ghs: "—", signal: "—", hazard: "Не классифицирован как опасный" },
    { id: "ХР-0030", name: "Стандарт-титр pH 6.86", formula: "—", cas: "—", qual: "СТ", pack: "6 ампул", price: 1240, cat: "standards", stock: "instock", ghs: "—", signal: "—", hazard: "Не классифицирован как опасный" },
    { id: "ХР-0031", name: "Стандарт-титр pH 9.18", formula: "—", cas: "—", qual: "СТ", pack: "6 ампул", price: 1240, cat: "standards", stock: "low", ghs: "—", signal: "—", hazard: "Не классифицирован как опасный" },
    { id: "ХР-0032", name: "Стандарт-титр HCl 0.1 Н", formula: "HCl", cas: "7647-01-0", qual: "СТ", pack: "10 ампул", price: 1680, cat: "standards", stock: "instock", ghs: "GHS05", signal: "Опасность", hazard: "Содержит кислоту" },
];

const manufacturers = [
    "АО «Вектон», СПб",
    "ООО «Химмед», Москва",
    "АО «Невареактив», СПб",
    "ЗАО «ЛенРеактив», СПб",
    "ООО «Компонент-Реактив», Москва",
    "АО «Экрос», СПб",
    "ООО «Лабтех», Нижний Новгород",
    "ОАО «Реахим», Москва"
];

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initFilters();
    renderCatalog();
    renderSDS();
    renderCertificates();
    renderBatches();
    renderPriceHistory();
    initCharts();
    animateCounters();
    initScrollEffects();
});

// ============================================================
// НАВИГАЦИЯ
// ============================================================
function initNavigation() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('mainNav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Active on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
}

// ============================================================
// ФИЛЬТРЫ КАТАЛОГА
// ============================================================
let currentFilter = 'all';
let currentPage = 1;
const itemsPerPage = 12;

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            currentPage = 1;
            renderCatalog();
        });
    });
}

// ============================================================
// КАТАЛОГ
// ============================================================
function renderCatalog() {
    const tbody = document.getElementById('catalogBody');
    let filtered = currentFilter === 'all' ? reagents : reagents.filter(r => r.cat === currentFilter);

    const searchVal = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    if (searchVal) {
        filtered = filtered.filter(r =>
            r.name.toLowerCase().includes(searchVal) ||
            r.formula.toLowerCase().includes(searchVal) ||
            r.cas.includes(searchVal) ||
            r.id.toLowerCase().includes(searchVal)
        );
    }

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paged = filtered.slice(start, start + itemsPerPage);

    tbody.innerHTML = paged.map(r => {
        const stockBadge = r.stock === 'instock'
            ? '<span class="badge badge-success">● В наличии</span>'
            : r.stock === 'low'
            ? '<span class="badge badge-warning">● Мало</span>'
            : '<span class="badge badge-danger">● Под заказ</span>';

        return `<tr>
            <td><strong>${r.id}</strong></td>
            <td>${r.name}</td>
            <td><em>${r.formula}</em></td>
            <td>${r.cas}</td>
            <td>${r.qual}</td>
            <td>${r.pack}</td>
            <td><strong>${r.price.toLocaleString('ru-RU')} ₽</strong></td>
            <td>${stockBadge}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="showReagentDetail('${r.id}')">📋 Подробнее</button>
            </td>
        </tr>`;
    }).join('');

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const pag = document.getElementById('catalogPagination');
    if (totalPages <= 1) { pag.innerHTML = ''; return; }

    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    pag.innerHTML = html;
}

function goToPage(page) {
    currentPage = page;
    renderCatalog();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// ПОИСК
// ============================================================
function performSearch() {
    currentFilter = document.getElementById('searchCategory').value;
    currentPage = 1;

    // Activate filter button
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.filter === currentFilter) b.classList.add('active');
    });

    renderCatalog();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    showToast('Поиск выполнен', `Найдено результатов: ${document.getElementById('catalogBody').rows.length}`);
}

function quickSearch(term) {
    document.getElementById('searchInput').value = term;
    document.getElementById('searchCategory').value = 'all';
    performSearch();
}

// ============================================================
// ДЕТАЛИ РЕАГЕНТА (модальное окно)
// ============================================================
function showReagentDetail(id) {
    const r = reagents.find(x => x.id === id);
    if (!r) return;

    const content = `
        <h2 style="color:var(--primary); margin-bottom:20px;">${r.name}</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:24px;">
            <div class="sds-section-item">
                <h5>Общая информация</h5>
                <p><strong>Артикул:</strong> ${r.id}</p>
                <p><strong>Формула:</strong> ${r.formula}</p>
                <p><strong>CAS №:</strong> ${r.cas}</p>
                <p><strong>Квалификация:</strong> ${r.qual}</p>
            </div>
            <div class="sds-section-item">
                <h5>Коммерческая информация</h5>
                <p><strong>Фасовка:</strong> ${r.pack}</p>
                <p><strong>Цена:</strong> ${r.price.toLocaleString('ru-RU')} ₽</p>
                <p><strong>Склад:</strong> Московский пр., 118, СПб</p>
                <p><strong>Доставка:</strong> 1-2 рабочих дня</p>
            </div>
            <div class="sds-section-item">
                <h5>Классификация GHS</h5>
                <p><strong>Пиктограммы:</strong> ${r.ghs}</p>
                <p><strong>Сигнальное слово:</strong> ${r.signal}</p>
                <p><strong>H-фразы:</strong> ${r.hazard}</p>
            </div>
            <div class="sds-section-item">
                <h5>Документация</h5>
                <p>✅ Паспорт безопасности (SDS)</p>
                <p>✅ Сертификат анализа (CoA)</p>
                <p>✅ Сертификат соответствия</p>
                <p>✅ ГОСТ / ТУ</p>
            </div>
        </div>
        <button class="btn btn-primary" onclick="closeModal(); showToast('Запрос отправлен', 'Менеджер свяжется с вами в ближайшее время');">Запросить коммерческое предложение</button>
    `;

    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

// ============================================================
// SDS (Паспорта безопасности)
// ============================================================
function renderSDS() {
    const tbody = document.getElementById('sdsBody');
    const sdsData = reagents.filter(r => r.ghs !== '—').slice(0, 20);

    tbody.innerHTML = sdsData.map((r, i) => {
        const version = `${(3 + Math.floor(i / 5))}.${i % 5}`;
        const revDate = randomDate(2023, 2024);

        return `<tr>
            <td><strong>${r.name}</strong></td>
            <td>${r.cas}</td>
            <td>${getGHSClass(r.ghs)}</td>
            <td><span class="badge ${r.signal === 'Опасность' ? 'badge-danger' : 'badge-warning'}">${r.signal}</span></td>
            <td>${r.ghs}</td>
            <td>v${version}</td>
            <td>${revDate}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="showSdsDetail('${r.id}')">📄 SDS</button>
            </td>
        </tr>`;
    }).join('');
}

function getGHSClass(ghs) {
    const classes = [];
    if (ghs.includes('GHS02')) classes.push('Кл.2');
    if (ghs.includes('GHS03')) classes.push('Кл.3');
    if (ghs.includes('GHS05')) classes.push('Кл.5');
    if (ghs.includes('GHS06')) classes.push('Кл.6');
    if (ghs.includes('GHS07')) classes.push('Кл.7');
    if (ghs.includes('GHS08')) classes.push('Кл.8');
    if (ghs.includes('GHS09')) classes.push('Кл.9');
    return classes.join(', ') || '—';
}

function showSdsDetail(id) {
    const r = reagents.find(x => x.id === id);
    if (!r) return;

    const detail = document.getElementById('sdsDetail');
    document.getElementById('sdsDetailTitle').textContent = `Паспорт безопасности: ${r.name} (${r.formula})`;

    const sections = [
        { title: "Раздел 1. Идентификация", text: `Наименование: ${r.name}. CAS: ${r.cas}. Поставщик: ООО «ХимРеагент СПб», Московский пр. 118, СПб. Тел: +7(812)555-12-34` },
        { title: "Раздел 2. Идентификация опасностей", text: `Классификация GHS: ${r.ghs}. Сигнальное слово: ${r.signal}. ${r.hazard}` },
        { title: "Раздел 3. Состав/информация о компонентах", text: `Формула: ${r.formula}. Квалификация: ${r.qual}. Основное вещество: ≥${95 + Math.random() * 4.9 | 0}.${Math.random() * 9 | 0}%` },
        { title: "Раздел 4. Меры первой помощи", text: "При вдыхании: вывести на свежий воздух. При попадании на кожу: промыть водой 15 мин. При попадании в глаза: промывать 15 мин, обратиться к врачу." },
        { title: "Раздел 7. Обращение и хранение", text: `Хранить в вентилируемом помещении при t ${10 + Math.random() * 15 | 0}–${25 + Math.random() * 5 | 0}°C. Держать контейнер плотно закрытым.` },
        { title: "Раздел 8. Средства защиты", text: "Защитные очки, химстойкие перчатки, лабораторный халат. При работе с большими объёмами — вытяжной шкаф." },
        { title: "Раздел 9. Физико-химические свойства", text: `Молярная масса: расч. Плотность: справ. данные. Растворимость в воде: данные производителя.` },
        { title: "Раздел 14. Транспортирование", text: "Класс опасности ООН: уточняется по конкретному веществу. ADR/RID: согласно правилам перевозки опасных грузов." },
    ];

    document.getElementById('sdsDetailContent').innerHTML = sections.map(s =>
        `<div class="sds-section-item"><h5>${s.title}</h5><p>${s.text}</p></div>`
    ).join('');

    detail.style.display = 'block';
    detail.scrollIntoView({ behavior: 'smooth' });
}

function closeSdsDetail() {
    document.getElementById('sdsDetail').style.display = 'none';
}

// ============================================================
// СЕРТИФИКАТЫ
// ============================================================
function renderCertificates() {
    const tbody = document.getElementById('certBody');
    const certs = [];

    reagents.slice(0, 18).forEach((r, i) => {
        const types = ['CoA', 'Соответствия', 'CoA'];
        const type = types[i % 3];
        const issueDate = randomDate(2023, 2024);
        const batchNum = `П-${2024}${String(i + 1).padStart(3, '0')}`;
        const certNum = type === 'CoA'
            ? `CoA-${78 + i}-${2024}-${String(Math.random() * 9999 | 0).padStart(4, '0')}`
            : `СС-${78 + i}-${2024}-${String(Math.random() * 999 | 0).padStart(3, '0')}`;

        const gosts = ['ГОСТ 4204-77', 'ГОСТ 4328-77', 'ГОСТ 3118-77', 'ГОСТ 61-75', 'ТУ 2642-001', 'ГОСТ 4199-76', 'ГОСТ 24363-80', 'ГОСТ 3760-79'];
        const gost = gosts[i % gosts.length];

        const validDate = addMonths(issueDate, type === 'CoA' ? 24 : 36);
        const isValid = new Date(validDate.split('.').reverse().join('-')) > new Date();

        certs.push({
            num: certNum,
            type,
            reagent: r.name,
            batch: batchNum,
            gost,
            issued: issueDate,
            valid: validDate,
            status: isValid
        });
    });

    tbody.innerHTML = certs.map(c => `<tr>
        <td><strong>${c.num}</strong></td>
        <td><span class="badge ${c.type === 'CoA' ? 'badge-info' : 'badge-success'}">${c.type}</span></td>
        <td>${c.reagent}</td>
        <td>${c.batch}</td>
        <td>${c.gost}</td>
        <td>${c.issued}</td>
        <td>${c.valid}</td>
        <td><span class="badge ${c.status ? 'badge-success' : 'badge-danger'}">${c.status ? '✅ Действует' : '❌ Истёк'}</span></td>
        <td><button class="btn btn-sm btn-primary" onclick="showToast('Скачивание', 'Файл ${c.num}.pdf загружается...')">📥 PDF</button></td>
    </tr>`).join('');
}

// ============================================================
// ПАРТИИ
// ============================================================
function renderBatches() {
    const tbody = document.getElementById('batchBody');
    const batches = [];

    reagents.slice(0, 20).forEach((r, i) => {
        const mfr = manufacturers[i % manufacturers.length];
        const prodDate = randomDate(2023, 2024);
        const recvDate = addDays(prodDate, 5 + Math.floor(Math.random() * 20));
        const shelfLife = addMonths(prodDate, 12 + Math.floor(Math.random() * 48));
        const totalVol = [50, 100, 200, 500, 1000][Math.floor(Math.random() * 5)];
        const remaining = Math.floor(totalVol * (0.2 + Math.random() * 0.8));

        const isExpired = new Date(shelfLife.split('.').reverse().join('-')) < new Date();
        const status = isExpired ? 'Истёк' : remaining < totalVol * 0.2 ? 'Мало' : 'Активна';

        batches.push({
            num: `П-${2024}${String(i + 1).padStart(3, '0')}`,
            reagent: r.name,
            mfr,
            prodDate,
            recvDate,
            shelfLife,
            total: `${totalVol} ${r.pack.includes('л') ? 'л' : 'кг'}`,
            remaining: `${remaining} ${r.pack.includes('л') ? 'л' : 'кг'}`,
            status
        });
    });

    tbody.innerHTML = batches.map(b => {
        const statusBadge = b.status === 'Активна'
            ? '<span class="badge badge-success">✅ Активна</span>'
            : b.status === 'Мало'
            ? '<span class="badge badge-warning">⚠ Мало</span>'
            : '<span class="badge badge-danger">❌ Истёк</span>';

        return `<tr>
            <td><strong>${b.num}</strong></td>
            <td>${b.reagent}</td>
            <td>${b.mfr}</td>
            <td>${b.prodDate}</td>
            <td>${b.recvDate}</td>
            <td>${b.shelfLife}</td>
            <td>${b.total}</td>
            <td>${b.remaining}</td>
            <td>${statusBadge}</td>
            <td><button class="btn btn-sm btn-primary" onclick="showToast('Документ', 'CoA партии ${b.num} загружается...')">📥</button></td>
        </tr>`;
    }).join('');
}

// ============================================================
// ГРАФИКИ (Canvas — без библиотек)
// ============================================================
const priceData = {
    h2so4: {
        name: "Серная кислота (H₂SO₄)",
        prices: [1180, 1200, 1220, 1250, 1240, 1280, 1300, 1320, 1350, 1340, 1380, 1400, 1390, 1410, 1420, 1430, 1440, 1450, 1440, 1460, 1450, 1430, 1440, 1450],
        volumes: [420, 380, 450, 520, 480, 510, 540, 490, 560, 530, 580, 620, 590, 610, 640, 580, 620, 650, 600, 640, 670, 630, 660, 680]
    },
    naoh: {
        name: "Натрия гидроксид (NaOH)",
        prices: [520, 530, 540, 550, 560, 580, 590, 600, 610, 620, 630, 640, 640, 650, 660, 660, 670, 680, 680, 690, 680, 675, 678, 680],
        volumes: [680, 720, 700, 750, 780, 810, 790, 830, 860, 840, 880, 920, 900, 940, 960, 930, 970, 1000, 980, 1020, 1040, 1010, 1050, 1080]
    },
    hcl: {
        name: "Соляная кислота (HCl)",
        prices: [780, 790, 800, 820, 830, 840, 860, 870, 880, 900, 910, 920, 930, 940, 950, 960, 960, 970, 975, 980, 980, 978, 979, 980],
        volumes: [520, 540, 530, 560, 580, 600, 590, 620, 640, 630, 660, 680, 670, 700, 720, 710, 740, 760, 750, 780, 800, 790, 810, 830]
    },
    acetone: {
        name: "Ацетон (CH₃COCH₃)",
        prices: [380, 390, 400, 420, 410, 430, 440, 450, 460, 470, 480, 490, 485, 490, 500, 510, 505, 510, 515, 520, 518, 519, 520, 520],
        volumes: [300, 320, 310, 340, 350, 370, 360, 380, 400, 390, 420, 440, 430, 450, 470, 460, 480, 500, 490, 510, 530, 520, 540, 560]
    },
    ethanol: {
        name: "Этанол (C₂H₅OH)",
        prices: [980, 1000, 1020, 1050, 1080, 1100, 1120, 1140, 1150, 1160, 1180, 1200, 1210, 1220, 1230, 1240, 1250, 1260, 1265, 1270, 1275, 1278, 1279, 1280],
        volumes: [240, 260, 250, 280, 300, 310, 290, 320, 340, 330, 350, 370, 360, 380, 400, 390, 410, 430, 420, 440, 460, 450, 470, 490]
    },
    nacl: {
        name: "Натрия хлорид (NaCl)",
        prices: [220, 225, 228, 230, 235, 240, 242, 245, 248, 250, 255, 258, 260, 262, 265, 268, 270, 272, 274, 275, 276, 277, 278, 280],
        volumes: [850, 880, 860, 920, 940, 960, 930, 980, 1020, 1000, 1050, 1100, 1080, 1120, 1150, 1130, 1170, 1200, 1180, 1220, 1250, 1230, 1260, 1300]
    }
};

const categoryData = [
    { name: "Кислоты", value: 28, color: "#e74c3c" },
    { name: "Основания", value: 18, color: "#3498db" },
    { name: "Соли", value: 22, color: "#2ecc71" },
    { name: "Растворители", value: 15, color: "#f39c12" },
    { name: "Индикаторы", value: 8, color: "#9b59b6" },
    { name: "Органические", value: 6, color: "#1abc9c" },
    { name: "Стандарт-титры", value: 3, color: "#e67e22" }
];

function initCharts() {
    updateCharts();
}

function updateCharts() {
    const reagentKey = document.getElementById('priceReagent').value;
    const data = priceData[reagentKey];
    const period = document.getElementById('pricePeriod').value;
    const chartType = document.getElementById('chartType').value;

    let prices, volumes, labels;
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    if (period === '1y') {
        prices = data.prices.slice(-12);
        volumes = data.volumes.slice(-12);
        labels = months;
    } else if (period === '2y') {
        prices = data.prices;
        volumes = data.volumes;
        labels = [];
        for (let y = 2023; y <= 2024; y++) {
            months.forEach(m => labels.push(`${m} ${y}`));
        }
        labels = labels.slice(0, prices.length);
    } else {
        // 5 лет — генерируем данные
        prices = [];
        volumes = [];
        labels = [];
        let basePrice = data.prices[0] * 0.6;
        let baseVol = data.volumes[0] * 0.5;
        for (let y = 2020; y <= 2024; y++) {
            for (let m = 0; m < 12; m++) {
                if (y === 2024 && m >= data.prices.length - 12) {
                    prices.push(data.prices[data.prices.length - 12 + m]);
                    volumes.push(data.volumes[data.volumes.length - 12 + m]);
                } else {
                    basePrice += (Math.random() - 0.3) * 30;
                    baseVol += (Math.random() - 0.3) * 20;
                    prices.push(Math.round(Math.max(basePrice, 100)));
                    volumes.push(Math.round(Math.max(baseVol, 50)));
                }
                labels.push(`${months[m]} ${y}`);
            }
        }
    }

    drawLineChart('priceChart', labels, prices, `Цена, ₽`, '#2980b9', chartType);
    drawLineChart('volumeChart', labels, volumes, `Объём, кг`, '#27ae60', 'bar');
    drawPieChart('pieChart', categoryData);
    drawCompareChart('compareChart', reagentKey);
    updatePriceLegend(data, prices);
}

function drawLineChart(canvasId, labels, data, label, color, type = 'line') {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 60 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    ctx.clearRect(0, 0, w, h);

    const minVal = Math.min(...data) * 0.9;
    const maxVal = Math.max(...data) * 1.05;
    const range = maxVal - minVal || 1;

    // Grid
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (chartH / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();

        const val = maxVal - (range / 5) * i;
        ctx.fillStyle = '#95a5a6';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(Math.round(val).toLocaleString(), padding.left - 8, y + 4);
    }

    const stepX = chartW / (data.length - 1 || 1);

    if (type === 'bar') {
        const barWidth = Math.max(chartW / data.length * 0.6, 4);
        data.forEach((val, i) => {
            const x = padding.left + (chartW / data.length) * i + (chartW / data.length - barWidth) / 2;
            const barH = ((val - minVal) / range) * chartH;
            const y = padding.top + chartH - barH;

            const gradient = ctx.createLinearGradient(x, y, x, padding.top + chartH);
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, color + '40');
            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.roundRect(x, y, barWidth, barH, [3, 3, 0, 0]);
            ctx.fill();
        });
    } else {
        // Area
        if (type === 'area') {
            ctx.beginPath();
            ctx.moveTo(padding.left, padding.top + chartH);
            data.forEach((val, i) => {
                const x = padding.left + stepX * i;
                const y = padding.top + chartH - ((val - minVal) / range) * chartH;
                ctx.lineTo(x, y);
            });
            ctx.lineTo(padding.left + stepX * (data.length - 1), padding.top + chartH);
            ctx.closePath();

            const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
            gradient.addColorStop(0, color + '40');
            gradient.addColorStop(1, color + '05');
            ctx.fillStyle = gradient;
            ctx.fill();
        }

        // Line
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        data.forEach((val, i) => {
            const x = padding.left + stepX * i;
            const y = padding.top + chartH - ((val - minVal) / range) * chartH;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Points
        data.forEach((val, i) => {
            const x = padding.left + stepX * i;
            const y = padding.top + chartH - ((val - minVal) / range) * chartH;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    // X labels
    const labelStep = Math.ceil(data.length / 8);
    ctx.fillStyle = '#95a5a6';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((lbl, i) => {
        if (i % labelStep === 0) {
            const x = padding.left + (type === 'bar' ? (chartW / data.length) * (i + 0.5) : stepX * i);
            ctx.fillText(lbl.substring(0, 7), x, h - 8);
        }
    });
}

function drawPieChart(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2 - 10;
    const radius = Math.min(w, h) / 2 - 30;

    ctx.clearRect(0, 0, w, h);

    const total = data.reduce((s, d) => s + d.value, 0);
    let startAngle = -Math.PI / 2;

    data.forEach(d => {
        const sliceAngle = (d.value / total) * Math.PI * 2;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = d.color;
        ctx.fill();

        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Label
        const midAngle = startAngle + sliceAngle / 2;
        const labelR = radius * 0.7;
        const lx = cx + Math.cos(midAngle) * labelR;
        const ly = cy + Math.sin(midAngle) * labelR;

        if (d.value / total > 0.05) {
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`${d.value}%`, lx, ly + 4);
        }

        startAngle += sliceAngle;
    });

    // Inner circle (donut)
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.45, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('2 547', cx, cy - 2);
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#95a5a6';
    ctx.fillText('наименований', cx, cy + 14);

    // Legend
    const legend = document.getElementById('pieLegend');
    legend.innerHTML = data.map(d =>
        `<span class="legend-item"><span class="legend-dot" style="background:${d.color}"></span>${d.name} (${d.value}%)</span>`
    ).join('');
}

function drawCompareChart(canvasId, reagentKey) {
    const quals = ['ч.', 'х.ч.', 'ч.д.а.', 'ос.ч.'];
    const multipliers = [0.6, 1, 1.4, 2.1];
    const basePrice = priceData[reagentKey].prices[priceData[reagentKey].prices.length - 1];

    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const rect = canvas.parentElement.getBoundingClientRect();

    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 20, bottom: 50, left: 60 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    ctx.clearRect(0, 0, w, h);

    const prices = multipliers.map(m => Math.round(basePrice * m));
    const maxVal = Math.max(...prices) * 1.15;

    const colors = ['#3498db', '#2ecc71', '#f39c12', '#e74c3c'];
    const barWidth = chartW / quals.length * 0.5;

    quals.forEach((q, i) => {
        const x = padding.left + (chartW / quals.length) * i + (chartW / quals.length - barWidth) / 2;
        const barH = (prices[i] / maxVal) * chartH;
        const y = padding.top + chartH - barH;

        const gradient = ctx.createLinearGradient(x, y, x, padding.top + chartH);
        gradient.addColorStop(0, colors[i]);
        gradient.addColorStop(1, colors[i] + '60');
        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barH, [6, 6, 0, 0]);
        ctx.fill();

        // Value
        ctx.fillStyle = '#2c3e50';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${prices[i].toLocaleString()} ₽`, x + barWidth / 2, y - 8);

        // Label
        ctx.fillStyle = '#7f8c8d';
        ctx.font = '11px sans-serif';
        ctx.fillText(q, x + barWidth / 2, h - 15);
    });

    // Y axis
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartH / 4) * i;
        const val = maxVal - (maxVal / 4) * i;
        ctx.fillStyle = '#bdc3c7';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(Math.round(val).toLocaleString(), padding.left - 8, y + 4);

        ctx.strokeStyle = '#ecf0f1';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();
    }
}

function updatePriceLegend(data, prices) {
    const legend = document.getElementById('priceLegend');
    const current = prices[prices.length - 1];
    const prev = prices[prices.length - 2];
    const change = ((current - prev) / prev * 100).toFixed(1);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const avg = Math.round(prices.reduce((a, b) => a + b) / prices.length);

    legend.innerHTML = `
        <span class="legend-item"><span class="legend-dot" style="background:#2980b9"></span>Текущая: <strong>${current.toLocaleString()} ₽</strong></span>
        <span class="legend-item">Мин: ${min.toLocaleString()} ₽</span>
        <span class="legend-item">Макс: ${max.toLocaleString()} ₽</span>
        <span class="legend-item">Средн: ${avg.toLocaleString()} ₽</span>
        <span class="legend-item ${change > 0 ? 'price-up' : 'price-down'}">${change > 0 ? '▲' : '▼'} ${change}%</span>
    `;
}

// ============================================================
// ТАБЛИЦА ИСТОРИИ ЦЕН
// ============================================================
function renderPriceHistory() {
    const tbody = document.getElementById('priceHistoryBody');
    const reagentKey = document.getElementById('priceReagent')?.value || 'h2so4';
    const data = priceData[reagentKey];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    let html = '';
    const prices = data.prices.slice(-12);
    const volumes = data.volumes.slice(-12);

    prices.forEach((price, i) => {
        const min = Math.round(price * 0.92);
        const max = Math.round(price * 1.08);
        const prev = i > 0 ? prices[i - 1] : price;
        const change = ((price - prev) / prev * 100).toFixed(1);
        const changeClass = change > 0 ? 'price-up' : change < 0 ? 'price-down' : 'price-neutral';
        const arrow = change > 0 ? '▲' : change < 0 ? '▼' : '—';

        html += `<tr>
            <td>${months[i]} 2024</td>
            <td>${min.toLocaleString()}</td>
            <td><strong>${price.toLocaleString()}</strong></td>
            <td>${max.toLocaleString()}</td>
            <td class="${changeClass}">${arrow} ${Math.abs(change)}%</td>
            <td>${volumes[i].toLocaleString()}</td>
        </tr>`;
    });

    tbody.innerHTML = html;
}

// ============================================================
// АНИМАЦИЯ СЧЁТЧИКОВ
// ============================================================
function animateCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateValue(el, 0, target, 2000);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
}

function animateValue(el, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * eased);

        el.textContent = current.toLocaleString('ru-RU');

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ============================================================
// SCROLL EFFECTS
// ============================================================
function initScrollEffects() {
    const backBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });

    // Resize handler for charts
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => updateCharts(), 300);
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(title, message, isError = false) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'error' : ''}`;
    toast.innerHTML = `
        <div>
            <strong>${title}</strong>
            <div style="font-size:0.85rem; color:var(--gray-500); margin-top:2px;">${message}</div>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

// ============================================================
// FORM SUBMISSION
// ============================================================
function submitForm(e) {
    e.preventDefault();
    showToast('✅ Заявка отправлена!', 'Наш менеджер свяжется с вами в течение 30 минут.');
    e.target.reset();
}

// ============================================================
// TABLE SORT
// ============================================================
function sortTable(colIdx) {
    const table = document.getElementById('catalogTable');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const dir = table.dataset.sortDir === 'asc' ? 'desc' : 'asc';
    table.dataset.sortDir = dir;

    rows.sort((a, b) => {
        let aVal = a.cells[colIdx].textContent.replace(/[^\d.-]/g, '');
        let bVal = b.cells[colIdx].textContent.replace(/[^\d.-]/g, '');

        if (!isNaN(aVal) && !isNaN(bVal)) {
            aVal = parseFloat(aVal);
            bVal = parseFloat(bVal);
        } else {
            aVal = a.cells[colIdx].textContent.trim();
            bVal = b.cells[colIdx].textContent.trim();
        }

        if (dir === 'asc') return aVal > bVal ? 1 : -1;
        return aVal < bVal ? 1 : -1;
    });

    rows.forEach(row => tbody.appendChild(row));
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function randomDate(yearStart, yearEnd) {
    const year = yearStart + Math.floor(Math.random() * (yearEnd - yearStart + 1));
    const month = 1 + Math.floor(Math.random() * 12);
    const day = 1 + Math.floor(Math.random() * 28);
    return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
}

function addMonths(dateStr, months) {
    const parts = dateStr.split('.');
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    date.setMonth(date.getMonth() + months);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
}

function addDays(dateStr, days) {
    const parts = dateStr.split('.');
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    date.setDate(date.getDate() + days);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
}

// Canvas roundRect polyfill
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, radii) {
        const r = radii[0] || 0;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - (radii[2] || 0));
        this.quadraticCurveTo(x + w, y + h, x + w - (radii[2] || 0), y + h);
        this.lineTo(x + (radii[3] || 0), y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - (radii[3] || 0));
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        this.closePath();
    };
}

// ============================================================
// Обновление цен при смене реагента
// ============================================================
document.getElementById('priceReagent')?.addEventListener('change', renderPriceHistory);