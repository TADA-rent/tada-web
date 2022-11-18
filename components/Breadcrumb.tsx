import clsx from 'clsx'
import Link from 'next/link'

export const Breadcrumb = ({ path = [] }: { path: { name: string; path: string; current?: boolean }[] }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
        {path.map((page, pageIdx) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              {pageIdx > 0 ? (
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
              ) : null}
              <Link
                href={`${page.path}`}
                className={clsx(
                  pageIdx > 0 ? 'ml-4' : '',
                  'ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 font-sans',
                )}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
