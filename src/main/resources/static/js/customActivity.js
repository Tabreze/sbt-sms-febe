define([
    'postmonger'
], function(
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var payload = {};
    //var lastStepEnabled = false;
    var steps = [ // initialize to the same value as what's set in config.json for consistency
    {"key": "step1", "label": "MBO Gayeway Template and SMS ID Selection	"}
    ];
    var currentStep = steps[0].key;
	var authToken = {};
    $(window).ready(onRender);

    connection.on('initActivity', initialize);
    connection.on('requestedTokens', onGetTokens);
    connection.on('requestedEndpoints', onGetEndpoints);
    connection.on('clickedNext', save);
    //connection.on('clickedBack', onClickedBack);
    //connection.on('gotoStep', onGotoStep);

    function onRender() {
        // JB will respond the first time 'ready' is called with 'initActivity'
        connection.trigger('ready');
        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');
    }

  function initialize(data) {
        console.log(data);
        if (data) {
            payload = data;
        }    

        var hasInArguments = Boolean(
            payload['arguments'] &&
            payload['arguments'].execute &&
            payload['arguments'].execute.inArguments &&
            payload['arguments'].execute.inArguments.length > 0
         );

        var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

         console.log('Has In arguments: '+JSON.stringify(inArguments));

         $.each(inArguments, function (index, inArgument) {
            $.each(inArgument, function (key, val) {

                if (key === 'SMSid_Value') {
                    $('#SMSid').val(val);
                }

                if (key === 'TemplateID_Value') {
                    $('#TemplateID').val(val);
                }

               })
        });

        connection.trigger('updateButton', {
            button: 'next',
            text: 'done',
            visible: true
        });

    }

    function onGetTokens (tokens) {
        // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
        console.log("Tokens function: "+JSON.stringify(tokens));
        authTokens = tokens;
    }

    function onGetEndpoints (endpoints) {
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        console.log("Get End Points function: "+JSON.stringify(endpoints));
    }

    function save() {
		//alert($('#SMSid').val());
		console.log("Calling save function: "+JSON.stringify(save));
        var SMSidValue = $('#SMSid').val();
        var TemplateIDValue = $('#TemplateID').val();
        //var messagingService = $('#messagingService').val();
       // var body = $('#messageBody').val();

        payload['arguments'].execute.inArguments = {
            "SMSid_Value": SMSidValue,
            "TemplateID_Value": TemplateIDValue,
            //"messagingService": messagingService,
            //"body": body,
            "to": "{Contact.Attribute.SBT.Contact}}", //<----This should map to your data extension name and phone number column
			//console.log("Contact number from DE: ", "{{Contact.Attribute.SBT.Contact}}");
        };
		console.log("Contact number from DE: ", "{{Contact.Attribute.SBT.Contact}}");
		//console.log("Contact number from DE: "+JSON.stringify(Contact.Attribute.SBT.Contact));
		
        payload['metaData'].isConfigured = true;

        console.log("Payload on SAVE function: "+JSON.stringify(payload));
        connection.trigger('updateActivity', payload);

    }                    

});