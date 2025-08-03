// Configuración de botones PayPal
document.addEventListener('DOMContentLoaded', function() {
    // Estilo personalizado para los botones
    const paypalStyle = {
        layout: 'vertical',
        color:  'gold',
        shape:  'pill',
        label:  'pay',
        height: 45
    };

    // Windows 11 Pro
    paypal.Buttons({
        style: paypalStyle,
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "Licencia Windows 11 Pro (Permanente)",
                    amount: { value: "16.00" }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("✅ Licencia enviada a: " + details.payer.email_address);
            });
        }
    }).render('#paypal-button-w11');

    // Windows 10 Pro (misma estructura)
    paypal.Buttons({ 
        style: paypalStyle,
        createOrder: function(data, actions) { /* ... */ },
        onApprove: function(data, actions) { /* ... */ }
    }).render('#paypal-button-w10');

    // Spotify Premium (misma estructura)
    paypal.Buttons({ 
        style: paypalStyle,
        createOrder: function(data, actions) { /* ... */ },
        onApprove: function(data, actions) { /* ... */ }
    }).render('#paypal-button-spotify');

    // Microsoft 365 (misma estructura)
    paypal.Buttons({ 
        style: paypalStyle,
        createOrder: function(data, actions) { /* ... */ },
        onApprove: function(data, actions) { /* ... */ }
    }).render('#paypal-button-office');
});
