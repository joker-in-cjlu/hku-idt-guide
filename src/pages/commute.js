import { LINES, FAVORITES, STATIONS, fetchSchedule } from '../data/commute.js';
import { renderTabbar } from '../components/tabbar.js';

let selectedLine = 'ISL';
let selectedStation = '';
let timer = null;
let loading = false;

function render() {
  const line = LINES.find(l => l.code === selectedLine);
  const stations = STATIONS[selectedLine] || [];
  const favStations = FAVORITES;

  const container = document.getElementById('page-container');
  container.innerHTML = `
    <style>
      .mtr-page { padding: 12px 16px 4px; }
      .mtr-page .page-title { font-size: 18px; font-weight: 700; color: #14312a; }
      .mtr-page .page-sub { font-size: 11px; color: #8a8f99; margin-top: 4px; }
      .line-selector { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
      .line-chip { font-size: 11px; padding: 5px 12px; border-radius: 999px; color: #fff; cursor: pointer; opacity: 0.45; transition: opacity .2s; white-space: nowrap; }
      .line-chip.on { opacity: 1; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
      .fav-section { margin-top: 16px; }
      .fav-section .section-label { font-size: 12px; font-weight: 600; color: #6b7280; margin-bottom: 8px; }
      .fav-row { display: flex; flex-wrap: wrap; gap: 8px; }
      .fav-chip { font-size: 12px; padding: 6px 14px; border-radius: 8px; background: #fff; border: 1px solid #eef0f2; cursor: pointer; transition: all .2s; display: flex; align-items: center; gap: 4px; }
      .fav-chip:active { background: #f0fdf6; border-color: #22c0dc; }
      .fav-chip .fav-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
      .station-list { margin-top: 14px; }
      .station-list .section-label { font-size: 12px; font-weight: 600; color: #6b7280; margin-bottom: 8px; }
      .station-grid { display: flex; flex-wrap: wrap; gap: 6px; }
      .station-chip { font-size: 12px; padding: 5px 12px; border-radius: 8px; background: #fff; border: 1px solid #eef0f2; cursor: pointer; }
      .station-chip.active { background: #22c0dc; color: #fff; border-color: #22c0dc; }
      .arrival-card { background: #fff; border-radius: 16px; margin-top: 14px; padding: 16px; box-shadow: 0 2px 8px rgba(0,45,32,0.04); }
      .arrival-card .sta-header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
      .arrival-card .sta-name { font-size: 16px; font-weight: 600; color: #14312a; }
      .arrival-card .sta-code { font-size: 11px; color: #8a8f99; }
      .arrival-card .dir-section { margin-bottom: 12px; }
      .arrival-card .dir-label { font-size: 11px; font-weight: 600; color: #6b7280; margin-bottom: 6px; display: flex; align-items: center; gap: 4px; }
      .arrival-card .dir-arrow { font-size: 12px; }
      .arrival-card .train-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #f5f6f8; }
      .arrival-card .train-row:last-child { border-bottom: none; }
      .arrival-card .train-time { font-size: 22px; font-weight: 700; min-width: 42px; text-align: center; }
      .arrival-card .train-time.soon { color: #e60012; }
      .arrival-card .train-time.near { color: #f59e0b; }
      .arrival-card .train-time.ok { color: #22c0dc; }
      .arrival-card .train-info { flex: 1; }
      .arrival-card .train-dest { font-size: 14px; font-weight: 500; color: #1f2430; }
      .arrival-card .train-plat { font-size: 11px; color: #8a8f99; margin-top: 1px; }
      .arrival-card .train-seq { font-size: 10px; color: #8a8f99; background: #f5f6f8; border-radius: 999px; padding: 2px 8px; }
      .arrival-card .empty-state { text-align: center; padding: 24px 0; color: #8a8f99; font-size: 13px; }
      .arrival-card .empty-icon { font-size: 36px; margin-bottom: 8px; }
      .arrival-card .error-state { text-align: center; padding: 16px 0; color: #ef4444; font-size: 12px; }
      .arrival-card .retry-btn { display: inline-block; margin-top: 8px; padding: 6px 16px; font-size: 11px; color: #22c0dc; border: 1px solid #22c0dc; border-radius: 999px; cursor: pointer; }
      .status-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
      .status-dot.live { background: #22c55e; animation: mtr-pulse 2s infinite; }
      .status-dot.error { background: #ef4444; }
      @keyframes mtr-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

      .map-section { margin-top: 16px; padding: 0 0 20px; }
      .map-section .section-label { font-size: 12px; font-weight: 600; color: #6b7280; margin-bottom: 4px; }
      .mtr-map-thumb { width: 100%; border-radius: 12px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,45,32,0.08); transition: transform .2s; }
      .mtr-map-thumb:active { transform: scale(0.98); }

      .zoom-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 9999; display: flex; flex-direction: column; touch-action: none; }
      .zoom-overlay .zoom-close { position: fixed; top: 16px; right: 16px; z-index: 10001; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.2); color: #fff; font-size: 20px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      .zoom-overlay .zoom-hint { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 10001; font-size: 11px; color: rgba(255,255,255,0.5); pointer-events: none; }
      .zoom-overlay .zoom-container { flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; }
      .zoom-overlay .zoom-image { max-width: 95vw; max-height: 95vh; object-fit: contain; transition: transform .1s ease-out; transform-origin: center center; user-select: none; -webkit-user-drag: none; }
    </style>

    <div class="mtr-page">
      <div class="page-title">港鐵實時到站</div>
      <div class="page-sub">數據來源：data.gov.hk，每 30 秒自動更新</div>

      <div class="line-selector">
        ${LINES.map(l => `
          <span class="line-chip ${l.code === selectedLine ? 'on' : ''}" data-line="${l.code}" style="background:${l.color}">${l.name}</span>
        `).join('')}
      </div>

      <div class="fav-section">
        <div class="section-label">⭐ 常用車站</div>
        <div class="fav-row">
          ${favStations.map(s => {
            const l = LINES.find(ll => ll.code === s.line);
            return `<span class="fav-chip" data-station="${s.code}" data-line="${s.line}">
              <span class="fav-dot" style="background:${l ? l.color : '#999'}"></span>${s.name}
            </span>`;
          }).join('')}
        </div>
      </div>

      <div class="station-list">
        <div class="section-label">${line ? line.name + ' 車站' : '選擇車站'}</div>
        <div class="station-grid">
          ${stations.map(s => `
            <span class="station-chip ${s.code === selectedStation ? 'active' : ''}" data-station="${s.code}">${s.name}</span>
          `).join('')}
        </div>
      </div>

      <div id="arrival-panel"></div>

      <div class="map-section" id="map-section">
        <div class="section-label">🗺️ 港鐵路綫圖</div>
        <div style="font-size:11px;color:#8a8f99;margin-bottom:8px">點擊圖片可放大查看，支援縮放與拖拽</div>
        <img id="mtr-map-img" class="mtr-map-thumb" src="/hku-idt-guide/mtr-route-map.jpg" alt="港鐵路綫圖" />
      </div>
    </div>
  `;

  // Bind line selector
  container.querySelectorAll('.line-chip').forEach(el => {
    el.onclick = () => {
      if (el.dataset.line !== selectedLine) {
        selectedLine = el.dataset.line;
        selectedStation = '';
        render();
      }
    };
  });

  // Bind station selection (favorites + station grid)
  const selectStation = (stationCode, lineCode) => {
    if (selectedStation === stationCode && selectedLine === lineCode) return;
    selectedLine = lineCode;
    selectedStation = stationCode;
    render();
  };

  container.querySelectorAll('.fav-chip').forEach(el => {
    el.onclick = () => selectStation(el.dataset.station, el.dataset.line);
  });

  container.querySelectorAll('.station-chip').forEach(el => {
    el.onclick = () => selectStation(el.dataset.station, selectedLine);
  });

  // Render arrival panel if station selected
  if (selectedStation) {
    renderArrivalPanel();
  }

  // Setup zoomable map
  setupZoomOverlay();

  renderTabbar();
}

