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

const exam_00511777_value =
{
    "recordsets": [
        [
            {
                "id": "0051177703311327856",
                "CodAmbulatorio": "00511777",
                "IDAtendimento": 568364,
                "IDItem": 3411,
                "DataAtendimento": "2020-04-14 13:00:00",
                "CodEmpresa": "0001",
                "IDMedico": 150253,
                "IDMedicoIndica": 207188,
                "IDPaciente": 207187,
                "Empresa": "Med Exames",
                "CodItem": "03311",
                "Item": "ECO COLOR DOPPLER CARDIACO",
                "IDItemMovimento": 327856,
                "IDItemGrupo": 120,
                "CodItemGrupo": "08",
                "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
                "IDPessoa": 207187,
                "CodPessoa": "000194071",
                "Pessoa": "Marilda Flores Silva",
                "Sexo": "F",
                "Nascimento": "1948-04-30T00:00:00.000Z",
                "Desativado": 0,
                "CodPaciente": "7470142",
                "UsuarioWeb": "7470142",
                "SenhaWeb": "64077835"
            }
        ]
    ],
    "recordset": [
        {
            "id": "0051177703311327856",
            "CodAmbulatorio": "00511777",
            "IDAtendimento": 568364,
            "IDItem": 3411,
            "DataAtendimento": "2020-04-14 13:00:00",
            "CodEmpresa": "0001",
            "IDMedico": 150253,
            "IDMedicoIndica": 207188,
            "IDPaciente": 207187,
            "Empresa": "Med Exames",
            "CodItem": "03311",
            "Item": "ECO COLOR DOPPLER CARDIACO",
            "IDItemMovimento": 327856,
            "IDItemGrupo": 120,
            "CodItemGrupo": "08",
            "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
            "IDPessoa": 207187,
            "CodPessoa": "000194071",
            "Pessoa": "Marilda Flores Silva",
            "Sexo": "F",
            "Nascimento": "1948-04-30T00:00:00.000Z",
            "Desativado": 0,
            "CodPaciente": "7470142",
            "UsuarioWeb": "7470142",
            "SenhaWeb": "64077835"
        }
    ],
    "output": {},
    "rowsAffected": []
}

const exam_00497957_value = 
{
    "recordsets": [
        [
            {
                "id": "0049795710495305394",
                "CodAmbulatorio": "00497957",
                "IDAtendimento": 549826,
                "IDItem": 10604,
                "DataAtendimento": "2018-08-24 10:26:00",
                "CodEmpresa": "0001",
                "IDMedico": 150253,
                "IDMedicoIndica": 150386,
                "IDPaciente": 196062,
                "Empresa": "Med Exames",
                "CodItem": "10495",
                "Item": "Doppler Venoso Superficial e Profundo ",
                "IDItemMovimento": 305394,
                "IDItemGrupo": 133,
                "CodItemGrupo": "21",
                "ItemGrupo": "ULTRA-SONOGRAFIA",
                "IDPessoa": 196062,
                "CodPessoa": "000183941",
                "Pessoa": "Jailda Cunha Vargas do Canto",
                "Sexo": "F",
                "Nascimento": "1954-03-09T00:00:00.000Z",
                "Desativado": 0,
                "CodPaciente": "7465028",
                "UsuarioWeb": "7465028",
                "SenhaWeb": "48934940"
            },
            {
                "id": "0049795710495305395",
                "CodAmbulatorio": "00497957",
                "IDAtendimento": 549826,
                "IDItem": 10604,
                "DataAtendimento": "2018-08-24 10:26:00",
                "CodEmpresa": "0001",
                "IDMedico": 150253,
                "IDMedicoIndica": 150386,
                "IDPaciente": 196062,
                "Empresa": "Med Exames",
                "CodItem": "10495",
                "Item": "Doppler Venoso Superficial e Profundo ",
                "IDItemMovimento": 305395,
                "IDItemGrupo": 133,
                "CodItemGrupo": "21",
                "ItemGrupo": "ULTRA-SONOGRAFIA",
                "IDPessoa": 196062,
                "CodPessoa": "000183941",
                "Pessoa": "Jailda Cunha Vargas do Canto",
                "Sexo": "F",
                "Nascimento": "1954-03-09T00:00:00.000Z",
                "Desativado": 0,
                "CodPaciente": "7465028",
                "UsuarioWeb": "7465028",
                "SenhaWeb": "48934940"
            }
        ]
    ],
    "recordset": [
        {
            "id": "0049795710495305394",
            "CodAmbulatorio": "00497957",
            "IDAtendimento": 549826,
            "IDItem": 10604,
            "DataAtendimento": "2018-08-24 10:26:00",
            "CodEmpresa": "0001",
            "IDMedico": 150253,
            "IDMedicoIndica": 150386,
            "IDPaciente": 196062,
            "Empresa": "Med Exames",
            "CodItem": "10495",
            "Item": "Doppler Venoso Superficial e Profundo ",
            "IDItemMovimento": 305394,
            "IDItemGrupo": 133,
            "CodItemGrupo": "21",
            "ItemGrupo": "ULTRA-SONOGRAFIA",
            "IDPessoa": 196062,
            "CodPessoa": "000183941",
            "Pessoa": "Jailda Cunha Vargas do Canto",
            "Sexo": "F",
            "Nascimento": "1954-03-09T00:00:00.000Z",
            "Desativado": 0,
            "CodPaciente": "7465028",
            "UsuarioWeb": "7465028",
            "SenhaWeb": "48934940"
        },
        {
            "id": "0049795710495305395",
            "CodAmbulatorio": "00497957",
            "IDAtendimento": 549826,
            "IDItem": 10604,
            "DataAtendimento": "2018-08-24 10:26:00",
            "CodEmpresa": "0001",
            "IDMedico": 150253,
            "IDMedicoIndica": 150386,
            "IDPaciente": 196062,
            "Empresa": "Med Exames",
            "CodItem": "10495",
            "Item": "Doppler Venoso Superficial e Profundo ",
            "IDItemMovimento": 305395,
            "IDItemGrupo": 133,
            "CodItemGrupo": "21",
            "ItemGrupo": "ULTRA-SONOGRAFIA",
            "IDPessoa": 196062,
            "CodPessoa": "000183941",
            "Pessoa": "Jailda Cunha Vargas do Canto",
            "Sexo": "F",
            "Nascimento": "1954-03-09T00:00:00.000Z",
            "Desativado": 0,
            "CodPaciente": "7465028",
            "UsuarioWeb": "7465028",
            "SenhaWeb": "48934940"
        }
    ],
    "output": {},
    "rowsAffected": []
}

