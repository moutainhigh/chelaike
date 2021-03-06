# == Schema Information
#
# Table name: public_praise_records # 二手车之家口碑记录
#
#  id              :integer          not null, primary key # 二手车之家口碑记录
#  sumup_id        :integer
#  link            :string                                 # 抓取链接
#  level           :string                                 # 级别
#  most_satisfied  :string                                 # 最满意的
#  least_satisfied :string                                 # 最不满意的
#  logo            :string                                 # 用户Logo
#  username        :string                                 # 用户名
#  content         :jsonb                                  # 内容
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  support_count   :integer                                # 支持数
#  viewed_count    :integer                                # 浏览数
#

class PublicPraise::Record < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  extend Enumerize
  # includes ..................................................................
  # relationships .............................................................
  belongs_to :sumup
  # validations ...............................................................
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  enumerize :level, in: %i(best cream recommendation)
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end