function setupZoomOverlay() {
  const mapImg = document.getElementById('mtr-map-img');
  if (!mapImg) return;

  mapImg.onclick = () => openZoom();
}

function openZoom() {
  // Remove existing overlay if any
  const existing = document.querySelector('.zoom-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'zoom-overlay';
  overlay.innerHTML = `
    <button class="zoom-close">✕</button>
    <div class="zoom-container" id="zoom-container">
      <img class="zoom-image" id="zoom-image" src="/hku-idt-guide/mtr-route-map.jpg" alt="港鐵路綫圖" />
    </div>
    <div class="zoom-hint">滑鼠滾輪 / 雙指縮放，拖拽移動</div>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector('#zoom-image');
  const container = overlay.querySelector('#zoom-container');
  const closeBtn = overlay.querySelector('.zoom-close');

  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let lastDist = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let lastTranslateX = 0;
  let lastTranslateY = 0;

  function applyTransform() {
    img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    const hint = overlay.querySelector('.zoom-hint');
    if (hint) hint.textContent = `${Math.round(scale * 100)}% · 滑鼠滾輪/雙指縮放，拖拽移動`;
  }

  // Mouse wheel zoom
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = img.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const oldScale = scale;
    scale = Math.min(5, Math.max(0.5, scale - e.deltaY * 0.002));
    const ratio = scale / oldScale;

    translateX = e.clientX - (e.clientX - translateX) * ratio;
    translateY = e.clientY - (e.clientY - translateY) * ratio;

    applyTransform();
  }, { passive: false });

  // Mouse drag
  img.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    lastTranslateX = translateX;
    lastTranslateY = translateY;
    img.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = lastTranslateX + (e.clientX - dragStartX);
    translateY = lastTranslateY + (e.clientY - dragStartY);
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    img.style.cursor = 'grab';
  });

  // Touch pinch zoom + drag
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      lastDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    } else if (e.touches.length === 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      dragStartY = e.touches[0].clientY;
      lastTranslateX = translateX;
      lastTranslateY = translateY;
    }
  }, { passive: false });

  container.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (lastDist) {
        const oldScale = scale;
        scale = Math.min(5, Math.max(0.5, scale * (dist / lastDist)));
        const ratio = scale / oldScale;
        const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        translateX = cx - (cx - translateX) * ratio;
        translateY = cy - (cy - translateY) * ratio;
        applyTransform();
      }
      lastDist = dist;
    } else if (e.touches.length === 1 && isDragging) {
      translateX = lastTranslateX + (e.touches[0].clientX - dragStartX);
      translateY = lastTranslateY + (e.touches[0].clientY - dragStartY);
      applyTransform();
    }
  }, { passive: false });

  container.addEventListener('touchend', () => {
    isDragging = false;
    lastDist = 0;
  });

  // Double-click to reset
  img.addEventListener('dblclick', () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
  });

  // Close
  const close = () => overlay.remove();
  closeBtn.onclick = close;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function escClose(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escClose); }
  });

  // Initial cursor
  img.style.cursor = 'grab';
}

function renderArrivalPanel() {
  const panel = document.getElementById('arrival-panel');
  if (!panel) return;

  const station = STATIONS[selectedLine]?.find(s => s.code === selectedStation);
  const line = LINES.find(l => l.code === selectedLine);

  panel.innerHTML = `
    <div class="arrival-card">
      <div class="sta-header">
        <span style="display:inline-block;width:4px;height:18px;border-radius:2px;background:${line ? line.color : '#999'}"></span>
        <span class="sta-name">${station ? station.name : selectedStation}</span>
        <span class="sta-code">${selectedStation}</span>
        <span style="flex:1"></span>
        <span class="status-dot live" id="status-dot"></span>
        <span style="font-size:10px;color:#8a8f99" id="status-text">更新中…</span>
      </div>
      <div id="arrival-content">
        <div class="empty-state">
          <div class="empty-icon">⏳</div>
          <div>載入中…</div>
        </div>
      </div>
    </div>
  `;

  doLoad();
}

function updateStatus(live) {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  if (!dot || !text) return;
  if (live) {
    dot.className = 'status-dot live';
    text.textContent = formatTime(new Date());
  } else {
    dot.className = 'status-dot error';
    text.textContent = '載入失敗';
  }
}

async function doLoad() {
  if (loading) return;
  loading = true;

  const content = document.getElementById('arrival-content');
  if (!content) { loading = false; return; }

  const stationCode = selectedStation;
  const lineCode = selectedLine;

  try {
    const data = await fetchSchedule(lineCode, stationCode);
    const arrivals = parseArrivals(data, lineCode, stationCode);

    if (!arrivals || arrivals.length === 0) {
      content.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🚇</div>
          <div>暫無到站數據</div>
          <div style="font-size:10px;margin-top:4px">可能為非營運時段或資料暫未更新</div>
        </div>`;
    } else {
      const up = arrivals.filter(a => a.dir === 'UP');
      const down = arrivals.filter(a => a.dir === 'DOWN');

      content.innerHTML = `
        ${renderDirection(up)}
        ${renderDirection(down)}
      `;
    }
    updateStatus(true);
  } catch (err) {
    console.error('MTR API error:', err);
    content.innerHTML = `
      <div class="error-state">
        <div>⚠️ 無法載入到站數據</div>
        <div style="font-size:10px;margin-top:4px">${err.message}</div>
        <span class="retry-btn" onclick="window._mtrRetry && window._mtrRetry()">重新載入</span>
      </div>`;
    updateStatus(false);
    window._mtrRetry = () => doLoad();
  } finally {
    loading = false;
  }
}