exam_00476060_value =
{
    "recordsets": [
        [
            {
                "id": "0047606003310246563",
                "CodAmbulatorio": "00476060",
                "IDAtendimento": 497565,
                "IDItem": 3410,
                "DataAtendimento": "2016-01-18 09:10:00",
                "CodEmpresa": "0001",
                "IDMedico": 150255,
                "IDMedicoIndica": 150341,
                "IDPaciente": 150757,
                "Empresa": "Med Exames",
                "CodItem": "03310",
                "Item": "ECODOPPLERCARDIOGRAMA TRANSTORACICO",
                "IDItemMovimento": 246563,
                "IDItemGrupo": 120,
                "CodItemGrupo": "08",
                "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
                "IDPessoa": 150757,
                "CodPessoa": "000150651",
                "Pessoa": "Albino Angelico Boquinhas Ladino",
                "Sexo": "M",
                "Nascimento": "1945-11-24T00:00:00.000Z",
                "Desativado": 0,
                "CodPaciente": "7454063",
                "UsuarioWeb": "7454063",
                "SenhaWeb": "14272971"
            },
            {
                "id": "0047606010497246564",
                "CodAmbulatorio": "00476060",
                "IDAtendimento": 497565,
                "IDItem": 10606,
                "DataAtendimento": "2016-01-18 09:10:00",
                "CodEmpresa": "0001",
                "IDMedico": 150255,
                "IDMedicoIndica": 150341,
                "IDPaciente": 150757,
                "Empresa": "Med Exames",
                "CodItem": "10497",
                "Item": "ECO DOPPLER EM CORES DE CARÓTIDAS E VERTEBRAIS",
                "IDItemMovimento": 246564,
                "IDItemGrupo": 120,
                "CodItemGrupo": "08",
                "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
                "IDPessoa": 150757,
                "CodPessoa": "000150651",
                "Pessoa": "Albino Angelico Boquinhas Ladino",
                "Sexo": "M",
                "Nascimento": "1945-11-24T00:00:00.000Z",
                "Desativado": 0,
                "CodPaciente": "7454063",
                "UsuarioWeb": "7454063",
                "SenhaWeb": "14272971"
            }
        ]
    ],
    "recordset": [
        {
            "id": "0047606003310246563",
            "CodAmbulatorio": "00476060",
            "IDAtendimento": 497565,
            "IDItem": 3410,
            "DataAtendimento": "2016-01-18 09:10:00",
            "CodEmpresa": "0001",
            "IDMedico": 150255,
            "IDMedicoIndica": 150341,
            "IDPaciente": 150757,
            "Empresa": "Med Exames",
            "CodItem": "03310",
            "Item": "ECODOPPLERCARDIOGRAMA TRANSTORACICO",
            "IDItemMovimento": 246563,
            "IDItemGrupo": 120,
            "CodItemGrupo": "08",
            "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
            "IDPessoa": 150757,
            "CodPessoa": "000150651",
            "Pessoa": "Albino Angelico Boquinhas Ladino",
            "Sexo": "M",
            "Nascimento": "1945-11-24T00:00:00.000Z",
            "Desativado": 0,
            "CodPaciente": "7454063",
            "UsuarioWeb": "7454063",
            "SenhaWeb": "14272971"
        },
        {
            "id": "0047606010497246564",
            "CodAmbulatorio": "00476060",
            "IDAtendimento": 497565,
            "IDItem": 10606,
            "DataAtendimento": "2016-01-18 09:10:00",
            "CodEmpresa": "0001",
            "IDMedico": 150255,
            "IDMedicoIndica": 150341,
            "IDPaciente": 150757,
            "Empresa": "Med Exames",
            "CodItem": "10497",
            "Item": "ECO DOPPLER EM CORES DE CARÓTIDAS E VERTEBRAIS",
            "IDItemMovimento": 246564,
            "IDItemGrupo": 120,
            "CodItemGrupo": "08",
            "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
            "IDPessoa": 150757,
            "CodPessoa": "000150651",
            "Pessoa": "Albino Angelico Boquinhas Ladino",
            "Sexo": "M",
            "Nascimento": "1945-11-24T00:00:00.000Z",
            "Desativado": 0,
            "CodPaciente": "7454063",
            "UsuarioWeb": "7454063",
            "SenhaWeb": "14272971"
        }
    ],
    "output": {},
    "rowsAffected": []
}

