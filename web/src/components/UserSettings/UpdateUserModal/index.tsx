import { FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { capitalizeFirstLetters } from "../../../utils/CapitalizeFirtsLetters";
import { toast } from "react-toastify";
import { formatPhoneNumber } from "../../../utils/FormatPhoneNumber";
import { api } from "../../../service/apiClient";
import Router from "next/router";
import { Loading } from "../../Loading";

interface UpdateUserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    user: {
        name: string;
        email: string;
        phone: string | null;
    };
}

export function UpdateUserModal({ isOpen, onRequestClose, user }: UpdateUserModalProps) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [isLoading, setLoading] = useState(false);

    if (phone === null) {
        setPhone("");
    }

    const handlePhoneInput = event => {
        const formatedPhoneNumber = formatPhoneNumber(event.target.value);

        setPhone(formatedPhoneNumber)
    }

    async function handleUpdateUser(event: FormEvent) {
        event.preventDefault();
        setLoading(true);

        if (phone.length !== 15) {
            toast.error("Formato do Celular está incorreto!");
            setLoading(false);
            onRequestClose();
            return;
        }

        const phoneUnformated = phone.replace(/[^\d]/g, "")

        const captalizeName = capitalizeFirstLetters(name);

        const updatedUser = {
            name: captalizeName,
            email,
            phone: phoneUnformated
        }

        await api.put("/users", updatedUser)
            .then(() => Router.reload())
            .catch((err) => {
                toast.error("Houve um erro para atualizar seus dados, tente mais tarde!");
                console.log(err.response)
                setLoading(false);
                onRequestClose();
                return;
            })

        setLoading(false);
        onRequestClose();
        return;
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onRequestClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#1C1C1C] bg-opacity-30 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#1C1C1C] bg-opacity-90 boder-gradient p-10 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl text-center font-medium leading-6 text-white"
                                >
                                    Alterar Dados
                                </Dialog.Title>
                                <form onSubmit={handleUpdateUser}>
                                    <div className="mt-4">
                                        <label>Nome:</label>
                                        <input
                                            className="w-full block mt-1 mb-3 bg-transparent bg-zinc-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                                            type="text"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        ></input>

                                        <label>Email:</label>
                                        <input
                                            className="w-full block mt-1 mb-3 bg-transparent bg-zinc-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                                            type="text"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}

                                        ></input>

                                        <label>Telefone:</label>
                                        <input
                                            className="w-full block mt-1 mb-3 bg-transparent bg-zinc-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                                            type="tel"
                                            value={phone}
                                            onChange={(event) => handlePhoneInput(event)}
                                        />
                                    </div>

                                    <div className="flex justify-center mt-8">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md py-2 px-8 gradient hover:brightness-125 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? <Loading /> : "Salvar"}
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition >
    );
}