const CustomError = require('../../utils/custom-error')

class UploadPetPhotoUseCase {
  constructor(supabaseRepository) {
    this.supabaseRepository = supabaseRepository
  }

  async execute({ fileName, format, size, file }) {
    const fileSizeLimit = 2000000 // 2MB
    const acceptedFormats = ['image/png', 'image/jpeg']

    if (size > fileSizeLimit) {
      throw new CustomError(413, 'O arquivo precisa ter no máximo 2MB.')
    }

    if (!acceptedFormats.includes(format)) {
      throw new CustomError(422, 'O arquivo precisa ter do tipo imagem: PNG ou JPG.')
    }

    try {
      const photo = await this.supabaseRepository.uploadFile({
        bucketName: 'photos',
        fileName: Date.now() + ' - ' + fileName,
        file
      })

      return photo
    } catch(e) {
      throw new CustomError(500, e)
    }
  }
}

module.exports = UploadPetPhotoUseCase
