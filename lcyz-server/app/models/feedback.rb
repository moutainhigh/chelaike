# == Schema Information
#
# Table name: feedbacks # 用户反馈
#
#  id         :integer          not null, primary key # 用户反馈
#  note       :string                                 # 反馈内容
#  user_id    :integer                                # 用户ID
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feedback < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  # relationships .............................................................
  belongs_to :user
  # validations ...............................................................
  validates :note, presence: true
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end
