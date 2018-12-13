import Config from "../Config";
import content from "./Content";

export type Language = 'hu' | 'en';
export type Univ = Partial<{ [K in Language]: string }>;

let language: Language = Config.defaultLanguage as Language;

export const Dictionary = {
    get: (key: string, defaultVal?: string | null) => {
        let dictionaryElement = content[key];
        if (!dictionaryElement) {
            if (defaultVal) {
                return defaultVal;
            }
            return 'Couldn\'t find dictionary element with key:' + key;
        }
        return dictionaryElement[language];
    },

    getWithLang(key: string, lang: Language) {
        let dictionaryElement = content[key];
        if (!dictionaryElement) {
            return 'Couldn\'t find dictionary element with key:' + key;
        }
        return dictionaryElement[lang];
    },

    getUniv(key: string): Univ {
        return content[key];
    },

    getUnivVal(univ: Univ, defaultValue?: string): string | null | undefined {
        if (!univ) {
            return defaultValue;
        }
        return univ[language];
    },

    setLang: (lang: Language) => {
        language = lang;
    },
    getLang: () => language
};