const CLOUD_NAME = "dp5jrgmff";
const UPLOAD_PRESET = "svarnika_admin";

const ImageUpload = ({ value, onChange }) => {
  const uploadImage = async (file) => {
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: data }
    );

    const json = await res.json();
    onChange(json.secure_url);
  };

  return (
    <div className="space-y-3">
      {/* Hidden input */}
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => uploadImage(e.target.files[0])}
      />

      {/* Visible button */}
      <label
        htmlFor="imageUpload"
        className="inline-block cursor-pointer px-4 py-2 rounded-lg
                   bg-[var(--bg-elevated)]
                   border border-[var(--border-soft)]
                   text-sm text-[var(--text-primary)]
                   hover:opacity-80 transition"
      >
        Upload Product Image
      </label>

      {/* Preview */}
      {value && (
        <img
          src={value}
          alt="Preview"
          className="w-full h-40 object-cover rounded-lg
                     border border-[var(--border-soft)]"
        />
      )}
    </div>
  );
};

export default ImageUpload;