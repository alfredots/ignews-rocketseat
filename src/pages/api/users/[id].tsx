import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, nome: 'Alfredots' },
    { id: 2, nome: 'Kelvin' },
    { id: 2, nome: 'Matt' }
  ]

  return response.json(
    users.filter((user) => user.id === Number(request.query.id))
  )
}
