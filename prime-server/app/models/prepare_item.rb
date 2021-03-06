# == Schema Information
#
# Table name: prepare_items # 整备项目
#
#  id                :integer          not null, primary key # 整备项目
#  name              :string                                 # 项目名
#  amount_cents      :integer                                # 费用
#  prepare_record_id :integer                                # 整备记录ID
#  note              :text                                   # 备注
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class PrepareItem < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  include Priceable
  # relationships .............................................................
  belongs_to :prepare_record
  # validations ...............................................................
  validates :name, presence: true
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  price_yuan :amount
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end
