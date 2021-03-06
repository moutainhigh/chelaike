# == Schema Information
#
# Table name: dw_car_dimensions # 车辆维度
#
#  id                                   :integer          not null, primary key # 车辆维度
#  car_id                               :integer                                # 车辆ID
#  state                                :string                                 # 车辆状态
#  show_price_cents                     :integer                                # 展厅价格
#  online_price_cents                   :integer                                # 网络价格
#  created_at                           :datetime         not null
#  updated_at                           :datetime         not null
#  prepare_items_total_amount_cents     :integer          default(0)            # 整备费用
#  brand_name                           :string                                 # 品牌名称
#  series_name                          :string                                 # 车系名称
#  age                                  :integer                                # 车龄
#  deleted_at                           :datetime                               # 删除时间
#  stock_age                            :integer                                # 库龄
#  shop_id                              :integer                                # 分店ID
#  company_id                           :integer                                # 公司ID
#  sale_total_transfer_fee_cents        :integer                                # 销售过户总费用
#  acquisition_total_transfer_fee_cents :integer                                # 收购过户总费用
#  estimated_gross_profit_cents         :integer          default(0)            # 预期毛利
#  estimated_gross_profit_rate          :float                                  # 预期毛利率
#

class Dw::CarDimension < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  # relationships .............................................................
  belongs_to :car, -> { with_deleted }
  belongs_to :company
  belongs_to :shop, -> { with_deleted }

  has_one :acquisition_fact, class_name: "Dw::AcquisitionFact"
  # validations ...............................................................
  validates :car_id, presence: true, uniqueness: true
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  acts_as_paranoid
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end
