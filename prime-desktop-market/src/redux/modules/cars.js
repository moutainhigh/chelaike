import { createApiAction, createReducer, composeReducers } from 'rector/redux'
import { crud, pagination, query } from './concerns'
import Schemas from '../schemas'
import { create as stockOut } from './stockOutInventories'
import without from 'lodash/without'
import { PAGE_SIZE } from 'constants'

export const fetch = createApiAction('cars/FETCH', query => ({
  method: 'get',
  endpoint: '/cars',
  schema: Schemas.CAR_ARRAY,
  query: { ...query, perPage: PAGE_SIZE },
}), query => ({
  query,
}))

export const fetchOne = createApiAction('cars/FETCH_ONE', id => ({
  method: 'get',
  endpoint: `/cars/${id}`,
  schema: Schemas.CAR,
}))

export const fetchEdit = createApiAction('cars/FETCH_EDIT', id => ({
  method: 'get',
  endpoint: `/cars/${id}/edit`,
  schema: Schemas.CAR,
}))

export const create = createApiAction('cars/CREATE', body => ({
  method: 'post',
  endpoint: '/cars',
  schema: Schemas.CAR,
  body,
}))

export const update = createApiAction('cars/UPDATE', body => ({
  method: 'put',
  endpoint: `/cars/${body.car.id}`,
  schema: Schemas.CAR,
  body,
}))

export const destroy = createApiAction('cars/DESTROY', id => ({
  method: 'del',
  endpoint: `/cars/${id}`,
}))

const initialState = {
  ids: [],
  query: {},
  total: 0,
  fetching: false,
  fetched: false,
  saving: false,
}

const reducer = createReducer(on => {
  on(stockOut.success, (state, payload) => ({
    ...state,
    ids: without(state.ids, payload.carId),
  }))
}, initialState)

const finnalReducer = composeReducers(
  reducer,
  crud({ fetch, create, update, destroy }),
  pagination(fetch),
  query(fetch),
)

export default finnalReducer
