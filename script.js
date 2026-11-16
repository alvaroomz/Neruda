/* La información editable está en menu-data.js. No se usan dependencias externas. */
'use strict';
const money = value => typeof value === 'number' ? `$${value}` : (value || '');
const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
const items = new Map(), cards = [], categoryLinks = new Map();
const products = document.querySelector('#products'), nav = document.querySelector('#categories');
// Productos que tienen variantes registradas con códigos propios en Neon.
const ORDER_VARIANT_IDS = new Set([
    'p-3',
    'p-5',
    'p-11',
    'p-28',
    'p-75',
    'p-76',
    'p-77',
    'p-78'
]);

// Productos que tienen un solo código en Neon, pero permiten elegir sabor.
const FLAVOR_OPTIONS = {
    'p-54': ['Vainilla', 'Cajeta', 'Moka'],
    'p-63': ['Oreo', 'Tradicional', 'Moka', 'Cajeta', 'Vainilla'],
    'p-65': ['Fresa', 'Chocolate']
};

// Productos con precio fijo y código propio en Neon.
const ORDER_FIXED_IDS = new Set([
    ...Array.from({ length: 34 }, (_, i) => `p-${i + 1}`)
        .filter(id => !ORDER_VARIANT_IDS.has(id)),
    ...Array.from({ length: 19 }, (_, i) => `p-${i + 36}`),
    ...Array.from({ length: 7 }, (_, i) => `p-${i + 57}`),
    'p-65'
]);

