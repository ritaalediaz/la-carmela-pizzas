export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* ✅ acá va tu Header.jsx con su CSS */}
      {children}
      {/* ✅ acá va tu Footer.jsx con su CSS */}
    </div>
  );
}
