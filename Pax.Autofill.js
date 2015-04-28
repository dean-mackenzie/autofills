var passengerEmailAddress = 'USE_YOUR_EMAIL@ADDRESS.COM';

// these $('#' + key) will be filled out with the value in the key/value pair
var formValues = {
  _adultTitle: 'Mr',
  _childInfantTitle: 'Miss',
  _firstName: 'Test',
  _surname: 'Test',
  _gender: 'Male',
  _dateOfBirth_day: '2',
  _dateOfBirth_month: '3',
  _dateOfBirth_year: '1977',
  _passport_passportNumber: '123456789',
  _passport_expiry_day: '1',
  _passport_expiry_month: '1',
  _passport_expiry_year: new Date().getFullYear() + 2,
  selectContactPerson: '0',
  passengerForm_contactDetails_address_addressLine1: '100 Test Street',
  passengerForm_contactDetails_address_suburb: 'Brisbane',
  passengerForm_contactDetails_address_postcode: '4000',
  passengerForm_contactDetails_address_country: 'AU',
  passengerForm_contactDetails_address_stateAustraliaSelect: 'QLD',
  passengerForm_contactDetails_phones_0_number: '040000000',
  passengerForm_contactDetails_emailAddress_first: passengerEmailAddress,
  passengerForm_contactDetails_emailAddress_second: passengerEmailAddress
};

// these IDs will be clicked
var clickMe = [
  'passengerForm_namesChecked'
];

// Sub in the defult values for all fields
$.each(formValues, function(fieldSelector, inputValue) {
  $('select[id*="' + fieldSelector + '"],input[id*="' + fieldSelector + '"]').val(inputValue);
});

// Give every passenger a unique name to avoid dupe passenger error
var letters = 'abcdefghijkl';
$.each($('input[id*="_firstName"]'), function(index, element) {
  $(element).val('Test' + letters[index]);
});

// Create dates which represent the DoB for child and infant passegers
var childDob = new Date(new Date().setYear(new Date().getFullYear() - 10)),
    infantDob = new Date(new Date().setYear(new Date().getFullYear() - 1));

// Adjust DoB inputs for Child passangers
var $childPassengerDetails = $('.passenger-identity input[value="CHILD"]').closest('.passenger-details');
$.each($childPassengerDetails, function(index, element) {
  $(element).find('select[id*="_dateOfBirth_day"]').val(childDob.getDate());
  $(element).find('select[id*="_dateOfBirth_month"]').val(childDob.getMonth());
  $(element).find('select[id*="_dateOfBirth_year"]').val(childDob.getFullYear());
});

// Adjust DoB inputs for Infant passangers
var $childPassengerDetails = $('.passenger-identity input[value="INFANT"]').closest('.passenger-details');
$.each($childPassengerDetails, function(index, element) {
  $(element).find('select[id*="_dateOfBirth_day"]').val(infantDob.getDate());
  $(element).find('select[id*="_dateOfBirth_month"]').val(infantDob.getMonth());
  $(element).find('select[id*="_dateOfBirth_year"]').val(infantDob.getFullYear());
});

// Click on the elements that require clicking
$.each(clickMe, function(count, elementToClick) {
  $('#' + elementToClick).click();
});

$('form :input:visible').change();

// Scroll to the Continue button
$('body').animate({
  scrollTop: $("#passengerCont").offset().top
}, 500);
