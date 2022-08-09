import React from "react";
import { Order } from "@medusajs/medusa";

import OrderDetails from "../OrderDetails";
import Items from "../Items";

interface OrderCompletedTemplateProps {
    order: Order;
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
    order,
}) => {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-6">
            <div className="content-container flex justify-center">
                <div className="h-full w-full max-w-4xl bg-white">
                    <OrderDetails order={order} />
                    <Items
                        items={order.items}
                        region={order.region}
                        cartId={order.cart_id}
                    />
                    <div className="grid grid-cols-1 gap-4 border-b border-gray-200 p-10 lg:grid-cols-2">
                        {/* <PaymentDetails
            payments={order.payments}
            paymentStatus={order.payment_status}
          />
          <ShippingDetails
            shippingMethods={order.shipping_methods}
            address={order.shipping_address}
          /> */}
                    </div>
                    <div className="grid grid-cols-1 gap-4 p-10 lg:grid-cols-2">
                        {/* <Help />
          <OrderSummary order={order} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCompletedTemplate;