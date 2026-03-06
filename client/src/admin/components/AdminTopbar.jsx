import React from 'react'

const AdminTopbar = () => {
  return (
    <header
      className="h-20 flex items-center justify-between px-8
                 border-b border-[var(--border-subtle)]
                 bg-[var(--bg-main)]"
    >
      <h2 className="text-lg tracking-wide">Admin Panel</h2>
    </header>
  );
};

export default AdminTopbar;

