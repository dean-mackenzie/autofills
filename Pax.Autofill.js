// these $('#' + key) will be filled out with the value in the key/value pair
var formValues = {
  passengerForm_passengers_0_adultTitle: 'Mr',
  passengerForm_passengers_0_firstName: 'Test',
  passengerForm_passengers_0_surname: 'Test',
  selectContactPerson: '0',
  passengerForm_contactDetails_address_addressLine1: '100 Test Street',
  passengerForm_contactDetails_address_suburb: 'Brisbane',
  passengerForm_contactDetails_address_postcode: '4000',
  passengerForm_contactDetails_address_country: 'AU',
  passengerForm_contactDetails_address_stateAustraliaSelect: 'QLD',
  passengerForm_contactDetails_phones_0_number: '040000000',
  passengerForm_contactDetails_emailAddress_first: 'USE_YOUR_EMAIL@ADDRESS.COM',
  passengerForm_contactDetails_emailAddress_second: 'USE_YOUR_EMAIL@ADDRESS.COM',
};

// these IDs will be clicked
var clickMe = [
  'passengerForm_namesChecked'
];

var elementID, inputValue, elementToClick;

$.each(formValues, function(elementID, inputValue) {
  $('#' + elementID).val(inputValue);
});

$.each(clickMe, function(count, elementToClick) {
  $('#' + elementToClick).click();
})
$('form :input:visible').change();
