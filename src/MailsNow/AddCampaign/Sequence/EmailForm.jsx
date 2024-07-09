import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {SimpleEditor} from '../../../component/Editor/Editor';

export default function EmailForm() {

const headerstyle={ p: '2px 4px',fontSize:'12px', display: 'flex', alignItems: 'center', backgroundColor:'#F1F1F1',color:'gray', height:'42px'}

    const [mergetype, setMergetype] = React.useState([]);
    const [subject, setSubject] = React.useState([]);
    const [preheader, setPreheader] = React.useState([]);
    const [value, setValue] = React.useState(0);

    const subjectname = subject.join('');
    const preheadername = preheader.join('');

    const handleChangesub = (event) => {
      setSubject([event.target.value]);
    };

    const handleChangepre = (event) => {
      setPreheader([event.target.value]);
    };



    const handleChangeMerge1 = (event) => {
      // setMergetype(event.target.value);
      setSubject((sub) => [...sub,event.target.value]);
    };

    const handleChangeMerge2 = (event) => {
      // setMergetype(event.target.value);
      setPreheader((pre) => [...pre,event.target.value]);
    };

      const handleIncrement = () => {
        setValue(value + 1);
      };
    
      const handleDecrement = () => {
        if (value > 0) {
          setValue(value - 1);
        }
      };
      const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) {
          setValue(newValue);
        }
      };
const [showHide, setShowHide] =React.useState('1');
   

  return (
    <div style={{paddingRight:"35px"}}>
      <div className='EmailHeader'>
         <Paper elevation={0}
      component="form"
      sx={headerstyle}
    >
      <p style={{padding:'0 10px',fontSize:"14px"}}>
      Subject
      </p>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase className='inputbase'
        sx={{ ml: 1, flex: 1 }} onChange={handleChangesub} name="subject" value={subjectname}  placeholder="Leave this empty to send as a followup step..."
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
       
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
      <FormControl sx={{ m: 1, minWidth: 120,}}>
        <Select
          value={mergetype}
          onChange={handleChangeMerge1}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{height:'35px',backgroundColor:'#e5e7eb',fontSize:'12px',}}
        >
          <MenuItem value="">
            Merge Type
          </MenuItem>
          <MenuItem value="{{FirstName}}">FirstName</MenuItem>
          <MenuItem value="{{LastName}}">LastName</MenuItem>
          <MenuItem value="{{SubjectName}}">SubjectName</MenuItem>
        </Select>
       
      </FormControl>
      
    </Paper></div>

{
  (showHide === '1')?
  <div className='helper-text'style={{display:"flex",alignItems:"center",padding:"10px",cursor:"pointer"}}>
  <Typography sx={{fontSize:"14px",color:"#000AFF",marginLeft:"auto"}} className='helper-text-btn' onClick={(e)=> setShowHide('0')}>Set Pre Header  </Typography>
  <HelpOutlineIcon style={{fontSize:'20px',paddingLeft:'5px',color:"#000AFF"}}/>
  </div>:

  <div className='PreHeader' style={{marginBottom:"15px"}}>
  <Paper elevation={0}
component="form"
sx={headerstyle}
>
<p style={{padding:'0 10px',fontSize:"14px"}}>
Pre-Header
</p>
<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
<InputBase 
 sx={{ ml: 1, flex: 1 }} onChange={handleChangepre} name="subject" value={preheadername}  placeholder="Please enter pre-header...."
/>
<IconButton type="button" sx={{ p: '10px' }} aria-label="search">

</IconButton>
<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

<FormControl sx={{ m: 1, minWidth: 120,}}>
 <Select
   value={mergetype}
   onChange={handleChangeMerge2}
   displayEmpty
   inputProps={{ 'aria-label': 'Without label' }}
   style={{height:'35px',backgroundColor:'#e5e7eb',fontSize:'12px',}}
 >
   <MenuItem value="">
     Merge Type
   </MenuItem>
   <MenuItem value="{{FirstName}}">FirstName</MenuItem>
   <MenuItem value="{{LastName}}">LastName</MenuItem>
   <MenuItem value="{{SubjectName}}">SubjectName</MenuItem>
 </Select>

</FormControl>

</Paper></div>

}
<div style={{paddingLeft:"15px"}}>
<div style={{width:"100%",height:"50vh",border:"1px solid #E6E6E6"}}>

  <SimpleEditor/>

</div></div>
    {/* <div className="editorElement" style={{width:"100%",paddingLeft:"15px"}}>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  toolbar: [
                    "heading",
                    "bold",
                    "italic",
                    "bulletedList",
                    "numberedList",
                    "blockQuote",
                    "fontColor",
                    "fontBackgroundColor",
                    "code",
                    "uploadImage",
                    "link",
                    "sourceEditing"
                  ],

                  ckfinder: {
                    uploadUrl:
                      "https://app.5am5pm.com:3000/super_admin/ckeditoruploads",
                  },
                }}
                data={'template'}
                onReady={(editor) => {
                
                }}
                onChange={(event, editor) => {
                  
                  
                }}
                
              />
            </div> */}

    <div style={{display:"flex",border:"1px solid #E6E6E6",marginLeft:"15px"}}> 
      <div style={{display:"flex",alignItems:"center",padding:"15px 20px 15px 30px"}}>
        <Typography>Send After</Typography>
        <TextField
        size='small' sx={{width:"105px",paddingLeft:"7px"}}
      value={value}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
           
              <RemoveIcon  onClick={handleDecrement} sx={{fontSize:"14px",cursor:"pointer"}}/>
           
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
         
              <AddIcon onClick={handleIncrement} sx={{fontSize:"14px",cursor:"pointer"}}/>
           
          </InputAdornment>
        ),
        inputProps: { inputMode: 'numeric', pattern: '[0-9]*' }
      }}
    />
        <Typography sx={{paddingLeft:"7px"}}>days from step 1</Typography>
      </div>
      <div style={{display:"flex",alignItems:"center",padding:"15px",marginLeft:"auto"}}>
        <Button variant='contained' sx={{width:"80px",backgroundColor:"#000AFF","&:hover":{backgroundColor:"#000AFF"}}}>Save</Button>
      </div>
    </div>        
    </div>
  );
}