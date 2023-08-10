import { Model, QueryContext } from 'objection';
import * as uuid from 'uuid'

export function model(opts: {
  tableName: string,
  idField?: string,
  creationDtField?: string,
  autoCreationDt?: boolean,
 }) {
  const fo = Object.assign({
    idField: 'id',
    creationDtField: 'creation_dt',
    autoCreationDt: true
  }, opts)

  return class extends Model {
    static get tableName() {
      return fo.tableName
    }

    async $beforeInsert(queryContext: QueryContext): Promise<any> {
      await super.$beforeInsert(queryContext)
      this[fo.idField] = genId(12)
      if (fo.autoCreationDt) {
        this[fo.creationDtField] = new Date()
      }
    }
  }
}

function genId (limit: number) {
  const result = uuid.v4().replaceAll('-', '')
  return limit ? result.substring(0, limit) : result
}
