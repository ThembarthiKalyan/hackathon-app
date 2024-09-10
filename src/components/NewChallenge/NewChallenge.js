import Header from "../Header/Header";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import './NewChallenge.css';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

function NewChallenge(){
    const [file, setFile] = useState();
    const [level, setLevel] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const create = (e) => {
        try{
            e.preventDefault();
            let obj = {
                name: e.target.name.value,
                startDate: start,
                endDate: end,
                description: e.target.description.value,
                file: file,
                level: level
            }
            
            //api call to save image in backend in nodejs
            // const response = await axios.post(url, obj);

            // as no backend url is there we are saving in localStorage
            if(window.localStorage){
                let allChallenges = localStorage.getItem('challenges');
                allChallenges = JSON.parse(allChallenges);
                if(!allChallenges){
                    allChallenges = []
                }
                allChallenges.push(obj);
                localStorage.setItem('challenges', JSON.stringify(allChallenges));
            }

        }catch(e){
            alert(e);
        }
    }

    const uploadImage = (e) =>{
        setFile(e.target.files[0]);
    }

    return(
        <div>
            <Header/>
            <div style={{width: '100%', height: '100px', background: '#F8F9FD'}}>
                <h1 style={{paddingLeft: '90px'}}>Challenge Details</h1>
            </div>
            <form onSubmit={(e)=>create(e)} className="challenge-form">
                <label>Challenge Name</label>
                <TextField id="outlined-basic" name="name" variant="outlined" className='name-input'/>
                <label>Start Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newValue)=>setStart(newValue)} format="D/M/YYYY" className='name-input'/>
                </LocalizationProvider>
                <label>End Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newValue)=>setEnd(newValue)} format="D/M/YYYY" className='name-input'/>
                </LocalizationProvider>
                <label>Description</label>
                <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                name='description'
                style={{width: '817px'}}/>
                <label>Image</label>
                <Button
                style={{background: '#F4F4F4', color: 'black', width: '236px', height: '50px'}}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                >
                Upload
                <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => uploadImage(e)}
                    multiple
                />
                </Button>
                <label>Level Type</label>
                <FormControl>
                    <Select
                        style={{width: '236px', height: '50px'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={level}
                        label="Level"
                        onChange={(e)=> setLevel(e.target.value)}>
                            <MenuItem >Easy</MenuItem>
                            <MenuItem >Medium</MenuItem>
                            <MenuItem >Hard</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" style={{background: '#44924C', marginTop: '30px', width: '236px', height: '50px'}} type="submit">Create Challenge</Button>
            </form>
        </div>
    )
}

export default NewChallenge;