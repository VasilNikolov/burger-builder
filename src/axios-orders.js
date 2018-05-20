import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-builder-170af.firebaseio.com/'
});

export default instance;