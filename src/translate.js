const languages =  {
    am: {
        "hi": "Բարև",
        "Home": "Գլխավոր",
        "About": "Մեր Մասին",
        "Plans": "Ծրագրեր",
        "Blog":"Բլոգ",
        "Contact":"Կապ մեզ հետ",
        "JoinUs":"Միացեք մեզ",


    },
    ru: {
        "hi": "Здравствуй",
        "Home": "Главний",
        "About": "О Нас",
        "Plans": "Планы",
        "Blog":"Блог",
        "Contact":"Контакты",
        "JoinUs":"Join us",

    },
    en: {
        "hi": "Hi",
        "Home": "Home",
        "About": "About",
        "Plans": "Plans",
        "Blog":"Blog",
        "Contact":"Contact",
        "JoinUs":"Join us",

    }
}

export const selectLanguage = (lang) => languages[lang];
