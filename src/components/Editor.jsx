import { Box} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import { Controlled as ControlledEditor } from "react-codemirror2";

import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript'; 

import '../App.css'; 

import { useState } from "react";


const Heading = styled(Box)`
    background:#1d1e22;
    display:flex;
    padding: 9px 12px;
`
const Header = styled(Box)`
    display:flex;
    justify-content : space-between;
    background:#060606;
    font-weight:700;
    color:#AAAEBC;
`
const Container = styled(Box)`
    flex-grow : 1;
    flex-basic: basic;
    display:flex; 
    flex-direction :column;
    padding: 0 8px 8px;
`
const Editor = ({heading,icon,color,language,value,onChange}) =>{

    const [open,setOpen] = useState(true);

    const handleChange = (editor,data,value) =>
    {
        onChange(value);
    }
    return (
        <Container style={open ? null : {flexGrow : 0}}>
            <Header>
                <Heading>
                    <Box component="span" style={{
                        background:color,
                        height:20,
                        width:20,
                        color:'#000',
                        display:'flex',
                        placeContent:'center',
                        borderRadius:'5px',
                        paddingBottom:'2px',
                        marginRight:'5px'
                    }}>
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize="small"
                    style={{ alignSelf:'center'}}
                    onClick={ () => setOpen(prevState => !prevState) }
                />
            </Header>
            <ControlledEditor 
                value = {value}
                onBeforeChange = {handleChange}
                options={
                    {
                        lineWrapping : true, //line gets break when we goes out of line
                        lint : true, //shows syntax errors
                        mode : language,
                        lineNumbers : true,
                        theme : "material"
                    }
                }
            />
        </Container>        
    )
}

export default Editor;