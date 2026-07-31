// 港鐵實時到站數據
// API: https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line={line}&sta={station}

export const LINES = [
  { code: 'ISL', name: '港島綫', nameEn: 'Island Line', color: '#007dc3', up: '堅尼地城', down: '柴灣' },
  { code: 'TWL', name: '荃灣綫', nameEn: 'Tsuen Wan Line', color: '#e60012', up: '中環', down: '荃灣' },
  { code: 'KTL', name: '觀塘綫', nameEn: 'Kwun Tong Line', color: '#00a650', up: '黃埔', down: '調景嶺' },
  { code: 'TKL', name: '將軍澳綫', nameEn: 'Tseung Kwan O Line', color: '#7b3b98', up: '北角', down: '寶琳/康城' },
  { code: 'TCL', name: '東涌綫', nameEn: 'Tung Chung Line', color: '#f7943c', up: '香港', down: '東涌' },
  { code: 'EAL', name: '東鐵綫', nameEn: 'East Rail Line', color: '#53b7e8', up: '金鐘', down: '羅湖/落馬洲' },
  { code: 'TML', name: '屯馬綫', nameEn: 'Tuen Ma Line', color: '#923011', up: '屯門', down: '烏溪沙' },
  { code: 'SIL', name: '南港島綫', nameEn: 'South Island Line', color: '#c1cd23', up: '金鐘', down: '海怡半島' },
  { code: 'AEL', name: '機場快綫', nameEn: 'Airport Express', color: '#00838a', up: '香港', down: '博覽館' },
  { code: 'DRL', name: '迪士尼綫', nameEn: 'Disneyland Resort Line', color: '#f273b0', up: '欣澳', down: '迪士尼' }
];

// 常用車站（快捷入口）
export const FAVORITES = [
  { code: 'HKU', name: '香港大學', nameEn: 'HKU', line: 'ISL' },
  { code: 'ADM', name: '金鐘', nameEn: 'Admiralty', line: 'ISL' },
  { code: 'CEN', name: '中環', nameEn: 'Central', line: 'ISL' },
  { code: 'ADM', name: '金鐘', nameEn: 'Admiralty', line: 'TWL' },
  { code: 'CEN', name: '中環', nameEn: 'Central', line: 'TWL' },
  { code: 'JOR', name: '佐敦', nameEn: 'Jordan', line: 'TWL' }
];

