import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './workout.css'

const CurrentWorkout = () => {
  const [exercises, setExercises] = useState([{ name: '', sets: [{ weight: '', reps: '' }] }]);
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');

  useEffect(() => {
    axios.get('/exercises')
      .then((response) => {
        setMuscleGroups(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('There was an error loading the muscle groups. ');
      });
  }, []);

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

  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroup(event.target.value);
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

  const filteredExercises = selectedMuscleGroup
    ? exercises.filter((exercise) => exercise.muscle_group === selectedMuscleGroup)
    : exercises;

    return (
        <div className="workout-form">
          <form onSubmit={handleSubmit}>
            <label>
              <span className="label-text">Muscle Group:</span>
              <select value={selectedMuscleGroup} onChange={handleMuscleGroupChange} className="muscle-group-select">
                <option value="">Select a muscle group</option>
                {muscleGroups.map((muscleGroup) => (
                  <option key={muscleGroup.id} value={muscleGroup.name}>{muscleGroup.name}</option>
                ))}
              </select>
            </label>
            {filteredExercises.map((exercise, exIndex) => (
              <div key={exIndex} className="exercise-container">
                <label>
                  <span className="label-text">Exercise:</span>
                  <select value={exercise.name} onChange={(event) => handleExerciseChange(exIndex, event)} className="exercise-select">
                    <option value="">Select an exercise</option>
                    {exercise?.options?.map((option) => (
                    <option key={option.id} value={option.name}>{option.name}</option>
                    ))}
                  </select>
                </label>
                {exercise.sets.map((set, setIndex) => (
                  <div key={setIndex} className="set-container">
                    <label>
                      <span className="label-text">Weight:</span>
                      <input
                        type="text"
                        value={set.weight}
                        onChange={(event) => handleWeightChange(exIndex, setIndex, event)}
                        className="weight-input"
                      />
                    </label>
                    <label>
                      <span className="label-text">Reps:</span>
                      <input
                        type="text"
                        value={set.reps}
                        onChange={(event) => handleRepsChange(exIndex, setIndex, event)}
                        className="reps-input"
                      />
                    </label>
                    {setIndex > 0 && (
                      <button type="button" onClick={() => handleRemoveSet(exIndex, setIndex)} className="remove-set-button">
                        -
                      </button>
                    )}
                    {setIndex === exercise.sets.length - 1 && (
                      <button type="button" onClick={() => handleAddSet(exIndex)} className="add-set-button">
                        +
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={() => handleRemoveExercise(exIndex)} className="remove-exercise-button">
                  Remove Exercise
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddExercise} className="add-exercise-button">
              Add Another Exercise
            </button>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      );
      
                }
export default CurrentWorkout