import { Layout } from '../components/dashboard/Layout';
import { ResumenPeriodoCard } from '../components/dashboard/Periodo';

export function DashboardPage() {
  return (
    <Layout>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition'>
          <h2 className='text-sm text-gray-500 font-medium'>Ventas</h2>
          <p className='text-3xl font-bold mt-2'>100</p>
        </div>

        <div className='lg:col-span-2'>
          <ResumenPeriodoCard />
        </div>
      </div>
    </Layout>
  );
}
