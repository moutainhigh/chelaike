import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { Form, Input, Radio, Col } from 'antd'
import { NumberInput } from '@prime/components'
import {
  FormItem,
  Datepicker,
  UserSelect,
  ChannelSelect,
  MortgageCompanySelect,
  RegionSelectGroup,
  ProvinceSelect,
  CitySelect,
  InsuranceCompanySelect
} from 'components'
import CustomerPhoneInput from './CustomerPhoneInput'
import map from 'lodash/map'
import { errorFocus, autoId } from 'decorators'
import { price } from 'helpers/car'
import validation from './validation'

@reduxForm({
  form: 'stockOutSalesInventory',
  fields: [
    'stockOutInventoryType', 'completedAt', 'sellerId', 'customerChannelId',
    'closingCostWan', 'salesType', 'paymentType', 'depositWan', 'remainingMoneyWan',
    'downPaymentWan', 'loanAmountWan', 'mortgagePeriodMonths', 'mortgageFeeYuan',
    'foregiftYuan', 'transferFeeYuan', 'commissionYuan', 'otherFeeYuan',
    'customerLocationProvince', 'customerLocationCity', 'customerLocationAddress',
    'customerName', 'customerPhone', 'customerIdcard', 'proxyInsurance',
    'insuranceCompanyId', 'commercialInsuranceFeeYuan', 'compulsoryInsuranceFeeYuan',
    'note', 'mortgageCompanyId', 'carriedInterestWan', 'invoiceFeeYuan',
  ],
  validate: validation
})
@errorFocus
@autoId
export default class SalesForm extends Component {
  static propTypes = {
    car: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired,
    enumValues: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    autoId: PropTypes.func.isRequired
  }

  handleCustomerPhoneSelect = intention => {
    const { fields } = this.props
    if (intention.customerName) fields.customerName.onChange(intention.customerName)
    if (intention.province) fields.customerLocationProvince.onChange(intention.province)
    if (intention.city) fields.customerLocationCity.onChange(intention.city)
    if (intention.channelId) fields.customerChannelId.onChange(intention.channelId)
  }

  render() {
    const { car, fields, enumValues, autoId } = this.props

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    }

