import axios from 'axios';
import {useEffect, useState} from "react";

export const useJsonPlaceholderRepo = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://www.mocky.io/v2/5185415ba171ea3a00704eed/${id}?mocky-delay=1000ms`).then(data => {
            setLoading(false);
            setData(data.data);
        });
    }, [id]);

    return {
        data,
        loading
    };
};