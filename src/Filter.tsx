import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const FilterVehicles = () => {
  const [searchOptions, setSelectedSearchOptions] = useState({
    location: "",
    bodyType: "",
    owners: "",
    brand: "",
    fuelType: "",
    transmission: "",
  } as any);

  const [list, setList] = useState([] as any);

  const appState = useSelector((state: RootState) => state.appState);

  const { createdList } = appState;
  const updateField = (e: any) => {
    setSelectedSearchOptions({
      ...searchOptions,
      [e.target.id]: e.target.value,
    });
  };

  //   console.log("check the data", searchOptions);

  const searchVehicles = () => {
    let list = createdList.filter((ele: any) => {
      return (
        ele.location === searchOptions.location ||
        ele.brand === searchOptions.brand ||
        ele.transmission === searchOptions.transmission
      );
    });

    setList(list);
  };

  //   console.log("Filter vehicles", createdList, list);

  return (
    <>
      <Grid container sx={{ m: 2 }}>
        <Grid item xs={6}>
          <Typography>Search Vehicles</Typography>
          <Grid container>
            <Grid xs={12}>
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                onChange={updateField}
                value={searchOptions.location}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                id="brand"
                label="Brand"
                variant="outlined"
                onChange={updateField}
                value={searchOptions.brand}
              />
            </Grid>
            <Grid xs={12} item>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Owners
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={searchOptions.owners}
                  onChange={(e) => {
                    setSelectedSearchOptions({
                      ...searchOptions,
                      owners: e.target.value,
                    });
                  }}
                >
                  <FormControlLabel
                    value="1stowner"
                    control={<Radio />}
                    label="1st Owner"
                  />
                  <FormControlLabel
                    value="2ndowner"
                    control={<Radio />}
                    label="2nd Owner"
                  />
                  <FormControlLabel
                    value="3rdowner"
                    control={<Radio />}
                    label="3rd Owner"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* <Grid xs={12} item>
              <Typography>Body Type</Typography>
              <FormGroup onChange={() => {}}>
                <FormControlLabel control={<Checkbox />} label="WagnoR" />
                <FormControlLabel control={<Checkbox />} label="Swift" />
                <FormControlLabel control={<Checkbox />} label="Swift Dzire" />
                <FormControlLabel control={<Checkbox />} label="Celerio" />
              </FormGroup>
            </Grid> */}
            <Grid xs={12} item>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Fuel Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={searchOptions.fuelType}
                  onChange={(e) => {
                    setSelectedSearchOptions({
                      ...searchOptions,
                      fuelType: e.target.value,
                    });
                  }}
                >
                  <FormControlLabel
                    value="petrol"
                    control={<Radio />}
                    label="Petrol"
                  />
                  <FormControlLabel
                    value="diesel"
                    control={<Radio />}
                    label="Diesel"
                  />
                  <FormControlLabel
                    value="cng"
                    control={<Radio />}
                    label="CNG"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Transmission
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={searchOptions.transmission}
                  onChange={(e) => {
                    setSelectedSearchOptions({
                      ...searchOptions,
                      transmission: e.target.value,
                    });
                  }}
                >
                  <FormControlLabel
                    value="automatic"
                    control={<Radio />}
                    label="Automatic"
                  />
                  <FormControlLabel
                    value="manual"
                    control={<Radio />}
                    label="Manual"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Button variant="outlined" onClick={searchVehicles}>
              Search Vehicles
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography>Results</Typography>

          {list.length > 0 && (
            <Grid xs={12}>
              {list.map((ele: any) => {
                return (
                  <>
                    <img
                      alt={"dummy"}
                      src={ele.file}
                      style={{ height: "150px", width: "200px" }}
                    ></img>
                    <br />
                    Brand : {ele.name}
                    <br />
                    Color: {ele.color}
                    <br />
                    Location : {ele.location}
                  </>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FilterVehicles;