    return (
      <Form horizontal>
        <FormItem {...formItemLayout} label="车辆名称：">
          <p className="ant-form-text">{car.systemName}</p>
        </FormItem>

        <FormItem {...formItemLayout} label="车辆标价：">
          <p className="ant-form-text">{price(car.showPriceWan, '万元')}</p>
        </FormItem>

        <FormItem
          id={autoId()}
          required
          {...formItemLayout}
          required
          label="成交日期："
          field={fields.completedAt}
        >
          <Datepicker id={autoId()} {...fields.completedAt} />
        </FormItem>

        <FormItem
          id={autoId()}
          required
          {...formItemLayout}
          label="成交员工："
          field={fields.sellerId}
        >
          <UserSelect id={autoId()} as="all" {...fields.sellerId} />
        </FormItem>

        <FormItem
          id={autoId()}
          required
          {...formItemLayout}
          label="客户来源："
          field={fields.customerChannelId}
        >
          <ChannelSelect id={autoId()} {...fields.customerChannelId} />
        </FormItem>

        <FormItem
          id={autoId()}
          required
          {...formItemLayout}
          label="成交价格："
          field={fields.closingCostWan}
        >
          <NumberInput id={autoId()} addonAfter="万元" {...fields.closingCostWan} />
        </FormItem>

        {car.acquisitionType === 'consignment' &&
          <FormItem
            id={autoId()}
            {...formItemLayout}
            label="成交分成："
            field={fields.carriedInterestWan}
          >
            <NumberInput id={autoId()} addonAfter="万元" {...fields.carriedInterestWan} />
          </FormItem>
        }

        <FormItem
          id={autoId()}
          required
          {...formItemLayout}
          label="销售类型："
          field={fields.salesType}
        >
          <Radio.Group
            {...fields.salesType}
            onChange={event => fields.salesType.onChange(event.target.value)}
          >
            {map(enumValues.stock_out_inventory.sales_type, (text, key) => (
              <Radio key={key} value={key}>{text}</Radio>
            ))}
          </Radio.Group>
        </FormItem>

        <FormItem
          id={autoId()}
          required
          {...formItemLayout}
          label="付款类型："
          field={fields.paymentType}
        >
          <Radio.Group
            {...fields.paymentType}
            onChange={event => fields.paymentType.onChange(event.target.value)}
          >
            {map(enumValues.stock_out_inventory.payment_type, (text, key) => (
              <Radio key={key} value={key}>{text}</Radio>
            ))}
          </Radio.Group>
        </FormItem>

        {fields.paymentType.value === 'cash' && [
          <FormItem
            key="depositWan"
            id={autoId()}
            {...formItemLayout}
            label="定金："
            field={fields.depositWan}
          >
            <NumberInput id={autoId()} addonAfter="万元" {...fields.depositWan} />
          </FormItem>,

          <FormItem
            key="remainingMoneyWan"
            id={autoId()}
            {...formItemLayout}
            label="余款："
            field={fields.remainingMoneyWan}
          >
            <NumberInput id={autoId()} addonAfter="万元" {...fields.remainingMoneyWan} />
          </FormItem>
        ]}

        {fields.paymentType.value === 'mortgage' && [
          <FormItem
            key="mortgageCompanyId"
            id={autoId()}
            required
            {...formItemLayout}
            label="按揭公司："
            field={fields.mortgageCompanyId}
          >
            <MortgageCompanySelect {...fields.mortgageCompanyId} />
          </FormItem>,

          <FormItem
            key="downPaymentWan"
            id={autoId()}
            required
            {...formItemLayout}
            label="首付款："
            field={fields.downPaymentWan}
          >
            <NumberInput id={autoId()} addonAfter="万元" {...fields.downPaymentWan} />
          </FormItem>,

          <FormItem
            key="loanAmountWan"
            id={autoId()}
            {...formItemLayout}
            label="贷款额度："
            field={fields.loanAmountWan}
          >
            <NumberInput id={autoId()} addonAfter="万元" {...fields.loanAmountWan} />
          </FormItem>,

          <FormItem key="mortgagePeriodMonths" id={autoId()} {...formItemLayout} label="按揭周期：">
            <NumberInput id={autoId()} addonAfter="个月" {...fields.mortgagePeriodMonths} />
          </FormItem>,

          <FormItem key="mortgageFeeYuan" id={autoId()} {...formItemLayout} label="按揭费用：">
            <NumberInput id={autoId()} addonAfter="元" {...fields.mortgageFeeYuan} />
          </FormItem>,

          <FormItem key="foregiftYuan" id={autoId()} {...formItemLayout} label="押金：">
            <NumberInput id={autoId()} addonAfter="元" {...fields.foregiftYuan} />
          </FormItem>,
        ]}

        <FormItem id={autoId()} {...formItemLayout} label="过户费用：">
          <NumberInput id={autoId()} addonAfter="元" {...fields.transferFeeYuan} />
        </FormItem>

        <FormItem id={autoId()} {...formItemLayout} label="佣金：">
          <NumberInput id={autoId()} addonAfter="元" {...fields.commissionYuan} />
        </FormItem>

        <FormItem id={autoId()} {...formItemLayout} label="开票费用：">
          <NumberInput id={autoId()} addonAfter="元" {...fields.invoiceFeeYuan} />
        </FormItem>

        <FormItem id={autoId()} {...formItemLayout} label="其他费用：">
          <NumberInput id={autoId()} addonAfter="元" {...fields.otherFeeYuan} />
        </FormItem>

        <FormItem
          id={autoId()}
          {...formItemLayout}
          field={fields.customerPhone}
          label="联系电话："
          required
        >
          <CustomerPhoneInput
            id={autoId()}
            onSelect={this.handleCustomerPhoneSelect}
            {...fields.customerPhone}
          />
        </FormItem>

        <FormItem id={autoId()} {...formItemLayout} label="客户姓名：">
          <Input id={autoId()} type="text" {...fields.customerName} />
        </FormItem>

        <FormItem id={autoId()} {...formItemLayout} label="证件号：">
          <Input id={autoId()} type="text" {...fields.customerIdcard} />
        </FormItem>

        <FormItem {...formItemLayout} label="客户地址：">
          <RegionSelectGroup>
            <div>
              <Col span="11">
                <ProvinceSelect {...fields.customerLocationProvince} />
              </Col>
              <Col span="1">
                <span className="ant-form-split">-</span>
              </Col>
              <Col span="11">
                <CitySelect {...fields.customerLocationCity} />
              </Col>
            </div>
          </RegionSelectGroup>
        </FormItem>

        <FormItem id={autoId()} {...formItemLayout} label="详细地址：">
          <Input id={autoId()} type="text" {...fields.customerLocationAddress} />
        </FormItem>

        <FormItem id={autoId()} {...formItemLayout} label="代办保险：">
          <Radio.Group
            {...fields.proxyInsurance}
            onChange={event => fields.proxyInsurance.onChange(event.target.value)}
          >
            <Radio value>是</Radio>
            <Radio value={false}>否</Radio>
          </Radio.Group>
        </FormItem>

        {fields.proxyInsurance.value && [
          <FormItem
            key="insuranceCompanyId"
            id={autoId()}
            {...formItemLayout}
            label="保险公司："
          >
            <InsuranceCompanySelect id={autoId()} {...fields.insuranceCompanyId} />
          </FormItem>,

          <FormItem
            key="commercialInsuranceFeeYuan"
            id={autoId()}
            {...formItemLayout}
            label="商业险："
          >
            <NumberInput id={autoId()} addonAfter="元" {...fields.commercialInsuranceFeeYuan} />
          </FormItem>,

          <FormItem
            key="compulsoryInsuranceFeeYuan"
            id={autoId()}
            {...formItemLayout}
            label="交强险："
          >
            <NumberInput id={autoId()} addonAfter="元" {...fields.compulsoryInsuranceFeeYuan} />
          </FormItem>
        ]}

        <FormItem id={autoId()} {...formItemLayout} label="备注：">
          <Input id={autoId()} type="textarea" rows="4" {...fields.note} />
        </FormItem>
      </Form>
    )
  }
}
