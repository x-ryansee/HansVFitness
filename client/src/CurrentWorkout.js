import React, { useState } from 'react';
import axios from 'axios';

const CurrentWorkout = () => {
  const [exercises, setExercises] = useState([{ name: '', sets: [{ weight: '', reps: '' }] }]);

  const handleExerciseChange = (index, event) => {
    const values = [...exercises];
    values[index].name = event.target.value;
    setExercises(values);
  };

  const handleWeightChange = (exIndex, setIndex, event) => {
    const values = [...exercises];
    values[exIndex].sets[setIndex].weight = event.target.value;
    setExercises(values);
  };

  const handleRepsChange = (exIndex, setIndex, event) => {
    const values = [...exercises];
    values[exIndex].sets[setIndex].reps = event.target.value;
    setExercises(values);
  };

  const handleAddExercise = () => {
    const values = [...exercises];
    values.push({ name: '', sets: [{ weight: '', reps: '' }] });
    setExercises(values);
  };

  const handleAddSet = (index) => {
    const values = [...exercises];
    values[index].sets.push({ weight: '', reps: '' });
    setExercises(values);
  };

  const handleRemoveExercise = (index) => {
    const values = [...exercises];
    values.splice(index, 1);
    setExercises(values);
  };

  const handleRemoveSet = (exIndex, setIndex) => {
    const values = [...exercises];
    values[exIndex].sets.splice(setIndex, 1);
    setExercises(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/exercise_sets', { exercise_sets: exercises })
      .then((response) => {
        console.log(response.data);
        alert('Workout saved successfully!');
      })
      .catch((error) => {
        console.log(error);
        alert('There was an error saving the workout.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {exercises.map((exercise, exIndex) => (
          <div key={exIndex}>
            <label>
              Exercise:
              <select value={exercise.name} onChange={(event) => handleExerciseChange(exIndex, event)}>
                <option value="">Select an exercise</option>
                {/* Replace with list of exercises from database */}
                <option value="Bench Press">Bench Press</option>
                <option value="Squats">Squats</option>
                <option value="Deadlifts">Deadlifts</option>
              </select>
            </label>
            {exercise.sets.map((set, setIndex) => (
              <div key={setIndex}>
                <label>
                  Weight:
                  <input
                    type="text"
                    value={set.weight}
                    onChange={(event) => handleWeightChange(exIndex, setIndex, event)}
                  />
                </label>
                <label>
                  Reps:
                  <input
                    type="text"
                    value={set.reps}
                    onChange={(event) => handleRepsChange(exIndex, setIndex, event)}
                  />
                </label>
                {setIndex > 0 && (
                  <button type="button" onClick={() => handleRemoveSet(exIndex, setIndex)}>
                    -
                  </button>
                )}
                {setIndex === exercise.sets.length - 1 && (
                  <button type="button" onClick={() => handleAddSet(exIndex)}>
                    +
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => handleRemoveExercise(exIndex)}>
              Remove Exercise
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddExercise}>
          Add Another Exercise
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

                }

export default CurrentWorkout