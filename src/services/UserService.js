import axios from './customize-axios';

const fetchAllUser = () => {
    return axios.get("try/try_get_all_api/");
}

export { fetchAllUser }