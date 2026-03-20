'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrash, FaEdit, FaSignOutAlt } from 'react-icons/fa';
import { menuItems as initialMenuItems, MenuItem, categories } from '../menu/page';

export default function AdminPage() {
  const [isClient, setIsClient] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [items, setItems] = useState<MenuItem[]>([]);
  const [formData, setFormData] = useState<Partial<MenuItem>>({});
  const [isEditing, setIsEditing] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const auth = localStorage.getItem('stoveclub_admin_auth');
    if (auth === 'true') setIsAuth(true);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    const savedMenu = localStorage.getItem('stoveclub_menu');
    if (savedMenu) {
      setItems(JSON.parse(savedMenu));
    } else {
      setItems(initialMenuItems);
      localStorage.setItem('stoveclub_menu', JSON.stringify(initialMenuItems));
    }
  }, [isClient]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple hardcoded auth
      localStorage.setItem('stoveclub_admin_auth', 'true');
      setIsAuth(true);
      setError('');
    } else {
      setError('Invalid password. Hint: admin123');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('stoveclub_admin_auth');
    setIsAuth(false);
  };

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category) return;

    let updatedList;
    if (isEditing && formData.id) {
      updatedList = items.map(item => item.id === formData.id ? { ...item, ...formData, category: formData.category || 'Appetizers' } as MenuItem : item);
    } else {
      const newItem: MenuItem = {
        id: Date.now().toString(),
        name: formData.name,
        price: formData.price,
        category: formData.category || 'Appetizers',
        description: formData.description || '',
        image: formData.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop'
      };
      updatedList = [newItem, ...items];
    }
    
    setItems(updatedList);
    localStorage.setItem('stoveclub_menu', JSON.stringify(updatedList));
    setFormData({});
    setIsEditing(false);
    alert('Menu item saved successfully!');
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      const updatedList = items.filter(item => item.id !== id);
      setItems(updatedList);
      localStorage.setItem('stoveclub_menu', JSON.stringify(updatedList));
    }
  };

  const handleEdit = (item: MenuItem) => {
    setFormData(item);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isClient) return null;

  if (!isAuth) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-4 flex items-center justify-center bg-[#0a0a0a]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[#111] p-8 rounded-lg border border-white/10 w-full max-w-md shadow-2xl">
          <h1 className="font-playfair text-3xl font-bold text-[#D4AF37] mb-2 text-center">Admin Login</h1>
          <p className="text-gray-400 text-center mb-6 text-sm">Dashboard access requires a password.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-sans text-gray-400 mb-2">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" 
                placeholder="Enter password (admin123)" 
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded hover:bg-[#c19b2e] transition-colors">
              Login to Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const validCategories = categories.filter(c => c !== "All");

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-playfair text-4xl font-bold text-[#D4AF37]">Menu Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded hover:bg-red-500/20 transition-colors">
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1">
          <div className="bg-[#111] p-6 rounded-lg border border-white/10 sticky top-32">
            <h2 className="font-playfair text-xl text-white mb-6 border-b border-white/10 pb-4">
              {isEditing ? 'Edit Menu Item' : 'Add New Item'}
            </h2>
            <form onSubmit={handleSaveItem} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Item Name *</label>
                <input required type="text" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] outline-none" placeholder="e.g. Garlic Chicken" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Price *</label>
                  <input required type="text" value={formData.price || ''} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] outline-none" placeholder="e.g. Rs 500" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Category *</label>
                  <select required value={formData.category || ''} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] outline-none appearance-none">
                    <option value="" disabled className="bg-[#111] text-gray-500">Select...</option>
                    {validCategories.map(cat => <option key={cat} value={cat} className="bg-[#111] text-white py-2">{cat}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Description</label>
                <textarea rows={3} value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] outline-none" placeholder="Delicious ingredients..." />
              </div>

              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Image URL (Unsplash)</label>
                <input type="text" value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:border-[#D4AF37] outline-none" placeholder="https://images.unsplash.com/photo-..." />
              </div>

              <div className="pt-2 flex gap-3">
                <button type="submit" className="flex-1 bg-[#D4AF37] text-black font-semibold py-2 rounded hover:bg-[#c19b2e] transition-colors flex items-center justify-center gap-2">
                  {isEditing ? <FaEdit /> : <FaPlus />} 
                  {isEditing ? 'Update Item' : 'Add Item'}
                </button>
                {isEditing && (
                  <button type="button" onClick={() => { setIsEditing(false); setFormData({}); }} className="px-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2">
          <div className="bg-[#111] border border-white/10 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
              <h2 className="font-playfair text-xl text-white">Current Menu Items ({items.length})</h2>
            </div>
            <div className="divide-y divide-white/5 max-h-[70vh] overflow-y-auto">
              {items.map(item => (
                <div key={item.id} className="p-4 hover:bg-white/5 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded bg-black/50 overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        {item.name} 
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] uppercase">{item.category}</span>
                      </h4>
                      <p className="text-sm text-gray-400 truncate max-w-sm">{item.description}</p>
                      <p className="text-[#D4AF37] text-sm mt-1">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEdit(item)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors" title="Edit">
                      <FaEdit size={18} />
                    </button>
                    <button onClick={() => handleDelete(item.id, item.name)} className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors" title="Delete">
                      <FaTrash size={18} />
                    </button>
                  </div>
                </div>
              ))}
              {items.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  No menu items found. Add some using the form!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
