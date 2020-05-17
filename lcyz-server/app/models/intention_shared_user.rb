# == Schema Information
#
# Table name: intention_shared_users # 意向共享用户中间表
#
#  id           :integer          not null, primary key # 意向共享用户中间表
#  intention_id :integer                                # 关联的意向
#  user_id      :integer                                # 分享给的用户
#  customer_id  :integer                                # 客户ID
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class IntentionSharedUser < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  # relationships .............................................................
  belongs_to :intention
  belongs_to :user
  # validations ...............................................................
  validates :intention_id, :user_id, presence: true
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end