const exam_00476032_value = 
{
    "recordsets": [
        [
            {
                "id": "0047603203310246515",
                "CodAmbulatorio": "00476032",
                "IDAtendimento": 497532,
                "IDItem": 3410,
                "DataAtendimento": "2016-01-13 09:25:00",
                "CodEmpresa": "0001",
                "IDMedico": 150255,
                "IDMedicoIndica": 150341,
                "IDPaciente": 150708,
                "Empresa": "Med Exames",
                "CodItem": "03310",
                "Item": "ECODOPPLERCARDIOGRAMA TRANSTORACICO",
                "IDItemMovimento": 246515,
                "IDItemGrupo": 120,
                "CodItemGrupo": "08",
                "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
                "IDPessoa": 150708,
                "CodPessoa": "000150578",
                "Pessoa": "Patricia Faria Venturini",
                "Sexo": "F",
                "Nascimento": "1978-01-31T00:00:00.000Z",
                "Desativado": 0,
                "CodPaciente": "7454041",
                "UsuarioWeb": "7454041",
                "SenhaWeb": "28548573"
            },
            {
                "id": "0047603203313246516",
                "CodAmbulatorio": "00476032",
                "IDAtendimento": 497532,
                "IDItem": 3413,
                "DataAtendimento": "2016-01-13 09:25:00",
                "CodEmpresa": "0001",
                "IDMedico": 150255,
                "IDMedicoIndica": 150341,
                "IDPaciente": 150708,
                "Empresa": "Med Exames",
                "CodItem": "03313",
                "Item": "ECO DOPPLER EM CORES DE CARÓTIDAS ",
                "IDItemMovimento": 246516,
                "IDItemGrupo": 120,
                "CodItemGrupo": "08",
                "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
                "IDPessoa": 150708,
                "CodPessoa": "000150578",
                "Pessoa": "Patricia Faria Venturini",
                "Sexo": "F",
                "Nascimento": "1978-01-31T00:00:00.000Z",
                "Desativado": 0,
                "CodPaciente": "7454041",
                "UsuarioWeb": "7454041",
                "SenhaWeb": "28548573"
            }
        ]
    ],
    "recordset": [
        {
            "id": "0047603203310246515",
            "CodAmbulatorio": "00476032",
            "IDAtendimento": 497532,
            "IDItem": 3410,
            "DataAtendimento": "2016-01-13 09:25:00",
            "CodEmpresa": "0001",
            "IDMedico": 150255,
            "IDMedicoIndica": 150341,
            "IDPaciente": 150708,
            "Empresa": "Med Exames",
            "CodItem": "03310",
            "Item": "ECODOPPLERCARDIOGRAMA TRANSTORACICO",
            "IDItemMovimento": 246515,
            "IDItemGrupo": 120,
            "CodItemGrupo": "08",
            "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
            "IDPessoa": 150708,
            "CodPessoa": "000150578",
            "Pessoa": "Patricia Faria Venturini",
            "Sexo": "F",
            "Nascimento": "1978-01-31T00:00:00.000Z",
            "Desativado": 0,
            "CodPaciente": "7454041",
            "UsuarioWeb": "7454041",
            "SenhaWeb": "28548573"
        },
        {
            "id": "0047603203313246516",
            "CodAmbulatorio": "00476032",
            "IDAtendimento": 497532,
            "IDItem": 3413,
            "DataAtendimento": "2016-01-13 09:25:00",
            "CodEmpresa": "0001",
            "IDMedico": 150255,
            "IDMedicoIndica": 150341,
            "IDPaciente": 150708,
            "Empresa": "Med Exames",
            "CodItem": "03313",
            "Item": "ECO DOPPLER EM CORES DE CARÓTIDAS ",
            "IDItemMovimento": 246516,
            "IDItemGrupo": 120,
            "CodItemGrupo": "08",
            "ItemGrupo": "CARDIOLOGIA - DIAGNOSE E TERAPIA",
            "IDPessoa": 150708,
            "CodPessoa": "000150578",
            "Pessoa": "Patricia Faria Venturini",
            "Sexo": "F",
            "Nascimento": "1978-01-31T00:00:00.000Z",
            "Desativado": 0,
            "CodPaciente": "7454041",
            "UsuarioWeb": "7454041",
            "SenhaWeb": "28548573"
        }
    ],
    "output": {},
    "rowsAffected": []
}


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
			console.log(req.params.id);
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