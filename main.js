const COUNTRY_NAMES = {
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Dutch Guilders",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudian Dollar",
    BND: "Bruneian Dollar",
    BOB: "Bolivian Boliviano",
    BRL: "Brazilian Real",
    BSD: "Bahamian Dollar",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswanan Pula",
    BZD: "Belizean Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CLF: "Chilean Unit of Account UF",
    CLP: "Chilean Peso",
    CNH: "Chinese Yuan Offshore",
    CNY: "Chinese Yuan",
    COP: "Colombian Peso",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Republic Koruna",
    DJF: "Djiboutian Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    EUR: "Euro",
    FJD: "Fijian Dollar",
    FKP: "Falkland Islands Pound",
    GBP: "British Pound Sterling",
    GEL: "Georgian Lari",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanaese Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Krona",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    KES: "Kenyan Shilling",
    KGS: "Kyrgystani Som",
    KHR: "Cambodian Riel",
    KMF: "Comorian Franc",
    KPW: "North Korean Won",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Caymanian Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Laotian Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Basotho Maloti",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanma Kyat",
    MNT: "Mongolian Tugrik",
    MOP: "Macanese Pataca",
    MRU: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Nuevo Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Arabian Riyal",
    SCR: "Seychellois Rupee",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SHP: "Saint Helena Pound",
    SLL: "Sierra Leonean Leone",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    SYP: "Syrian Pound",
    SZL: "Swazi Emalangeni",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TOP: "Tongan Pa'anga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "Taiwan New Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "United States Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistan Som",
    VND: "Vietnamese Dong",
    VUV: "Ni-Vanuatu Vatu",
    WST: "Samoan Tala",
    XAF: "CFA Franc BEAC",
    XCD: "East Caribbean Dollar",
    XDR: "Special Drawing Rights",
    XOF: "CFA Franc BCEAO",
    XPF: "CFP Franc",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMW: "Zambian Kwacha",
};


const currency = document.getElementById('currency');
const convertedCurrency = document.getElementById('convertedCurrency');
const fromImg = document.getElementById('flag');
const toImg = document.getElementById('flagg');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const resultText = document.getElementById('result');

// 2. ملء القوائم (Select Options) بالعملات

let options = "";
for (let code in COUNTRY_NAMES) {
    let option1 = document.createElement("option");
    options += "<option value='" + code + "'>" + code + "</option>";  

}


currency.innerHTML = options;
convertedCurrency.innerHTML = options;


currency.value = "USD";
convertedCurrency.value = "EGP";

function convertflag(element) {
    let currencyCode = element.value;
    let countryCode = currencyCode.substring(0, 2); // أول حرفين من العملة بيجيبوا كود البلد غالباً
    
    if (element.id === "fromCurrency") {
        fromImg.src = `https://flagsapi.com/${countryCode}/shiny/32.png`;
    } else {
        toImg.src = `https://flagsapi.com/${countryCode}/shiny/32.png`;
    }
}

// ربط تغيير العلم بحدث الـ change
currency.addEventListener("change", (e) => updateFlag(e.target));
convertedCurrency.addEventListener("change", (e) => updateFlag(e.target));

// 4. وظيفة التحويل الحقيقية (الـ Fetch)
convertBtn.addEventListener('click', () => {
    const fromValue = currency.value;
    const toValue = convertedCurrency.value;
    const amountValue = amountInput.value;

    // Check if empty
    if (amountValue === "" || +amountValue <= 0) {
        resultText.innerText = "Please enter a valid amount!";
        return;
    }

    resultText.innerText = "Getting exchange rate...";

    // API Link
    fetch(`https://open.er-api.com/v6/latest/${fromValue}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[toValue];
            const finalResult = (+amountValue * rate).toFixed(2);
            resultText.innerText = `${amountValue} ${fromValue} = ${finalResult} ${toValue}`;
        })
        .catch(err => {
            console.error(err);
            resultText.innerText = "Error";
        });
});