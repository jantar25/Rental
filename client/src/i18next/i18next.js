import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common_en from '../Translation/en.json'
import common_kin from '../Translation/kin.json'

const resources = {
    en: {
        translation:common_en
    },
    kin: {
        translation:common_kin
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n