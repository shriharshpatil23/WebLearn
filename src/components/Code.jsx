import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

import { Box } from "@mui/material";
import {styled} from "@mui/material/styles"
//Components
import Editor from "./Editor";


const Container = styled(Box)`
    height:50vh;
    display:flex;
    background:#060606;
`
const Code = () =>
{
    const {html,setHtml,css,setCss,Js,setJs} = useContext(DataContext);
    return (
        <Container>
            <Editor 
                heading='HTML'
                icon='/'
                color='#FF0055'
                language='xml'
                value={html}
                onChange={setHtml}
            />
            <Editor
                heading='CSS'
                icon='*'
                color='#0EBEFF'
                language='css'
                value={css}
                onChange={setCss}
             />
            <Editor 
                heading='JS'
                icon='( )'
                color='#FCD000'
                language='javascript'
                value={Js}
                onChange={setJs}
            />
        </Container>
    )
}

export default Code;