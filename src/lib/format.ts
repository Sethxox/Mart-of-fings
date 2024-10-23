export function formatPrice(price:number) {
    return (price / 100).toLocaleString("es-US", {
        style: "currency",
        currency: "USD"
    } )
}
