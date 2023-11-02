const makeUploadPetPhotoUseCase = require('../../factories/pets/make-upload-pet-photo-use-case')

class UploadPetPhotoController {
  async handle(req, res) {
    const { file } = req

    if (!file) {
      return res.status(400).json({
        errorMessage: 'Forneça arquivo de imagem de formato PNG ou JPEG de no máximo 2MB.'
      })
    }

    const uploadPetPhotoUseCase = makeUploadPetPhotoUseCase()

    const { url } = await uploadPetPhotoUseCase.execute({
      fileName: file.originalname,
      format: file.mimetype,
      size: file.size,
      file: file.buffer
    })

    return res.status(201).json({ photoURL: url })
  }
}

module.exports = UploadPetPhotoController
