const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./models/index');
const consultaRoutes = require('./routes/consultaRoutes');
const especialidadeRoutes = require('./routes/especialidadeRoutes');
const loginRoutes = require('./routes/loginRoutes');
const medicoRoutes = require('./routes/medicoRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const farmacoRoutes = require('./routes/farmacoRoutes');

db.sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Error connecting to database:', err));

app.use(cors());

app.use(express.json());
app.use('/consultas', consultaRoutes);
app.use('/especialidades', especialidadeRoutes);
app.use('/login', loginRoutes);
app.use('/medicos', medicoRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/farmacos', farmacoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
