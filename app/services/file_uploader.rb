# frozen_string_literal: true

class FileUploader
  def upload(tempfile:, dir:, ext:)
    extended_dir = [Rails.public_path, dir].join
    FileUtils.mkdir_p(extended_dir) unless directory_exists?(extended_dir)

    file_name = "#{dir}/#{Time.now.to_i}.#{ext}"
    FileUtils.mv(tempfile.path, [Rails.public_path, file_name].join)

    file_name
  end

  private

  def directory_exists?(directory)
    File.directory?(directory)
  end
end
