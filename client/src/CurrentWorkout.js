import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentWorkout() {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);
  const [sets, setSets] = useState(null);

  useEffect(() => {
    axios.get('/api/workouts')
      .then(response => {
        setWorkouts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function handleWorkoutSelect(event) {
    setSelectedWorkout(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handleRepsChange(event) {
    setReps(event.target.value);
  }

  function handleSetsChange(event) {
    setSets(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/exercise_sets', {
      exercise_set: {
        exercise_id: selectedWorkout,
        weight: weight,
        reps: reps,
        sets: sets
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <h2>Track a Workout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="workout-select">Select a Workout:</label>
          <select id="workout-select" onChange={handleWorkoutSelect}>
            <option value="">Select a workout</option>
            {workouts.map(workout => (
              <option key={workout.id} value={workout.id}>{workout.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="weight-input">Weight (in pounds):</label>
          <input id="weight-input" type="number" min="0" onChange={handleWeightChange} />
        </div>
        <div>
          <label htmlFor="reps-input">Reps:</label>
          <input id="reps-input" type="number" min="0" onChange={handleRepsChange} />
        </div>
        <div>
          <label htmlFor="sets-input">Sets:</label>
          <input id="sets-input" type="number" min="0" onChange={handleSetsChange} />
        </div>
        <button type="submit" disabled={!selectedWorkout || !weight || !reps || !sets}>Submit</button>
      </form>
    </div>
  );
}

export default CurrentWorkout