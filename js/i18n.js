//------------------------------------------------------------------
// LANAGUAGE DEPENDENT TEXTS
//------------------------------------------------------------------
en = {
    r2b: 'Rent to Buy',
    otherLang: 'Français',
    otherLangISO: 'Fr',
    howItWorks: 'How it Works',
    whatCanIafford: 'What price can I afford?',
    qualifyDesc: 'See what propertie price you can affored with few questions',
    doQuest: 'Do the questionnaire',
    findYourHome: 'Find your property',
    find: 'Find',
    findDesc: 'Now you know what you can afford, lets find that property',
    pageTitleR2B: 'R2B - Rent to Buy',
    login: "Simulator",
    missingCashDow: "You do not have the full cashdown to buy your property?",
    slide2: "Rent to Buy with R2B and live right now in your future property!",
    slide3: "You are saving a side the necessary cashdown directly from your montly rental payment",
    weBuyYourHouse: "We buy your house",
    weBuyYourHouseDesc: "With an R2B contract we are buying your property with the guarantie that you will own it once you will have the cashdown to get a mortgage",
    liveInYourHouse: "You live your house",
    liveInYourHouseDesc: "With the R2B - Rent and Buy contract, you rent and live in your future property. One part of your rent is saved as a future cashdown to enable you to buy your property at the end of the term",
    faq: "FAQ",
    youBuyYourHome: "You buy your home",
    youBuyYourHomeDesc: "At the end of your lease, you will have saved the needed cashdown and then be to buy your property and onwer of it 100%",
    priceestimator: "Simulator"
};

fr = {
    r2b: 'Louer pour Acheter',
    otherLang: 'English',
    otherLangISO: 'En',
    howItWorks: 'Fonctionnement',
    whatCanIafford: 'Quel prix puis-je me permettre?',
    qualifyDesc: 'Découvrez le prix de la propriété vous pouvez acheter en répondant à quelques questions',
    doQuest: 'Simulateur',
    findYourHome: 'Trouvez votre propriété',
    find: 'Trouvez',
    findDesc: 'Maintenant que vous savez le prix que vous pouvez payer, trouvez cette propriété',
    pageTitleR2B: 'R2B - Louer pour Acheter',
    login: "Formulaire de qualification",
    missingCashDow: "Vous n'avez pas la mise de fond nécessaire pour acheter votre propriété?",
    slide2: "Louer pour Acheter avec R2B et habitez maintenant votre future propriété!",
    slide3: "Vous accumulerez ainsi votre mise de fond avec votre loyer",
    weBuyYourHouse: "Nous achetons la propriété",
    weBuyYourHouseDesc: "Avec le contrat R2B location-achat nous achetons la propriété avec la garantie quelle vous appartiendra lorsque vous aurez accumulé la mise de fond nécessaire pour obtenir un financement hypothécaire",
    liveInYourHouse: "Vous habitez votre propriété",
    liveInYourHouseDesc: "Avec le contrat R2B location-achat, vous louez et habitez votre future propriété. Une partie de votre loyer est mis de côte pour accumuler la mise de fond pour nécessaire à l'achat de la propriété à la fin du terme",
    faq: "FAQ",
    youBuyYourHome: "Vous achetez votre propriété",
    youBuyYourHomeDesc: "A la fin du term de location, vous aurez accumulé la mise de fond nécessaire et pourez acheter la propriété pour en devenir propriétaire à 100%",
    priceestimator: "Simulateur"

};

//------------------------------------------------------------------
// SET LANGAGUE GLOBALLY
//------------------------------------------------------------------
var gtext = en;
var lang = navigator.language || navigator.userLanguage;
var myLang = localStorage.getItem('lang');
if (myLang) {
    lang = myLang;
}
if (lang.substring(0, 2) === 'en') {
    gtext = en;
    $('#lang').attr("lang", 'en');
}
else {
    gtext = fr;
    $('#lang').attr("lang", 'fr');
}

//------------------------------------------------------------------
// SET TEXT TO A SPECIFIC DOM ELEMENT
// text: optional name of the gText element, if not passed it will 
//       the value from the gText attribute of the DOM element
//------------------------------------------------------------------
set_gText = function (element, text) {
    if (text) {
        $(element).text(text);
    }
    else {
        $(element).text(gtext[element.attributes.gtext.value]);
    }
};

//------------------------------------------------------------------
// SET GLOBAL LANGUAGE
//------------------------------------------------------------------
$(document).ready(function () {

    setAllText();
    //------------------------------------------------------------------
    // CHANGE LANGUAGE
    //------------------------------------------------------------------
    $('#lang').click(function () {
        if (this.lang === 'fr') {
            gtext = en;
            localStorage.setItem('lang', 'en');
            this.lang = 'en';
        }
        else {
            gtext = fr;
            localStorage.setItem('lang', 'fr');
            this.lang = 'fr';
        }
        setAllText();
    });
});
//------------------------------------------------------------------
// SET LANGUAGE BASE TEXT TO ALL DOM ELEMENTS 
//------------------------------------------------------------------
function setAllText() {
    $('[gtext]').each(function () {
        set_gText(this, gtext[this.attributes.gtext.value]);
    });
}
