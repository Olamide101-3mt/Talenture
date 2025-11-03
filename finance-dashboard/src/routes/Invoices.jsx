import React from "react";

const StatusBadge = ({ status }) => {
  const colors = {
    Paid: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Unpaid: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status] || ''}`}>
      {status}
    </span>
  );
};

const recentInvoices = [
  {
    id: 'MGL524574',
    client: { name: 'Gadget Gallery LTD', image: '💳' },
    date: '14 Apr 2022',
    time: '8:00 PM',
    orderId: '20',
    amount: '$420.84',
    status: 'Pending',
  },
  {
    id: 'MGL524250',
    client: { name: 'Figma Subscription', image: '🎨' },
    date: '12 Apr 2022',
    time: '8:00 PM',
    orderId: '01',
    amount: '$244.80',
    status: 'Paid',
  },
  {
    id: 'MGL524874',
    client: { name: 'Jack Dawson Eric', image: '👨' },
    date: '12 Apr 2022',
    time: '9:00 AM',
    orderId: '02',
    amount: '$200.00',
    status: 'Unpaid',
  },
  {
    id: 'MGL524149',
    client: { name: 'UIHUT Subscription', image: '🔷' },
    date: '24 Mar 2022',
    time: '8:00 PM',
    orderId: '01',
    amount: '$84.00',
    status: 'Paid',
  },
  {
    id: 'MGL524245',
    client: { name: 'Citi Bank Ltd.', image: '🏦' },
    date: '10 Mar 2022',
    time: '8:00 PM',
    type: 'Withdraw',
    amount: '$420.84',
    status: 'Pending',
  }
];

export default function RecentInvoices() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Recent Invoices</h2>
          <button className="text-sm text-emerald-600 hover:text-emerald-800">View All</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NAME/CLIENT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DATE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ORDER/TYPE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AMOUNT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STATUS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentInvoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full">
                      {invoice.client.image}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {invoice.client.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        Inv: {invoice.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{invoice.date}</div>
                  <div className="text-sm text-gray-500">at {invoice.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {invoice.orderId || invoice.type || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {invoice.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={invoice.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-gray-400 hover:text-gray-600">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
