import React from 'react';
import Box from "@material-ui/core/Box";
import {JsonViewer} from "../JsonViewer/JsonViewer";
import {SearchInput} from "../SearchInput/SearchInput";

export const Home = () => {
    return <Box padding={"1em"}>
        <Box padding={"1em"}>
            <SearchInput />
        </Box>
        <Box padding={"1em"} width={"50%"}>
            <JsonViewer />
        </Box>
    </Box>;
};