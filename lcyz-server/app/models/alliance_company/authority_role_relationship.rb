# == Schema Information
#
# Table name: alliance_authority_role_relationships # 联盟公司角色--用户关联表
#
#  id                :integer          not null, primary key # 联盟公司角色--用户关联表
#  authority_role_id :integer
#  user_id           :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class AllianceCompany::AuthorityRoleRelationship < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  # relationships .............................................................
  belongs_to :user, foreign_key: "user_id", class_name: "AllianceCompany::User"
  belongs_to :authority_role,
             foreign_key: "authority_role_id",
             class_name: "AllianceCompany::AuthorityRole"
  # validations ...............................................................
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end