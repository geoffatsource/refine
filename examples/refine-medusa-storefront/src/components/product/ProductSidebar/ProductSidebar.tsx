import s from "./ProductSidebar.module.css";
// import { useAddItem } from "@framework/cart";
import { FC, useContext, useEffect, useState } from "react";
import { ProductOptions } from "@components/product";
// import type { Product } from "@commerce/types/product";
import { Button, Text, Rating, Collapse, useUI } from "@components/ui";
import {
    getProductVariant,
    selectDefaultOptionFromProduct,
    SelectedOptions,
} from "../helpers";
import { CartContext } from "@lib/context";

interface ProductSidebarProps {
    product: any; // Product
    className?: string;
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
    // const addItem = useAddItem();
    const { openSidebar, setSidebarView } = useUI();
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});

    useEffect(() => {
        selectDefaultOptionFromProduct(product, setSelectedOptions);
    }, [product]);

    const variant = getProductVariant(product, selectedOptions);

    const { addToCart, isLoading } = useContext(CartContext);

    return (
        <div className={className}>
            <ProductOptions
                options={product.options}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
            <Text
                className="pb-4 break-words w-full max-w-xl"
                html={product.descriptionHtml || product.description}
            />
            <div className="flex flex-row justify-between items-center">
                <Rating value={4} />
                <div className="text-accent-6 pr-1 font-medium text-sm">
                    36 reviews
                </div>
            </div>
            <div>
                <Button
                    aria-label="Add to Cart"
                    type="button"
                    className={s.button}
                    onClick={async () => {
                        await addToCart?.({
                            variantId: variant.id,
                        });

                        setSidebarView("CART_VIEW");
                        openSidebar();
                    }}
                    loading={isLoading}
                    disabled={variant?.availableForSale === false}
                >
                    Add To Cart
                </Button>
            </div>
            <div className="mt-6">
                <Collapse title="Care">
                    This is a limited edition production run. Printing starts
                    when the drop ends.
                </Collapse>
                <Collapse title="Details">
                    This is a limited edition production run. Printing starts
                    when the drop ends. Reminder: Bad Boys For Life. Shipping
                    may take 10+ days due to COVID-19.
                </Collapse>
            </div>
        </div>
    );
};

export default ProductSidebar;