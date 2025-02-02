export const translations = {
    en: {
        "title": "🏠 Add Object",
        "option-type_of_deal": "Select type of deal",
        "option-rent": "Rent",
        "option-sale": "Sale",
        "option-type_of_object": "Select type of object:",
        "option-apartment": "Apartment",
        "option-house": "House",
        "owner_name": "Owner's name",
        "owner_phone": "Owner's phone",
        "city": "City",
        "street": "Street",
        "building": "Building",
        "apartment": "Apartment number",
        "floor": "Floor",
        "total_floors": "Number of floors",
        "area": "Area (m²)",
        "price": "Price (EURO)",
        "option-tax": "Select tax",
        "option-tax_included": "Included",
        "option-tax_excluded": "Excluded",
        "description": "Description",
        "submitBtn": "Submit"
    },
    ua: {
        "title": "🏠 Додати об'єкт",
        "option-type_of_deal": "Оберіть тип угоди",
        "option-rent": "Оренда",
        "option-sale": "Продаж",
        "option-ype_of_object": "Оберіть тип об'єкта:",
        "option-apartment": "Квартира",
        "option-house": "Будинок",
        "owner_name": "Ім'я власника",
        "owner_phone": "Телефон власника",
        "city": "Місто",
        "street": "Вулиця",
        "building": "Будівля",
        "apartment": "Номер квартири",
        "floor": "Поверх",
        "total_floors": "Кількість поверхів",
        "area": "Площа (м²)",
        "price": "Ціна (EURO)",
        "option-tax": "Оберіть податок",
        "option-tax_included": "Включено",
        "option-tax_excluded": "Виключено",
        "description": "Опис",
        "submitBtn": "Надіслати"
    },
    ru: {
        "title": "🏠 Добавить объект",
        "option-type_of_deal": "Выберите тип cделки",
        "option-rent": "Аренда",
        "option-sale": "Продажа",
        "option-type_of_object": "Выберите тип объекта",
        "option-apartment": "Квартира",
        "option-house": "Дом",
        "owner_name": "Имя владельца",
        "owner_phone": "Телефон владельца",
        "city": "Город",
        "street": "Улица",
        "building": "Здание",
        "apartment": "Номер квартиры",
        "floor": "Этаж",
        "total_floors": "Количество этажей",
        "area": "Площадь (м²)",
        "price": "Цена (EURO)",
        "option-tax": "Выберите налог",
        "option-tax_included": "Включено",
        "option-tax_excluded": "Исключено",
        "description": "Описание",
        "submitBtn": "Отправить"
    }
};


export const setLanguage = (lang) => {
    for (const key in translations[lang]) {

        const element = document.getElementById(key)
        if (element) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translations[lang][key]
            } else {
                element.textContent = translations[lang][key]
            }
        }
    }
    document.getElementById("language_selector").value = lang
}