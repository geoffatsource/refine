import { Dialog, Transition } from "@headlessui/react";

import Spinner from "@components/icons/Spinner";
import { useCheckout } from "@lib/context/checkout";
import noop from "@lib/noop";

const CheckoutLoader: React.FC = () => {
    const { isLoading } = useCheckout();

    return (
        <Transition show={isLoading}>
            <Dialog onClose={noop} className="relative z-[100]">
                <Transition.Child
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                        <Spinner size={24} />
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default CheckoutLoader;