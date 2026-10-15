const students = ["Josie", "Lauren", "Jeffrey", "Nana", "Tnush", "Trenton", "Vincent", "Ms.Z" "];

const numberOfGroups = 3;
const shuffledStudents = [...students].sort(() => Math.random() - 0.5);


const groups = Array.from({ length: numberOfGroups }, () => []);


shuffledStudents.forEach((student, index) => {
    
    const targetGroupIndex = index % numberOfGroups;
    groups[targetGroupIndex].push(student);
});


console.log("--- FINAL GROUPS ---");
groups.forEach((group, groupNumber) => {
    console.log(`Group ${groupNumber + 1}: ${group.join(", ")}`);
});
