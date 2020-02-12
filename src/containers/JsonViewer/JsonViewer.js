import React from 'react';
import {useJsonPlaceholderRepo} from "../../hooks/useJsonPlaceholderRepo";
import {useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";

export const JsonViewer = () => {
    const searchText = useSelector(state => state.app.searchText);
    const { data, loading } = useJsonPlaceholderRepo(searchText);
    return <TextField
        label={
            loading ? 'Chargement...' : 'Current data'
        }
        fullWidth
        rows={10}
        multiline
        readOnly
        value={JSON.stringify(data)}
        variant={"outlined"}
    >
    </TextField>;
};