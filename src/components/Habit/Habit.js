import React, { useState, useEffect } from 'react';
import HabitCard from '../HabitCard/HabitCard';
import Modal from "../Modal/Modal";
import "./Habit.css";
import axios from "axios";

function Habit() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    // Fetch habits data from API or perform any initial data loading logic
    // Example:
    // axios.get("/api/habits")
    //   .then(response => {
    //     setHabits(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // For this example, I'll set sample data directly
    // const sampleData = [
    //   {
    //     _id: "1",
    //     habit: "Sample Habit 1",
    //     completed: false,
    //   },
    //   {
    //     _id: "2",
    //     habit: "Sample Habit 2",
    //     completed: true,
    //   },
    // ];
    // setHabits(sampleData);
  }, []);

  return (
    <div className="Habit">
      <div className="Habit__heading-container">
        <h2 className="Habit-header">Habit Checklist</h2>
        <Modal habits={habits} setHabits={setHabits} />
      </div>
      <div className="Habit-cards-container">
        {habits.map((habit) => (
          <HabitCard key={habit._id} habit={habit} setHabits={setHabits} habits={habits} />
        ))}
      </div>
    </div>
  );
}

export default Habit;