function renderDirection(arrivals) {
  if (!arrivals.length) return '';
  const dir = arrivals[0].dir;
  const line = LINES.find(l => l.code === selectedLine);
  const dirLabel = dir === 'UP' ? (line ? line.up : '上行') : (line ? line.down : '下行');
  const arrow = dir === 'UP' ? '↑' : '↓';

  return `
    <div class="dir-section">
      <div class="dir-label"><span class="dir-arrow">${arrow}</span> 往 ${dirLabel}</div>
      ${arrivals.slice(0, 4).map((a, i) => {
        let cls = 'ok';
        if (a.min <= 2) cls = 'soon';
        else if (a.min <= 5) cls = 'near';
        const label = a.min === 0 ? '到站' : `${a.min}分`;
        return `
          <div class="train-row">
            <span class="train-time ${cls}">${label}</span>
            <div class="train-info">
              <div class="train-dest">${a.dest || '—'}</div>
              <div class="train-plat">${a.plat ? a.plat + ' 號月台' : ''}${a.time ? ' · ' + a.time : ''}</div>
            </div>
            ${i === 0 ? '<span class="train-seq">即將到站</span>' : `<span class="train-seq">第${i + 1}班</span>`}
          </div>`;
      }).join('')}
    </div>`;
}

function parseArrivals(data, lineCode, stationCode) {
  const raw = data?.data || data || {};
  const key = `${lineCode}-${stationCode}`;
  const info = raw[key] || Object.values(raw)[0] || {};
  const arrivals = [];

  ['UP', 'DOWN'].forEach(dir => {
    const trains = info[dir];
    if (!trains || !Array.isArray(trains)) return;
    trains.forEach(t => {
      arrivals.push({
        dir,
        dest: t.dest || '',
        plat: t.plat || t.platform || '',
        min: parseInt(t.ttnt) ?? 0,
        seq: parseInt(t.seq) || 0,
        time: t.time || ''
      });
    });
  });

  arrivals.sort((a, b) => a.min - b.min);
  return arrivals;
}

function formatTime(d) {
  return d.toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export default function commutePage() {
  selectedLine = 'ISL';
  selectedStation = '';
  if (timer) { clearInterval(timer); timer = null; }
  loading = false;
  delete window._mtrRetry;

  render();

  // Always start polling; doLoad checks if a station is selected
  timer = setInterval(() => {
    if (selectedStation && document.getElementById('arrival-content')) {
      doLoad();
    }
  }, 30000);

  return () => {
    if (timer) { clearInterval(timer); timer = null; }
    loading = false;
    delete window._mtrRetry;
  };
}
