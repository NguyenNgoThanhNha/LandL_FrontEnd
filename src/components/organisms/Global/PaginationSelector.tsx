import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from '@/components/atoms/ui/pagination.tsx'
import { cn } from '@/utils/cn.ts'
import { usePagination } from '@/utils/usePagination.ts'

interface PaginationCustomProps {
  currentPage: number
  totalPages: number
  setPage: (page: number) => void
}

const PaginationSeletor = ({ totalPages, currentPage, setPage }: PaginationCustomProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalPages
  })
  let lastPage = 0

  if (paginationRange) {
    if (currentPage === 0 || paginationRange?.length < 2) return null
    lastPage = paginationRange[paginationRange?.length - 1]
  } else {
    return null
  }

  return (
    <Pagination>
      <PaginationContent className='mt-1 p-1'>
        <button
          className={cn('cursor-pointer bg-transparent', currentPage === 1 && 'cursor-default')}
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </button>
        {paginationRange &&
          paginationRange.map((key, idx) =>
            key === -1 ? (
              <PaginationItem key={idx}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={idx} className='flex'>
                <div
                  className={cn(
                    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-400 ',
                    currentPage === key && ' border-blue-100 bg-blue-200'
                  )}
                  onClick={() => setPage(key)}
                >
                  {key}
                </div>
              </PaginationItem>
            )
          )}
        <button
          className={cn('cursor-pointer bg-transparent', currentPage === lastPage && 'cursor-default')}
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          <ChevronRight />
        </button>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationSeletor
