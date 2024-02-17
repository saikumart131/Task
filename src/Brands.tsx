import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Button, Grid, TextField } from "@mui/material";

import BrandCard from "./Card";
import { setSelectedBrand, addToList } from "./redux/appSplice";
import { useState } from "react";
import { MuiFileInput } from "mui-file-input";

const Brands = () => {
  const [createBrandDetails, setCreateBrandDetails] = useState({
    model: "",
    color: "",
    yearofmanufacture: "",
    insurancevalidupto: "",
    kms: "",
    location: "",
    noofowners: "",
    transmission: "",
    externalfitments: "",
  } as any);

  const dispatch = useDispatch();
  const appState = useSelector((state: RootState) => state.appState);

  const { brands, selectedBrand, createdList } = appState;

  //   console.log("Brands page", brands);

  const selectionCard = (data: any) => {
    dispatch(setSelectedBrand(data));
  };

  const updateField = (e: any) => {
    setCreateBrandDetails({
      ...createBrandDetails,
      [e.target.id]: e.target.value,
    });
  };

  const pushToCreatedList = () => {
    let list = [...createdList];
    let details = { ...selectedBrand, ...createBrandDetails };
    list.push(details);
    dispatch(addToList(list));
    setCreateBrandDetails({
      model: "",
      color: "",
      yearofmanufacture: "",
      insurancevalidupto: "",
      kms: "",
      location: "",
      noofowners: "",
      transmission: "",
      externalfitments: "",
    });
    alert("added to list successfully");
  };

  const fileUpload = (file: any) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        setCreateBrandDetails({
          ...createBrandDetails,
          file: reader.result,
        });
      },
      false
    );
    reader.readAsDataURL(file);
  };

  //   console.log("Brand details", createBrandDetails, createdList);

  return (
    <>
      <Grid container sx={{ padding: "20px" }}>
        {brands &&
          brands.map((ele: any) => {
            return (
              <Grid item xs={3}>
                <BrandCard data={ele} onClick={selectionCard} />
              </Grid>
            );
          })}
      </Grid>
      {selectedBrand && (
        <Grid container spacing={2} sx={{ margin: "10px" }}>
          <Grid xs={6}>
            <Grid container direction="column">
              <TextField
                id="model"
                label="Model"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.model}
              />
              <TextField
                id="color"
                label="Color"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.color}
              />
              <TextField
                id="yearofmanufacture"
                label="Year of Manufacture"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.yearofmanufacture}
              />
              <TextField
                id="insurancevalidupto"
                label="Insurance Valid Upto"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.insurancevalidupto}
              />
              <TextField
                id="kms"
                label="Kms"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.kms}
              />
            </Grid>
          </Grid>
          <Grid xs={6}>
            <Grid container direction="column">
              <TextField
                id="location"
                label="Location"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.location}
              />
              <TextField
                id="noofowners"
                label="No of Owners"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.noofowners}
              />
              <TextField
                id="transmission"
                label="Transmission"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.transmission}
              />
              <TextField
                id="externalfitments"
                label="External Fitments"
                variant="outlined"
                onChange={updateField}
                value={createBrandDetails.externalfitments}
              />
              {/* <TextField
                variant="outlined"
                type='file'
                onChange={fileUpload}
                //  accept=".jpg, .jpeg, .png"
              /> */}

              <MuiFileInput
                value={createBrandDetails.file}
                onChange={fileUpload}
                label="Upload file"
                placeholder="Click to upload"
              />
            </Grid>
          </Grid>

          <Button onClick={pushToCreatedList} variant={"contained"}>
            Create
          </Button>
        </Grid>
      )}

      {createdList.length > 0 && JSON.stringify(createdList)}
    </>
  );
};

export default Brands;
