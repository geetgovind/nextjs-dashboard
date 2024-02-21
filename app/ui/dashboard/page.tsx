// import React from 'react'

// export const dashboard =async () => {
//   return (
//     <div>dashboard page in app/ui/dashboard</div>
//   )
// }

import Link from 'next/link';
import React from 'react';

export default function dashboard() {
  return (
    <div>
      dashboard page in app/ui/dashboard
      <Link href="/ui/dashboard/invoices">
        <button
          type="button"
          className="flex items-center gap-5 self-start rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-600 md:text-base"
        >
          invoices
        </button>
      </Link>
    </div>
  );
}
