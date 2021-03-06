# == Schema Information
#
# Table name: warranties # 质保等级
#
#  id         :integer          not null, primary key # 质保等级
#  company_id :integer                                # 公司ID
#  name       :string                                 # 名称
#  fee_cents  :integer                                # 费用
#  deleted_at :datetime                               # 删除时间
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  note       :text                                   # 说明
#

module WarrantySerializer
  class Common < ActiveModel::Serializer
    attributes :id, :name, :company_id, :fee, :note, :created_at

    def fee
      object.fee_yuan
    end
  end
end
