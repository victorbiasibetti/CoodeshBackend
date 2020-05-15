const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const tempFolder = path.resolve(__dirname, '..', '..', 'tmp');

module.exports = {
  directory: tempFolder,
  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(5).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
