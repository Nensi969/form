const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/intlTelInput.min.js';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js';

// Set a callback function to execute when jQuery is loaded
script.onload = function () {
    // Wait for the document to be ready
    $(document).ready(function () {
        // Your jQuery code goes here



        var today = new Date();

        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var dateTime = date + ' ' + time;

        jQuery.getJSON('https://ipapi.co/json/', function (data) {
            var a = JSON.parse(JSON.stringify(data, null, 2));

            var country_name = a.country_name;
            var country_code = a.country_code;
            var region = a.region;
            var city = a.city;
            var latitude = a.latitude;
            var longitude = a.longitude;
            var timezone = a.timezone;
            var ip = a.ip;

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'countryname',
                name: 'countryname',
                value: country_name
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#countryname').attr('data-name', 'Country');

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'countrycode',
                name: 'countrycode',
                value: country_code
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#countrycode').attr('data-name', 'Country Code');


            jQuery('<input>').attr({
                type: 'hidden',
                id: 'region',
                name: 'region',
                value: region
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#region').attr('data-name', 'State');

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'city',
                name: 'city',
                value: city
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#city').attr('data-name', 'City');

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'latitude',
                name: 'latitude',
                value: latitude
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#latitude').attr('data-name', 'Latitude');


            jQuery('<input>').attr({
                type: 'hidden',
                id: 'longitude',
                name: 'longitude',
                value: longitude
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#longitude').attr('data-name', 'Longitude');

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'timezone',
                name: 'timezone',
                value: timezone
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#timezone').attr('data-name', 'Timezone');

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'ip',
                name: 'ip',
                value: ip
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#ip').attr('data-name', 'IP');

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'time',
                name: 'time',
                value: dateTime
            }).appendTo('#wf-form-SD---New-Inquiry---Footer-Form');

            jQuery('#time').attr('data-name', 'Time');

        });

        var input = document.querySelector("#phone-no"),
            //	dialCode = document.querySelector(".dialCode"),
            errorMsg = document.querySelector("#error-msg"),
            validMsg = document.querySelector("#valid-msg");

        var iti = intlTelInput(input, {
            initialCountry: "in",
            separateDialCode: true,
            hiddenInput: "Phone Number",
            placeholderNumberType: 'FIXED_LINE',
        });

        var updateInputValue = function (event) {

        };
        input.addEventListener('input', updateInputValue, false);
        input.addEventListener('countrychange', updateInputValue, false);

        jQuery('#dialCode').remove();

        input.addEventListener('countrychange', function (e) {
            var countryname = iti.getSelectedCountryData().name;
            jQuery('#countryname').val(countryname);

        });
        var errorMap = ["Invalid number", "Invalid country code", "Invalid number", "Invalid number", "Invalid number"];

        var reset = function () {
            input.classList.remove("error");
            errorMsg.innerHTML = "";
            errorMsg.classList.add("hide");
            validMsg.classList.add("hide");
        };

        input.addEventListener('blur', function () {
            reset();
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    validMsg.classList.remove("hide");
                } else {
                    input.classList.add("error");
                    var errorCode = iti.getValidationError();
                    errorMsg.innerHTML = errorMap[errorCode];
                    errorMsg.classList.remove("hide");
                }
            }
        });

        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);

        /*request form add country code*/
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        jQuery.getJSON('https://ipapi.co/json/', function (data) {
            var a = JSON.parse(JSON.stringify(data, null, 2));
            var country_name = a.country_name;
            var country_code = a.country_code;
            var region = a.region;
            var city = a.city;
            var latitude = a.latitude;
            var longitude = a.longitude;
            var timezone = a.timezone;
            var ip = a.ip;
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'countryname',
                name: 'countryname',
                value: country_name
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#countryname').attr('data-name', 'Country');

            jQuery('<input>').attr({
                type: 'hidden',
                id: 'countrycode',
                name: 'countrycode',
                value: country_code
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#countrycode').attr('data-name', 'Country Code');
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'region',
                name: 'region',
                value: region
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#region').attr('data-name', 'State');
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'city',
                name: 'city',
                value: city
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#city').attr('data-name', 'City');
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'latitude',
                name: 'latitude',
                value: latitude
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#latitude').attr('data-name', 'Latitude');
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'longitude',
                name: 'longitude',
                value: longitude
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#longitude').attr('data-name', 'Longitude');
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'timezone',
                name: 'timezone',
                value: timezone
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#timezone').attr('data-name', 'Timezone');
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'ip',
                name: 'ip',
                value: ip
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#ip').attr('data-name', 'IP');
            jQuery('<input>').attr({
                type: 'hidden',
                id: 'time',
                name: 'time',
                value: dateTime
            }).appendTo('#wf-form-SD---New-Inquiry---Request-Form');
            jQuery('#time').attr('data-name', 'Time');
        });
        var input = document.querySelector("#phones"),
            errorMsg = document.querySelector("#error-msg"),
            validMsg = document.querySelector("#valid-msg");
        var iti = intlTelInput(input, {
            initialCountry: "in",
            separateDialCode: true,
            hiddenInput: "Phone Number",
            placeholderNumberType: 'FIXED_LINE',
        });
        var updateInputValue = function (event) {
        };
        input.addEventListener('input', updateInputValue, false);
        input.addEventListener('countrychange', updateInputValue, false);
        jQuery('#dialCode1').remove();
        input.addEventListener('countrychange', function (e) {
            var countryname = iti.getSelectedCountryData().name;
            jQuery('#countryname').val(countryname);
        });
        var errorMap = ["Invalid number", "Invalid country code", "Invalid number", "Invalid number", "Invalid number"];
        var reset = function () {
            input.classList.remove("error");
            errorMsg.innerHTML = "";
            errorMsg.classList.add("hide");
            validMsg.classList.add("hide");
        };
        input.addEventListener('blur', function () {
            reset();
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    validMsg.classList.remove("hide");
                } else {
                    input.classList.add("error");
                    var errorCode = iti.getValidationError();
                    errorMsg.innerHTML = errorMap[errorCode];
                    errorMsg.classList.remove("hide");
                }
            }
        });
        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);

    });
};

// Set an error callback in case jQuery fails to load
script.onerror = function (error) {
    console.error('Error loading jQuery:', error);
};

// Append the script element to the document
document.head.appendChild(script);