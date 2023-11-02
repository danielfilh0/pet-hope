const SupabaseRepository = require('../../repositories/supabase-repository')
const UploadPetPhotoUseCase = require('../../use-cases/pets/upload-pet-photo-use-case')

function makeUploadPetPhotoUseCase() {
  const supabaseRepository = new SupabaseRepository()
  const uploadPetPhotoUseCase = new UploadPetPhotoUseCase(supabaseRepository)

  return uploadPetPhotoUseCase
}

module.exports = makeUploadPetPhotoUseCase
