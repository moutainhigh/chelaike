class ChangeVersionCategoryToAppVersion < ActiveRecord::Migration
  def change
    change_column :app_versions, :version_category, :string, default: "chelaike", comment: "版本类别，如车来客与鸿升车来客"
  end
end
