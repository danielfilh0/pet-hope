const { privateSupabase } = require('../libs/supabase')

class SupabaseRepository {
  async uploadFile({ bucketName, fileName, file }) {
    const { data, error } = await privateSupabase
      .storage
      .from(bucketName)
      .upload(fileName, file, {
        duplex: 'half',
        upsert: true
      })

    if (error) throw new Error(error)

    const url = privateSupabase.storage.from(bucketName).getPublicUrl(fileName)

    return {
      file: data,
      url: url.data.publicUrl
    }
  }
}

module.exports = SupabaseRepository