import React, { useState } from "react";
import { Box, Button, CardContent, Grid, Typography } from "@mui/material";
import computer_quiz from "../../images/card.png";
import chemistry_quiz from "../../images/as-level.png";

export default function ExploreQuizzes() {
  const [showAllCards, setShowAllCards] = useState(false);

  // Dummy quiz data
  const dummyQuizzes = [
    {
      id: 1,
      image: computer_quiz,
      totalStudents: "5,957",
      totalTime: "30 mins",
      title: "Quiz 1",
      description:
        "Dive into an unparalleled quiz-taking experience that's designed exclusively for those who seek knowledge through interactive challenges",
    },
    {
      id: 2,
      image: computer_quiz,
      totalStudents: "5,957",
      totalTime: "45 mins",
      title: "Quiz 2",
      description:
        "Dive into an unparalleled quiz-taking experience that's designed exclusively for those who seek knowledge through interactive challenges",
    },
    {
      id: 3,
      image: computer_quiz,
      totalStudents: "5,957",
      totalTime: "45 mins",
      title: "Quiz 2",
      description:
        "Dive into an unparalleled quiz-taking experience that's designed exclusively for those who seek knowledge through interactive challenges",
    },
    {
      id: 4,
      image: computer_quiz,
      totalStudents: "5,957",
      totalTime: "45 mins",
      title: "Quiz 2",
      description:
        "Dive into an unparalleled quiz-taking experience that's designed exclusively for those who seek knowledge through interactive challenges",
    },
    {
      id: 5,
      image: computer_quiz,
      totalStudents: "5,957",
      totalTime: "45 mins",
      title: "Quiz 2",
      description:
        "Dive into an unparalleled quiz-taking experience that's designed exclusively for those who seek knowledge through interactive challenges",
    },
    {
      id: 6,
      image: computer_quiz,
      totalStudents: "5,957",
      totalTime: "45 mins",
      title: "Quiz 2",
      description:
        "Dive into an unparalleled quiz-taking experience that's designed exclusively for those who seek knowledge through interactive challenges",
    },
    // Add more dummy data as needed
  ];

  return (
    <div
      className="pb-20"
      style={{
        background:
          "linear-gradient(360deg,rgba(74, 6, 119, 1) 22%, rgba(212, 117, 9, 1) 67%, rgba(255, 255, 255, 1) 100%)",
        // padding: "40px 0px",
      }}
    >
      <h2 className="md:text-[40px]  mb-4 md:mb-8 text-[#5F3293] font-semibold text-[28px] xl:text-[45px] leading-[45px] text-center md:pt-20 pt-10 mx-auto">
        Choose your education level
      </h2>
      <div
        // p={2}

        className="w-[90vw] rounded-[50px] p-4 md:p-10 mx-auto  sm:mb-10 md:mb-20 bg-white/35 border-black "
        // borderRadius={8}
        // sx={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   flexDirection: "column",
        // }}
      >
        <Grid container spacing={4} my={6}>
          {dummyQuizzes.map((quiz) => (
            <Grid key={quiz.id} item xs={12} sm={6} md={6} lg={4}>
              <div
                variant="outlined"
                className=" h-[100%] lg:rounded-[50px] md:rounded-[40px] rounded-[20px]  xl:rounded-[68px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                // sx={{
                //   height: "100%",
                //   // borderRadius: "20px",
                //   borderRadius: {
                //     xl: "68px",
                //     lg: "50px",
                //     md: "40px",
                //     sm: "30px",
                //     xs: "28px",
                //   },
                // }}
              >
                <div className=" md:h-[200px] h-[190px] lg:rounded-[50px] md:rounded-[40px] rounded-[20px]  xl:rounded-[68px]   lg:h-[314px] relative overflow-hidden">
                  <img
                    src={chemistry_quiz}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                {/* <CardMedia
                  component="img"
                  height="200"
                  className="rounded-[50px]"
                  image={quiz.image}
                  alt={quiz.title}
                /> */}
                <CardContent>
                  <div className="flex justify-between px-4  items-center ">
                    <Typography
                      // variant="h6"
                      gutterBottom
                      sx={{
                        color: "#4E596B",
                        fontSize: "25px",
                        lineHeight: "35px",
                      }}
                    >
                      {quiz.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        color: "#324361",
                        color: "#4E596B",
                        fontSize: "14px",
                        lineHeight: "25px",
                      }}
                    >
                      {quiz.totalStudents} Students
                    </Typography>
                  </div>
                  <Typography
                    variant="body1"
                    // className="text-[13px] leading-[13px] "
                    sx={{
                      color: "#4E596B",
                      padding: "0px 16px",
                      fontSize: "13px",
                      lineHeight: "25px",
                    }}
                  >
                    {quiz.description}
                  </Typography>
                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        mt: 4,
                        fontSize: {
                          xl: "20px",
                          lg: "18px",
                          md: "16px",
                          sm: "14px",
                          xs: "12px",
                        },
                        px: 5.9,
                        py: 1.5,
                        background:
                          " linear-gradient(41deg,rgba(51, 19, 139, 1) 33%, rgba(127, 86, 217, 1) 95%)",
                        borderRadius: "68px",
                        color: "white",
                        borderColor: "white",
                      }}
                    >
                      View Courses
                    </Button>
                  </Box>
                </CardContent>
              </div>
            </Grid>
          ))}
        </Grid>
        {/* {!showAllCards && (
          <Button
            variant="outlined"
            onClick={() => setShowAllCards(true)}
            sx={{
              my: 2,
              background: "linear-gradient(45deg, #33138B, #7F56D9)",
              borderRadius: "10px",
              color: "white",
              borderColor: "white",
            }}
          >
            Explore More Quizzes
          </Button>
        )} */}
      </div>
    </div>
  );
}
