# frozen_string_literal: true

class FileUploader
  def upload(tempfile:, dir:, ext:)
    # mkdir folder
    file_name = "#{dir}/#{Time.now.to_i}.#{ext}"

    FileUtils.mv(tempfile.path, [Rails.public_path, file_name].join)
    file_name
  end
end