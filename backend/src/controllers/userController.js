import { prisma } from '../utils/prismaClient.js'

export const createUser = async (req, res) => {
  const { name, email } = req.body
  try {
    const user = await prisma.user.create({ data: { name, email } })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const editUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  try {
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email }
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const fetchUser = async (req, res) => {
  try {
    const { email } = req.params
    const users = await prisma.user.findUnique({ where: { email } })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
