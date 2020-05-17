# == Schema Information
#
# Table name: conversations
#
#  id                :integer          not null, primary key
#  user_id           :integer                                   # 所属用户
#  target_id         :integer          not null                 # 会话类型
#  conversation_type :string           not null                 # 目标 Id
#  根据不同的 conversationType，可能是用户 Id、讨论组 Id、群组 Id 或聊天室 Id。
#  is_top            :boolean          default(FALSE), not null # 置顶
#  is_blocked        :boolean          default(FALSE), not null # 免打扰
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Conversation < ActiveRecord::Base
  TYPES = %i(private group system push_service
             public_service app_public_service customer_service).freeze
  # accessors .................................................................
  # extends ...................................................................
  extend Enumerize
  # includes ..................................................................
  # relationships .............................................................
  belongs_to :user
  # validations ...............................................................
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  enumerize :conversation_type, in: TYPES
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end