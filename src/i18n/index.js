// ref: https://velog.io/@favorcho/i18next-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%A7%80%EC%9B%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import ko from './ko.json'

import test_md from '../docs/test.md'
import ko_test_md from '../docs/ko_test.md'
import profile_ko from '../docs/profile_ko.md'
import profile_en from '../docs/profile_en.md'
import portfolio_ko from '../docs/portfolio_ko.md'
import portfolio_en from '../docs/portfolio_en.md'
import project_ko from '../docs/project_ko.md'
import project_en from '../docs/project_en.md'

i18n.use(initReactI18next) // Transfer i18n to react-i18next
    .init({
        debug: true, // TODO: reset by comment out
        fallbackLng: 'ko', // Set default language to korean
        resources: {
            en: { translation: en },
            ko: { translation: ko },
        },
        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        react: {
            useSuspense: true,
        },
    })

export default i18n

export const srcObj = {
    profile: {
        en: profile_en,
        ko: profile_ko,
    },
    portfolio: {
        en: portfolio_en,
        ko: portfolio_ko,
    },
    project: {
        en: project_en,
        ko: project_ko,
    },
}
