// page.tsx
"use client";

import React, { useState } from "react";
import {
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const questionData = {
  question: "Question 1",
  description: "Select an option",
  options: ["Option A", "Option B", "Option C", "Option D"],
  other: false, // To include an 'Other' option with a text field
};

function QuestionForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherText, setOtherText] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== "Other") {
      setOtherText(""); // Clear the 'Other' text field if not selected
    }
  };

  const handleOtherTextChange = (event: any) => {
    setOtherText(event.target.value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container maxWidth="sm">
        <div className="flex flex-col items-center justify-center gap-2 p-5 max-w-md w-full shadow-lg rounded-lg">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-center">
              {questionData.question}
            </h1>

            <p className="text-xs text-center">{questionData.description}</p>

            <hr className="w-full" />

            <div className="flex flex-col items-center gap-2 w-full justify-center">
              <FormControl component="fieldset">
                <RadioGroup
                  name="customized-radios"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  {questionData.options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                  {questionData.other && (
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label={
                        <TextField
                          fullWidth
                          size="small"
                          variant="outlined"
                          disabled={selectedOption !== "Other"}
                          value={otherText}
                          onChange={handleOtherTextChange}
                          placeholder="Specify other..."
                        />
                      }
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default QuestionForm;
