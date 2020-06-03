//------------------------------------------------------------------
// DOCUMENT READY
//------------------------------------------------------------------
$(document).ready(function () {
    //------------------------------------------------------------------
    // GLOBAL FINANCIAL PARAMETERS
    //------------------------------------------------------------------ 
    var payment = 0;
    var interest = 0.03,     // Annual interest
        years = 25,           // Lifetime of loan (in years)
        present = 10000,     // Present value of loan
        future = 20000,      // Future value of loan
        beginning = 1;       // Calculated at start of each period

    //------------------------------------------------------------------
    // TOOLTIP START HERE
    //------------------------------------------------------------------ 
    $('.term').text($('#inputTerm').val());


    $("#infoLegend").click(function () {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            $("#mensualites").tooltip({ title: "Ce que vous payez à chaque mois", placement: "left", trigger: "manual" });
            $("#loyer").tooltip({ title: "Montant alloué au loyer", placement: "left", trigger: "manual" });
            $("#credit").tooltip({ title: "Montant alloué à votre future mise de fond", placement: "left", trigger: "manual" });
            $("#depot").tooltip({ title: "Actif approximatif que vous devez posséder pour vous qualifier", placement: "right", trigger: "manual" });
            $("#inputTerm").tooltip({ title: "Le nombre de mois de location pour amasser votre mise de fond", placement: "right", trigger: "manual" });
            $("#misedefond").tooltip({ title: "Mise de fond mimimun (5%) exigée par les banques pour obtenir une hypothèque", placement: "left", trigger: "manual" });
            $("#rangeBarLabel").tooltip({ title: "Le prix d'achat approximatif de votre propriété", placement: "left", trigger: "manual" });
            $("#annualRevenue").tooltip({ title: "Le montat total de tous vos revenus avant impôt (brut)", placement: "left", trigger: "manual" });
            $("#annualExpense").tooltip({ title: "Le montat total des paiments minimums de vos dettes", placement: "left", trigger: "manual" });
            $("#pouvoirAchat").tooltip({ title: "Le prix maximum approximatif que vous pouvez vous permettre d'acheter", placement: "bottom", trigger: "manual" });

            $(".tooltips").tooltip('toggle');
            $('.tooltip-inner').css('padding', '5px');
            $('.tooltip-inner').css('font-size', '0.5rem');
            $('.tooltip-inner').css('max-width', '102px');

        }
        else if (/iPad/i.test(navigator.userAgent)) {
            $("#mensualites").tooltip({ title: "Ce que vous payez à chaque mois", placement: "bottom", trigger: "manual" });
            $("#loyer").tooltip({ title: "Montant alloué au loyer", placement: "bottom", trigger: "manual" });
            $("#credit").tooltip({ title: "Montant alloué à votre future mise de fond", placement: "bottom", trigger: "manual" });
            $("#depot-addon").tooltip({ title: "Actif approximatif que vous devez posséder pour vous qualifier", placement: "top", trigger: "manual" });
            $("#inputTerm").tooltip({ title: "Le nombre de mois de location pour amasser votre mise de fond", placement: "top", trigger: "manual" });
            $("#misedefond").tooltip({ title: "Mise de fond mimimun (5%) exigée par les banques pour obtenir une hypothèque", placement: "bottom", trigger: "manual" });
            $("#rangeBarLabel").tooltip({ title: "Le prix d'achat approximatif de votre propriété", placement: "bottom", trigger: "manual" });
            $("#annualRevenue").tooltip({ title: "Le montat total de tous vos revenus avant impôt (brut)", placement: "bottom", trigger: "manual" });
            $("#annualExpense").tooltip({ title: "Le montat total des paiments minimums de vos dettes", placement: "bottom", trigger: "manual" });
            $("#pouvoirAchat").tooltip({ title: "Le prix maximum approximatif que vous pouvez vous permettre d'acheter", placement: "bottom", trigger: "manual" });
            $(".tooltips").tooltip('toggle');
            $('.tooltip-inner').css('padding', '5px');
            $('.tooltip-inner').css('font-size', '0.5rem');
        }
        else {
            $("#mensualites").tooltip({ title: "Ce que vous payez à chaque mois", placement: "bottom", trigger: "manual" });
            $("#loyer").tooltip({ title: "Montant alloué au loyer", placement: "bottom", trigger: "manual" });
            $("#credit").tooltip({ title: "Montant alloué à votre future mise de fond", placement: "bottom", trigger: "manual" });
            $("#depot-addon").tooltip({ title: "Actif approximatif que vous devez posséder pour vous qualifier", placement: "right", trigger: "manual" });
            $("#inputTerm").tooltip({ title: "Le nombre de mois de location pour amasser votre mise de fond", placement: "left", trigger: "manual" });
            $("#misedefond").tooltip({ title: "Mise de fond mimimun (5%) exigée par les banques pour obtenir une hypothèque", placement: "bottom", trigger: "manual" });
            $("#rangeBarLabel").tooltip({ title: "Le prix d'achat approximatif de votre propriété", placement: "bottom", trigger: "manual" });
            $("#annualRevenue").tooltip({ title: "Le montat total de tous vos revenus avant impôt (brut)", placement: "right", trigger: "manual" });
            $("#annualExpense").tooltip({ title: "Le montat total des paiments minimums de vos dettes", placement: "right", trigger: "manual" });
            $("#pouvoirAchat").tooltip({ title: "Le prix maximum approximatif que vous pouvez vous permettre d'acheter", placement: "right", trigger: "manual" });

            $(".tooltips").tooltip('toggle');

        }
    });

    //------------------------------------------------------------------
    // MAKE THE BUYING POWER SLIDER GREEN 
    //------------------------------------------------------------------
    $('input[type="range"]').on("input", function () {
        var val = (parseInt($(this).val()) - parseInt($(this).attr('min'))) / (parseInt($(this).attr('max')) - parseInt($(this).attr('min')));
        if ((parseInt($(this).attr('max')) - parseInt($(this).attr('min')) === 0)) {
            val = 0;
        }
        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, '
            + 'color-stop(' + val + ', #84b265), '
            + 'color-stop(' + val + ', #C5C5C5)'
            + ')'
        );
    });

    //------------------------------------------------------------------
    // INITIALISE SOME VALUE
    //------------------------------------------------------------------ 
    $('.term').text($('#inputTerm').val());

    $('.carousel').carousel({
        interval: 6000
    });
    $("#faqExpand").click(function () {
        $('.collapse').addClass('show');
        $('#navbarNavAltMarkup').removeClass('show');
    });
    $("#faqCollapse").click(function () {
        $('.collapse').removeClass('show');
    });
    $(".nav-link").click(function () {
        $('.collapse').removeClass('show');
    });

    $("#rangeBar").on("input", function (slideEvt) {
        updateValues(this.value);

    });

    $("#buyBackYearsSelect").change(function () {
        var val = parseInt($("#rangeBarLabel").text(), 10);
        updateValues(val);
    });
    $("#refundableDeposit").change(function () {
        var val = parseInt($("#rangeBarLabel").text(), 10);
        updateValues(val);
    });


    function updateValues(newValue) {

        var ddl = document.getElementById("buyBackYearsSelect");
        var buyBackYears = +ddl.options[ddl.selectedIndex].innerText;

        $("#rangeBarLabel").text(newValue);
        $("#monthlyPaymentsLabel").text((parseInt(newValue, 10) / 160).toFixed(0));
        $("#youEarnValue").text(((parseInt(newValue, 10) + 25) / 480).toFixed(0));
        $("#totalByEndLabel").text((((parseInt(newValue, 10) + 25) / 480).toFixed(0)) * 12 * buyBackYears);

    }

    var monthlyPayments = $("#monthlyPaymentsLabel").text();
    var refundableDeposit = $("#refundableDepositLabel").text();

    //------------------------------------------------------------------
    // CHANGE ESIMATOR CONTENT FROM THE STEP BUTTON CLICK 
    //------------------------------------------------------------------
    $(".toggleEstimator").click(function () {
        $(".toggleEstimator").removeClass('btn-success').addClass('btn-outline-success');
        // $(this).addClass('btn-success');
        switch ($(this).attr('id')) {
            case 'estimatorStep1':
                $('#estimatorStep1').removeClass('btn-outline-success').addClass('btn-success');
                $('.estimatorStep').hide();
                $('#estimatorAssetStep1').show();
                break;
            case 'estimatorStep2':
                $('#estimatorStep2').removeClass('btn-outline-success').addClass('btn-success');
                $('.estimatorStep').hide();
                $('#estimatorAssetStep2').show();
                break;
            case 'estimatorStep3':
                $('#estimatorStep3').removeClass('btn-outline-success').addClass('btn-success');
                $('.estimatorStep').hide();
                $('#estimatorAssetStep3').show();
                break;
            default:
            // code block
        }

    });
    //------------------------------------------------------------------
    // JS CURRENCY FORMATTER
    //------------------------------------------------------------------
    var formatter = new Intl.NumberFormat('fr-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 0
    });

    //------------------------------------------------------------------
    // ANIMATE NUMBER COUNT
    //------------------------------------------------------------------
    function animateNumber(element) {
        $(element).prop('Counter', 0).animate({
            Counter: $(element).text()
        }, {
            duration: 300,
            easing: 'swing',
            step: function (now) {
                $(this).text(formatter.format(Math.ceil(now)));
            }
        });
    }
    //------------------------------------------------------------------
    // ANIMATE ALL NUMBER 
    //------------------------------------------------------------------
    function animateAllNumber(exclude) {
        $('.counter-count').each(function () {
            if (!$(this).hasClass('exclude')) {
                animateNumber(this);
            }
        });
    }
    //------------------------------------------------------------------
    // FORMAT ALL NUMBER 
    //------------------------------------------------------------------
    function formatAllNumber() {
        $('.counter-count').each(function () {
            if ($(this).is('input')) {
                $(this).val(formatter.format(Math.ceil($(this).val())));
            }
            else {
                $(this).text(formatter.format(Math.ceil($(this).text())));
            }
        });
    }

    //------------------------------------------------------------------
    // COLLAPS EXPEND ESTIMATOR 
    //------------------------------------------------------------------
    $('#chevronEstimator').click(function () {
        if ($(".fa-chevron-up").length > 0) {
            $(".fa-chevron-up").addClass('fa-chevron-down').removeClass('fa-chevron-up');
        }
        else {
            $(".fa-chevron-down").addClass('fa-chevron-up').removeClass('fa-chevron-down');

        }
    });

    //------------------------------------------------------------------
    // FINANCIAL FUNCTIONS
    //------------------------------------------------------------------
    //------------------------------------------------------------------
    // Monthly paiement
    //------------------------------------------------------------------
    function pmt(ir, np, pv, fv, type) {
        /*
         * ir   - interest rate per month
         * np   - number of periods (months)
         * pv   - present value
         * fv   - future value
         * type - when the payments are due:
         *        0: end of the period, e.g. end of month (default)
         *        1: beginning of period
         */
        var pmt, pvif;

        fv || (fv = 0);
        type || (type = 0);

        if (ir === 0)
            return -(pv + fv) / np;

        pvif = Math.pow(1 + ir, np);
        pmt = - ir * pv * (pvif + fv) / (pvif - 1);

        if (type === 1)
            pmt /= (1 + ir);

        return pmt;
    }

    //------------------------------------------------------------------
    // Buying power
    //------------------------------------------------------------------
    function findBuyingPower(salary) {
        present = payment = 0;

        var salary40 = (salary * 0.40) / 12;
        var lastPresent = present;

        while (salary40 > payment) {
            lastPresent = present;
            payment = -pmt(interest / 12,   // Annual interest into months
                years * 12,      // Total months for life of loan
                present);
            //,
            //future,
            //beginning);
            if (salary40 > payment) {
                present = present + 10000;
                future = present * 2;
            }
        }
        return ([present, payment]);
    }

    //------------------------------------------------------------------
    // Upadate all attribute of the buying power estimnator
    //------------------------------------------------------------------
    function updateBuyingPower() {
        // REVENUE
        var totalPassif = parseInt($('#totalPassifText').attr('val').replace(/\D/g, '')) * 12;
        var salaire = parseInt($("#annualSalary").attr('val'));
        var revImmo = parseInt($("#revImmo").attr('val'));
        var autreRevenue = parseInt($("#autreRevenue").attr('val'));
        var totalRev = salaire + revImmo + autreRevenue;
        var buyingpower = findBuyingPower(totalRev - totalPassif);
        var misedefond = buyingpower[0] * 0.05;
        var depot = Math.ceil(misedefond * 0.33);
        var payment = buyingpower[1];
        var term = $('#inputTerm').val();
        var credit = Math.ceil((misedefond - depot) / term);
        misedefond = credit * term + depot;

        $("#rangeBarLabel").text(buyingpower[0]);
        $("#rangeBarMax").attr('max', buyingpower[0]);
        $("#rangeBarMax").val(buyingpower[0]);

        $('.misedefond').text(misedefond);
        $('.loyer').text(payment);
        $('#depot').val(new Intl.NumberFormat('fr-CA').format(parseInt(depot)));
        $('#depotText').text(depot);
        $('.credit').text(credit);
        $('#mensualites').text(payment + credit);
        $('#depot').attr('val', parseInt(depot));
        $('.term').text(term);
        $('#totalRevenueText').text(totalRev);
        $('#totalRevenueText').attr('val', totalRev);
        animateAllNumber();
        animateNumber($("#rangeBarLabel"));
        animateNumber($('#totalRevenueText'));
    }
    function updateBuyingPower2() {
        var totalPassif = parseInt($('#annualExpense').attr('val').replace(/\D/g, '')) * 12;
        var totalRev = parseInt($('#annualRevenue').attr('val').replace(/\D/g, ''));
        var buyingpower = findBuyingPower(totalRev - totalPassif);
        var misedefond = buyingpower[0] * 0.05;
        var depot = Math.ceil(misedefond * 0.33);
        var payment = buyingpower[1];
        var term = $('#inputTerm').val();
        var credit = Math.ceil((misedefond - depot) / term);
        misedefond = credit * term + depot;

        $("#rangeBarLabel").text(buyingpower[0]);
        if (parseFloat(buyingpower[0]) > parseInt($("#rangeBarMax").attr('max'))) {
            $("#rangeBarMax").attr('max', buyingpower[0]);
        }
        $("#rangeBarMax").val(buyingpower[0]);
        $('#pouvoirAchat').text(buyingpower[0]);
        $("#pouvoirAchat").attr('val', buyingpower[0]);

        // if (buyingpower[0] === 0) {
        //     initialiseEstimator(true);
        // }
        // else {
        // animateNumber($("#rangeBarLabel"));
        // }

        $('.misedefond').text(misedefond);
        $('.loyer').text(payment);
        $('#depot').val(new Intl.NumberFormat('fr-CA').format(parseInt(depot)));
        $('#depotText').text(depot);
        $('.credit').text(credit);
        $('#mensualites').text(payment + credit);
        $('#depot').attr('val', parseInt(depot));
        $('.term').text(term);
        $('#pouvoirAchat').text(buyingpower[0]);
        // $('#totalRevenueText').text(totalRev);
        // $('#totalRevenueText').attr('val', totalRev);
        animateNumber($("#rangeBarLabel"));
        animateAllNumber();

        // animateNumber($('#totalRevenueText'));
    }
    //------------------------------------------------------------------
    // BUYING POWER INPUTS CHANGED
    //------------------------------------------------------------------
    $(".buyingpowerinput").change(function () {
        $(this).attr('val', parseInt($(this).val().replace(/\D/g, '')));
        parseInt($(this).val(parseInt($(this).val().replace(/\D/g, ''))));
        updateBuyingPower();
        $(this).val(new Intl.NumberFormat('fr-CA').format(parseInt($(this).val())));
        $('input[type="range"]').trigger("input");
    });

    $('#rangeminus, #rangeplus').click(function () {
        if ($(this).attr('id') === 'rangeminus') {
            $('#rangeBarMax').val($('#rangeBarMax').val() - 1000);
        }
        else if ($(this).attr('id') === 'rangeplus') {
            $('#rangeBarMax').val(parseInt($('#rangeBarMax').val()) + 1000);
        }
        var misedefond = parseInt($('#rangeBarMax').val()) * 0.05;
        var depot = Math.ceil(misedefond * 0.33);
        present = $('#rangeBarMax').val();
        var payment = -pmt(interest / 12,   // Annual interest into months
            years * 12,      // Total months for life of loan
            present);
        var term = $('#inputTerm').val();
        var credit = Math.ceil((misedefond - depot) / term);
        misedefond = credit * term + depot;

        $("#rangeBarLabel").text(new Intl.NumberFormat('fr-CA', {
            style: 'currency',
            currency: 'CAD',
            minimumFractionDigits: 0
        }).format($('#rangeBarMax').val()));
        $("#pouvoirAchat").text('val', $('#pouvoirAchat').val());

        $('.misedefond').text(misedefond);
        $('.loyer').text(payment);
        $('#depot').val(new Intl.NumberFormat('fr-CA').format(depot));
        $('#depotText').text(depot);
        $('.credit').text(credit);
        $('#mensualites').text(payment + credit);
        $('#depot').attr('val', parseInt(depot));
        $('.term').text(term);


        formatAllNumber();
        // animateAllNumber();
    });
    //------------------------------------------------------------------
    // TERM CHANGED
    //------------------------------------------------------------------
    $('#inputTerm, #depot').on('change', function () {

        var misedefond = parseInt($('#rangeBarMax').val()) * 0.05;
        var depot = parseInt($('#depot').val().replace(/\D/g, ''));
        present = $('#rangeBarMax').val();
        var payment = -pmt(interest / 12,   // Annual interest into months
            years * 12,      // Total months for life of loan
            present);
        var term = $('#inputTerm').val();
        var credit = Math.ceil((misedefond - depot) / term);
        misedefond = credit * term + depot;

        $("#rangeBarLabel").text(new Intl.NumberFormat('fr-CA', {
            style: 'currency',
            currency: 'CAD',
            minimumFractionDigits: 0
        }).format($('#rangeBarMax').val()));

        $('.misedefond').text(misedefond);
        $('.loyer').text(payment);
        $('#depot').val(new Intl.NumberFormat('fr-CA').format(depot));
        $('#depotText').text(depot);
        $('.credit').text(credit);
        $('#mensualites').text(payment + credit);
        $('#depot').attr('val', parseInt(depot));
        $('.term').text(term);
        $('#totalRevenueText').text($('#totalRevenueText').attr('val'));
        $('#pouvoirAchat').text($('#pouvoirAchat').attr('val'));

        // formatAllNumber();
        animateAllNumber();
    });
    //------------------------------------------------------------------
    // PRICE CHANGED
    //------------------------------------------------------------------
    $('#rangeBarMax').on("input", function () {
        var misedefond = parseInt($(this).val()) * 0.05;
        var depot = Math.ceil(misedefond * 0.33);
        present = $('#rangeBarMax').val();
        var payment = -pmt(interest / 12,   // Annual interest into months
            years * 12,      // Total months for life of loan
            present);
        var term = $('#inputTerm').val();
        var credit = Math.ceil((misedefond - depot) / term);
        misedefond = credit * term + depot;

        $("#rangeBarLabel").text(new Intl.NumberFormat('fr-CA', {
            style: 'currency',
            currency: 'CAD',
            minimumFractionDigits: 0
        }).format(($(this).val())));
        $('.misedefond').text(misedefond);
        $('.loyer').text(payment);
        $('#depot').val(new Intl.NumberFormat('fr-CA').format(depot));
        $('#depotText').text(depot);
        $('.credit').text(credit);
        $('#mensualites').text(payment + credit);
        $('#depot').attr('val', parseInt(depot));
        $('.term').text(term);
        $('#pouvoirAchat').text($('#pouvoirAchat').attr('val'));

        // $('#totalRevenueText').text($('#totalRevenueText').attr('val'));
        // animateNumber($('#totalRevenueText'));
        formatAllNumber();
        // animateAllNumber();
    });

    //------------------------------------------------------------------
    // ACTIFS CHANGED
    //------------------------------------------------------------------
    $('.actifs').on('change', function () {
        var actifTotal = 0;
        var props = $('.actifProp');
        for (let index = 0; index < props.length; index = index + 2) {
            props[index].value = props[index].value.replace(/\D/g, '');
            if (parseInt(props[index + 1].value.replace(/\D/g, ''))) {
                actifTotal = parseInt(props[index].value.replace(/\D/g, '')) - parseInt(props[index + 1].value.replace(/\D/g, ''));
            }
        }
        var vehicules = $('.actifVehicules');
        for (let index = 0; index < vehicules.length; index = index + 2) {
            vehicules[index].value = vehicules[index].value.replace(/\D/g, '');
            if (parseInt(vehicules[index + 1].value.replace(/\D/g, ''))) {
                actifTotal = actifTotal + parseInt(vehicules[index].value.replace(/\D/g, '')) - parseInt(vehicules[index + 1].value.replace(/\D/g, ''));
            }
        }

        var content = $('.actifContent');
        for (let index = 0; index < content.length; index = index + 2) {
            content[index].value = content[index].value.replace(/\D/g, '');
            if (parseInt(content[index].value)) {
                actifTotal = actifTotal + parseInt(content[index].value.replace(/\D/g, ''));
            }
        }
        var mobiliere = $('.actifMobiliere');
        for (let index = 0; index < mobiliere.length; index = index + 2) {
            mobiliere[index].value = mobiliere[index].value.replace(/\D/g, '');
            if (parseInt(mobiliere[index].value)) {
                actifTotal = actifTotal + parseInt(mobiliere[index].value.replace(/\D/g, ''));
            }
        }
        var autres = $('.actifAutre');
        for (let index = 0; index < autres.length; index = index + 2) {
            autres[index].value = autres[index].value.replace(/\D/g, '');
            if (parseInt(autres[index].value)) {
                actifTotal = actifTotal + parseInt(autres[index].value.replace(/\D/g, ''));
            }
        }
        $('#totalActifText').attr('val', actifTotal);
        $('#totalActifText').text(actifTotal);
        animateNumber($('#totalActifText'));
        // animateAllNumber();

    });
    //------------------------------------------------------------------
    // PASSIFS CHANGED
    //------------------------------------------------------------------
    $('#annualRevenue, #annualExpense').on('change', function () {
        $(this).attr('val', parseInt($(this).val().replace(/\D/g, '')));
        $(this).val(parseInt($(this).val().replace(/\D/g, '')));

        if ($(this).val().replace(/\D/g, '') === '0' || $(this).val().replace(/\D/g, '') === '' || $(this).val().replace(/\D/g, '') === NaN) {
            $(this).attr('val', 0);
            $(this).val(0);

            if (parseInt($('#annualRevenue').attr('val')) === 0 && parseInt($('#annualExpense').attr('val')) === 0) {
                initialiseEstimator();
                return;
            }
        }

        updateBuyingPower2();
        $(this).val(new Intl.NumberFormat('fr-CA').format(parseInt($(this).val())));
        $('input[type="range"]').trigger("input");
    });

    $('.passifs').on('change', function () {
        var passifTotal = 0;

        var immoblier = $('.passifImmobilier');
        for (let index = 0; index < immoblier.length; index = index + 2) {
            immoblier[index].value = immoblier[index].value.replace(/\D/g, '');
            if (parseInt(immoblier[index].value)) {
                passifTotal = passifTotal + parseInt(immoblier[index].value.replace(/\D/g, ''));
            }
        }

        var credits = $('.passifCredit');
        for (let index = 0; index < credits.length; index = index + 2) {
            credits[index].value = credits[index].value.replace(/\D/g, '');
            if (parseInt(credits[index].value)) {
                passifTotal = passifTotal + parseInt(credits[index].value.replace(/\D/g, ''));
            }
        }

        var autres = $('.passifAutre');
        for (let index = 0; index < autres.length; index = index + 2) {
            autres[index].value = autres[index].value.replace(/\D/g, '');
            if (parseInt(autres[index].value)) {
                passifTotal = passifTotal + parseInt(autres[index].value.replace(/\D/g, ''));
            }
        }
        $('#totalPassifText').attr('val', passifTotal);
        $('#totalPassifText').text(passifTotal);
        animateNumber($('#totalPassifText'));
        updateBuyingPower();
    });
    //------------------------------------------------------------------
    // INITIALISE ESTIMATOR 
    //------------------------------------------------------------------ 
    function initialiseEstimator(noFormat, noDepot) {
        $("#rangeBarLabel").text(500000);
        $("#rangeBarMax").attr('max', 1500000);
        $("#rangeBarMax").val(500000);
        $("#depot").attr('val', 10000);
        $("#depot").val(10000);
        // $("#inputTerm").trigger('change');
        $('input[type="range"]').trigger("input");
        $('#pouvoirAchat').text($('#pouvoirAchat').attr('val'));
        if (!noDepot) {
            $('#depot').trigger('change');
        }
        // animateNumber($("#rangeBarLabel"));

        if (!noFormat) {
            formatAllNumber();
        }
    }
    initialiseEstimator();
    //------------------------------------------------------------------
    // REFRESH ESTIMATOR 
    //------------------------------------------------------------------ 
    $('#refresh').click(function () {
        $('#annualRevenue').val(0);
        $('#annualRevenue').attr('val', 0);
        $('#annualExpense').val(0);
        $('#annualExpense').attr('val', 0);
        $('#pouvoirAchat').text(0);
        $('#pouvoirAchat').attr('val', 0);
        initialiseEstimator();
    });
});