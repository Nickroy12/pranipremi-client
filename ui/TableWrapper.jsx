'use client'

import Table from '@/Components/Table'
import { authClient } from '@/lib/auth-client'


const TableWrapper = ({ pets }) => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  return <Table pets={pets} user={user} />
}

export default TableWrapper