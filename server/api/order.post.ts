import type { Order } from '@prisma/client'
import { OrderStatus } from '@prisma/client'
import { isNuxtError } from 'nuxt/app'
import { getTokenInfo } from '../database/service/token'
import { createOrder } from '../database/repositories/orderRepository'

export default defineEventHandler(async (e) => {
  // 课程id
  const { courseId } = await readBody(e)

  // 用户id
  const result = getTokenInfo(e)
  if (isNuxtError(result))
    return sendError(e, result)

  // 构建订单实体
  const order = {
    courseId: Number(courseId),
    userId: result.id,
    createdAt: new Date(),
    status: OrderStatus.WAIT_CONFIRM,
  } as Order

  const o = await createOrder(order)

  return { ok: true, data: { orderId: o.id } }
})
