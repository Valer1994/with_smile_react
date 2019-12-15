const languages =  {
    am: {
        "hi": "Բարև",
        "Home": "Գլխավոր",
        "About": "Մեր Մասին",
        "Plans": "Ծրագրեր",
        "Blog":"Բլոգ",
        "Contact":"Կապ մեզ հետ",
        "JoinUs":"Միացեք մեզ",
        "our_amazing_features": "Մեր բացառիկ առանձնահատկությունները",
        "travel_for_everyone": "Ճանապարհորդություն բոլորի համար"
    },
    ru: {
        "hi": "Здравствуй",
        "Home": "Главний",
        "About": "О Нас",
        "Plans": "Планы",
        "Blog":"Блог",
        "Contact":"Контакты",
        "JoinUs":"Присоединяться",
        "our_amazing_features": "Наши удивительные особенности",
        "travel_for_everyone": "Путешествия для всех"
    },
    en: {
        "hi": "Hi",
        "Home": "Home",
        "About": "About",
        "Plans": "Plans",
        "Blog":"Blog",
        "Contact":"Contact",
        "JoinUs":"Join us",
        "our_amazing_features": "OUR AMAZING FEATURES",
        "travel_for_everyone": "travel for everyone"
    }
}

export const selectLanguage = (lang) => languages[lang];
