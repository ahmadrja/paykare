import React from 'react';
import { 
  Bell, Plus, Smartphone, Tv, Banknote, Plane, 
  Zap, Flame, CreditCard, BusFront, Home as HomeIcon, 
  PercentSquare, Clock, User 
} from 'lucide-react';

export default function Home() {
  return (
    // Mobile Frame Container (Laptop par bhi perfectly center mein dikhega)
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen relative shadow-2xl pb-20 font-sans overflow-x-hidden">
      
      {/* 1. Header Section */}
      <div className="flex justify-between items-center p-5 pt-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-1">
            <Zap className="text-blue-600" fill="currentColor" size={28} />
            <span className="text-blue-600">Pay</span><span className="text-green-500">Kare</span>
          </h1>
        </div>
        <div className="relative cursor-pointer">
          <Bell className="text-gray-600" size={24} />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
        </div>
      </div>

      <div className="px-5 pb-2">
        <h2 className="text-xl font-semibold text-gray-800">Hi, Neha! 👋</h2>
      </div>

      {/* 2. Wallet Balance Card (Premium Gradient) */}
      <div className="px-5 mt-2">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Zap size={100} />
          </div>
          <p className="text-sm font-medium opacity-90">PayKare Wallet Balance</p>
          <div className="flex justify-between items-end mt-2 relative z-10">
            <h2 className="text-3xl font-bold">₹8,540</h2>
            <button className="bg-white/20 hover:bg-white/30 transition backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
              <Plus size={16} /> Add Money
            </button>
          </div>
        </div>
      </div>

      {/* 3. Services Grid (Recharge, Travel, etc.) */}
      <div className="px-5 mt-6">
        <div className="grid grid-cols-4 gap-y-6 gap-x-4">
          <ServiceIcon icon={<Smartphone size={24} className="text-blue-500" />} label="Recharge" bg="bg-blue-100" />
          <ServiceIcon icon={<Tv size={24} className="text-purple-500" />} label="DTH" bg="bg-purple-100" />
          <ServiceIcon icon={<Banknote size={24} className="text-orange-500" />} label="Loan" bg="bg-orange-100" />
          <ServiceIcon icon={<Plane size={24} className="text-cyan-500" />} label="Flights" bg="bg-cyan-100" />
          
          <ServiceIcon icon={<Zap size={24} className="text-yellow-500" />} label="Electricity" bg="bg-yellow-100" />
          <ServiceIcon icon={<Flame size={24} className="text-green-500" />} label="Gas" bg="bg-green-100" />
          <ServiceIcon icon={<CreditCard size={24} className="text-indigo-500" />} label="Credit Card" bg="bg-indigo-100" />
          <ServiceIcon icon={<BusFront size={24} className="text-red-500" />} label="Bus Tickets" bg="bg-red-100" />
        </div>
      </div>

      {/* 4. Promotional Banners (Scrollable) */}
      <div className="px-5 mt-8 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {/* Bill Payment Banner */}
        <div className="min-w-[240px] bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-4 text-white shadow-md">
          <h3 className="font-bold text-lg leading-tight">Pay Bills in<br/>1-Click</h3>
          <p className="text-xs text-blue-100 mt-1">Electricity, Water & More</p>
          <button className="mt-3 bg-green-400 text-green-900 text-xs font-bold px-4 py-1.5 rounded-full">Pay Now</button>
        </div>
        {/* Loan Banner */}
        <div className="min-w-[240px] bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-4 shadow-md relative overflow-hidden">
          <h3 className="font-bold text-gray-800 text-lg leading-tight">Get Instant Loan</h3>
          <p className="text-xs text-gray-600 mt-1">Upto ₹5,000 in mins</p>
          <div className="mt-2 text-[10px] text-gray-500 space-y-1">
            <p>✓ Low Interest</p>
            <p>✓ Quick Approval</p>
          </div>
          <Banknote className="absolute -bottom-2 -right-2 text-green-300 opacity-50" size={80} />
        </div>
      </div>

      {/* 5. Recent Transactions */}
      <div className="px-5 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">My Transactions</h3>
          <span className="text-sm text-blue-600 font-semibold cursor-pointer hover:underline">View All</span>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <TransactionItem 
            icon={<Smartphone className="text-blue-500" size={20} />} 
            title="Mobile Recharge" 
            desc="+91 99876 54321" 
            amount="₹249" 
            date="Apr 02, 11:04 AM" 
          />
          <div className="border-b border-gray-50 my-3"></div>
          <TransactionItem 
            icon={<Zap className="text-yellow-500" size={20} />} 
            title="Electricity Bill" 
            desc="NBPDCL Bihar" 
            amount="₹1,200" 
            date="Apr 01, 05:47 PM" 
          />
        </div>
      </div>

      {/* 6. Bottom Navigation Bar */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 flex justify-around items-center py-3 pb-4 px-2 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] z-50">
        <NavItem icon={<HomeIcon size={24} />} label="Home" active />
        <NavItem icon={<PercentSquare size={24} />} label="Offers" />
        <NavItem icon={<Clock size={24} />} label="History" />
        <NavItem icon={<User size={24} />} label="Profile" />
      </div>

    </div>
  );
}

// --- Reusable Mini Components ---

function ServiceIcon({ icon, label, bg }: { icon: React.ReactNode, label: string, bg: string }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
        {icon}
      </div>
      <span className="text-[11px] font-medium text-gray-600 text-center leading-tight whitespace-nowrap">{label}</span>
    </div>
  );
}

function TransactionItem({ icon, title, desc, amount, date }: any) {
  return (
    <div className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-800">{title}</h4>
          <p className="text-[11px] text-gray-500">{desc}</p>
        </div>
      </div>
      <div className="text-right">
        <h4 className="text-sm font-bold text-gray-800">{amount}</h4>
        <p className="text-[10px] text-gray-400">{date}</p>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${active ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
      {icon}
      <span className="text-[10px] font-semibold">{label}</span>
    </div>
  );
}