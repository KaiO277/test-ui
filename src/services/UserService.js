import axios from './customize-axios';

const fetchAllUser = () => {
    return axios.get("post/post_index_get_all_api/");
}

export { fetchAllUser }