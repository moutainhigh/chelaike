# == Schema Information
#
# Table name: td_b_mortgage_corp
#
#  mortgage_corp_id :integer          not null, primary key
#  corp_id          :integer
#  corp_name        :string(255)
#  create_time      :datetime
#  update_time      :datetime
#  valid_tag        :string(1)                              # 0：无效；1：有效
#

module Che3bao
  class MortgageCompany < ActiveRecord::Base
    # accessors .................................................................
    # extends ...................................................................
    # includes ..................................................................
    include Che3baoConnection
    include Appropriatable
    belongs_to :corp
    # relationships .............................................................
    # validations ...............................................................
    # callbacks .................................................................
    # scopes ....................................................................
    # additional config .........................................................
    self.table_name = "td_b_mortgage_corp"
    self.primary_key = "mortgage_corp_id"
    # class methods .............................................................
    # public instance methods ...................................................
    # protected instance methods ................................................
    # private instance methods ..................................................
  end
end