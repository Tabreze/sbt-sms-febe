const userAction = async () => {
    console.log('reaching')
  const response = await fetch('api/sbtIds');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  let data = myJson;
  console.log(data);
            let templateIds = [];
            let smsIds = [];
            let sbtIds = [];
            sbtIds = data._embedded.sbtIds;
            console.log(sbtIds)
            sbtIds.forEach(sbtId => {
                 templateIds.push(sbtId.templateId);
                 smsIds.push(sbtId.smsId);                 
            });
            templateIds.forEach(templateId =>{
                var option = document.createElement("option");
                option.text = templateId;
                option.value = templateId;
                document.getElementById("TemplateID").appendChild(option);  
            })
			smsIds.forEach(smsId =>{
                var option = document.createElement("option");
                option.text = smsId;
                option.value = smsId;
                document.getElementById("TemplateName").appendChild(option);  
            })
}
function myFunction() {
if($('#TemplateID').val() == '')
{
document.getElementById("TemplateName").value = "Select";
}
else if($('#TemplateID').val() == '1')
{
document.getElementById("TemplateName").value = "PAYMENT_REMINDER";
}
else if($('#TemplateID').val() == '2')
{
document.getElementById("TemplateName").value = "DQ_NOTICE"
}
else if($('#TemplateID').val() == '3')
{
document.getElementById("TemplateName").value = "OPT-IN_CONFIRMATION_MESSAGE"
}
else if($('#TemplateID').val() == '4')
{
document.getElementById("TemplateName").value = "SCHEDULED_PAYMENT_REMINDER"
}
else if($('#TemplateID').val() == '5')
{
document.getElementById("TemplateName").value = "PAYMENT_REMINDERS_WITH_NO_PAYMENT_LINK"
}
else if($('#TemplateID').val() == '6')
{
document.getElementById("TemplateName").value = "DQ_LIMITED_CONTENT_–_OPTION_1"
}
else if($('#TemplateID').val() == '7')
{
document.getElementById("TemplateName").value = "DQ_LIMITED_CONTENT_–_OPTION_2"
}
else if($('#TemplateID').val() == '8')
{
document.getElementById("TemplateName").value = "DPD_111"
}
else if($('#TemplateID').val() == '9')
{
document.getElementById("TemplateName").value = "DPD_13"
}
else if($('#TemplateID').val() == '10')
{
document.getElementById("TemplateName").value = "DPD_21"
}
else if($('#TemplateID').val() == '11')
{
document.getElementById("TemplateName").value = "DPD_28"
}
else if($('#TemplateID').val() == '12')
{
document.getElementById("TemplateName").value = "DPD_36"
}
else if($('#TemplateID').val() == '13')
{
document.getElementById("TemplateName").value = "DPD_43"
}
else if($('#TemplateID').val() == '14')
{
document.getElementById("TemplateName").value = "DPD_50"
}
else if($('#TemplateID').val() == '15')
{
document.getElementById("TemplateName").value = "DPD_57"
}
else if($('#TemplateID').val() == '16')
{
document.getElementById("TemplateName").value = "DPD_64"
}
else if($('#TemplateID').val() == '17')
{
document.getElementById("TemplateName").value = "DPD_7"
}
else if($('#TemplateID').val() == '18')
{
document.getElementById("TemplateName").value = "DPD_71"
}
else if($('#TemplateID').val() == '19')
{
document.getElementById("TemplateName").value = "DPD_85"
}
else if($('#TemplateID').val() == '20')
{
document.getElementById("TemplateName").value = "DPD_97"
}
else if($('#TemplateID').val() == '21')
{
document.getElementById("TemplateName").value = "COVID-19_MESSAGE_1"
}
else if($('#TemplateID').val() == '22')
{
document.getElementById("TemplateName").value = "DPD 111 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '23')
{
document.getElementById("TemplateName").value = "DPD 13 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '24')
{
document.getElementById("TemplateName").value = "DPD 21 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '25')
{
document.getElementById("TemplateName").value = "DPD 28 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '26')
{
document.getElementById("TemplateName").value = "DPD 36 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '27')
{
document.getElementById("TemplateName").value = "DPD 43 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '28')
{
document.getElementById("TemplateName").value = "DPD 50 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '29')
{
document.getElementById("TemplateName").value = "DPD 57 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '30')
{
document.getElementById("TemplateName").value = "DPD 64 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '31')
{
document.getElementById("TemplateName").value = "DPD 71 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '32')
{
document.getElementById("TemplateName").value = "DPD 85 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '33')
{
document.getElementById("TemplateName").value = "DPD 97 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '34')
{
document.getElementById("TemplateName").value = "DQ - ACH Returned"
}
else if($('#TemplateID').val() == '35')
{
document.getElementById("TemplateName").value = "DQ - ACH Returned (Mini-Miranda)"
}
else if($('#TemplateID').val() == '36')
{
document.getElementById("TemplateName").value = "DQ - No ACH"
}
else if($('#TemplateID').val() == '37')
{
document.getElementById("TemplateName").value = "DQ - No ACH (Mini-Miranda)"
}
else if($('#TemplateID').val() == '38')
{
document.getElementById("TemplateName").value = "SAP Graduation - Opt in 1"
}
else if($('#TemplateID').val() == '39')
{
document.getElementById("TemplateName").value = "SAP Graduation - Opt in 2"
}
else if($('#TemplateID').val() == '40')
{
document.getElementById("TemplateName").value = "SAP Graduation - Opt Out 1"
}
else if($('#TemplateID').val() == '41')
{
document.getElementById("TemplateName").value = "SAP Graduation - Opt Out 2"
}
else if($('#TemplateID').val() == '42')
{
document.getElementById("TemplateName").value = "SAP Graduation - Stop 1"
}
else if($('#TemplateID').val() == '43')
{
document.getElementById("TemplateName").value = "SAP Graduation - Stop 2"
}
else if($('#TemplateID').val() == '44')
{
document.getElementById("TemplateName").value = "Auto Response - Not in 2-way experiment"
}
else if($('#TemplateID').val() == '45')
{
document.getElementById("TemplateName").value = "DPD 13 - 2 way"
}
else if($('#TemplateID').val() == '46')
{
document.getElementById("TemplateName").value = "DPD 13 - 2 way (mini-miranda)"
}
else if($('#TemplateID').val() == '47')
{
document.getElementById("TemplateName").value = "DPD 21 - 2 way"
}
else if($('#TemplateID').val() == '48')
{
document.getElementById("TemplateName").value = "DPD 21 - 2 way (mini-miranda)"
}
else if($('#TemplateID').val() == '49')
{
document.getElementById("TemplateName").value = "DPD 28 - 2 way"
}
else if($('#TemplateID').val() == '50')
{
document.getElementById("TemplateName").value = "DPD 28 - 2 way (mini-miranda)"
}
else if($('#TemplateID').val() == '51')
{
document.getElementById("TemplateName").value = "Payment Reminders With Payment Link"
}
else if($('#TemplateID').val() == '52')
{
document.getElementById("TemplateName").value = "Apologies for Multiple Texts"
}
else if($('#TemplateID').val() == '53')
{
document.getElementById("TemplateName").value = "DPD 7 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '54')
{
document.getElementById("TemplateName").value = "DPD 13 - With PNM Debit Payment Link"
}
else if($('#TemplateID').val() == '55')
{
document.getElementById("TemplateName").value = "DPD_13_-_WITH_PNM_DEBIT_PAYMENT_LINK_(MINI-MIRANDA)"
}
else if($('#TemplateID').val() == '56')
{
document.getElementById("TemplateName").value = "PAYMENT_REMINDERS_WITH_PNM_DEBIT_PAYMENT_LINK"
}

}