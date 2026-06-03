export const LANGUAGES = [
  { code: 'vi', label: 'Việt Nam',   fi: 'vn' },
  { code: 'en', label: 'English',    fi: 'gb' },
  { code: 'zh', label: 'Chinese',    fi: 'cn' },
  { code: 'my', label: 'Myanmar',    fi: 'mm' },
  { code: 'id', label: 'Indonesian', fi: 'id' },
] as const;

export type Language = typeof LANGUAGES[number];
