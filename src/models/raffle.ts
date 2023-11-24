// Dependencies
import { prop, arrayProp, Typegoose } from 'typegoose'
import { Message } from 'telegram-typings'

// Winner class definition
export class Raffle extends Typegoose {
  @prop({ required: true, index: true })
  chatId: number
  @prop()
  adminId: number

  @prop({ index: true })
  messageId?: number
  @arrayProp({ required: true, default: [], items: Number })
  participantsIds: number[]

  @prop()
  winners?: string

  @prop()
  raffleMessage?: Message
  @prop()
  winnerMessage?: Message
}

// Get Raffle model
export const RaffleModel = new Raffle().getModelForClass(Raffle)

/**
 * Adding new raffle
 * @param chatId Chat id of the raffle
 * @param messageId Message id of the raffle
 * @returns created raffle
 */
export async function addRaffle(chatId: number, adminId: number) {
  let raffle = new RaffleModel({ chatId, adminId })
  return raffle.save()
}

/**
 * Getting existing raffle
 * @param chatId Chat id of the raffle
 * @param messageId Message id of the raffle
 * @returns requested raffle
 */
export async function getRaffle(chatId: number, id: string | number) {
  try {
    const raffle = await RaffleModel.findById(id)
    if (raffle) {
      return raffle
    }
  } catch (err) {
    return RaffleModel.findOne({ chatId, messageId: Number(id) })
  }
}

/**
 * Getting existing raffle without the participant ids
 * @param chatId Chat id of the raffle
 * @param messageId Message id of the raffle
 * @returns requested raffle
 */
export async function getRaffleWithoutParticipantIds(chatId: number, id: string | number) {
  try {
    const raffle = await RaffleModel.findById(id).select('-participantsIds')
    if (raffle) {
      return raffle
    }
  } catch (err) {
    return RaffleModel.findOne({ chatId, messageId: Number(id) })
  }
}
