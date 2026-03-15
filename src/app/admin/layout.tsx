export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f0f0e] text-[#e0e0dc] font-sans">
      {children}
    </div>
  );
}
