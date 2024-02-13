const getPrice = (data, name) => {
    console.log(data);
    console.log(name);
    const { current_price } = data.find((item) => item.name === name);
    return current_price;

    

}

export default getPrice;