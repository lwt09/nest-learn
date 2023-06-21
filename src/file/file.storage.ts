import fs from 'fs';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = './uploads';
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export default storage;
