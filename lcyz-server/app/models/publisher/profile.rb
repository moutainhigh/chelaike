# == Schema Information
#
# Table name: publisher_profiles # 发布者信息
#
#  id         :integer          not null, primary key # 发布者信息
#  company_id :integer                                # 公司ID
#  type       :string                                 # 单表继承类型
#  data       :jsonb                                  # 账号信息
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Publisher::Profile < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  # relationships .............................................................
  # validations ...............................................................
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end