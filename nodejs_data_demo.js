const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
//const port = 3000;
const port = process.env.PORT || 4000

// body-parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//CORS
app.use(cors());

// defining routes
const router = express.Router();

//Verify Connection
router.get('/', (req, res) => { 
  res.json({ code: 200 }); 
});
app.use('/', router);


// Paciente
router.get('/pacientes', (req, res) => {
    res.json({ msg: "pacientes:return" }); 
});


// find Paciente by Code
router.get('/pacientes/:codPaciente', (req, res) => {
    let query = '';
    if (!req.params.codPaciente) {
        res="Parameter required";
    } else {
      res.json({ msg: "codPaciente:" + req.params.codPaciente }); 
    }    
});

// find Paciente by ID
router.get('/pacientes/id/:idPaciente', (req, res) => {
    let query = '';
    if (!req.params.idPaciente) {
        res="Parameter required";
    } else {
      res="idPaciente all";
    }    
});


// find Paciente by Name
router.get('/pacientes/name/:name', (req, res) => {
    let query = '';
    if (!req.params.name) {
        res="Parameter variable required";
    } else {
      res="name all";
    }    
});

// find Paciente by CPF
router.get('/pacientes/cpf/:cpf', (req, res) => {
    let query = '';
    if (!req.params.cpf) {
        res="Parameter variable required";
    } else {
      res="cpf all";
    }    
});

// Laudo - get Exam data by ID
router.get('/exams/:id', (req, res) => {
    let query = '';
    if (!req.params.id) {
        res="Parameter variable required";
    } else {
      res="exam id all";
    }    
});

// Laudo - get Exam data by ID, Item AND ItemMov
router.get('/exams/:id/:item/:movItem', (req, res) => {
    let query = '';
    if (!req.params.id || !req.params.item || !req.params.movItem) {
        res="Parameter variable required";
    } else {
      res="exams movItem all"
    }    
});


// find Med Asnt/Req by ID
router.get('/medicos/:id', (req, res) => {
    let query = '';
    if (!req.params.id) {
        res="Parameter required";
    } else {
      res="medicos all"
    }    
});

// Laudo - get Exam data by one date
router.get('/examsdate/:startDate', (req, res) => {
    let query = '';
    if (!req.params.startDate) {
        res="Parameter path variable required";
    } else {
      res="startDate all";
    }    
});

// Laudo - get Exam data by range date
router.get('/examsdate/:startDate/:endDate', (req, res) => {
    let query = '';
    if (!req.params.startDate) {
        res="Parameter path variable required";
    } else {
      res="endDate all"
    }    
});


// starting server
app.listen(port);
console.log('API is working!!!');

/*******************************/