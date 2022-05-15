export function formatPhoneNumber(value) {
    if (!value) {
        return value;
    }

    const phoneNumber: string = value.replace(/[^\d]/g, "");

    if (phoneNumber.length < 3) {

        return phoneNumber;

    } else if (phoneNumber.length > 3 && phoneNumber.length < 8) {

        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;

    } else if (phoneNumber.length > 8 && phoneNumber.length < 12) {

        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)} ${phoneNumber.slice(7)}`;

    } else {

        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)} ${phoneNumber.slice(7, 11)}`;

    }
}