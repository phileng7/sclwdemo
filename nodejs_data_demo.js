const exam_00511777_value = require('./exam_00511777.json');
const exam_00497957_value = require('./exam_00497957.json');
const exam_00476060_value = require('./exam_00476060.json');
const exam_00476032_value = require('./exam_00476032.json');

const codpaciente_7454041 = require('./codpaciente_7454041.json');
const codpaciente_7454063 = require('./codpaciente_7454063.json');
const codpaciente_7465028 = require('./codpaciente_7465028.json');
const codpaciente_7470142 = require('./codpaciente_7470142.json');

const paciente_id_150708 = require('./paciente_id_150708.json');
const paciente_id_150757 = require('./paciente_id_150757.json');
const paciente_id_196062 = require('./paciente_id_196062.json');
const paciente_id_207187 = require('./paciente_id_207187.json');

const medico_150255 = require('./medico_150255.json');
const medico_150341 = require('./medico_150341.json');
const medico_150253 = require('./medico_150253.json');
const medico_150386 = require('./medico_150386.json');
const medico_207188 = require('./medico_207188.json');

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
//const port = 3000;
const port = process.env.PORT || 4000;

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
			switch(req.params.codPaciente) {
				case "7454041":
					res.send(codpaciente_7454041);
					break;
				case "7454063":
					res.send(codpaciente_7454063);
					break;
				case "7465028":
					res.send(codpaciente_7465028);
					break;
				case "7470142":
					res.send(codpaciente_7470142);
					break;
				default:
					res.status(404).send("codPaciente not found");
    }  
	}		
});

// find Paciente by ID
router.get('/pacientes/id/:idPaciente', (req, res) => {
    let query = '';
    if (!req.params.idPaciente) {
        res="Parameter required";
    } else {
      switch(req.params.idPaciente) {
				case "150708":
					res.send(paciente_id_150708);
					break;
				case "150757":
					res.send(paciente_id_150757);
					break;
				case "196062":
					res.send(paciente_id_196062);
					break;
				case "207187":
					res.send(paciente_id_207187);
					break;
				default:
					res.status(404).send("Medico not found");
    } 
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
			//console.log(req.params.id);
			switch(req.params.id) {
				case "00511777":
					res.send(exam_00511777_value);
					break;
				case "00497957":
					res.send(exam_00497957_value);
					break;
				case "00476060":
					res.send(exam_00476060_value);
					break;
				case "00476032":
					res.send(exam_00476032_value);
					break;
				default:
					res.status(404).send("Exam not found");
			}      
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
      switch(req.params.id) {
				case "150255":
					res.send(medico_150255);
					break;
				case "150341":
					res.send(medico_150341);
					break;					
				case "150253":
					res.send(medico_150253);
					break;					
				case "150386":
					res.send(medico_150386);
					break;					
				case "207188":
					res.send(medico_207188);
					break;					
				default:
					res.status(404).send("Medico not found");
    }    
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