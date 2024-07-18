export function sort (data) {
    const data1  = Object.values(data).sort((a,b)=>b.current_price-a.current_price)
    return data1;
}