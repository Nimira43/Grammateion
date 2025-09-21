import { TransactionForm, transactionFormSchema } from '@/components/transaction-form'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { deleteTransaction } from '@/data/deleteTransaction'
import { getCategories } from '@/data/getCategories'
import { getTransaction } from '@/data/getTransaction'
import { updateTransaction } from '@/data/updateTransaction'
import { useToast } from '@/hooks/use-toast'
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { format } from 'date-fns'
import { Trash2Icon } from 'lucide-react'

import { z } from 'zod'

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/$transactionid/_layout/',
)({
  component: RouteComponent,
  errorComponent: () => {
    return (
      <div className='text-3xl text-dark mt-6'>Something is not right. Transaction not found.</div>
    )
  },
  loader: async ({ params }) => {
    const [categories, transaction] = await Promise.all([
      getCategories(),
      getTransaction({
        data: {
          transactionId: Number(params.transactionid)
        }
      })
    ])

    if (!transaction) {
      throw new Error('Transaction not found.')
    }

    return {
      transaction,
      categories
    }
  }
})

function RouteComponent() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const { categories, transaction } = Route.useLoaderData() 

  const handleSubmit = async (data: z.infer<typeof transactionFormSchema>) => {
    await updateTransaction({
      data: {
        id: transaction.id,
        amount: data.amount,
        transactionDate: format(data.transactionDate, 'yyyy-MM-dd'),
        categoryId: data.categoryId,
        description: data.description
      }
    })

    toast({
      title: 'Success',
      description: 'Transaction updated.',
      className: 'bg-green-500 text-light',
    })
    navigate({
      to: '/dashboard/transactions',
      search: {
        month: data.transactionDate.getMonth() + 1,
        year: data.transactionDate.getFullYear()
      }
    })
  }

  const handleDeleteConfirm = async () => {
    await deleteTransaction({
      
    })
  }

  return (
    <Card className='max-w-screen-md mt-4'>
      <CardHeader>
        <CardTitle 
          className='flex justify-between'
        >
          <span>Edit Transaction</span>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size='icon'>
                <Trash2Icon />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure? 
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This transaction will be permanently deleted. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog> 
        </CardTitle> 
      </CardHeader>
      <CardContent>
        <TransactionForm
          defaultValues={{
            amount: Number(transaction.amount),
            categoryId: transaction.categoryId,
            description: transaction.description,
            transactionDate: new Date(transaction.transactionDate),
            transactionType: 
              categories.find(
                category => category.id === transaction.categoryId
              )?.type ?? 'income',
          }}
          categories={categories}
          onSubmit={handleSubmit}
        />
      </CardContent>
    </Card>
  )
}
