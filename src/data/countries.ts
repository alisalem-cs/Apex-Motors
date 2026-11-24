import lebanonFlag from "../assets/flags/lb.svg";
import uaeFlag from "../assets/flags/ae.svg";
import saudiFlag from "../assets/flags/sa.svg";
import qatarFlag from "../assets/flags/qa.svg";
import kuwaitFlag from "../assets/flags/kw.svg";
import jordanFlag from "../assets/flags/jo.svg";
import egyptFlag from "../assets/flags/eg.svg";
import turkeyFlag from "../assets/flags/tr.svg";
import franceFlag from "../assets/flags/fr.svg";
import germanyFlag from "../assets/flags/de.svg";
import ukFlag from "../assets/flags/gb.svg";
import usaFlag from "../assets/flags/us.svg";

export interface Country {
  code: string;
  country: string;
  flag: string;
  example: string;
  maxDigits: number;
  pattern: RegExp;
}

export const COUNTRY_CODES: Country[] = [
  { code: "+961", country: "Lebanon", flag: lebanonFlag, example: "70123456", maxDigits: 8, pattern: /^(3\d{6}|(70|71|76|78|79|81)\d{6})$/ },
  { code: "+971", country: "UAE", flag: uaeFlag, example: "501234567", maxDigits: 9, pattern: /^5\d{8}$/ },
  { code: "+966", country: "Saudi Arabia", flag: saudiFlag, example: "512345678", maxDigits: 9, pattern: /^5\d{8}$/ },
  { code: "+974", country: "Qatar", flag: qatarFlag, example: "33123456", maxDigits: 8, pattern: /^[3567]\d{7}$/ },
  { code: "+965", country: "Kuwait", flag: kuwaitFlag, example: "50012345", maxDigits: 8, pattern: /^[4569]\d{7}$/ },
  { code: "+962", country: "Jordan", flag: jordanFlag, example: "791234567", maxDigits: 9, pattern: /^7[789]\d{7}$/ },
  { code: "+20", country: "Egypt", flag: egyptFlag, example: "1001234567", maxDigits: 10, pattern: /^1[0125]\d{8}$/ },
  { code: "+90", country: "Turkey", flag: turkeyFlag, example: "5321234567", maxDigits: 10, pattern: /^5\d{9}$/ },
  { code: "+33", country: "France", flag: franceFlag, example: "612345678", maxDigits: 9, pattern: /^[67]\d{8}$/ },
  { code: "+49", country: "Germany", flag: germanyFlag, example: "15123456789", maxDigits: 11, pattern: /^1[5-7]\d{8,9}$/ },
  { code: "+44", country: "UK", flag: ukFlag, example: "7400123456", maxDigits: 10, pattern: /^7\d{9}$/ },
  { code: "+1", country: "USA / Canada", flag: usaFlag, example: "2015550123", maxDigits: 10, pattern: /^[2-9]\d{2}[2-9]\d{6}$/ },
];
