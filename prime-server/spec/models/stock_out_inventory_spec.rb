# == Schema Information
#
# Table name: stock_out_inventories # 出库清单
#
#  id                             :integer          not null, primary key # 出库清单
#  car_id                         :integer                                # 所属车辆
#  stock_out_inventory_type       :string                                 # 出库类型
#  completed_at                   :date                                   # 成交日期
#  seller_id                      :integer                                # 成交员工
#  customer_channel_id            :integer                                # 客户来源
#  closing_cost_cents             :integer                                # 成交价格
#  sales_type                     :string                                 # 销售类型
#  payment_type                   :string                                 # 付款类型
#  deposit_cents                  :integer                                # 定金
#  remaining_money_cents          :integer                                # 余款
#  transfer_fee_cents             :integer                                # 过户费用
#  commission_cents               :integer                                # 佣金
#  other_fee_cents                :integer                                # 其他费用
#  customer_location_province     :string                                 # 客户归属地省
#  customer_location_city         :string                                 # 客户归属地市
#  customer_location_address      :string                                 # 客户归属地地址
#  customer_name                  :string                                 # 客户姓名
#  customer_phone                 :string                                 # 联系电话
#  customer_idcard                :string                                 # 证件号
#  proxy_insurance                :boolean                                # 代办保险
#  insurance_company_id           :integer                                # 保险公司
#  commercial_insurance_fee_cents :integer                                # 商业险
#  compulsory_insurance_fee_cents :integer                                # 交强险
#  mortgage_company_id            :integer                                # 按揭公司
#  down_payment_cents             :integer                                # 首付款
#  loan_amount_cents              :integer                                # 贷款额度
#  mortgage_period_months         :integer                                # 按揭周期(月)
#  mortgage_fee_cents             :integer                                # 按揭费用
#  foregift_cents                 :integer                                # 押金
#  note                           :text                                   # 备注
#  refunded_at                    :date                                   # 退车日期
#  refund_price_cents             :integer                                # 退回车价
#  driven_back_at                 :datetime                               # 车主开回时间
#  returned_at                    :datetime                               # 车主归还时间
#  current                        :boolean                                # 是否是当前库存状态的清单
#  created_at                     :datetime         not null
#  updated_at                     :datetime         not null
#  operator_id                    :integer
#  shop_id                        :integer                                # 分店ID
#  customer_id                    :integer                                # 客户ID
#  total_transfer_fee_cents       :integer                                # 过户总费用
#  carried_interest_cents         :integer                                # 提成金额
#  invoice_fee_cents              :integer                                # 发票费用
#

require "rails_helper"

RSpec.describe StockOutInventory do
  fixtures :all

  let(:stock_out_inventory) { stock_out_inventories(:inventory) }

  describe "#set_remaining_money" do
    it "计算成交价格-定金" do
      stock_out_inventory.update(deposit_wan: 1, closing_cost_wan: 2)
      stock_out_inventory.set_remaining_money
      expect(stock_out_inventory.remaining_money_wan).to eq 1
    end

    it "sets to 0 如果成交价格小于定金" do
      stock_out_inventory.update(deposit_wan: 2, closing_cost_wan: 1)
      stock_out_inventory.set_remaining_money
      expect(stock_out_inventory.remaining_money_wan).to eq 0
    end
  end
end
