"use client";

type ContactSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ContactSearch({ value, onChange }: ContactSearchProps) {
  return (
    <div className="toolbar-search">
      <input
        placeholder="名前、電話番号、メールで検索"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
