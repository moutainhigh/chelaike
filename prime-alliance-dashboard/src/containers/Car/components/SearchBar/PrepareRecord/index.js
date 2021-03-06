import React, { PropTypes } from 'react'
import { Select, UserSelect } from 'components'
import map from 'lodash/map'
import { Input, Col } from 'antd'
import styles from '../style.scss'

export default function PrepareRecord({ query, enumValues, handleChange }) {
  return (
    <tr>
      <td className={styles.label}>
        整备信息
      </td>
      <td className={styles.input}>
        <Input.Group>
          <Col span="6">
            <UserSelect
              size="default"
              prompt="整备员"
              value={query.prepareRecordPreparerIdEq}
              onChange={handleChange('prepareRecordPreparerIdEq')}
              emptyText="不限整备员"
              as="all"
            />
          </Col>
          <Col span="6">
            <Select
              size="default"
              prompt="整备状态"
              items={map(enumValues.prepare_record.state, (text, value) => ({ text, value }))}
              value={query.prepareRecordStateEq}
              onChange={handleChange('prepareRecordStateEq')}
              emptyText="不限整备状态"
            />
          </Col>
        </Input.Group>
      </td>
    </tr>
  )
}

PrepareRecord.propTypes = {
  query: PropTypes.object,
  enumValues: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
}
