# == Schema Information
#
# Table name: dw_acquired_at_dimensions # 收购时间纬度
#
#  id                :integer          not null, primary key # 收购时间纬度
#  acquired_at       :datetime                               # 收购时间
#  acquired_at_date  :date                                   # 收购日期
#  acquired_at_year  :integer                                # 收购日期(年)
#  acquired_at_month :integer                                # 收购日期(月)
#

class Dw::AcquiredAtDimension < ActiveRecord::Base
  # accessors .................................................................
  # extends ...................................................................
  # includes ..................................................................
  # relationships .............................................................
  # validations ...............................................................
  validates :acquired_at, presence: true, uniqueness: true
  validates :acquired_at_date, presence: true
  validates :acquired_at_year, presence: true
  validates :acquired_at_month, presence: true
  # callbacks .................................................................
  # scopes ....................................................................
  # additional config .........................................................
  # class methods .............................................................
  # public instance methods ...................................................
  # protected instance methods ................................................
  # private instance methods ..................................................
end
