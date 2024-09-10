import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import InputAdornment from "@material-ui/core/InputAdornment";
import searchIcon from '../../assets/icons/searchIcon.svg';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from "@mui/material/InputLabel";
import './Challenges.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Challenges(){
    return(
        <div style={{width: '100%', height: '324px', background: '#002A3B'}}>
            <div>
                <h1 style={{textAlign: 'center', color: 'white'}}>Explore Challenges</h1>
            </div>
            <div className="challenge-div">
                <input placeholder="Search" style={{marginLeft: '240px', width: '850px'}}/>
                <FormControl fullWidth style={{width: '110px', height: '50px', background: 'white', marginLeft: '10px'}}>
                    <InputLabel id="demo-simple-select-label" style={{marginTop: '0px'}}>Filter</InputLabel>
                    {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Filter"
                    onChange={handleChange}
                    > */}
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Filter"
                    >
                    <MenuItem><FormControlLabel control={<Checkbox/>} label="Easy" /></MenuItem>
                    <MenuItem><FormControlLabel control={<Checkbox/>} label="Medium" /></MenuItem>
                    <MenuItem><FormControlLabel control={<Checkbox/>} label="Hard" /></MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Challenges;