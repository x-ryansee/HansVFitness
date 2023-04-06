# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users

User.create(name: "John Smith", email: "john@example.com", password: "password", role: "user")
User.create(name: "Jane Doe", email: "jane@example.com", password: "password", role: "user")
User.create(name: "Admin User", email: "admin@example.com", password: "password", role: "admin")



# Exercises

Exercise.create([
    { name: "Bench Press", muscle_group: "Chest", description: "Lie on a bench and lower a barbell to your chest, then press it back up."},
    { name: "Squat", muscle_group: "Legs", description: "Stand with a barbell on your shoulders and squat down until your thighs are parallel to the ground."},
    { name: "Deadlift", muscle_group: "Back", description: "Lift a barbell off the ground with straight arms and lift it up until you're standing straight."},
    { name: "Overhead Press", muscle_group: "Shoulders", description: "Stand with a barbell on your shoulders and press it up overhead."},
    { name: "Pull-up", muscle_group: "Back", description: "Hang from a bar and pull yourself up until your chin is above the bar."},
    { name: "Dumbbell Fly", muscle_group: "Chest", description: "Lie on a bench with dumbbells and open your arms wide, then bring them back up."},
    { name: "Bicep Curl", muscle_group: "Arms", description: "Stand with dumbbells and curl them up towards your shoulders."},
    { name: "Tricep Extension", muscle_group: "Arms", description: "Hold a dumbbell behind your head with both hands, then straighten your arms."},
    { name: "Leg Press", muscle_group: "Legs", description: "Sit on a machine and press your legs against a platform."},
    { name: "Leg Curl", muscle_group: "Legs", description: "Lie on a machine and curl your legs towards your buttocks."},
    { name: "Lat Pulldown", muscle_group: "Back", description: "Sit on a machine and pull a bar down towards your chest."},
    { name: "Hammer Curl", muscle_group: "Arms", description: "Stand with dumbbells and curl them up with your palms facing each other."},
    { name: "Calf Raise", muscle_group: "Legs", description: "Stand on a machine and raise your heels up and down."},
    { name: "Seated Row", muscle_group: "Back", description: "Sit on a machine and pull a handle towards your torso."},
    { name: "Push-up", muscle_group: "Chest", description: "Start in a plank position and lower your body down and then press it back up."},
    { name: "Lateral Raise", muscle_group: "Shoulders", description: "Stand with dumbbells at your sides and lift them up to shoulder height."},
    { name: "Skullcrusher", muscle_group: "Arms", description: "Lie on a bench with a barbell and lower it towards your forehead, then lift it back up."},
    { name: "Plank", muscle_group: "Core", description: "Start in a push-up position and hold your body straight for as long as you can."},
    { name: "Russian Twist", muscle_group: "Core", description: "Sit on the ground with your feet in the air and twist your torso from side to side while holding a medicine ball."},
    { name: "Flutter Kick", muscle_group: "Core", description: "Lie on your back and flutter your legs up and down while keeping them straight."}
  ])
  


  # Workouts
john = User.find_by(name: "John Smith")
jane = User.find_by(name: "Jane Doe")

Workout.create(date: Date.today, user: john)
Workout.create(date: Date.yesterday, user: jane)

# Exercise Sets
bench_press = Exercise.find_by(name: "Bench Press")
squats = Exercise.find_by(name: "Squats")
deadlifts = Exercise.find_by(name: "Deadlifts")

john_today_workout = Workout.find_by(date: Date.today, user: john)
jane_yesterday_workout = Workout.find_by(date: Date.yesterday, user: jane)

ExerciseSet.create(exercise: bench_press, workout: john_today_workout, weight: 100, reps: 8)
ExerciseSet.create(exercise: squats, workout: john_today_workout, weight: 150, reps: 10)
ExerciseSet.create(exercise: deadlifts, workout: john_today_workout, weight: 200, reps: 6)

ExerciseSet.create(exercise: bench_press, workout: jane_yesterday_workout, weight: 80, reps: 12)
ExerciseSet.create(exercise: squats, workout: jane_yesterday_workout, weight: 120, reps: 8)
ExerciseSet.create(exercise: deadlifts, workout: jane_yesterday_workout, weight: 180, reps: 6)