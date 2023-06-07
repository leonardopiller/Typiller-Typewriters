function calculateTotal(selectElement) {
  const quantities = document.querySelectorAll('.quantidade');
  let totalClassicPrice = 0;
  let totalGlamourPrice = 0;

  quantities.forEach((quantityElement) => {
    const selectedQuantity = parseInt(quantityElement.value);
    const productType = quantityElement.parentElement.textContent;

    if (productType.includes('Typiller Classic')) {
      const ClassicPrice = 120;
      totalClassicPrice += selectedQuantity * ClassicPrice;
    }

    if (productType.includes('Typiller Glamour')) {
      const GlamourPrice = 400;
      totalGlamourPrice += selectedQuantity * GlamourPrice;
    }
  });

  const totalPrice = totalClassicPrice + totalGlamourPrice;

  const totalValueElement = document.getElementById('total-value');
  totalValueElement.textContent = `Total: $${totalPrice}`;
}

function downloadOrder() {
  // Check if any required field is empty
  const requiredFields = document.querySelectorAll('[required]');
  const isFormValid = Array.from(requiredFields).every(
    (field) => field.value.trim() !== '',
  );

  // Check phone number length
  const phoneInput = document.getElementById('phone');
  const phoneNumber = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
  const isPhoneValid = phoneNumber.length === 11;

  // Check document number length
  const documentInput = document.getElementById('document');
  const documentNum = documentInput
    ? documentInput.value.replace(/\D/g, '')
    : '';
  const isDocumentValid = documentNum.length === 11;

  if (!isFormValid || !isPhoneValid || !isDocumentValid) {
    if (!isFormValid) {
      alert(
        'Please fill in all the required fields before generating the order.',
      );
    } else if (!isPhoneValid) {
      alert('Phone number should have 11 digits. Regional code plus 9 numbers');
      if (phoneInput) phoneInput.focus();
    } else {
      alert('Document number should have 11 digits.');
      if (documentInput) documentInput.focus();
    }
    return;
  }
  // Retrieve the input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var documentNumber = document.getElementById('document').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var state = document.getElementById('state').value;
  var date = document.getElementById('date').value;
  var payment = document.getElementById('payment').value;
  var gender = document.getElementById('gender').value;
  var typillerClassic = document.querySelector('.quantidade:first-child').value;
  var typillerGlamour = document.querySelector('.quantidade:last-child').value;
  var typography = document.querySelector('.typography-option').value;
  const totalValueElement = document.getElementById('total-value');

  // Format the document number
  documentNumber = documentNumber.replace(/\D/g, '');
  documentNumber = documentNumber.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4',
  );

  // Format the phone number
  phone = phone.replace(/\D/g, '');
  phone = phone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');

  // Construct the order object
  var orderString = `Name: ${name}\n`;
  orderString += `Email: ${email}\n`;
  orderString += `Document Number: ${documentNumber}\n`;
  orderString += `Phone: ${phone}\n`;
  orderString += `Address: ${address}\n`;
  orderString += `State: ${state}\n`;
  orderString += `Birth Date: ${date}\n`;
  orderString += `Payment Method: ${payment}\n`;
  orderString += `Gender: ${gender}\n`;
  orderString += `Typiller Classic: ${typillerClassic}\n`;
  orderString += `Typiller Glamour: ${typillerGlamour}\n `;
  orderString += `Typography: ${typography}\n 
  \n`;
  if (typillerClassic && typillerGlamour) {
    orderString += `Hello, ${name}. This file means that your order was processed by our system. We are sending to your email ${email} a charge in value of ${totalValueElement.innerHTML}  according to your payment method you've selected ${payment}. Note that untill the payment is processed, your order is not confirmed. When confirmed, ${typillerClassic} Typiller Classic and ${typillerGlamour} Typiller Glamour, all in ${typography} typography will be sent to ${address} - ${state} as soon as we can.\n \n Typiller Typemachines thanks for the preference.`;
  } else if (typillerClassic) {
    orderString += `Hello, ${name}. This file means that your order was processed by our system. We are sending to your email ${email} a charge in value of ${totalValueElement.innerHTML}  according to your payment method you've selected ${payment}. Note that untill the payment is processed, your order is not confirmed. When confirmed, ${typillerClassic} Typiller Classic, all in ${typography} typography will be sent to ${address} - ${state} as soon as we can.\n \n Typiller Typemachines thanks for the preference.`;
  } else if (typillerGlamour) {
    orderString += `Hello, ${name}. This file means that your order was processed by our system. We are sending to your email ${email} a charge in value of ${totalValueElement.innerHTML}  according to your payment method you've selected ${payment}. Note that untill the payment is processed, your order is not confirmed. When confirmed, ${typillerGlamour} Typiller Glamour, all in ${typography} typography will be sent to ${address} - ${state} as soon as we can.\n \n Typiller Typemachines thanks for the preference.`;
  }
  const totalPrice = parseFloat(
    totalValueElement.textContent.replace(/[^0-9.-]+/g, ''),
  );
  if (totalPrice === 0) {
    return; // Exit the function if total price is zero, because it cannot generate a receipt if
    // total price is zero :p
  }
  // Create a download link for the order.txt file
  var downloadLink = document.createElement('a');
  downloadLink.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(orderString),
  );

  downloadLink.setAttribute('download', 'order.txt');
  downloadLink.style.display = 'none';

  // Append the download link to the document body
  document.body.appendChild(downloadLink);

  // Trigger the click event on the download link
  downloadLink.click();

  // Remove the download link from the document body
  document.body.removeChild(downloadLink);
}
const btnAtivate = document.getElementById('generate-order-btn');
btnAtivate.addEventListener('click', downloadOrder);
