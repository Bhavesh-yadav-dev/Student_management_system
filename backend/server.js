import express from "express"
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

let students = [];

app.post("/students",(req,res) =>{
    const {name,email} = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        email,
    };

    students.push(newStudent);

    res.json({
        message : "new user added successfully",
    });

   console.log("Current Students List:", students);

})

app.get("/students", (req,res) => {
    res.json(students);
});



app.delete("/students/:id", (req ,res) =>{
    const {id} = req.params;

    students = students.filter((students) =>students.id !== Number(id));

    res.json({
        message :"The user is delete",
        students,
    })
});

app.get("/students/:id", (req, res) => {

    const { id } = req.params;

    const student = students.find(
        (student) => student.id === Number(id)
    );

    res.json(student);

});

app.put("/students/:id", (req, res) => {

    const { id } = req.params;
    const { name, email } = req.body;

    const student = students.find(
        (student) => student.id === Number(id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = name;
    student.email = email;

    res.json({
        message: "Student updated successfully",
        student
    });

});

app.listen(PORT , () => {
    console.log(`Everything is fine server running on port ${PORT}`);
});
