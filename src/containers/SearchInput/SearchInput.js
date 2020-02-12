import React from 'react';
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {appDuck} from "../App/AppDuck";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const globalStateSearchText = useSelector(state => state.app.searchText);
    const changeSearchText = e => {
        dispatch(appDuck.creators.changeSearchText(e.target.value));
    };

    return <TextField
        value={globalStateSearchText}
        onChange={e => changeSearchText(e)}
        label={"Search..."}
        helperText={""}
    />
};