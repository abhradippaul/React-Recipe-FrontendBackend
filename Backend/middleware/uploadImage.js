const multer = require("multer")

const storage = multer.diskStorage({
    destination : function destination(req,file,cb) {
        cb(null,"./uploads")
    },
    filename : function filename(req,file,cb) {
        let location = `localhost:${process.env.PORT}/uploads/${Date.now()}-${file.originalname}`
        req.body.imagepath = location
        cb(null,file.originalname)
    }
})
const upload = multer({storage})
module.exports = upload
