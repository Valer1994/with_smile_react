const languages =  {
    am: {
        "hi": "Բարև",
        "Home": "Գլխավոր",
        "About": "Մեր Մասին"
    },
    ru: {
        "hi": "Здравствуй",
        "Home": "Главний",
        "About": "О Нас"
    },
    en: {
        "hi": "Hi",
        "Home": "Home",
        "About": "About"
    }
}

export const selectLanguage = (lang) => languages[lang];
