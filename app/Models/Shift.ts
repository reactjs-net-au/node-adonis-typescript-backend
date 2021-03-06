import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import Invoice from './Invoice'

export default class Shift extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column()
  public shift_start: DateTime

  @column()
  public shift_end: DateTime

  @column()
  public rate: number

  @column()
  public clientId: number

  @column()
  public invoiceId: number

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @belongsTo(() => Invoice)
  public invoice: BelongsTo<typeof Invoice>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
