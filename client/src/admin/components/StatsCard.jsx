const StatsCard = ({ title, value }) => (
  <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)]
                  rounded-xl p-6">
    <p className="text-sm text-[var(--text-secondary)]">{title}</p>
    <h2 className="text-3xl mt-2">{value}</h2>
  </div>
);

export default StatsCard;