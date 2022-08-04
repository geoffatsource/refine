import { FC, useContext } from "react";
import cn from "clsx";
import { useOne } from "@pankod/refine-core";
import { UseFormRegister } from "@pankod/refine-react-hook-form";
import { Cart } from "@medusajs/medusa";

import { Text } from "@components/ui";
import { CartContext } from "@lib/context";

import s from "./ShippingView.module.css";

interface ShippingViewProps {
    title: string;
    register: UseFormRegister<any>;
    registerNamePrefix: string;
}

const ShippingView: FC<ShippingViewProps> = ({
    title,
    register,
    registerNamePrefix,
}) => {
    const { cartId } = useContext(CartContext);

    const { data: cartData } = useOne<{ cart: Cart }>({
        id: cartId!,
        resource: "carts",
        queryOptions: {
            enabled: !!cartId,
        },
    });
    const countries = cartData?.data.cart.region.countries;

    return (
        <div>
            <Text variant="pageHeading">{title}</Text>
            <div>
                <div className="grid grid-flow-row grid-cols-12 gap-3">
                    <div className={cn(s.fieldset, "col-span-6")}>
                        <label className={s.label}>First Name</label>
                        <input
                            className={s.input}
                            {...register(`${registerNamePrefix}.first_name`, {
                                required: {
                                    value: true,
                                    message: "first name is required",
                                },
                            })}
                        />
                    </div>
                    <div className={cn(s.fieldset, "col-span-6")}>
                        <label className={s.label}>Last Name</label>
                        <input
                            className={s.input}
                            {...register(`${registerNamePrefix}.last_name`, {
                                required: {
                                    value: true,
                                    message: "last name is required",
                                },
                            })}
                        />
                    </div>
                </div>
                <div className={s.fieldset}>
                    <label className={s.label}>Company (Optional)</label>
                    <input
                        className={s.input}
                        {...register(`${registerNamePrefix}.company`)}
                    />
                </div>
                <div className={s.fieldset}>
                    <label className={s.label}>Street and House Number</label>
                    <input
                        {...register(`${registerNamePrefix}.address_1`, {
                            required: {
                                value: true,
                                message: "street and house number is required",
                            },
                        })}
                        className={s.input}
                    />
                </div>
                <div className={s.fieldset}>
                    <label className={s.label}>
                        Apartment, Suite, Etc. (Optional)
                    </label>
                    <input
                        {...register(`${registerNamePrefix}.address_2`)}
                        className={s.input}
                    />
                </div>
                <div className="grid grid-flow-row grid-cols-12 gap-3">
                    <div className={cn(s.fieldset, "col-span-6")}>
                        <label className={s.label}>Postal Code</label>
                        <input
                            {...register(`${registerNamePrefix}.postal_code`, {
                                required: {
                                    value: true,
                                    message: "postal code is required",
                                },
                            })}
                            className={s.input}
                        />
                    </div>
                    <div className={cn(s.fieldset, "col-span-6")}>
                        <label className={s.label}>City</label>
                        <input
                            {...register(`${registerNamePrefix}.city`, {
                                required: {
                                    value: true,
                                    message: "city is required",
                                },
                            })}
                            className={s.input}
                        />
                    </div>
                </div>
                <div className={s.fieldset}>
                    <label className={s.label}>Country/Region</label>
                    <select
                        {...register(`${registerNamePrefix}.country_code`)}
                        className={s.select}
                    >
                        {countries?.map((country, index) => (
                            <option key={index} value={country.iso_2}>
                                {country.display_name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ShippingView;
