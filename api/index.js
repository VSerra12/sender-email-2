const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

  

app.post('/subscribe', async (req, res) => {
    const subscriberData = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'serravictoria.atv@gmail.com',
            pass: 'yoew habb mjzw ieuy'
        }
    });

    let mailOptions = {
        from: req.body.email,
        to: 'vicky.serra.24@gmail.com',
        subject: 'Nuevo suscriptor',
        text: `Nuevo suscriptor: ${JSON.stringify(subscriberData)}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al enviar el correo' });
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).json({ message: 'Suscriptor registrado y notificado por correo' });
        }
    });
});

const port = 5500;
app.listen(process.env.PORT || port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
