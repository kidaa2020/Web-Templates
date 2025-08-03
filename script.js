// Configura PayPal en todas las páginas de producto
if (document.getElementById('paypal-button-container')) {
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect'
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: document.title,
                    amount: {
                        value: document.querySelector('.price').textContent.replace(' EUR', '')
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('✅ Licencia enviada a: ' + details.payer.email_address);
            });
        }
    }).render('#paypal-button-container');
}
