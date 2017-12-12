# == Schema Information
#
# Table name: smtp_settings
#
#  id         :integer          not null, primary key
#  account_id :integer
#  password   :string(255)
#  from_email :string(255)
#  reply_to   :string(255)
#  address    :string(255)
#  port       :string(255)
#  domain     :string(255)
#  username   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SmtpSetting < ApplicationRecord
  belongs_to :account

  has_many :notification_delivers

  attr_encrypted :password, key: SecureRandom.random_bytes(32)
  attr_encrypted :username, key: SecureRandom.random_bytes(32)
end
