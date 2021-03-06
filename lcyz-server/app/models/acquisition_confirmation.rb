# == Schema Information
#
# Table name: acquisition_confirmations # 确认收车清单
#
#  id                      :integer          not null, primary key    # 确认收车清单
#  acquisition_price_cents :integer                                   # 收购成交价
#  acquired_at             :date                                      # 收购日期
#  company_id              :integer                                   # 入库商家
#  shop_id                 :integer                                   # 入库所属分店
#  acquisition_car_info_id :integer                                   # 对应的收车信息
#  alliance_id             :integer                                   # 所属联盟
#  cooperate_companies     :integer          default([]), is an Array # 合作收购商家
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  cooperate_users         :integer          default([]), is an Array # 合作人
#

class AcquisitionConfirmation < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  include Priceable
  # relationships .............................................................
  belongs_to :company
  belongs_to :shop
  belongs_to :alliance
  belongs_to :acquisition_car_info
  # validations ...............................................................
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  price_wan :acquisition_price
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end
