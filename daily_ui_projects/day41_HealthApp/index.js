const sampleWorkouts=[
    { type: 'Running',duration: '30 minutes', calories: 300},
    { type:'Weigthlifting', duration: '45 minutes', calories: 400},
];

function startWorkout(){
    const steps=Math.floor(Math.random()*5000);
    const calories=Math.floor(Math.random()*500);
    const activeMinutes=Math.floor(Math.random()*60);

    document.getElementById('steps').innerText=steps;
    document.getElementById('calories').innerText=calories;
    document.getElementById('activeMinutes').innerText=activeMinutes;

    updateWorkoutHistory();
}

function updateWorkoutHistory(){
    const workoutList =document.getElementById('workoutList')
    workoutList.innerHTML=''

    sampleWorkouts.forEach(workout => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="icons/${workout.type.toLowerCase()}.png" alt="${workout.type} Icon">
            <span>${workout.type}</span>
            <span>${workout.duration}</span>
            <span>${workout.calories} Calories</span>
        `;
        workoutList.appendChild(li);
    });
}