const multer = require('multer')
const path = require('path')

const uploadFolder = path.resolve(__dirname, '../../tmp')

const storage = multer.memoryStorage({
  storage: uploadFolder
})

const upload = multer({ storage: storage })

module.exports = upload