function variantSlug(name) {
    return String(name)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function createOrderButton(item, code, price, variant = '') {
    const button = el('button', 'vp-menu-order');

    button.type = 'button';
    button.dataset.vpOrder = '';
    button.dataset.vpCode = code;
    button.dataset.vpName = item.name;
    button.dataset.vpPrice = String(price);

    if (variant) {
        button.dataset.vpVariant = variant;
    }

    button.textContent = variant
        ? `Ordenar · ${variant} — ${money(price)}`
        : `Ordenar — ${money(price)}`;

    button.style.cssText = [
        'display:block',
        'width:100%',
        'margin-top:12px',
        'padding:11px 14px',
        'border:0',
        'border-radius:9px',
        'background:#70452f',
        'color:#fff',
        'font-size:13px',
        'font-weight:700',
        'cursor:pointer'
    ].join(';');

    return button;
}

function addOrderOptions(card, item) {
    const orderBox = el('div', 'vp-order-options');

    // Productos con variantes que tienen códigos individuales en Neon.
    if (ORDER_VARIANT_IDS.has(item.id)) {
        item.variants.forEach(variant => {
            const code = `${item.id}-${variantSlug(variant.name)}`;

            orderBox.append(
                createOrderButton(
                    item,
                    code,
                    variant.price,
                    variant.name
                )
            );
        });

        if (item.variants.length) card.append(orderBox);
        return;
    }

    // Productos que permiten seleccionar sabor con un único código.
    if (FLAVOR_OPTIONS[item.id]) {
        FLAVOR_OPTIONS[item.id].forEach(flavor => {
            orderBox.append(
                createOrderButton(
                    item,
                    item.id,
                    item.price,
                    flavor
                )
            );
        });

        card.append(orderBox);
        return;
    }

    // Productos normales con precio fijo y código registrado.
    if (ORDER_FIXED_IDS.has(item.id) && item.price !== null) {
        orderBox.append(
            createOrderButton(
                item,
                item.id,
                item.price
            )
        );

        card.append(orderBox);
    }
}
MENU.forEach((category, index) => {
    const link = el('a', '', category.name); link.href = `#${category.id}`; link.addEventListener('click', event => { const target = document.getElementById(category.id); if (Math.abs(target.getBoundingClientRect().top) > innerHeight * 2) { event.preventDefault(); target.scrollIntoView({ behavior: 'instant', block: 'start' }); history.replaceState(null, '', `#${category.id}`); schedule(); } }); nav.append(link); categoryLinks.set(category.id, link);
    const section = el('section', 'menu-section'); section.id = category.id; section.setAttribute('aria-labelledby', `${category.id}-title`);
    const heading = el('div', 'section-title'); heading.append(el('span', 'section-number', String(index + 1).padStart(2, '0')));
    const title = el('h2', '', category.name); title.id = `${category.id}-title`; heading.append(title); section.append(heading);
    if (category.note) section.append(el('p', 'section-note', category.note));
    category.items.forEach(item => {
        const card = el('article', 'product'); card.id = item.id; cards.push(card); items.set(item.id, { ...item, category });
        const top = el('div', 'product-top'); top.append(el('h3', '', item.name)); if (item.price !== null) top.append(el('span', 'price', money(item.price))); card.append(top);
        if (item.description) {
            card.append(el('p', 'description', item.description));
        }

        if (item.variants.length) {
            const list = el('ul', 'variants');

            item.variants.forEach(v => {
                const li = el('li');
                li.append(
                    el('span', '', v.name),
                    el('span', 'price', money(v.price))
                );
                list.append(li);
            });

            card.append(list);
        }

        // Generar automáticamente las opciones de pedido.
        addOrderOptions(card, item);

        section.append(card);
    }); products.append(section);
});
const photos = [document.querySelector('#photo-a'), document.querySelector('#photo-b')];
const missing = document.querySelector('#missing-photo'), imageLabel = document.querySelector('#image-label');
let activeId = '', activeLayer = 0, request = 0;
function setActive(id) {
    if (id === activeId) return;
    const item = items.get(id); if (!item) return;
    document.getElementById(activeId)?.classList.remove('is-active'); document.getElementById(id).classList.add('is-active'); activeId = id;
    document.querySelector('#active-category').textContent = item.category.name;
    document.querySelector('#active-name').textContent = item.name;
    document.querySelector('#active-price').textContent = item.variants.length ? `Desde ${money(Math.min(...item.variants.map(v => v.price)))} · ${item.variants.length} opciones` : money(item.price);
    categoryLinks.forEach((link, key) => { if (key === item.category.id) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current') });
    const activeLink = categoryLinks.get(item.category.id); if (activeLink.offsetLeft < nav.scrollLeft || activeLink.offsetLeft + activeLink.offsetWidth > nav.scrollLeft + nav.clientWidth) nav.scrollTo({ left: Math.max(0, activeLink.offsetLeft - 20), behavior: 'instant' });
    const token = ++request; photos.forEach(p => { p.onload = null; p.onerror = null });
    const pending = () => { photos.forEach(p => p.classList.remove('visible')); missing.hidden = false; imageLabel.hidden = true; document.querySelector('#photo-note').textContent = 'Aún no hay una foto identificada de este producto.' };
    // Primero elimina la imagen previa: nunca mostrar otra comida bajo el nuevo nombre.
    pending();
    if (!item.image) return;
    const layer = 1 - activeLayer, photo = photos[layer]; photo.hidden = false; photo.alt = `${item.name}, fotografía del menú original`;
    const ready = () => { if (token !== request) return; missing.hidden = true; imageLabel.hidden = false; photos[activeLayer].classList.remove('visible'); photo.classList.add('visible'); activeLayer = layer; document.querySelector('#photo-note').textContent = 'Fotografía del menú original.'; };
    photo.onload = ready; photo.onerror = () => { if (token === request) pending() }; photo.src = item.image; if (photo.complete && photo.naturalWidth) ready();
    // Precarga solamente la siguiente fotografía próxima (no el catálogo completo).
    const position = cards.findIndex(c => c.id === id), next = items.get(cards[position + 1]?.id); if (next?.image) { const preload = new Image(); preload.src = next.image; }
}
// Observer limita los candidatos. Un único frame decide cuál está en la zona de lectura.
let observer, candidates = new Set(), scheduled = false;
function readingLine() { const navBottom = document.querySelector('.category-bar').getBoundingClientRect().bottom; const mobile = matchMedia('(max-width:599px)').matches; return mobile ? Math.max(navBottom, document.querySelector('.visual').getBoundingClientRect().bottom) + 36 : Math.max(navBottom + 55, innerHeight * .33) }
function update() { scheduled = false; const line = readingLine(); let chosen = null, dist = Infinity; const headingSection = [...document.querySelectorAll('.menu-section')].find(section => { const r = section.querySelector('.section-title').getBoundingClientRect(); return r.top <= line + 25 && r.bottom >= line - 20 }); if (headingSection) { setActive(headingSection.querySelector('.product').id); return; } const pool = candidates.size ? [...candidates] : cards; for (const card of pool) { const r = card.getBoundingClientRect(); const d = r.top <= line && r.bottom >= line ? 0 : Math.min(Math.abs(r.top - line), Math.abs(r.bottom - line)); if (d < dist) { dist = d; chosen = card } } if (chosen) setActive(chosen.id) }
function schedule() { if (!scheduled) { scheduled = true; requestAnimationFrame(update) } }
if ('IntersectionObserver' in window) { observer = new IntersectionObserver(entries => { for (const entry of entries) { if (entry.isIntersecting) candidates.add(entry.target); else candidates.delete(entry.target) } schedule() }, { threshold: 0 }); cards.forEach(c => observer.observe(c)) }
addEventListener('scroll', schedule, { passive: true }); addEventListener('resize', schedule, { passive: true });
setActive(cards[0].id); schedule();
