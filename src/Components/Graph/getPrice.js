const getPrice = (data, name) => {

    return Object.values(data).find((item)=>item.name === name).current_price;
}

export default getPrice;