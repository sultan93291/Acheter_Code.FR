"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { Calendar } from "@/Components/ui/calendar";

// DatePicker Component
export function DatePicker({ onDateChange }) {
  const [date, setDate] = useState(null); // Store selected date, initially null
  const [isCalenderOPen, setisCalenderOpen] = useState(false); // Manage popover open/close state

  // Function to handle date selection
  const handleSelect = selectedDate => {
    setDate(selectedDate); // Set selected date
    setisCalenderOpen(false); // Close popover after selection
    onDateChange(selectedDate);
  };

  return (
    <Popover open={isCalenderOPen} onOpenChange={setisCalenderOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-[212px] justify-start h-[55px] border-[1px] border-solid border-text_gray text-left font-normal"
          onClick={() => setisCalenderOpen(true)} // Open popover when button is clicked
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Select month</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date} // The selected date from the state
          onSelect={handleSelect} // Handle the date selection and close the popover
        />
      </PopoverContent>
    </Popover>
  );
}
