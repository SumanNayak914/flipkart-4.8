import React, { useMemo, useState, useEffect } from "react";

export default function ProductsManager() {
  // products + id counter
  const [products, setProducts] = useState([]);
  
  // UI state
  const [mode, setMode] = useState("add"); // "add" | "edit"
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Delete modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [deleteProductTitle, setDeleteProductTitle] = useState('');

  // Categories options (matching your API)
  const categories = [
    "Fashion",
    "Electronics",
    "Home & Garden",
    "Sports & Outdoors",
    "Health & Beauty",
    "Books & Media",
    "Toys & Games",
    "Food & Beverages",
    "Automotive",
    "Office Supplies"
  ];

  // form state
  const emptyForm = useMemo(
    () => ({
      title: "",
      price: "",
      description: "",
      category: "",
    }),
    []
  );
  const [formData, setFormData] = useState(emptyForm);
  const [imageFiles, setImageFiles] = useState([]); // actual File objects
  const [imagePreviews, setImagePreviews] = useState([]); // preview URLs

  // Get user data from localStorage (you might need to adjust this based on your auth implementation)
  const getUserData = () => {
    try {
      const userData = localStorage.getItem('user');
      console.log('User data from localStorage:', userData);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  };

  // ---------- API Functions ----------
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });
      
      console.log('Fetching products...');
      
      const userData = getUserData();
      if (!userData) {
        console.error('No user data found');
        setMessage({ type: 'error', text: 'Please login first' });
        setLoading(false);
        return;
      }

      console.log('Making API request to fetch products...');
      
      const response = await fetch('http://localhost/ecom-backend/products/get-all-products.php', {
        method: 'GET',
        headers: {
          'Authorization': JSON.stringify(userData),
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response status:', response.status);

      if (!response.ok) {
        let errorMessage = 'Failed to fetch products';
        try {
          const error = await response.json();
          errorMessage = error.message || errorMessage;
        } catch (e) {
          console.error('Error parsing error response:', e);
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log('API Response:', result);
      
      if (result.status === 200 && result.data) {
        setProducts(result.data);
        setMessage({ type: 'success', text: `${result.data.length} products loaded successfully` });
      } else {
        setProducts([]);
        setMessage({ type: 'info', text: 'No products found' });
      }
    } catch (error) {
      console.error('Fetch products error:', error);
      setMessage({ type: 'error', text: error.message });
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Load products on component mount
  useEffect(() => {
    console.log('Component mounted, fetching products...');
    fetchProducts();
  }, []);

  // ---------- Helpers ----------
  const resetForm = () => {
    setFormData(emptyForm);
    // Revoke preview URLs
    imagePreviews.forEach(url => {
      if (url && url.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    });
    setImageFiles([]);
    setImagePreviews([]);
    setMode("add");
    setEditingId(null);
    setMessage({ type: '', text: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList || []);
    if (!incoming.length) return;
    
    const availableSlots = Math.max(0, 5 - imageFiles.length);
    const selected = incoming.slice(0, availableSlots);
    
    // Create preview URLs
    const newPreviews = selected.map(file => URL.createObjectURL(file));
    
    setImageFiles(prev => [...prev, ...selected]);
    setImagePreviews(prev => [...prev, ...newPreviews]);
  };

  const handleFileInput = (e) => addFiles(e.target.files);
  const handleDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };
  const handleDragOver = (e) => e.preventDefault();

  const removeImageAt = (idx) => {
    // Revoke preview URL
    if (imagePreviews[idx] && imagePreviews[idx].startsWith('blob:')) {
      URL.revokeObjectURL(imagePreviews[idx]);
    }
    
    setImageFiles(prev => prev.filter((_, i) => i !== idx));
    setImagePreviews(prev => prev.filter((_, i) => i !== idx));
  };

  // ---------- CRUD ----------
  const handleAdd = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.price || !formData.category) {
      setMessage({ type: 'error', text: 'Title, Price, and Category are required.' });
      return;
    }

    try {
      setLoading(true);
      setMessage({ type: '', text: '' });

      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('category', formData.category);

      // Add images (up to 5)
      for (let i = 0; i < 5; i++) {
        if (imageFiles[i]) {
          formDataToSend.append(`image${i + 1}`, imageFiles[i]);
        }
      }

      const userData = getUserData();
      if (!userData) {
        throw new Error('User not logged in');
      }

      const response = await fetch('http://localhost/ecom-backend/products/post-product.php', {
        method: 'POST',
        headers: {
          'Authorization': JSON.stringify(userData),
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create product');
      }

      const result = await response.json();
      
      // Convert the response format to match get-all format
      const newProduct = {
        id: result.data.id,
        title: result.data.title,
        description: result.data.description,
        price: result.data.price,
        category: result.data.category,
        image1: result.data.images?.[0] || null,
        image2: result.data.images?.[1] || null,
        image3: result.data.images?.[2] || null,
        image4: result.data.images?.[3] || null,
        image5: result.data.images?.[4] || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      // Add new product to list
      setProducts(prev => [newProduct, ...prev]);
      setMessage({ type: 'success', text: result.message || 'Product created successfully!' });
      resetForm();

    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (product) => {
    setMode("edit");
    setEditingId(product.id);
    setFormData({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
    });
    
    // Handle existing images from API response
    const existingPreviews = [];
    
    // Check each image field (image1, image2, etc.)
    for (let i = 1; i <= 5; i++) {
      if (product[`image${i}`]) {
        existingPreviews.push(product[`image${i}`]);
      }
    }
    
    setImageFiles([]); // Reset file objects for edit mode
    setImagePreviews(existingPreviews);
    
    // Scroll to top
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.price || !formData.category) {
      setMessage({ type: 'error', text: 'Title, Price, and Category are required.' });
      return;
    }

    try {
      setLoading(true);
      setMessage({ type: '', text: '' });

      // Create FormData for file upload
      const formDataToSend = new FormData();
      
      // Add the product ID as form data (as expected by your PHP API)
      formDataToSend.append('id', editingId);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('category', formData.category);

      // Add new images (up to 5) - only if new files were selected
      for (let i = 0; i < 5; i++) {
        if (imageFiles[i]) {
          formDataToSend.append(`image${i + 1}`, imageFiles[i]);
        }
      }

      const userData = getUserData();
      if (!userData) {
        throw new Error('User not logged in');
      }

      // Updated API call - remove the ID from URL since it's now in FormData
      const response = await fetch('http://localhost/ecom-backend/products/update-product.php', {
        method: 'POST',
        headers: {
          'Authorization': JSON.stringify(userData),
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update product');
      }

      const result = await response.json();
      
      // Update product in list with the response data
      setProducts(prev => prev.map(p => {
        if (p.id == editingId) {
          return {
            ...p,
            title: result.data.title,
            description: result.data.description,
            price: result.data.price,
            category: result.data.category,
            // Update images with the returned URLs
            image1: result.data.images[0] || p.image1,
            image2: result.data.images[1] || p.image2,
            image3: result.data.images[2] || p.image3,
            image4: result.data.images[3] || p.image4,
            image5: result.data.images[4] || p.image5,
            updated_at: new Date().toISOString()
          };
        }
        return p;
      }));
      
      setMessage({ type: 'success', text: result.message || 'Product updated successfully!' });
      resetForm();

    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      
      const userData = getUserData();
      if (!userData) {
        throw new Error('User not logged in');
      }

      const response = await fetch(`http://localhost/ecom-backend/products/delete-product.php?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': JSON.stringify(userData),
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete product');
      }

      const result = await response.json();
      
      setProducts(prev => prev.filter(p => p.id !== id));
      setMessage({ type: 'success', text: result.message || 'Product deleted successfully!' });
      
      if (editingId === id) {
        resetForm();
      }
      
      // Close modal
      setShowDeleteModal(false);
      setDeleteProductId(null);
      setDeleteProductTitle('');
      
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
      setShowDeleteModal(false);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (product) => {
    setDeleteProductId(product.id);
    setDeleteProductTitle(product.title);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteProductId(null);
    setDeleteProductTitle('');
  };

  // ---------- UI ----------
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          📦 Product Management
        </h1>

        {/* Message Display */}
        {message.text && (
          <div className={`mb-4 p-4 rounded-lg flex justify-between items-center ${
            message.type === 'error' ? 'bg-red-100 text-red-700 border border-red-200' : 
            message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' :
            'bg-blue-100 text-blue-700 border border-blue-200'
          }`}>
            <span>{message.text}</span>
            <button 
              onClick={() => setMessage({ type: '', text: '' })}
              className="ml-2 text-lg font-bold hover:opacity-70"
            >
              ×
            </button>
          </div>
        )}

        {/* Debug Info (remove this in production) */}
        <div className="mb-4 p-3 bg-gray-100 rounded-lg text-sm">
          <strong>Debug Info:</strong><br/>
          Products loaded: {products.length}<br/>
          Loading: {loading ? 'Yes' : 'No'}<br/>
          User logged in: {getUserData() ? 'Yes' : 'No'}<br/>
          <button 
            onClick={fetchProducts} 
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Retry Fetch'}
          </button>
        </div>

        {/* Add / Edit Form */}
        <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50/60 shadow-inner">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-lg font-semibold">
              {mode === "add" ? "Add Product" : `Edit Product #${editingId}`}
            </h2>
            <div className="space-x-2">
              <button
                type="button"
                onClick={resetForm}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={mode === "add" ? handleAdd : handleUpdate}
                disabled={loading}
                className={`px-5 py-2 rounded-lg text-white transition disabled:opacity-50 ${
                  mode === "add"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? 'Processing...' : (mode === "add" ? "Save Product" : "Update Product")}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-5">
            {/* Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image of Product
              </label>

              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition
                ${imagePreviews.length ? "border-blue-300" : "border-gray-300 hover:border-blue-400"}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {imagePreviews.length === 0 ? (
                  <div 
                    className="cursor-pointer"
                    onClick={() => document.getElementById("fileInputMain").click()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="mx-auto w-12 h-12 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 15a4 4 0 004 4h10a4 4 0 004-4M12 3v12m0-12l-4 4m4-4l4 4"
                      />
                    </svg>
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      Upload a File
                    </p>
                    <p className="text-xs text-gray-500">
                      Drag and drop files here
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3 justify-center">
                    {imagePreviews.map((src, i) => (
                      <div
                        key={i}
                        className="relative group w-24 h-24 rounded-lg overflow-hidden border"
                      >
                        <img
                          src={src}
                          alt={`img-${i}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeImageAt(i);
                          }}
                          className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 bg-black/60 text-white text-xs px-2 py-0.5 rounded"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    {imagePreviews.length < 5 && (
                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("fileInputMain").click()
                        }
                        className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs hover:border-blue-400"
                        title="Add more"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                )}
                <input
                  id="fileInputMain"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileInput}
                  className="hidden"
                />
                <p className="mt-2 text-xs text-gray-500">
                  You can add up to 5 images.
                </p>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="e.g., iPhone 15 Pro"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="e.g., 999"
                step="0.01"
                min="0"
                required
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none bg-white"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Write product details…"
              />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Images</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td
                    className="p-6 text-center text-gray-500"
                    colSpan={7}
                  >
                    No products yet. Add your first product above.
                  </td>
                </tr>
              ) : (
                products.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3 align-top">{p.id}</td>
                    <td className="p-3 align-top">
                      <div className="flex gap-2 flex-wrap">
                        {[1,2,3,4,5].map(i => p[`image${i}`] && (
                          <img
                            key={i}
                            src={p[`image${i}`]}
                            alt=""
                            className="w-12 h-12 rounded object-cover border"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-3 align-top">{p.title}</td>
                    <td className="p-3 align-top">
                      {p.price ? `₹${p.price}` : "-"}
                    </td>
                    <td className="p-3 align-top">
                      {p.category ? (
                        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {p.category}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="p-3 align-top max-w-xs">
                      <span className="line-clamp-2 text-sm">{p.description || "-"}</span>
                    </td>
                    <td className="p-3 align-top">
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(p)}
                          disabled={loading}
                          className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => openDeleteModal(p)}
                          disabled={loading}
                          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0  flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform border-2 border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  Delete Product
                </h3>
                
                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to delete "<span className="font-semibold text-gray-800">{deleteProductTitle}</span>"? This action cannot be undone.
                </p>
                
                <div className="flex space-x-4">
                  <button
                    onClick={closeDeleteModal}
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteProductId)}
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 font-medium"
                  >
                    {loading ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}