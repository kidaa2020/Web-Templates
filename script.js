// Configuración de botones de PayPal
document.addEventListener('DOMContentLoaded', function() {
    // Producto: Windows 11 Pro (16 EUR)
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "Licencia Windows 11 Pro (Permanente)",
                    amount: {
                        value: "16.00"
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("¡Pago completado! Envía la licencia a: " + details.payer.email_address);
                // Aquí puedes redirigir o enviar un correo automático (requeriría backend)
            });
        }
    }).render('#paypal-button-w11');

    // Producto: Windows 10 Pro (16 EUR)
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "Licencia Windows 10 Pro (Permanente)",
                    amount: {
                        value: "16.00"
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("¡Pago completado! Envía la licencia a: " + details.payer.email_address);
            });
        }
    }).render('#paypal-button-w10');

    // Producto: Spotify Premium (32 EUR)
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "Spotify Premium (1 Año)",
                    amount: {
                        value: "32.00"
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("¡Pago completado! Envía las credenciales de Spotify a: " + details.payer.email_address);
            });
        }
    }).render('#paypal-button-spotify');

    // Producto: Microsoft 365 (16 EUR)
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: "Microsoft 365 (1 Año)",
                    amount: {
                        value: "16.00"
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("¡Pago completado! Envía las credenciales de Microsoft 365 a: " + details.payer.email_address);
            });
        }
    }).render('#paypal-button-office');
});
