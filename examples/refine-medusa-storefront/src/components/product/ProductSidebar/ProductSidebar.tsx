import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { Product, ProductVariant } from "@medusajs/medusa";

import { ProductOptions } from "@components/product";
import { Button, Text, Rating, Collapse } from "@components/ui";
import { selectDefaultOptionFromProduct, SelectedOptions } from "../helpers";
import { useCartContext, useUI } from "@lib/context";
import s from "./ProductSidebar.module.css";

interface ProductSidebarProps {
    product: Product;
    className?: string;
    selectedOptions?: SelectedOptions;
    setSelectedOptions?: Dispatch<SetStateAction<SelectedOptions>>;
    variant: ProductVariant;
}

const ProductSidebar: FC<ProductSidebarProps> = ({
    product,
    className,
    setSelectedOptions = () => undefined,
    selectedOptions = {},
    variant,
}) => {
    const { openSidebar, setSidebarView } = useUI();

    useEffect(() => {
        selectDefaultOptionFromProduct(product, setSelectedOptions);
    }, [product]);

    const { addItem } = useCartContext();

    return (
        <div className={className}>
            <ProductOptions
                options={product.options}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
            <Text
                className="w-full max-w-xl break-words pb-4"
                html={product.description || ""}
            />
            <div className="flex flex-row items-center justify-between">
                <Rating value={4} />
                <div className="text-accent-6 pr-1 text-sm font-medium">
                    36 reviews
                </div>
            </div>
            <div>
                <Button
                    aria-label="Add to Cart"
                    type="button"
                    className={s.button}
                    onClick={async () => {
                        await addItem?.({
                            variantId: variant.id,
                            quantity: 1,
                        });

                        setSidebarView("CART_VIEW");
                        openSidebar();
                    }}
                    disabled={variant?.inventory_quantity === 0}
                >
                    {variant?.inventory_quantity > 0
                        ? "Add to Cart"
                        : "Out of Stock"}
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