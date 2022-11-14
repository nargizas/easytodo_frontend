import axios from 'axios';

export async function login() {
    try {
        console.log("pressed 1")
        const result = await axios.post('https://127.0.0.1:443/login', {});
        return result
    } catch (error) {
        console.info(error);
    }

    // const config = {
    //     method: 'post',
    //     url: 'https://localhost:443/login',
    //     // headers: {
    //     //     'Content-Type': 'multipart/form-data'
    //     // },
    //     data: {}
    // };


    // try {
    //     console.log("pressed 1")
    //     const response = await axios(config);
    //     console.log(response)
    // } catch (error) {
    //     console.info(error);
    // }
}
