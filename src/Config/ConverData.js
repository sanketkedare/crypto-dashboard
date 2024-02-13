

export const ConverData = async(JSON) =>{

    const Json = JSON

    const cryptoArray = [];

    Json.map((c)=>{
        const image = c.image;
        const name = c.name;

        const single = {name,image}

        cryptoArray.push(single);
    })

    console.log(cryptoArray);
}