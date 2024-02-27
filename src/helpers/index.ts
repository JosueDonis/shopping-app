export const formatMoney = (amount?: number) => {
    return new Intl.NumberFormat("es-GT", {
        style: "currency",
        currency: "GTQ",
    }).format(amount ?? 0);
}