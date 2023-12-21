import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ImportantNews = ({ setImportantNews }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.text.primary;

  const buttonSelectedStyle = {
    borderColor: primaryColor,
  };

  const handleButtonClick = (item) => {
    if (formData.news_category === item) {
      setFormData({ ...formData, news_category: "" });
    } else {
      setFormData({ ...formData, news_category: item });
    }
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [formData, setFormData] = useState({
    news_post: "",
    news_category: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setImportantNews(formData);
  }, [setImportantNews, formData]);

  const [addMoreNews, setAddMoreNews] = useState([""]);
  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>IMPORTANT NEWS </strong>
            </em>
          </Typography>
        </Grid>

        {addMoreNews.map((data, index) => (
          <Grid container spacing={6} mb={6} key={index}>
            <Grid item xs={8}>
              <Typography>Post a news</Typography>
              <TextField
                placeholder="Describe Here"
                type="text"
                multiline
                minRows={2.5}
                fullWidth
                value={formData.news_post}
                onChange={handleInputChange("news_post")}
              />
            </Grid>

            <Grid xs={4} item>
              <Typography>News Category</Typography>
              <Grid>
                <Grid container spacing={2}>
                  <Grid xs={6} item>
                    <Grid mb={2}>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={
                          formData.news_category === "Very Important"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("Very Important")}
                      >
                        Very Important
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={
                          formData.news_category === "Medium Important"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("Medium Important")}
                      >
                        Medium Important
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid xs={6} item>
                    <Grid mb={2}>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={
                          formData.news_category === "Important"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("Important")}
                      >
                        Impotant
                      </Button>
                    </Grid>

                    <Grid>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={
                          formData.news_category === "Less Important"
                            ? {}
                            : buttonNotSelectedStyle
                        }
                        onClick={() => handleButtonClick("Less Important")}
                      >
                        Less Impotant
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreNews([...addMoreNews, ""])}
          >
            + Add More News
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default ImportantNews;