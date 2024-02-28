import Link from 'next/link';
import React from 'react';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton, CardSkeleton } from '../../skeletons';
// import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { openSans } from '@/app/ui/fonts';
import CardWrapper from '../cards';
// import { fetchCardData } from '@/app/lib/data';

// export default function dashboard() {
//   return (
//     <div>
//       dashboard page in app/ui/dashboard
//       <Link href="/ui/dashboard/invoices">
//         <button
//           type="button"
//           className="flex items-center gap-5 self-start rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-600 md:text-base"
//         >
//           invoices
//         </button>
//       </Link>
//     </div>
//   );
// }

export default async function Page() {
  // const revenue = await fetchRevenue(); // for skeleton use
  // const latestInvoices = await fetchLatestInvoices(); // for skeleton use
  // const totalInvoices = allInvoices.length;
  // const totalCustomers = allCustomers.length;
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  return (
    <main>
      <h1 className={`${openSans.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        <Suspense fallback={<CardsSkeleton/>}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
          {/* <RevenueChart revenue={revenue}/> */}
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />
        </Suspense>
        
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
