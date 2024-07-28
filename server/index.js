const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.listen(8888, () => {
    console.log('8876 서버가 작동되고 있습니다.');
});