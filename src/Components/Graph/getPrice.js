const getPrice = (data, name) => {

    const { current_price } = Object.values(data).find((item)=>item.name === name);
    return current_price;
}

export default getPrice;