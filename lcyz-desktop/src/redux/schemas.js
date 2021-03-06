import { Schema, arrayOf } from 'normalizr'

const user = new Schema('users')
const password = new Schema('password')
const shop = new Schema('shops')
const channel = new Schema('channels')
const insuranceCompany = new Schema('insuranceCompanies')
const mortgageCompany = new Schema('mortgageCompanies')
const cooperationCompany = new Schema('cooperationCompanies')
const warranty = new Schema('warranties')
const role = new Schema('roles')
const car = new Schema('cars')
const district = new Schema('districts')
const prepareRecord = new Schema('prepareRecords')
const transfer = new Schema('transfers')
const serviceAppointment = new Schema('serviceAppointments')
const intention = new Schema('intentions')
const intentionLevel = new Schema('intentionLevels')
const intentionPushHistory = new Schema('intentionPushHistories')
const importTask = new Schema('importTasks')
const statisticsMaintenanceRecord = new Schema('statisticsMaintenanceRecords')
const financeSingleCar = new Schema('financeSingleCar')
const shopFee = new Schema('financeShopFee')
const expirationSetting = new Schema('expirationSettings')
const defeatReason = new Schema('defeatReasons')
const exportStockReport = new Schema('exportStockReports')
const exportSaleReport = new Schema('exportSaleReports')
const exportCustomerReport = new Schema('exportCustomerReports')

user.define({
  manager: user,
  shop,
  authorityRoles: arrayOf(role)
})

car.define({
  shop,
  acquirer: user,
  prepareRecord,
  acquisitionTransfer: transfer,
  saleTransfer: transfer
})

intention.define({
  channel,
  intentionLevel,
  assignee: user,
  latestIntentionPushHistory: intentionPushHistory
})

intentionPushHistory.define({
  executor: user
})

export default {
  USER: user,
  USER_ARRAY: arrayOf(user),
  PASSWORD: password,
  SHOP: shop,
  SHOP_ARRAY: arrayOf(shop),
  CHANNEL: channel,
  CHANNEL_ARRAY: arrayOf(channel),
  WARRANTY: warranty,
  WARRANTY_ARRAY: arrayOf(warranty),
  INSURANCE_COMPANY: insuranceCompany,
  INSURANCE_COMPANY_ARRAY: arrayOf(insuranceCompany),
  MORTGAGE_COMPANY: mortgageCompany,
  MORTGAGE_COMPANY_ARRAY: arrayOf(mortgageCompany),
  COOPERATION_COMPANY: cooperationCompany,
  COOPERATION_COMPANY_ARRAY: arrayOf(cooperationCompany),
  ROLE: role,
  ROLE_ARRAY: arrayOf(role),
  CAR: car,
  CAR_ARRAY: arrayOf(car),
  DISTRICT: district,
  DISTRICT_ARRAY: arrayOf(district),
  PREPARE_RECORD: prepareRecord,
  TRANSFER: transfer,
  CAR_APPOINTMENT: serviceAppointment,
  CAR_APPOINTMENT_ARRAY: arrayOf(serviceAppointment),
  INTENTION: intention,
  INTENTION_ARRAY: arrayOf(intention),
  INTENTION_LEVEL: intentionLevel,
  INTENTION_LEVEL_ARRAY: arrayOf(intentionLevel),
  INTENTION_PUSH_HISTORY: intentionPushHistory,
  INTENTION_PUSH_HISTORY_ARRAY: arrayOf(intentionPushHistory),
  IMPORT_TASK: importTask,
  IMPORT_TASK_ARRAY: arrayOf(importTask),
  STATISTICS_MAINTENANCE_RECORD: statisticsMaintenanceRecord,
  STATISTICS_MAINTENANCE_RECORD_ARRAY: arrayOf(statisticsMaintenanceRecord),
  FINANCESINGLECAR: financeSingleCar,
  FINANCESINGLECAR_ARRAY: arrayOf(financeSingleCar),
  SHOP_FEE: shopFee,
  SHOP_FEE_ARRAY: arrayOf(shopFee),
  EXPIRATION_SETTING: expirationSetting,
  EXPIRATION_SETTING_ARRAY: arrayOf(expirationSetting),
  DEFEAT_REASON: defeatReason,
  DEFEAT_REASON_ARRAY: arrayOf(defeatReason),
  EXPORT_STOCK_REPORT: exportStockReport,
  EXPORT_STOCK_REPORT_ARRAY: arrayOf(exportStockReport),
  EXPORT_SALE_REPORT: exportSaleReport,
  EXPORT_SALE_REPORT_ARRAY: arrayOf(exportSaleReport),
  EXPORT_CUSTOMER_REPORT: exportCustomerReport,
  EXPORT_CUSTOMER_REPORT_ARRAY: arrayOf(exportCustomerReport)
}
