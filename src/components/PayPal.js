import React, { useEffect, useRef } from 'react';

const PayPal = () => {
    const paypal = useRef()
    //Cada vez que se renderiza la pagina, se renderiza las funcionalidades del botón
    useEffect(()=>{
        //Implementación común
        window.paypal.Buttons({// => para obtener los botones de paypal
            //Crear la orden
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{//Unidades de Compra -- siempre arreglo!
                        description: "Pizza Hawaiana de tamaño familiar",
                        amount: {
                            currency_code: "USD",
                            value: 49.90
                        }

                    }]
                })
            },
            onApprove : async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            //Que pasa si sucede un error?
            onError: (err) => {
                console.log(err);
            }

        }).render(paypal.current);
    },[])
    //referencia para renderizar el boton de paypal
    return (
        <div>
            <div ref={paypal}></div>    
        </div>
    );
}

export default PayPal;
