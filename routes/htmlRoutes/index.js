// dependencies
const path = require('path');
const router = require('express').Router();
// get route
router.get('/notes', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})
// get route
router.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;