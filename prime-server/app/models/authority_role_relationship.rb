# == Schema Information
#
# Table name: authority_role_relationships # 权限角色-用户 中间表
#
#  id                :integer          not null, primary key # 权限角色-用户 中间表
#  authority_role_id :integer
#  user_id           :integer
#

class AuthorityRoleRelationship < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  # relationships .............................................................
  belongs_to :user
  belongs_to :authority_role
  # validations ...............................................................
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end