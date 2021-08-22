const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Funcionario = require('../models/Funcionario');
const Mn01 = require('../models/Mn01');
const Rebritagem = require('../models/Rebritagem');
const Ub02 = require('../models/Ub02');
const Uc06 = require('../models/Uc06');
const Uc07 = require('../models/Uc07');
const Uc11 = require('../models/Uc11');
const Uc13 = require('../models/Uc13');
const Uc14 = require('../models/Uc14');
const Up0506 = require('../models/Up0506');
const Us06 = require('../models/Us06');
const Us36 = require('../models/Us36');
const Usina = require('../models/Usina');
const Ut07 = require('../models/Ut07');
const Ut08 = require('../models/Ut08');
const Ut37 = require('../models/Ut37');




const database = new Sequelize(dbConfig);

Funcionario.init(database);
Rebritagem.init(database);
Mn01.init(database);
Ub02.init(database);
Uc06.init(database);
Uc07.init(database);
Uc11.init(database);
Uc13.init(database);
Uc14.init(database);
Up0506.init(database);
Us06.init(database);
Us36.init(database);
Usina.init(database);
Ut07.init(database);
Ut08.init(database);
Ut37.init(database);

module.exports = database;