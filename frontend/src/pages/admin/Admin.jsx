// frontend/src/pages/admin/Admin.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProductThunk,
  getProductThunk,
  postProductThunk,
  updateProductThunk,
} from "../../redux/reducers/productSlice";
import { logoutAdmin } from "../../redux/reducers/authSlice";
import styles from "./Admin.module.scss";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products = [], loading, error } = useSelector((state) => state.product);
  const { isAuthenticated, loading: authLoading } = useSelector((state) => state.auth);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) {
      navigate("/admin-login", { replace: true });
      return;
    }

    dispatch(getProductThunk());
  }, [dispatch, isAuthenticated, authLoading, navigate]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files?.[0] || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title) formData.append("title", title);
    if (description) formData.append("description", description);
    if (selectedFile) formData.append("image", selectedFile);

    if (editingId) {
      dispatch(updateProductThunk({ id: editingId, formData })).then((action) => {
        if (action.meta.requestStatus === "fulfilled") {
          resetForm();
          dispatch(getProductThunk());
        }
      });
    } else {
      if (!selectedFile) {
        alert("Zəhmət olmasa şəkil seçin");
        return;
      }
      dispatch(postProductThunk(formData)).then((action) => {
        if (action.meta.requestStatus === "fulfilled") {
          resetForm();
          dispatch(getProductThunk());
        }
      });
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setSelectedFile(null);
    setEditingId(null);
  };

  const handleEdit = (product) => {
    setTitle(product.title || "");
    setDescription(product.description || "");
    setEditingId(product._id);
    setSelectedFile(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Bu şəkli silmək istədiyinizə əminsiniz?")) return;

    dispatch(deleteProductThunk(id)).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        dispatch(getProductThunk());
      }
    });
  };

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/admin-login", { replace: true });
  };

  if (authLoading || !isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.adminPanel}>
      {/* Header with Logout */}
      <header className={styles.adminHeader}>
        <h2 className={styles.adminTitle}>Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className={styles.logoutBtn}
        >
          Logout
        </button>
      </header>

      <h3 style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
        {editingId ? "Update Item" : "Add New Item"}
      </h3>

      {loading && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>Processing...</div>
      )}

      {error && (
        <div style={{ color: "red", textAlign: "center", margin: "20px 0" }}>{error}</div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "600px",
          margin: "0 auto 60px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>Title</label>
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>Description</label>
          <textarea
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ padding: "12px", height: "100px", borderRadius: "6px", border: "1px solid #ddd", resize: "none" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ padding: "10px", border: "1px dashed #ccc", borderRadius: "6px" }}
          />
          {editingId && <small style={{ color: "#888" }}>Leave empty to keep current image</small>}
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              flex: 2,
              padding: "14px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {editingId ? "Update Item" : "Save Item"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              style={{
                flex: 1,
                padding: "14px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className={styles.imageGrid}>
        {products.map((product) => (
          <div key={product._id} className={styles.imageItem}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.imagePreview}
              onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Error+Loading+Image"; }}
            />
            <div style={{ padding: "15px" }}>
              <h4 style={{ margin: "0 0 8px" }}>{product.title}</h4>
              <p style={{ color: "#666", fontSize: "13px", margin: 0, minHeight: "2.5em" }}>
                {product.description}
              </p>
            </div>
            <div style={{ display: "flex", borderTop: "1px solid #eee" }}>
              <button
                onClick={() => handleEdit(product)}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "transparent",
                  color: "#007bff",
                  border: "none",
                  borderRight: "1px solid #eee",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "transparent",
                  color: "#dc3545",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;