// these $('#' + key) will be filled out with the value in the key/value pair
var formValues = {
  passengerForm_passengers_0_adultTitle: 'Mr',
  passengerForm_passengers_0_firstName: 'Testa',
  passengerForm_passengers_0_surname: 'Test',
  passengerForm_passengers_0_gender: 'Male',
  passengerForm_passengers_0_dateOfBirth_day: '2',
  passengerForm_passengers_0_dateOfBirth_month: '3',
  passengerForm_passengers_0_dateOfBirth_year: '1977',

  passengerForm_passengers_1_adultTitle: 'Mrs',
  passengerForm_passengers_1_firstName: 'Testb',
  passengerForm_passengers_1_surname: 'Test',
  passengerForm_passengers_1_gender: 'Female',
  passengerForm_passengers_1_dateOfBirth_day: '12',
  passengerForm_passengers_1_dateOfBirth_month: '8',
  passengerForm_passengers_1_dateOfBirth_year: '1980',

  passengerForm_passengers_2_adultTitle: 'Mr',
  passengerForm_passengers_2_firstName: 'Testc',
  passengerForm_passengers_2_surname: 'Test', 
  passengerForm_passengers_2_gender: 'Male',
  passengerForm_passengers_2_dateOfBirth_day: '1',
  passengerForm_passengers_2_dateOfBirth_month: '10',
  passengerForm_passengers_2_dateOfBirth_year: '1990',
  
  passengerForm_passengers_3_adultTitle: 'Mr',
  passengerForm_passengers_3_firstName: 'Testd',
  passengerForm_passengers_3_surname: 'Test',
  passengerForm_passengers_3_gender: 'Male',
  passengerForm_passengers_3_dateOfBirth_day: '2',
  passengerForm_passengers_3_dateOfBirth_month: '1',
  passengerForm_passengers_3_dateOfBirth_year: '1986',

  passengerForm_passengers_4_adultTitle: 'Mr',
  passengerForm_passengers_4_firstName: 'Teste',
  passengerForm_passengers_4_surname: 'Test', 
  passengerForm_passengers_4_gender: 'Female',
  passengerForm_passengers_4_dateOfBirth_day: '17',
  passengerForm_passengers_4_dateOfBirth_month: '12',
  passengerForm_passengers_4_dateOfBirth_year: '1984',

  selectContactPerson: '0',
  passengerForm_contactDetails_address_addressLine1: '100 Test Street',
  passengerForm_contactDetails_address_suburb: 'Brisbane',
  passengerForm_contactDetails_address_postcode: '4000',
  passengerForm_contactDetails_address_country: 'AU',
  passengerForm_contactDetails_address_stateAustraliaSelect: 'QLD',
  passengerForm_contactDetails_phones_0_number: '040000000',
  passengerForm_contactDetails_emailAddress_first: 'USE_YOUR_EMAIL@ADDRESS.COM',
  passengerForm_contactDetails_emailAddress_second: 'USE_YOUR_EMAIL@ADDRESS.COM'
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
});
$('form :input:visible').change();