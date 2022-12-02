import axios from 'axios';
import { Linking } from 'react-native';

export async function login() {
    try {
        console.log("pressed 1")
        const result = await axios.post('https://easytodo.p-e.kr:443/login', {});
        return result.data;
    } catch (error) {
        console.info(error);
    }
}
