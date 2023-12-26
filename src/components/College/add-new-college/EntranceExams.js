import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const EntranceExams = ({ setEntranceExams }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonSelectedStyle = {
    // color: primaryColor,
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [checkboxes, setCheckboxes] = useState({
    design: [
      { exam: "CEED", selected: false },
      { exam: "ND", selected: false },
      { exam: "NATA", selected: false },
      { exam: "UCEED", selected: false },
    ],
    engineering: [
      { exam: "JEE Main", selected: false },
      { exam: "MHT CET", selected: false },
      { exam: "BITSAT", selected: false },
      { exam: "GATE", selected: false },
    ],
    medical: [
      { exam: "NEET", selected: false },
      { exam: "AFMC", selected: false },
      { exam: "AIIMS", selected: false },
      { exam: "CET", selected: false },
    ],
    law: [
      { exam: "CLAT", selected: false },
      { exam: "AILET", selected: false },
      { exam: "LSAT", selected: false },
      { exam: "AIBE", selected: false },
    ],
  });

  const [selectedCheckboxes, setSelectedCheckboxes] = useState("");

  // Function to handle checkbox changes
  const handleCheckboxChange = (category, index) => {
    const updatedCheckboxes = { ...checkboxes };
    updatedCheckboxes[category][index].selected =
      !updatedCheckboxes[category][index].selected;

    if (updatedCheckboxes[category][index].selected) {
      if (formData.entrance_exams === "") {
        setFormData({
          ...formData,
          entrance_exams: `${updatedCheckboxes[category][index].exam}`,
        });
      } else {
        setFormData({
          ...formData,
          entrance_exams: `${formData.entrance_exams}, ${updatedCheckboxes[category][index].exam}`,
        });
      }
    }

    setCheckboxes(updatedCheckboxes);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const [formData, setFormData] = useState({
    entrance_exams: "",
    other_criteria: "",
  });

  useEffect(() => {
    setEntranceExams(formData);
  }, [formData, setEntranceExams]);

  return (
    <Container>
      <Grid>
        <Typography
          variant="h5"
          gutterBottom
          borderLeft={"4px solid " + theme.palette.primary.main}
          padding={1}
          mb={2}
        >
          <em>
            <strong>ENTRANCE EXAMS </strong>
          </em>
        </Typography>
      </Grid>
      <form>
        {/* First Row */}
        <Grid mt={6}>
          <Grid mb={4}>
            <Typography variant="p">
              Select all the exams through which students can get admission in
              your college/ institute
            </Typography>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Typography>Design</Typography>
              <Grid container>
                {checkboxes.design.map(({ exam, selected }, index) => (
                  <Grid key={index} mr={1} item>
                    <Button
                      variant={selected ? "contained" : "outlined"}
                      style={
                        selected ? buttonSelectedStyle : buttonNotSelectedStyle
                      }
                      onClick={() => handleCheckboxChange("design", index)}
                    >
                      {`${exam}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography>Engineering</Typography>
              <Grid container>
                {checkboxes.engineering.map(({ exam, selected }, index) => (
                  <Grid key={index} mr={1} item>
                    <Button
                      variant={selected ? "contained" : "outlined"}
                      style={
                        selected ? buttonSelectedStyle : buttonNotSelectedStyle
                      }
                      onClick={() => handleCheckboxChange("engineering", index)}
                    >
                      {`${exam}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography>Medical</Typography>
              <Grid container>
                {checkboxes.medical.map(({ exam, selected }, index) => (
                  <Grid item key={index} mr={1}>
                    <Button
                      variant={selected ? "contained" : "outlined"}
                      style={
                        selected ? buttonSelectedStyle : buttonNotSelectedStyle
                      }
                      onClick={() => handleCheckboxChange("medical", index)}
                    >
                      {`${exam}`}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid container spacing={6} mt={2}>
          <Grid item xs={4}>
            <Typography>Law</Typography>
            <Grid container>
              {checkboxes.law.map(({ exam, selected }, index) => (
                <Grid key={index} mr={1} item>
                  <Button
                    variant={selected ? "contained" : "outlined"}
                    style={
                      selected ? buttonSelectedStyle : buttonNotSelectedStyle
                    }
                    onClick={() => handleCheckboxChange("law", index)}
                  >
                    {`${exam}`}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Typography>Engineering</Typography>
            <Grid container>
              {checkboxes.engineering.map(({ exam, selected }, index) => (
                <Grid key={index} mr={1} item>
                  <Button
                    variant={selected ? "contained" : "outlined"}
                    style={
                      selected ? buttonSelectedStyle : buttonNotSelectedStyle
                    }
                    onClick={() => handleCheckboxChange("engineering", index)}
                  >
                    {`${exam}`}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Typography>Medical</Typography>
            <Grid container>
              {checkboxes.medical.map(({ exam, selected }, index) => (
                <Grid key={index} mr={1} item>
                  <Button
                    variant={selected ? "contained" : "outlined"}
                    style={
                      selected ? buttonSelectedStyle : buttonNotSelectedStyle
                    }
                    onClick={() => handleCheckboxChange("medical", index)}
                  >
                    {`${exam}`}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Third Row */}
        <Grid container spacing={6} mt={2}>
          <Grid item xs={4}>
            <Typography>
              Other (If any entrance/criteria is not in the list)
            </Typography>
            <TextField
              placeholder="Type Here"
              fullWidth
              size="small"
              value={formData.other_criteria}
              onChange={handleInputChange("other_criteria")}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EntranceExams;
