import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Orden ID</th>
            <th>Fecha</th>
            <th>Precio</th>
            <th className='hidden md:block'>Productos</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>123123213123</td>
            <td className='py-6 px-1'>24.01.2222</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Snack (2), Productos Veganos (2), Mani tostado (3)</td>
            <td className='py-6 px-1'>En camino (apróx. 10min)</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>123123213123</td>
            <td className='py-6 px-1'>24.01.2222</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Snack (2), Productos Veganos (2), Mani tostado (3)</td>
            <td className='py-6 px-1'>En camino (apróx. 10min)</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>123123213123</td>
            <td className='py-6 px-1'>24.01.2222</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Snack (2), Productos Veganos (2), Mani tostado (3)</td>
            <td className='py-6 px-1'>En camino (apróx. 10min)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage