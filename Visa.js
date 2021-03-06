// these $('#' + key) will be filled out with the value in the key/value pair
var formValues = {
  creditcardForm_cardCode: 'VISA',
  creditcardForm_cardHolderName: 'Visa Autofill',
  creditcardForm_cardNumber1: '4000',
  creditcardForm_cardNumber2: '0000',
  creditcardForm_cardNumber3: '0000',
  creditcardForm_cardNumber4: '0002',
  creditcardForm_expiryDateMonth: '5',
  creditcardForm_expiryDateYear: '2020',
  creditcardForm_cvv: '111'
};

// these IDs will be clicked
var clickMe = [
  'creditcardForm_agreePrivacy',
  'creditcardForm_agreeFlightCheck',
  'creditcardForm_agreeVisa',
  'creditcardForm_agreeBooking'
];

var elementID, inputValue, elementToClick;

$.each(formValues, function(elementID, inputValue) {
  $('#' + elementID).val(inputValue);
});

$.each(clickMe, function(count, elementToClick) {
  $('#' + elementToClick).click();
});
$('form :input:visible').change();



