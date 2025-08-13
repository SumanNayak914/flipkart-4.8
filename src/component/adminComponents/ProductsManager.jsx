import React, { useMemo, useState } from "react";

export default function ProductsManager() {
  // products + id counter (delete ke baad bhi unique id rahe)
  const [products, setProducts] = useState([]);
  const [nextId, setNextId] = useState(1);

  // UI state
  const [mode, setMode] = useState("add"); // "add" | "edit"
  const [editingId, setEditingId] = useState(null);

  // form state
  const emptyForm = useMemo(
    () => ({
      title: "",
      description: "",
      discount: "",
      rating: "",
      review: "",
    }),
    []
  );
  const [formData, setFormData] = useState(emptyForm);
  const [images, setImages] = useState([]); // array of objectURLs (strings)

  // ---------- Helpers ----------
  const resetForm = () => {
    setFormData(emptyForm);
    images.forEach((u) => URL.revokeObjectURL(u));
    setImages([]);
    setMode("add");
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList || []);
    if (!incoming.length) return;
    const availableSlots = Math.max(0, 5 - images.length);
    const selected = incoming.slice(0, availableSlots);
    const newUrls = selected.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...newUrls]);
  };

  const handleFileInput = (e) => addFiles(e.target.files);
  const handleDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };
  const handleDragOver = (e) => e.preventDefault();

  const removeImageAt = (idx) => {
    setImages((prev) => {
      const u = prev[idx];
      if (u) URL.revokeObjectURL(u);
      return prev.filter((_, i) => i !== idx);
    });
  };

  // ---------- CRUD ----------
  const handleAdd = (e) => {
    e.preventDefault();
    const product = {
      id: nextId,
      ...formData,
      images: [...images],
    };
    setProducts((p) => [product, ...p]);
    setNextId((n) => n + 1);
    resetForm();
  };

  const startEdit = (product) => {
    setMode("edit");
    setEditingId(product.id);
    setFormData({
      title: product.title,
      description: product.description,
      discount: product.discount,
      rating: product.rating,
      review: product.review,
    });
    setImages(product.images ? [...product.images] : []);
    // upar lane ke liye scroll
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setProducts((list) =>
      list.map((p) =>
        p.id === editingId ? { ...p, ...formData, images: [...images] } : p
      )
    );
    resetForm();
  };

  const handleDelete = (id) => {
    setProducts((list) => list.filter((p) => p.id !== id));
    if (editingId === id) resetForm();
  };

  // ---------- UI ----------
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          📦 Product Management
        </h1>

        {/* Add / Edit Form (always on top) */}
        <form
          onSubmit={mode === "add" ? handleAdd : handleUpdate}
          className="mb-8 rounded-xl border border-gray-200 bg-gray-50/60 shadow-inner"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-lg font-semibold">
              {mode === "add" ? "Add Product" : `Edit Product #${editingId}`}
            </h2>
            <div className="space-x-2">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-5 py-2 rounded-lg text-white transition ${
                  mode === "add"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {mode === "add" ? "Save Product" : "Update Product"}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-5">
            {/* Upload (screenshot style) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image of Product
              </label>

              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition
                ${images.length ? "border-blue-300" : "border-gray-300 hover:border-blue-400"}`}
                onClick={() => document.getElementById("fileInputMain").click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {images.length === 0 ? (
                  <>
                    {/* icon + text, matches provided screenshot vibe */}
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
                  </>
                ) : (
                  <div className="flex flex-wrap gap-3 justify-center">
                    {images.map((src, i) => (
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
                    {images.length < 5 && (
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
                Title
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

            {/* % Off */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                % Off
              </label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="e.g., 15"
                min="0"
                max="100"
              />
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

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="0–5"
              />
            </div>

            {/* Review */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Review
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows="2"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="One-line customer review"
              />
            </div>
          </div>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Images</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">% Off</th>
                <th className="p-3 text-left">Rating</th>
                <th className="p-3 text-left">Review</th>
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
                        {p.images?.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className="w-12 h-12 rounded object-cover border"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-3 align-top">{p.title}</td>
                    <td className="p-3 align-top">
                      {p.discount ? `${p.discount}%` : "-"}
                    </td>
                    <td className="p-3 align-top">
                      {p.rating ? p.rating : "-"}
                    </td>
                    <td className="p-3 align-top">
                      <span className="line-clamp-2">{p.review || "-"}</span>
                    </td>
                    <td className="p-3 align-top">
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(p)}
                          className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
                          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
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
      </div>
    </div>
  );
}