// 各線車站列表
export const STATIONS = {
  ISL: [
    { code: 'KET', name: '堅尼地城' }, { code: 'HKU', name: '香港大學' },
    { code: 'SYP', name: '西營盤' }, { code: 'SHW', name: '上環' },
    { code: 'CEN', name: '中環' }, { code: 'ADM', name: '金鐘' },
    { code: 'WAC', name: '灣仔' }, { code: 'CAB', name: '銅鑼灣' },
    { code: 'TIH', name: '天后' }, { code: 'FOH', name: '炮台山' },
    { code: 'NOP', name: '北角' }, { code: 'QUB', name: '鰂魚涌' },
    { code: 'TAK', name: '太古' }, { code: 'SWH', name: '西灣河' },
    { code: 'SKW', name: '筲箕灣' }, { code: 'HFC', name: '杏花邨' },
    { code: 'CHW', name: '柴灣' }
  ],
  EAL: [
    { code: 'ADM', name: '金鐘' }, { code: 'EXC', name: '會展' },
    { code: 'HUH', name: '紅磡' }, { code: 'MKK', name: '旺角東' },
    { code: 'KLR', name: '九龍塘' }, { code: 'TAW', name: '大圍' },
    { code: 'SHT', name: '沙田' }, { code: 'FOT', name: '火炭' },
    { code: 'RAC', name: '馬場' }, { code: 'UNI', name: '大學' },
    { code: 'TAP', name: '大埔墟' }, { code: 'TWO', name: '太和' },
    { code: 'FAN', name: '粉嶺' }, { code: 'SHS', name: '上水' },
    { code: 'LOW', name: '羅湖' }, { code: 'LMC', name: '落馬洲' }
  ],
  TWL: [
    { code: 'CEN', name: '中環' }, { code: 'ADM', name: '金鐘' },
    { code: 'TST', name: '尖沙咀' }, { code: 'JOR', name: '佐敦' },
    { code: 'YMT', name: '油麻地' }, { code: 'MOK', name: '旺角' },
    { code: 'PRE', name: '太子' }, { code: 'SSP', name: '深水埗' },
    { code: 'CSW', name: '長沙灣' }, { code: 'LCK', name: '荔枝角' },
    { code: 'MEF', name: '美孚' }, { code: 'LAK', name: '荔景' },
    { code: 'KWF', name: '葵芳' }, { code: 'KWH', name: '葵興' },
    { code: 'TWH', name: '大窩口' }, { code: 'TSW', name: '荃灣' }
  ],
  TML: [
    { code: 'TUM', name: '屯門' }, { code: 'SIH', name: '兆康' },
    { code: 'TIS', name: '天水圍' }, { code: 'LOP', name: '朗屏' },
    { code: 'YUL', name: '元朗' }, { code: 'KSR', name: '錦上路' },
    { code: 'TWW', name: '荃灣西' }, { code: 'MEF', name: '美孚' },
    { code: 'NAC', name: '南昌' }, { code: 'AUS', name: '柯士甸' },
    { code: 'ETS', name: '尖東' }, { code: 'HUH', name: '紅磡' },
    { code: 'HOM', name: '何文田' }, { code: 'TKW', name: '土瓜灣' },
    { code: 'SUW', name: '宋皇臺' }, { code: 'KAT', name: '啟德' },
    { code: 'DIH', name: '鑽石山' }, { code: 'HIK', name: '顯徑' },
    { code: 'TAW', name: '大圍' }, { code: 'CKT', name: '車公廟' },
    { code: 'STW', name: '沙田圍' }, { code: 'CIO', name: '第一城' },
    { code: 'SHM', name: '石門' }, { code: 'TAP', name: '大水坑' },
    { code: 'HEO', name: '恆安' }, { code: 'MAO', name: '馬鞍山' },
    { code: 'WKS', name: '烏溪沙' }
  ],
  TCL: [
    { code: 'HOK', name: '香港' }, { code: 'KOW', name: '九龍' },
    { code: 'OLY', name: '奧運' }, { code: 'NAC', name: '南昌' },
    { code: 'LAK', name: '荔景' }, { code: 'TSY', name: '青衣' },
    { code: 'SUN', name: '欣澳' }, { code: 'TUC', name: '東涌' }
  ],
  KTL: [
    { code: 'WHA', name: '黃埔' }, { code: 'HOM', name: '何文田' },
    { code: 'YMT', name: '油麻地' }, { code: 'MOK', name: '旺角' },
    { code: 'PRE', name: '太子' }, { code: 'SKM', name: '石硤尾' },
    { code: 'KLT', name: '九龍塘' }, { code: 'LOF', name: '樂富' },
    { code: 'WTS', name: '黃大仙' }, { code: 'DIH', name: '鑽石山' },
    { code: 'CHH', name: '彩虹' }, { code: 'KOB', name: '九龍灣' },
    { code: 'NTK', name: '牛頭角' }, { code: 'KT', name: '觀塘' },
    { code: 'LAT', name: '藍田' }, { code: 'YAT', name: '油塘' },
    { code: 'TIK', name: '調景嶺' }
  ],
  TKL: [
    { code: 'NOP', name: '北角' }, { code: 'QUB', name: '鰂魚涌' },
    { code: 'YAT', name: '油塘' }, { code: 'TIK', name: '調景嶺' },
    { code: 'TKO', name: '將軍澳' }, { code: 'HAH', name: '坑口' },
    { code: 'POA', name: '寶琳' }, { code: 'LHP', name: '康城' }
  ],
  SIL: [
    { code: 'ADM', name: '金鐘' }, { code: 'OCP', name: '海洋公園' },
    { code: 'WCH', name: '黃竹坑' }, { code: 'LET', name: '利東' },
    { code: 'SOH', name: '海怡半島' }
  ],
  AEL: [
    { code: 'HOK', name: '香港' }, { code: 'KOW', name: '九龍' },
    { code: 'TSY', name: '青衣' }, { code: 'AIR', name: '機場' },
    { code: 'AWE', name: '博覽館' }
  ],
  DRL: [
    { code: 'SUN', name: '欣澳' }, { code: 'DNY', name: '迪士尼' }
  ]
};

// 開發時走 Vite 代理，生產環境直連 data.gov.hk
const API_BASE = import.meta.env.DEV
  ? '/api/mtr'
  : 'https://rt.data.gov.hk/v1/transport/mtr';

export function getLine(code) {
  return LINES.find(l => l.code === code) || null;
}

export function getStation(code) {
  for (const line of Object.keys(STATIONS)) {
    const s = STATIONS[line].find(s => s.code === code);
    if (s) return { ...s, line };
  }
  return null;
}

export async function fetchSchedule(line, station) {
  const url = `${API_BASE}/getSchedule.php?line=${line}&sta=${station}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`API error: ${resp.status}`);
  return resp.json();
}
