const express = require('express');

const FuncionarioController = require('./controllers/FuncionarioController');
const Mn01Controller = require('./controllers/Mn01Controller');
const RebritagemController = require('./controllers/RebritagemController');

const DataController = require('./controllers/DataController');

const Ub02Controller = require('./controllers/Ub02Controller');
const Uc06Controller = require('./controllers/Uc06Controller');
const Uc07Controller = require('./controllers/Uc07Controller');
const Uc11Controller = require('./controllers/Uc11Controller');
const Uc13Controller = require('./controllers/Uc13Controller');
const Uc14Controller = require('./controllers/Uc14Controller');

const Up0507Controller = require('./controllers/Up0506Controller');
const Us06Controller = require('./controllers/Us06Controller');
const Us36Controller = require('./controllers/Us36Controller');
const UsinaController = require('./controllers/UsinaController');
const Ut07Controller = require('./controllers/Ut07Controller');
const Ut08Controller = require('./controllers/Ut08Controller');
const Ut37Controller = require('./controllers/Ut37Controller');

const ResumoController = require('./controllers/ResumoController');

const routes = express.Router();

routes.get('/data/:data', DataController.showData);

routes.get('/funcionario', FuncionarioController.index);
routes.post('/funcionario', FuncionarioController.store);
routes.get('/funcionario/:id', FuncionarioController.show);


routes.get('/rebritagem', RebritagemController.index);
routes.get('/rebritagem/:id', RebritagemController.show);
routes.get('/rebritagem/data/:data', RebritagemController.showData);
routes.post('/rebritagem', RebritagemController.store);


routes.get('/mn01', Mn01Controller.index);
routes.get('/mn01/:id', Mn01Controller.show);
routes.get('/mn01/data/:data', Mn01Controller.showData);
routes.post('/mn01', Mn01Controller.store);


routes.get("/us36", Us36Controller.index);
routes.get('/us36/:id', Us36Controller.show);
routes.get('/us36/data/:data', Us36Controller.showData);
routes.post('/us36', Us36Controller.store);


routes.get("/us06", Us06Controller.index);
routes.get('/us06/:id', Us06Controller.show);
routes.get('/us06/data/:data', Us06Controller.showData);
routes.post('/us06', Us06Controller.store);


routes.get("/ut07", Ut07Controller.index);
routes.get('/ut07/:id', Ut07Controller.show);
routes.get('/ut07/data/:data', Ut07Controller.showData);
routes.post('/ut07', Ut07Controller.store);


routes.get("/ut08", Ut08Controller.index);
routes.get('/ut08/:id', Ut08Controller.show);
routes.get('/ut08/data/:data', Ut08Controller.showData);
routes.post('/ut08', Ut08Controller.store);

routes.get("/ut37", Ut37Controller.index);
routes.get('/ut37/:id', Ut37Controller.show);
routes.get('/ut37/data/:data', Ut37Controller.showData);
routes.post('/ut37', Ut37Controller.store);


routes.get("/up0506", Up0507Controller.index);
routes.get('/up0506/:id', Up0507Controller.show);
routes.get('/up0506/data/:data', Up0507Controller.showData);
routes.post('/up0506', Up0507Controller.store);


routes.get("/uc06", Uc06Controller.index);
routes.get('/uc06/:id', Uc06Controller.show);
routes.get('/uc06/data/:data', Uc06Controller.showData);
routes.post('/uc06', Uc06Controller.store);


routes.get("/uc14", Uc14Controller.index);
routes.get('/uc14/:id', Uc14Controller.show);
routes.get('/uc14/data/:data', Uc14Controller.showData);
routes.post('/uc14', Uc14Controller.store);


routes.get("/uc07", Uc07Controller.index);
routes.get('/uc07/:id', Uc07Controller.show);
routes.get('/uc07/data/:data', Uc07Controller.showData);
routes.post('/uc07', Uc07Controller.store);

routes.get("/uc11", Uc11Controller.index);
routes.get('/uc11/:id', Uc11Controller.show);
routes.get('/uc11/data/:data', Uc11Controller.showData);
routes.post('/uc11', Uc11Controller.store);


routes.get("/uc13", Uc13Controller.index);
routes.get('/uc13/:id', Uc13Controller.show);
routes.get('/uc13/data/:data', Uc13Controller.showData);
routes.post('/uc13', Uc13Controller.store);


routes.get("/ub02", Ub02Controller.index);
routes.get('/ub02/:id', Ub02Controller.show);
routes.get('/ub02/data/:data', Ub02Controller.showData);
routes.post('/ub02', Ub02Controller.store);



routes.get("/usina", UsinaController.index);
routes.get('/usina/:id', UsinaController.show);
routes.get('/usina/data/:data', UsinaController.showData);
routes.post('/usina', UsinaController.store);


routes.get("/dataEquipamento/:data", DataController.showData);

routes.get("/resumo/:data", ResumoController.showResumo);
module.exports = routes;