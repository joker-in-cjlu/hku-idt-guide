// 本地存储封装
const KEY_SELECTION = 'idt_selection';
const KEY_SLOTS = 'idt_slots';

function safeRead(key, def) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return def;
    return JSON.parse(raw);
  } catch (e) {
    return def;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

// ---------- 我的选课 ----------
export function getSelection() { return safeRead(KEY_SELECTION, []); }
export function isSelected(courseCode) { return getSelection().indexOf(courseCode) >= 0; }

export function toggleCourse(courseCode) {
  let list = getSelection();
  const idx = list.indexOf(courseCode);
  let added;
  if (idx >= 0) { list.splice(idx, 1); added = false; }
  else { list.push(courseCode); added = true; }
  safeWrite(KEY_SELECTION, list);
  return added;
}

export function addCourse(courseCode) {
  const list = getSelection();
  if (list.indexOf(courseCode) < 0) { list.push(courseCode); safeWrite(KEY_SELECTION, list); }
}

export function removeCourse(courseCode) {
  const list = getSelection().filter((c) => c !== courseCode);
  return safeWrite(KEY_SELECTION, list);
}

// ---------- 课表时间段 ----------
export function getSlots() { return safeRead(KEY_SLOTS, []); }

export function addSlot(slot) {
  const list = getSlots();
  const item = Object.assign({}, slot, { id: Date.now() + '_' + Math.floor(Math.random() * 1000) });
  list.push(item);
  return safeWrite(KEY_SLOTS, list) ? item : null;
}

export function removeSlot(id) {
  const list = getSlots().filter((s) => s.id !== id);
  return safeWrite(KEY_SLOTS, list);
}

export function removeSlotsByCode(courseCode) {
  const list = getSlots().filter((s) => s.code !== courseCode);
  return safeWrite(KEY_SLOTS, list);
}

export function updateSlot(id, updates) {
  const list = getSlots();
  const idx = list.findIndex((s) => s.id === id);
  if (idx < 0) return false;
  list[idx] = Object.assign({}, list[idx], updates);
  return safeWrite(KEY_SLOTS, list);
}
